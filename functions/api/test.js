// functions/api/test.js
export async function onRequestGet(context) {
  const { env } = context;

  return new Response(
    JSON.stringify(
      {
        success: true,
        message: "Function is working",
        timestamp: new Date().toISOString(),
        hasAccessKey: !!env?.WEB3FORMS_ACCESS_KEY,
        accessKeyLength: env?.WEB3FORMS_ACCESS_KEY?.length || 0,
        environmentKeys: Object.keys(env || {}).sort(),
      },
      null,
      2
    ),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
}

// Test POST endpoint
export async function onRequestPost(context) {
  const { request, env } = context;

  let body = {};
  try {
    body = await request.json();
  } catch (e) {
    // Ignore parse errors for test
  }

  return new Response(
    JSON.stringify(
      {
        success: true,
        message: "POST test working",
        receivedData: body,
        hasAccessKey: !!env?.WEB3FORMS_ACCESS_KEY,
      },
      null,
      2
    ),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
}
