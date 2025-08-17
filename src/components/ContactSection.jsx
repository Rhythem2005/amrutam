import React, { useState } from "react";
import photo12 from "../assets/photo12.png";

const ContactSection = () => {
  // Form states
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here (API call, console log, etc.)
    console.log({ name, contact, email, message });
    alert("Message Sent! (Check console for details)");
    
    // Clear form
    setName("");
    setContact("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="bg-yellow-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* HEADING */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-green-800 mb-4">
            Let’s Connect
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            We’re here to help you on your wellness journey. Reach out to us
            for any questions, product inquiries, or personalized advice.
          </p>
        </div>

        {/* FORM + IMAGE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-yellow-50">
          {/* LEFT IMAGE */}
          <div>
            <img
              src={photo12}
              alt="Healthy Food"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* RIGHT FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-yellow-50 p-6 border border-yellow-200 rounded-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm text-green-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border-b border-gray-300 bg-transparent focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-green-700 mb-1">
                  Your Contact Number
                </label>
                <input
                  type="text"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="w-full border-b border-gray-300 bg-transparent focus:outline-none"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm text-green-700 mb-1">
                Your Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-b border-gray-300 bg-transparent focus:outline-none"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm text-green-700 mb-1">
                Message (Optional)
              </label>
              <textarea
                rows="2"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border-b border-gray-300 bg-transparent focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="bg-green-800 text-white px-6 py-3 rounded-md hover:bg-green-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
