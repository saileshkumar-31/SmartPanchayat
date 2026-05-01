import { useState } from "react";
import {
  Mail,
  Smartphone,
  Send,
  LockKeyhole,
  ArrowLeft,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import bgImg from "../../assets/forgotpass/bg.png";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [method, setMethod] = useState("email");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = () => {
    if (method === "email" && email.trim() === "") {
      alert("Enter your email");
      return;
    }

    if (method === "mobile" && mobile.trim().length < 10) {
      alert("Enter valid mobile number");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      if (method === "email") {
        alert("Reset link sent successfully");
      } else {
        alert("OTP sent successfully");
      }
    }, 1500);
  };

  const handleBackLogin = () => {
    navigate("/citizen");
  };

  return (
    <section className="min-h-screen bg-[#f5f7f4] flex items-center px-4 sm:px-6 lg:px-8 py-10">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* LEFT SIDE */}
        <div className="order-2 lg:order-1">
          <h1 className="text-[48px] font-bold text-green-800 leading-tight mb-5">
            Forgot Password?
          </h1>

          <p className="text-gray-600 text-[22px] leading-10 max-w-lg mb-8">
            Don’t worry! Enter your registered email or mobile number and we’ll
            send you instructions to reset your password.
          </p>

          <img
            src={bgImg}
            alt="Forgot Password"
            className="w-[320px] sm:w-[360px] object-contain"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="order-1 lg:order-2">
          <div className="bg-white rounded-[28px] shadow-xl px-8 sm:px-10 py-10 relative max-w-xl mx-auto">
            {/* ICON */}
            <div className="absolute left-1/2 -translate-x-1/2 -top-10 w-24 h-24 rounded-full bg-green-100 shadow flex items-center justify-center">
              <LockKeyhole
                size={40}
                className="text-green-700"
              />
            </div>

            <div className="pt-10">
              <h2 className="text-[52px] font-bold text-center text-[#1e293b] leading-none">
                Reset Password
              </h2>

              <p className="text-center text-gray-500 text-lg mt-3 mb-8">
                Enter your registered email or mobile number
              </p>

              {/* TOGGLE */}
              <div className="grid grid-cols-2 bg-[#f1f3f4] rounded-xl p-1 mb-7">
                <button
                  onClick={() => setMethod("email")}
                  className={`h-14 rounded-lg font-semibold transition ${
                    method === "email"
                      ? "bg-white text-green-700 shadow"
                      : "text-gray-600"
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <Mail size={18} />
                    Email
                  </div>
                </button>

                <button
                  onClick={() => setMethod("mobile")}
                  className={`h-14 rounded-lg font-semibold transition ${
                    method === "mobile"
                      ? "bg-white text-green-700 shadow"
                      : "text-gray-600"
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <Smartphone size={18} />
                    Mobile Number
                  </div>
                </button>
              </div>

              {/* FIELD */}
              {method === "email" ? (
                <div className="mb-6">
                  <label className="font-semibold text-gray-700 block mb-2">
                    Email Address
                  </label>

                  <div className="border border-gray-200 rounded-xl h-14 px-4 flex items-center gap-3">
                    <Mail
                      size={18}
                      className="text-gray-400"
                    />

                    <input
                      type="email"
                      placeholder="Enter your registered email"
                      className="w-full outline-none"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
              ) : (
                <div className="mb-6">
                  <label className="font-semibold text-gray-700 block mb-2">
                    Mobile Number
                  </label>

                  <div className="border border-gray-200 rounded-xl h-14 px-4 flex items-center gap-3">
                    <Smartphone
                      size={18}
                      className="text-gray-400"
                    />

                    <input
                      type="tel"
                      placeholder="Enter mobile number"
                      className="w-full outline-none"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                    />
                  </div>
                </div>
              )}

              {/* SEND BUTTON */}
              <button
                onClick={handleSend}
                disabled={loading}
                className="w-full h-14 rounded-xl bg-green-700 hover:bg-green-800 text-white font-semibold text-lg transition disabled:opacity-60 flex items-center justify-center gap-2"
              >
                <Send size={18} />

                {loading
                  ? "Please wait..."
                  : method === "email"
                  ? "Send Reset Link"
                  : "Send OTP"}
              </button>

              {/* BACK BUTTON */}
              <button
                type="button"
                onClick={handleBackLogin}
                className="w-full mt-6 text-green-700 font-semibold text-lg hover:underline flex items-center justify-center gap-2 cursor-pointer"
              >
                <ArrowLeft size={18} />
                Back to Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;