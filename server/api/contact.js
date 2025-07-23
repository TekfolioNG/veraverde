// File: server/api/contact.js (rename from contact.post.js to contact.js)
// This creates a single endpoint that handles all HTTP methods

export default defineEventHandler(async (event) => {
  // Only allow POST requests
  if (getMethod(event) !== "POST") {
    throw createError({
      statusCode: 405,
      statusMessage: "Method Not Allowed - Use POST",
    });
  }

  console.log("Contact API endpoint hit with POST request"); // Debug log

  try {
    // Read the request body
    const body = await readBody(event);

    console.log("Received form data:", body); // Debug log

    // Validate required fields
    if (!body.name || !body.email || !body.subject || !body.message) {
      console.log("Validation failed - missing required fields");
      throw createError({
        statusCode: 400,
        statusMessage: "Missing required fields: name, email, subject, message",
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      console.log("Validation failed - invalid email format");
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

    console.log("Sending to Web3Forms..."); // Debug log

    // Make request to Web3Forms using native fetch
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      console.log(
        "Web3Forms response not OK:",
        response.status,
        response.statusText
      );
      throw createError({
        statusCode: response.status,
        statusMessage: `Web3Forms API error: ${response.statusText}`,
      });
    }

    const result = await response.json();
    console.log("Web3Forms response:", result); // Debug log

    // Return success response
    return {
      success: true,
      message: result.message || "Message sent successfully!",
    };
  } catch (error) {
    console.error("Contact API error:", error);

    // Handle different types of errors
    if (error.statusCode) {
      // Already a proper HTTP error - re-throw it
      throw error;
    } else if (error.name === "TypeError" && error.message.includes("fetch")) {
      // Network/fetch error
      throw createError({
        statusCode: 503,
        statusMessage:
          "Unable to connect to email service. Please try again later.",
      });
    } else {
      // Generic server error
      throw createError({
        statusCode: 500,
        statusMessage: "Internal server error. Please try again.",
      });
    }
  }
});
