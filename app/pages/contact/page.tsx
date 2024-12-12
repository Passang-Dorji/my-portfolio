export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-50 to-green-100 p-6">
      {/* Header Section */}
      <header className="text-center py-8">
        <h1 className="text-4xl md:text-6xl font-extrabold text-green-800 mb-4">
          Get in Touch
        </h1>
        <p className="text-lg md:text-xl text-green-600">
          We'd love to hear from you!
        </p>
      </header>

      {/* Contact Form Section */}
      <section className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-lg font-medium text-green-800 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-medium text-green-800 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-lg font-medium text-green-800 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              className="w-full px-4 py-2 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-green-600 to-green-800 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg hover:from-green-700 hover:to-green-900 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Call to Action */}
      <footer className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-4">
          Connect with Us
        </h2>
        <p className="text-green-600 mb-6">
          Follow us on social media for the latest updates and news.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#"
            className="bg-green-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-700 transition"
          >
            Facebook
          </a>
          <a
            href="#"
            className="bg-green-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-700 transition"
          >
            Twitter
          </a>
          <a
            href="#"
            className="bg-green-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-700 transition"
          >
            Instagram
          </a>
        </div>
      </footer>
    </div>
  );
}
