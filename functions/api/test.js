// functions/api/test.js
export async function onRequestGet(context) {
  const { env } = context;

  return new Response(
    JSON.stringify({
      success: true,
      message: "Test endpoint working",
      hasAccessKey: !!env?.WEB3FORMS_ACCESS_KEY,
      accessKeyLength: env?.WEB3FORMS_ACCESS_KEY?.length || 0,
      envKeys: Object.keys(env || {}),
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
