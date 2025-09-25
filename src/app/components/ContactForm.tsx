import React from "react";

export const ContactForm = () => {
  return (
    <div
      className="pt-10 min-h-screen"
      id="contact"
      style={{
        backgroundImage: "url('./img7.jpeg')",
        backgroundSize: "cover", // Pour que l&apos;image couvre tout le div
        backgroundPosition: "center", // Centrer l&apos;image
        backgroundRepeat: "no-repeat", // Empêche la répétition
      }}
    >
      <div className="max-w-md mx-auto p-6 bg-white/90 rounded-lg shadow-md ">
        <h2 className="w-full text-2xl font-bold text-center mb-10">
          Contactez-nous
        </h2>
        <form
          className="flex flex-col space-y-4 max-h-[80vh]"
          action="/contact"
        >
          {/* Nom */}
          <label htmlFor="name" className="font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* E-mail */}
          <label htmlFor="email" className="font-medium text-gray-700">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="E-mail"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Message */}
          <label htmlFor="msg" className="font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="msg"
            name="message"
            placeholder="Message goes here"
            className="border border-gray-300 rounded-md p-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>

          {/* Submit */}
          <input
            type="submit"
            value="Submit"
            className="bg-blue-500 text-white font-semibold rounded-md py-2 cursor-pointer hover:bg-blue-600 transition"
          />
        </form>
      </div>
    </div>
  );
};
