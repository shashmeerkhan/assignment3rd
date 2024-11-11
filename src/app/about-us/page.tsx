export default function Contact() {
  return (
    <div className="mycontact flex flex-col items-center py-8 px-4 lg:px-16 bg-gray-100 text-gray-800">
      <h1 className="text-3xl font-bold text-[#2a27ce] mb-6">Contact Us</h1>
      <p className="text-center text-gray-700 leading-relaxed max-w-lg mb-6">
        We love to hear from you! Whether you have a question, want to collaborate on a project, or just want to say hello, feel free to reach out to us.
      </p>

      <div className="w-full max-w-lg text-center">
        <h2 className="text-2xl font-semibold text-[#2a27ce] mb-4">Get in Touch</h2>
        <p className="text-gray-600 mb-4">
          Email: <a href="mailto:kshahmeer10@gmail.com" className="text-[#2a27ce] underline">kshahmeer10@gmail.com</a>
          <br />
          Phone: <span className="text-[#2a27ce]">+923481341392</span>
        </p>

        <h2 className="text-2xl font-semibold text-[#2a27ce] mb-4">Location</h2>
        <p className="text-gray-600 mb-4">Our office is located in Karachi</p>

        <h2 className="text-2xl font-semibold text-[#2a27ce] mb-4">Working Hours</h2>
        <p className="text-gray-600 mb-4">
          Monday - Saturday: 8:00 AM - 12:00 AM
          <br />
          Sunday: Open
        </p>

        <h2 className="text-2xl font-semibold text-[#2a27ce] mb-4">Social Media</h2>
        <p className="text-gray-600">
          Connect with us on social media:
          <br />
          <a href="https://www.facebook.com/kshahmeer10" target="_blank" className="text-[#2a27ce] underline mr-2">
            Facebook
          </a>
          |
          <a href="https://www.linkedin.com/in/shahmeer-khan-96b1a42b4/" target="_blank" className="text-[#2a27ce] underline ml-2">
            LinkedIn
          </a>
        </p>
      </div>
    </div>
  );
}
