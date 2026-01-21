export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname !== "/auth") {
      return new Response("Not found", { status: 404 });
    }

    const clientId = env.GITHUB_CLIENT_ID;
    const clientSecret = env.GITHUB_CLIENT_SECRET;
    const siteUrl = env.SITE_URL;

    if (!clientId || !clientSecret || !siteUrl) {
      return new Response("Missing env vars", { status: 500 });
    }

    const callbackUrl = new URL(siteUrl).origin;
    const provider = url.searchParams.get("provider") || "github";
    const code = url.searchParams.get("code");

    if (!code) {
      const redirect = `https://github.com/login/oauth/authorize?client_id=${encodeURIComponent(clientId)}&scope=repo&redirect_uri=${encodeURIComponent(url.origin + "/auth")}`;
      const html = `
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="refresh" content="0; url=${redirect}" />
  </head>
  <body>
    <script>
      (function () {
        var message = 'authorizing:${provider}';
        var target = '${callbackUrl}';
        var attempts = 0;
        var maxAttempts = 2;
        var interval = 200;

        function notify() {
          if (window.opener) {
            window.opener.postMessage(message, target);
          }
          attempts += 1;
          if (attempts >= maxAttempts) {
            window.location.replace('${redirect}');
          }
        }

        notify();
        setInterval(notify, interval);
      })();
    </script>
  </body>
</html>`;
      return new Response(html, {
        headers: { "Content-Type": "text/html; charset=utf-8" },
      });
    }

    const tokenRes = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code,
        redirect_uri: url.origin + "/auth",
      }),
    });

    const tokenData = await tokenRes.json();
    if (!tokenData.access_token) {
      return new Response("OAuth failed", { status: 401 });
    }

    const token = tokenData.access_token;
    const html = `
<!doctype html>
<html>
  <head><meta charset="utf-8" /></head>
  <body>
    <script>
      (function () {
        var message = 'authorization:${provider}:success:${token}';
        var target = '${callbackUrl}';
        var attempts = 0;
        var maxAttempts = 4;
        var interval = 600;

        function sendMessage() {
          if (window.opener) {
            window.opener.postMessage(message, target);
          }
          attempts += 1;
          if (attempts >= maxAttempts) {
            window.close();
          }
        }

        sendMessage();
        setInterval(sendMessage, interval);
      })();
    </script>
  </body>
</html>`;

    return new Response(html, {
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  },
};
