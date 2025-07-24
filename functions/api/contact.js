// functions/api/contact.js
// This file should be located at: functions/api/contact.js

export async function onRequestPost(context) {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",
  };

  try {
    const { request, env } = context;

    // Get access key
    const accessKey = env?.WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Server configuration error",
        }),
        { status: 500, headers: corsHeaders }
      );
    }

    // Parse request body
    let body;
    try {
      const text = await request.text();
      body = JSON.parse(text);
    } catch (e) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Invalid request format",
        }),
        { status: 400, headers: corsHeaders }
      );
    }

    // Basic validation
    if (!body?.name || !body?.email || !body?.message || !body?.subject) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Missing required fields",
        }),
        { status: 400, headers: corsHeaders }
      );
    }

    // Prepare form data
    const formData = {
      access_key: accessKey,
      name: String(body.name).trim(),
      email: String(body.email).trim(),
      phone: String(body.phone || "").trim(),
      subject: String(body.subject).trim(),
      message: String(body.message).trim(),
      from_name: "Vera Verde Website",
      redirect: false,
    };

    // Submit to Web3Forms
    const web3Response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await web3Response.json();

    return new Response(JSON.stringify(result), {
      status: web3Response.ok ? 200 : 400,
      headers: corsHeaders,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        message: "Server error occurred",
      }),
      { status: 500, headers: corsHeaders }
    );
  }
}

export async function onRequestOptions() {
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
