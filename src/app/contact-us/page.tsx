// components/ContactSection.js
export default function ContactSection() {
  return (
    <section className="contact text-center py-6 bg-gray-100 shadow-md">
      <h2 className="text-2xl font-semibold text-[var(--maincolor)]">Contact Me</h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Feel free to reach out for collaborations or just a friendly hello!
      </p>
      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-left text-gray-600 mb-1" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-left text-gray-600 mb-1" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-left text-gray-600 mb-1" htmlFor="message">Message</label>
          <textarea
            id="message"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            
            placeholder="Your Message"
          ></textarea>
        </div>
        <button type="submit" className="px-4 py-2 bg-[var(--maincolor)] text-white rounded-md hover:bg-[var(--hovercolor)]">
          Send Message
        </button>
      </form>
    </section>
  );
}
