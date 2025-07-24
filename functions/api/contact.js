// functions/api/contact.js
export async function onRequestPost(context) {
  const startTime = Date.now();

  try {
    const { request, env } = context;

    console.log("=== Contact Form Debug Info ===");
    console.log("Request method:", request.method);
    console.log("Request URL:", request.url);
    console.log("Environment keys:", Object.keys(env || {}));

    // Parse the request body with error handling
    let body;
    try {
      const rawBody = await request.text();
      console.log("Raw request body:", rawBody);
      body = JSON.parse(rawBody);
      console.log("Parsed body:", body);
    } catch (parseError) {
      console.error("JSON parse error:", parseError);
      return new Response(
        JSON.stringify({
          success: false,
          message: "Invalid JSON in request body",
          debug: parseError.message,
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    }

    // Validate required fields
    const requiredFields = ["name", "email", "subject", "message"];
    const missingFields = requiredFields.filter(
      (field) => !body[field] || !body[field].trim()
    );

    if (missingFields.length > 0) {
      console.log("Missing fields:", missingFields);
      return new Response(
        JSON.stringify({
          success: false,
          message: `Missing required fields: ${missingFields.join(", ")}`,
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    }

    // Get access key from environment variables with debugging
    const accessKey = env?.WEB3FORMS_ACCESS_KEY;
    console.log("Access key exists:", !!accessKey);
    console.log("Access key length:", accessKey?.length || 0);

    if (!accessKey) {
      console.error("WEB3FORMS_ACCESS_KEY not found in environment");
      return new Response(
        JSON.stringify({
          success: false,
          message: "Server configuration error - missing access key",
          debug: "WEB3FORMS_ACCESS_KEY environment variable not set",
        }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    }

    // Prepare form data
    const formData = {
      access_key: accessKey,
      name: body.name.trim(),
      email: body.email.trim(),
      phone: (body.phone || "").trim(),
      subject: body.subject.trim(),
      message: body.message.trim(),
      from_name: "Vera Verde Website",
      redirect: false,
    };

    console.log("Form data prepared:", {
      ...formData,
      access_key: "[REDACTED]",
    });

    // Forward to Web3Forms with timeout and better error handling
    console.log("Sending to Web3Forms...");
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

    let web3formsResponse;
    try {
      web3formsResponse = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "User-Agent": "VeraVerde-ContactForm/1.0",
        },
        body: JSON.stringify(formData),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
      console.log("Web3Forms response status:", web3formsResponse.status);
      console.log("Web3Forms response ok:", web3formsResponse.ok);
    } catch (fetchError) {
      clearTimeout(timeoutId);
      console.error("Fetch error:", fetchError);

      if (fetchError.name === "AbortError") {
        return new Response(
          JSON.stringify({
            success: false,
            message: "Request timeout. Please try again.",
          }),
          {
            status: 408,
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          }
        );
      }

      return new Response(
        JSON.stringify({
          success: false,
          message: "Failed to connect to email service. Please try again.",
          debug: fetchError.message,
        }),
        {
          status: 502,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    }

    // Parse Web3Forms response
    let result;
    try {
      const responseText = await web3formsResponse.text();
      console.log("Web3Forms raw response:", responseText);
      result = JSON.parse(responseText);
      console.log("Web3Forms parsed response:", result);
    } catch (parseError) {
      console.error("Error parsing Web3Forms response:", parseError);
      return new Response(
        JSON.stringify({
          success: false,
          message: "Invalid response from email service",
          debug: parseError.message,
        }),
        {
          status: 502,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    }

    const processingTime = Date.now() - startTime;
    console.log(`Total processing time: ${processingTime}ms`);
    console.log("=== End Debug Info ===");

    // Return the result
    return new Response(
      JSON.stringify({
        ...result,
        processingTime: processingTime,
      }),
      {
        status: web3formsResponse.ok ? 200 : 400,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      }
    );
  } catch (error) {
    const processingTime = Date.now() - startTime;
    console.error("Contact form error:", error);
    console.error("Error stack:", error.stack);
    console.log(`Processing time before error: ${processingTime}ms`);

    return new Response(
      JSON.stringify({
        success: false,
        message: "Server error occurred. Please try again.",
        debug: error.message,
        processingTime: processingTime,
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }
}

// Handle preflight CORS requests
export async function onRequestOptions(context) {
  console.log("CORS preflight request received");
  return new Response(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "86400",
    },
  });
}
