import logo from "../../assets/footer/logo.png";
import fb from "../../assets/footer/fb.png.webp";
import tw from "../../assets/footer/x_logo_PNG19.png";
import yt from "../../assets/footer/yt.avif";
import wa from "../../assets/footer/Whatsapp_icon.png";

const Footer = () => {
  return (
    <footer className="bg-[#0b5e22] text-white mt-10">
      {/* Main Footer */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3 mb-3 justify-center sm:justify-start">
            <img
              src={logo}
              alt="Smart Panchayat"
              className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full bg-white p-1"
            />

            <h2 className="text-lg sm:text-xl font-bold">
              Smart Panchayat
            </h2>
          </div>

          <p className="text-sm text-green-100 leading-6 text-center sm:text-left max-w-sm">
            Building transparent, accountable and citizen-friendly
            governance.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center sm:text-left">
          <h3 className="font-semibold text-base sm:text-lg mb-3">
            Quick Links
          </h3>

          <ul className="space-y-2 text-sm text-green-100">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">Schemes</li>
          </ul>
        </div>

        {/* Important Links */}
        <div className="text-center sm:text-left">
          <h3 className="font-semibold text-base sm:text-lg mb-3">
            Important Links
          </h3>

          <ul className="space-y-2 text-sm text-green-100">
            <li className="hover:text-white cursor-pointer">Contact Us</li>
            <li className="hover:text-white cursor-pointer">Help & Support</li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="text-center sm:text-left">
          <h3 className="font-semibold text-base sm:text-lg mb-3">
            Connect With Us
          </h3>

          <div className="flex gap-3 justify-center sm:justify-start flex-wrap">

            <div className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition">
              <img
                src={fb}
                alt="Facebook"
                className="w-7 h-7 object-contain"
              />
            </div>

            <div className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition">
              <img
                src={tw}
                alt="Twitter"
                className="w-5 h-5 object-contain"
              />
            </div>

            <div className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition">
              <img
                src={yt}
                alt="YouTube"
                className="w-5 h-5 object-contain"
              />
            </div>

            <div className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition">
              <img
                src={wa}
                alt="WhatsApp"
                className="w-5 h-5 object-contain"
              />
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-green-700 py-4 px-4 text-center text-xs sm:text-sm text-green-100">
        © 2024 Smart Panchayat Portal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;