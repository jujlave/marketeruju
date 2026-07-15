export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname.replace(/\/+$/, "") || "/";
    if (path !== "/auth" && path !== "/") {
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

    if (path === "/") {
      const html = `
<!doctype html>
<html>
  <head><meta charset="utf-8" /></head>
  <body>
    <p>Decap Auth Worker is running.</p>
    <p>Use <a href="/auth">/auth</a> to start GitHub OAuth.</p>
  </body>
</html>`;
      return new Response(html, {
        headers: { "Content-Type": "text/html; charset=utf-8" },
      });
    }

    if (!code) {
      const scope = url.searchParams.get("scope") || "repo";
      const redirect = `https://github.com/login/oauth/authorize?client_id=${encodeURIComponent(clientId)}&scope=${encodeURIComponent(scope)}&redirect_uri=${encodeURIComponent(url.origin + "/auth")}`;
      const escapedProvider = JSON.stringify(provider);
      const escapedTarget = JSON.stringify(callbackUrl);
      const escapedRedirect = JSON.stringify(redirect);
      const html = `
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Authorizing</title>
  </head>
  <body>
    <script>
      (function () {
        var provider = ${escapedProvider};
        var target = ${escapedTarget};
        var redirect = ${escapedRedirect};
        var message = 'authorizing:' + provider;

        function start() {
          window.location.href = redirect;
        }

        if (window.opener && window.opener !== window) {
          window.opener.postMessage(message, target);
          window.opener.postMessage(message, '*');
          setTimeout(start, 400);
        } else {
          start();
        }
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
    const escapedProvider = JSON.stringify(provider);
    const escapedPayload = JSON.stringify(JSON.stringify({ token }));
    const escapedTarget = JSON.stringify(callbackUrl);
    const html = `
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Authorization complete</title>
    <style>
      body {
        margin: 0;
        min-height: 100vh;
        display: grid;
        place-items: center;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        color: #111827;
        background: #f8fafc;
      }
      main {
        max-width: 520px;
        padding: 28px;
        background: #ffffff;
        border: 1px solid #e5e7eb;
        border-radius: 14px;
        box-shadow: 0 20px 48px rgba(15, 23, 42, 0.08);
      }
      h1 {
        margin: 0 0 10px;
        font-size: 20px;
      }
      p {
        margin: 8px 0 0;
        line-height: 1.6;
      }
      a {
        color: #2563eb;
      }
    </style>
  </head>
  <body>
    <main>
      <h1>Authorization complete</h1>
      <p>Returning to the content manager. If this window does not close, go back to the admin tab and try again.</p>
      <p><a href="${callbackUrl}/admin/">Open admin</a></p>
    </main>
    <script>
      (function () {
        var provider = ${escapedProvider};
        var payload = ${escapedPayload};
        var target = ${escapedTarget};
        var stringMessage = 'authorization:' + provider + ':success:' + payload;
        var attempts = 0;
        var maxAttempts = 12;
        var interval = 500;

        function sendMessage() {
          var receiver = window.opener || window.parent;
          if (receiver && receiver !== window) {
            receiver.postMessage(stringMessage, target);
            receiver.postMessage(stringMessage, '*');
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
