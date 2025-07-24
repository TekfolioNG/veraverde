// File: server/api/contact.post.js
export default defineEventHandler(async (event) => {
  console.log("=== Contact API Debug Info ===");
  console.log("Method:", getMethod(event));
  console.log("URL:", getRequestURL(event));
  console.log("Headers:", getHeaders(event));

  // Set CORS headers
  setHeader(event, "Access-Control-Allow-Origin", "*");
  setHeader(event, "Access-Control-Allow-Methods", "POST, OPTIONS");
  setHeader(event, "Access-Control-Allow-Headers", "Content-Type");

  try {
    const body = await readBody(event);
    console.log("Request body received:", body);

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

    console.log("Sending to Web3Forms:", formData);

    // Make request to Web3Forms
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });

    console.log("Web3Forms response status:", response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.log("Web3Forms error:", response.status, errorText);
      throw createError({
        statusCode: response.status,
        statusMessage: `Web3Forms API error: ${response.statusText}`,
      });
    }

    const result = await response.json();
    console.log("Web3Forms success:", result);

    return {
      success: true,
      message: result.message || "Message sent successfully!",
    };
  } catch (error) {
    console.error("=== Contact API Error ===", error);

    if (error.statusCode) {
      throw error;
    }

    throw createError({
      statusCode: 500,
      statusMessage: "Internal server error: " + error.message,
    });
  }
});
