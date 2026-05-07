import React, { useState } from "react";
import {
  User,
  Phone,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Step1Personal = () => {
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [form, setForm] = useState(() => {
    const saved = JSON.parse(sessionStorage.getItem("registration_personal") || "{}");
    return {
      user_name: saved.user_name || "",
      user_mobile: saved.user_mobile || "",
      user_email: saved.user_email || "",
      user_pass: saved.user_pass || "",
      confirmPassword: saved.confirmPassword || "",
    };
  });

  const navigate = useNavigate();
  const handleChange = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));
  const handleNext = () => {
    if (!form.user_name || !form.user_mobile || !form.user_email || !form.user_pass) {
      alert("Please complete all required personal details.");
      return;
    }
    if (form.user_pass !== form.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    sessionStorage.setItem("registration_personal", JSON.stringify(form));
    navigate("/citizen/register/panchayat");
  };

  return (
    <>
      {/* TITLE */}
      <div className="flex gap-3 mb-6 sm:mb-8 lg:mb-10">
        <User size={24} className="text-green-700 mt-1 sm:w-7 sm:h-7" />

        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-bold text-[#13284c] leading-tight lg:leading-none">
            Personal Details
          </h2>

          <p className="text-sm sm:text-base lg:text-xl text-gray-500 mt-2">
            Enter your basic information
          </p>
        </div>
      </div>

      {/* FORM */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-7">

        {/* FULL NAME */}
        <div>
          <label className="font-semibold text-sm sm:text-base lg:text-lg text-gray-700">
            Full Name *
          </label>

          <div className="h-12 sm:h-14 mt-3 border rounded-xl px-4 flex items-center gap-3">
            <User size={18} className="text-gray-400 shrink-0" />

            <input
              type="text"
              value={form.user_name}
              onChange={(e) => handleChange("user_name", e.target.value)}
              placeholder="Enter your full name"
              className="w-full outline-none text-sm sm:text-base lg:text-lg"
            />
          </div>
        </div>

        {/* MOBILE */}
        <div>
          <label className="font-semibold text-sm sm:text-base lg:text-lg text-gray-700">
            Mobile Number *
          </label>

          <div className="h-12 sm:h-14 mt-3 border rounded-xl px-4 flex items-center gap-3">
            <Phone size={18} className="text-gray-400 shrink-0" />

            <input
              type="text"
              value={form.user_mobile}
              onChange={(e) => handleChange("user_mobile", e.target.value)}
              placeholder="Enter 10-digit mobile number"
              className="w-full outline-none text-sm sm:text-base lg:text-lg"
            />
          </div>
        </div>

        {/* EMAIL */}
        <div>
          <label className="font-semibold text-sm sm:text-base lg:text-lg text-gray-700">
            Email Address *
          </label>

          <div className="h-12 sm:h-14 mt-3 border rounded-xl px-4 flex items-center gap-3">
            <Mail size={18} className="text-gray-400 shrink-0" />

            <input
              type="email"
              value={form.user_email}
              onChange={(e) => handleChange("user_email", e.target.value)}
              placeholder="Enter your email address"
              className="w-full outline-none text-sm sm:text-base lg:text-lg"
            />
          </div>
        </div>

        {/* PASSWORD */}
        <div>
          <label className="font-semibold text-sm sm:text-base lg:text-lg text-gray-700">
            Password *
          </label>

          <div className="h-12 sm:h-14 mt-3 border rounded-xl px-4 flex items-center gap-3">
            <Lock size={18} className="text-gray-400 shrink-0" />

            <input
              type={showPass ? "text" : "password"}
              value={form.user_pass}
              onChange={(e) => handleChange("user_pass", e.target.value)}
              placeholder="Create a strong password"
              className="w-full outline-none text-sm sm:text-base lg:text-lg"
            />

            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? (
                <EyeOff size={18} className="text-gray-400" />
              ) : (
                <Eye size={18} className="text-gray-400" />
              )}
            </button>
          </div>
        </div>

        {/* CONFIRM PASSWORD */}
        <div className="md:col-span-2">
          <label className="font-semibold text-sm sm:text-base lg:text-lg text-gray-700">
            Confirm Password *
          </label>

          <div className="h-12 sm:h-14 mt-3 border rounded-xl px-4 flex items-center gap-3">
            <Lock size={18} className="text-gray-400 shrink-0" />

            <input
              type={showConfirm ? "text" : "password"}
              value={form.confirmPassword}
              onChange={(e) => handleChange("confirmPassword", e.target.value)}
              placeholder="Confirm your password"
              className="w-full outline-none text-sm sm:text-base lg:text-lg"
            />

            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? (
                <EyeOff size={18} className="text-gray-400" />
              ) : (
                <Eye size={18} className="text-gray-400" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* BUTTON */}
      <div className="flex justify-stretch sm:justify-end mt-8 sm:mt-10 lg:mt-14">
        <button
          onClick={handleNext}
          className="w-full sm:w-auto bg-green-700 hover:bg-green-800 text-white h-12 sm:h-14 px-6 sm:px-8 rounded-xl flex items-center justify-center gap-3 font-semibold text-sm sm:text-base lg:text-lg"
        >
          Next: Panchayat Details
          <ArrowRight size={20} />
        </button>
      </div>

      {/* LOGIN */}
      <p className="text-center mt-8 sm:mt-10 lg:mt-12 text-sm sm:text-base lg:text-xl text-gray-600">
        Already have an account?{" "}
        <span
          onClick={() => navigate("/citizen")}
          className="text-green-700 font-semibold cursor-pointer hover:underline"
        >
          Login Now
        </span>
      </p>
    </>
  );
};

export default Step1Personal;
