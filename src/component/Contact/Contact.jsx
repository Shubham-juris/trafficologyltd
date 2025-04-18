import React from "react";

function Contact() {
  return (
    <section className="bg-emerald-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-emerald-800">Get in Touch</h2>
          <p className="text-emerald-700 mt-2">
            Have a question or want to work with us? Fill out the form below and we'll get back to you as soon as we can.
          </p>
        </div>

        <form className="bg-white shadow-lg rounded-xl p-8 space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-emerald-900">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-2 w-full px-4 py-2 border border-emerald-300 rounded-md shadow-sm focus:ring-2 focus:ring-emerald-400 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-emerald-900">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-2 w-full px-4 py-2 border border-emerald-300 rounded-md shadow-sm focus:ring-2 focus:ring-emerald-400 focus:outline-none"
            />
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-emerald-900">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className="mt-2 w-full px-4 py-2 border border-emerald-300 rounded-md shadow-sm focus:ring-2 focus:ring-emerald-400 focus:outline-none"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-emerald-900">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="mt-2 w-full px-4 py-2 border border-emerald-300 rounded-md shadow-sm focus:ring-2 focus:ring-emerald-400 focus:outline-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
