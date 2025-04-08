"use client";

import { useState } from "react";

const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, message });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="bg-dark-green text-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Want To Learn More About Giza Seeds
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="flex space-x-4 mb-4">
            <div className="flex-1">
              <label htmlFor="name" className="block text-sm font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="block w-full p-2 border rounded-md border-gray-300  text-black focus:outline-none focus:ring-2 focus:ring-sea-green"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="flex-1">
              <label htmlFor="email" className="block text-sm font-bold mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full p-2 border rounded-md border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-sea-green"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="block w-full p-2 border rounded-md border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-sea-green"
              placeholder="Enter your message"
              rows={4}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-sea-green hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
