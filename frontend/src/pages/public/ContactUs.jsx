import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  Send,
  MessageSquare,
} from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="min-h-screen bg-[#f7faf7] px-4 sm:px-6 lg:px-8 py-10">
      <div className="max-w-7xl mx-auto">
        {/* TOP SECTION */}
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-10">
          {/* LEFT */}
          <div>
            <h1 className="text-4xl font-bold text-green-800 mb-3">
              Contact Us
            </h1>

            <div className="flex items-center gap-2 text-sm text-gray-500 mb-5">
              <span>Home</span>
              <span>&gt;</span>
              <span className="text-green-700 font-medium">Contact Us</span>
            </div>

            <p className="text-gray-600 leading-7 max-w-xl">
              We are here to help you. Reach out to us for any queries,
              suggestions, complaints, or support regarding Panchayat services.
            </p>
          </div>

          {/* RIGHT ICON */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-60 h-60 bg-green-100 rounded-full blur-2xl absolute inset-0"></div>

              <div className="relative z-10 w-60 h-60 flex items-center justify-center">
                <div className="relative">
                  <Phone
                    size={90}
                    className="text-green-700 stroke-[1.4]"
                  />

                  <Mail
                    size={70}
                    className="text-green-300 absolute -right-12 top-10"
                  />

                  <MessageSquare
                    size={60}
                    className="text-green-200 absolute -left-10 bottom-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* LEFT CONTACT INFO */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-[#13284c] mb-8">
              Get In Touch
            </h2>

            <div className="space-y-7">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-green-100 text-green-700 flex items-center justify-center">
                  <MapPin size={20} />
                </div>

                <div>
                  <h3 className="font-semibold text-[#13284c]">
                    Office Address
                  </h3>
                  <p className="text-gray-500 text-sm mt-1 leading-6">
                    Panchayat Office, Main Road,
                    <br />
                    Your Village, Your District - 600001
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-green-100 text-green-700 flex items-center justify-center">
                  <Phone size={20} />
                </div>

                <div>
                  <h3 className="font-semibold text-[#13284c]">
                    Phone Number
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-green-100 text-green-700 flex items-center justify-center">
                  <Mail size={20} />
                </div>

                <div>
                  <h3 className="font-semibold text-[#13284c]">
                    Email Address
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    support@smartpanchayat.gov.in
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-green-100 text-green-700 flex items-center justify-center">
                  <Clock3 size={20} />
                </div>

                <div>
                  <h3 className="font-semibold text-[#13284c]">
                    Office Hours
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    Monday - Friday: 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-[#13284c] mb-8">
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-sm font-medium text-gray-600 block mb-2">
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full h-12 px-4 rounded-lg border border-gray-200 outline-none focus:border-green-600"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600 block mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full h-12 px-4 rounded-lg border border-gray-200 outline-none focus:border-green-600"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600 block mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  placeholder="Enter subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full h-12 px-4 rounded-lg border border-gray-200 outline-none focus:border-green-600"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600 block mb-2">
                  Message
                </label>

                <textarea
                  rows="5"
                  name="message"
                  placeholder="Type your message..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none resize-none focus:border-green-600"
                />
              </div>

              <button
                type="submit"
                className="w-full h-12 bg-green-700 hover:bg-green-800 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;