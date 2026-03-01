export async function onRequestPost(context) {
  const { request, env } = context

  const formData = await request.formData()

  const name = formData.get("name")
  const email = formData.get("email")
  const message = formData.get("message")

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: "onboarding@resend.dev",
      to: "raghentjr@gmail.com",
      subject: "New Project Inquiry — Ghent Studio",
      html: `
        <h2>New Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/> ${message}</p>
      `
    })
  })

  if (!response.ok) {
    const errorText = await response.text()
    return new Response("errorText", { status: 500 })
  }

  return new Response(
    `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Message Sent — Ghent Studio</title>
        <style>
          body {
            margin: 0;
            background: #000;
            color: #fff;
            font-family: system-ui, -apple-system, sans-serif;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            text-align: center;
          }
          .container {
            max-width: 600px;
          }
          h1 {
            font-size: 48px;
            margin-bottom: 20px;
          }
          p {
            color: #aaa;
            margin-bottom: 40px;
          }
          a {
            display: inline-block;
            padding: 14px 28px;
            border-radius: 999px;
            background: linear-gradient(135deg, #7c3aed, #9333ea);
            color: #fff;
            text-decoration: none;
            font-weight: 600;
            transition: 0.3s;
          }
          a:hover {
            opacity: 0.85;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Message Sent</h1>
          <p>Thanks ${name}. We’ll review your inquiry and get back to you shortly.</p>
          <a href="https://ghentstudio.com">Back to Site</a>
        </div>
      </body>
    </html>
    `,
    {
      headers: { "Content-Type": "text/html" }
    }
  )
}