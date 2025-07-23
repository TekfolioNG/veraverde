// server/api/contact.post.js
export default defineEventHandler(async (event) => {
  try {
    // Read the request body
    const body = await readBody(event);

    // Validate required fields
    if (!body.name || !body.email || !body.subject || !body.message) {
      throw createError({
        statusCode: 400,
        statusMessage: "Missing required fields",
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      throw createError({
        statusCode: 400,
        statusMessage: "Invalid email format",
      });
    }

    // Prepare data for Web3Forms
    const formData = {
      access_key: "29c3e72f-88ed-43c6-a882-847719babcc2",
      name: body.name.trim(),
      email: body.email.trim(),
      phone: body.phone?.trim() || "",
      subject: body.subject.trim(),
      message: body.message.trim(),
      from_name: "Vera Verde Website",
      redirect: false,
    };

    console.log("Proxying form submission to Web3Forms..."); // Server log

    // Make request to Web3Forms
    const response = await $fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: formData,
      timeout: 15000, // 15 second timeout
    });

    console.log("Web3Forms response:", response); // Server log

    // Return the response
    return {
      success: response.success,
      message: response.message || "Message sent successfully",
    };
  } catch (error) {
    console.error("Contact form proxy error:", error);

    // Handle different types of errors
    if (error.statusCode) {
      // Already a proper HTTP error
      throw error;
    } else if (error.response) {
      // Web3Forms API error
      throw createError({
        statusCode: error.response.status || 500,
        statusMessage:
          error.response._data?.message || "External service error",
      });
    } else if (error.message?.includes("timeout")) {
      // Timeout error
      throw createError({
        statusCode: 408,
        statusMessage: "Request timeout. Please try again.",
      });
    } else {
      // Generic server error
      throw createError({
        statusCode: 500,
        statusMessage: "Internal server error",
      });
    }
  }
});
