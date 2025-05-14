import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    const phoneNumber = "9173337926"; // Your WhatsApp number in international format (no + or 00)
    const text = `Hello, I’m ${name} (%0AEmail: ${email})%0A%0A${message}`;
    const url = `https://wa.me/${phoneNumber}?text=${text}`;

    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-off-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-6">Contact Us</h1>
        <p className="text-lg text-gray-600 mb-10">
          We'd love to hear from you! Fill out the form below and message will be sent to our WhatsApp directly.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <form
            onSubmit={handleWhatsAppSubmit}
            className="space-y-6 bg-white p-6 rounded-2xl shadow-custom"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                placeholder="Type your message here..."
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition"
              >
                Send on WhatsApp
              </button>
            </div>
          </form>

          <div className="bg-white p-6 rounded-2xl shadow-custom space-y-6">
            <h2 className="text-xl font-semibold text-primary">Contact Info</h2>
            <p className="text-gray-600">
              Madhav Tech Labs<br />
              Nyaymandir<br />
              Vadodara, Gujarat, India
            </p>
            <p className="text-gray-600">📞 +91 9173337926</p>
            <p className="text-gray-600">✉️ madhav.tech.labs07official@gmail.com</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-primary hover:underline">Instagram</a>
              <a href="#" className="text-primary hover:underline">LinkedIn</a>
              <a href="#" className="text-primary hover:underline">YouTube</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
