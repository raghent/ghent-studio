export default function Contact() {
  return (
    <section id="contact" className="py-32 px-8 md:px-20 bg-neutral-950 text-white">
      <h2 className="text-4xl md:text-6xl font-bold mb-16">
        Start Your Project
      </h2>

      <form
        action="https://formspree.io/f/YOUR_FORM_ID"
        method="POST"
        className="max-w-2xl space-y-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full p-4 bg-neutral-900 border border-neutral-800 rounded-lg"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full p-4 bg-neutral-900 border border-neutral-800 rounded-lg"
          required
        />

        <textarea
          name="vision"
          placeholder="Describe your vision. What should your portfolio feel like?"
          rows="6"
          className="w-full p-4 bg-neutral-900 border border-neutral-800 rounded-lg"
          required
        />

        <button
          type="submit"
          className="px-8 py-4 bg-purple-600 rounded-lg font-semibold hover:bg-purple-500 transition"
        >
          Submit Project Inquiry
        </button>
      </form>
    </section>
  )
}