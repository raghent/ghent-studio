export default function Audit() {
  return (
    <section className="py-32 px-8 md:px-20 bg-neutral-950 text-white">
      <div className="max-w-3xl mx-auto text-center">

        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Free Portfolio Audit
        </h2>

        <p className="text-gray-400 text-lg mb-12">
          Submit your portfolio and receive a quick review with suggestions
          to improve presentation, structure, and performance.
        </p>

        <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>

        <form
          action="/api/contact"
          method="POST"
          className="space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-4 bg-neutral-900 border border-neutral-800 rounded-lg outline-none transition-all focus:border-purple-500 focus:ring-1 focus:ring-purple-500 placeholder:text-gray-500"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
           className="w-full p-4 bg-neutral-900 border border-neutral-800 rounded-lg outline-none transition-all focus:border-purple-500 focus:ring-1 focus:ring-purple-500 placeholder:text-gray-500"
            required
          />

          <input
            type="text"
            name="portfolio"
            placeholder="Your Portfolio URL"
            className="w-full p-4 bg-neutral-900 border border-neutral-800 rounded-lg outline-none transition-all focus:border-purple-500 focus:ring-1 focus:ring-purple-500 placeholder:text-gray-500"
            required
          />

          <div class="cf-turnstile" data-sitekey="0x4AAAAAACkmoucvSS1Eakw5" data-size="invisible"></div>

          <button
            type="submit"
            className="px-8 py-4 bg-purple-600 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(168,85,247,0.35)] hover:bg-purple-500"
          >
            Request Audit
          </button>
          <p className="text-xs text-gray-500 mt-3">
           Protected by Cloudflare Turnstile
         </p>

        </form>

      </div>
    </section>
  )
}