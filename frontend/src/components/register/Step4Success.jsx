import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Step4Success = () => {
  const navigate = useNavigate();

  const handleGoLogin = () => {
    navigate("/citizen");
  };

  return (
    <section className="min-h-screen bg-[#f5f7f4] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl p-8 sm:p-12 text-center">
        {/* SUCCESS ICON */}
        <div className="w-24 h-24 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-6">
          <CheckCircle2
            size={52}
            className="text-green-700"
          />
        </div>

        {/* TITLE */}
        <h1 className="text-4xl sm:text-5xl font-bold text-[#13284c] mb-4">
          Registration Completed
        </h1>

        {/* SUBTITLE */}
        <p className="text-gray-600 text-lg sm:text-xl leading-8 max-w-xl mx-auto mb-10">
          Your citizen account has been created successfully.
          You can now continue to the login page and access your dashboard.
        </p>

        {/* BUTTON */}
        <button
          onClick={handleGoLogin}
          className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-xl text-lg font-semibold transition flex items-center justify-center gap-2 mx-auto"
        >
          Go to Login Page
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default Step4Success;