import React, { useState } from "react";

function Footer() {
  const [isHoursOpen, setIsHoursOpen] = useState(false);

  return (
    <>
      {/* Contact Section */}
      <section className="bg-emerald-50 py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-emerald-800 mb-4">
            Questions or Comments?
          </h2>
          <p className="text-emerald-700 mb-12">
            We know that our clients have unique needs. Send us a message, and we will get back to you soon.
          </p>

          <div className="text-emerald-900 space-y-6 text-center">
            {/* Address */}
            <div>
              <h3 className="text-xl font-semibold text-green-900 mb-2">Trafficology</h3>
              <p>
                <span className="block font-medium text-emerald-900">Address:</span>
                5211 50 ST. Drayton Valley, Alberta, T7A 1C9 Canada
              </p>
            </div>

            {/* Phone */}
            <div>
              <p>
                <span className="block font-medium text-emerald-900">Phone:</span>
                +1 (780) 234-4167
              </p>
            </div>

            {/* Dropdown Hours */}
            <div>
              <button
                onClick={() => setIsHoursOpen(!isHoursOpen)}
                className="text-lg font-semibold text-green-800 hover:text-green-600 transition focus:outline-none"
              >
                Hours
                <span
                  className={`inline-block ml-3 transform transition-transform duration-500 ${
                    isHoursOpen ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ▼
                </span>
              </button>

              {isHoursOpen && (
                <ul className="mt-4 space-y-1 text-emerald-800 text-sm">
                  {[
                    ["Mon", "09:00 a.m. – 05:00 p.m."],
                    ["Tue", "09:00 a.m. – 05:00 p.m."],
                    ["Wed", "09:00 a.m. – 05:00 p.m."],
                    ["Thu", "09:00 a.m. – 05:00 p.m."],
                    ["Fri", "09:00 a.m. – 05:00 p.m."],
                    ["Sat", "Closed"],
                    ["Sun", "Closed"],
                  ].map(([day, hours], idx) => (
                    <li key={idx} className={["Sat", "Sun"].includes(day) ? "text-green-400" : ""}>
                      <span className="inline-block w-12 font-medium">{day}</span>
                      <span className={day === "Tue" ? "font-bold" : ""}>{hours}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </section>
<div className="mt-12">
  <iframe
    title="Trafficology Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.1399013771914!2d-115.14628492370366!3d53.21767647994337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x539f8828c4f0489f%3A0xa9d83ee3bcb011e!2s5211%2050%20St%2C%20Drayton%20Valley%2C%20AB%20T7A%201C9%2C%20Canada!5e0!3m2!1sen!2sca!4v1715100000000"
    width="100%"
    height="300"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="rounded-lg shadow-md"
  />
</div>
      {/* Footer Bottom */}
      <footer className="bg-emerald-100 border-t border-emerald-300 py-6 text-center text-sm text-emerald-700">
        <p className="mb-3">© 2025 Trafficology. All rights reserved.</p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="hover:text-green-700 font-medium transition">Privacy Policy</a>
          <a href="#" className="hover:text-green-700 font-medium transition">Terms and Conditions</a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
