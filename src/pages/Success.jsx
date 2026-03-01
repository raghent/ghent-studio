export default function Success() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="text-center max-w-xl">
        <h1 className="text-5xl font-bold mb-6">Message Sent</h1>
        <p className="text-gray-400 mb-10">
          Your inquiry has been received. We will review your project details and respond shortly.
        </p>

        <a
          href="/"
          className="inline-block px-8 py-4 rounded-full bg-linear-to-r from-purple-600 to-purple-800 font-semibold hover:opacity-90 transition"
        >
          Back to Home
        </a>
      </div>
    </div>
  )
}