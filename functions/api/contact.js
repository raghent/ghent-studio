export async function onRequestPost(context) {
  const { request, env } = context

  const formData = await request.formData()

  const name = formData.get("name")
  const email = formData.get("email")
  const message = formData.get("message")
  const honeypot = formData.get("company")
  const portfolio = formData.get("portfolio") || "Not provided"

if (honeypot) {
  return Response.redirect("https://ghentstudio.com/success", { status: 302 })
}

const turnstileToken = formData.get("cf-turnstile-response")

const verifyResponse = await fetch(
  "https://challenges.cloudflare.com/turnstile/v0/siteverify",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      secret: env.TURNSTILE_SECRET_KEY,
      response: turnstileToken,
      remoteip: request.headers.get("CF-Connecting-IP")
    })
  }
)

const verifyData = await verifyResponse.json()

if (!verifyData.success) {
  return new Response("Turnstile verification failed", { status: 400 })
}

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
        Portfolio: ${portfolio}
      `
    })
  })

  if (!response.ok) {
    const errorText = await response.text()
    return new Response(errorText, { status: 500 })
  }

  // Redirect to success page
  return Response.redirect("https://ghentstudio.com/success", 302)
}