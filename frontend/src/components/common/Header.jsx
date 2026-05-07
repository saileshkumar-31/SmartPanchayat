// Header component - Main navigation header for the Smart Panchayat website
import  { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import logo from "../../assets/header/logo.png";
import { useTranslation } from "react-i18next";

const Header = () => {
  // State for mobile menu toggle
  const [openMenu, setOpenMenu] = useState(false);
  
  // Navigation hooks
  const navigate = useNavigate();
  const location = useLocation();
  
  // Translation hook for internationalization
  const { t, i18n } = useTranslation();

  // Navigation links for the header
  const navLinks = [
    { name: t("home"), path: "/" },
    { name: t("services"), path: "/services" },
    { name: t("schemes"), path: "/schemes" },
    { name: t("contact"), path: "/contact" },
    { name: t("about"), path: "/aboutus" },
  ];

  return (
    <header className="w-full bg-green-900 text-white shadow-md sticky top-0 z-50">
      {/* Container */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 sm:gap-3 min-w-0"
        >
          <img
            src={logo}
            alt="Smart Panchayat"
            className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full border-2 border-white object-cover shrink-0"
          />

          <div className="min-w-0">
            <h1 className="text-base sm:text-lg lg:text-xl font-bold leading-none truncate">
              Smart Panchayat
            </h1>

            <p className="text-[10px] sm:text-xs text-green-100 mt-1 leading-4 hidden sm:block">
              Transparency and Citizen Service
              <br />
              Management System
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium">
          {navLinks.map((item, index) => (
            <button
              key={index}
              onClick={() => navigate(item.path)}
              className={`hover:text-green-200 transition pb-1 ${
                location.pathname === item.path
                  ? "border-b-2 border-white text-white"
                  : ""
              }`}
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Desktop Right Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <select
  value={i18n.language}
  onChange={(e) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  }}
  className="bg-transparent outline-none cursor-pointer"
>
  <option value="en">English</option>
  <option value="ta">தமிழ்</option>
</select>

          <button
            onClick={() => navigate("/citizen")}
            className="bg-white text-green-900 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100"
          >
            Citizen Login
          </button>

          <button
            onClick={() => navigate("/adminLogin")}
            className="border border-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-800"
          >
            Admin Login
          </button>
        </div>

        {/* Tablet Buttons */}
        <div className="hidden md:flex lg:hidden items-center gap-2">
          <button className="flex items-center gap-1 border border-green-700 bg-green-800 px-3 py-2 rounded-lg text-sm hover:bg-green-700">
            <Globe size={15} />
            EN
          </button>

          <button
            onClick={() => navigate("/citizen")}
            className="bg-white text-green-900 px-3 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100"
          >
            Login
          </button>

          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="p-2"
          >
            {openMenu ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden"
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile / Tablet Menu */}
      {openMenu && (
        <div className="lg:hidden bg-green-950 px-4 sm:px-6 pb-5 pt-3">
          <div className="flex flex-col gap-4 text-sm">
            {navLinks.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  navigate(item.path);
                  setOpenMenu(false);
                }}
                className="text-left"
              >
                {item.name}
              </button>
            ))}

            <button className="flex items-center justify-center gap-2 border border-green-700 bg-green-800 py-2 rounded-lg">
              <Globe size={16} />
              English
            </button>

            <button
              onClick={() => navigate("/citizen")}
              className="bg-white text-green-900 py-2 rounded-lg font-semibold"
            >
              Citizen Login
            </button>

            <button
              onClick={() => navigate("/adminLogin")}
              className="border border-white py-2 rounded-lg"
            >
              Admin Login
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;