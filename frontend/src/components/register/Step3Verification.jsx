import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Step3Verification = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 py-5 sm:py-6 md:py-8">

      <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-2">
        Verification
      </h2>

      <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
        Verify your identity to complete registration
      </p>

      {/* Form Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">

        {/* Mobile OTP */}
        <div>
          <label className="block mb-2 font-medium text-sm sm:text-base">
            Mobile OTP
          </label>

          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              placeholder="Enter OTP"
              className="flex-1 border rounded-lg px-4 py-3 text-sm sm:text-base"
            />

            <button className="px-4 py-3 bg-green-700 text-white rounded-lg text-sm sm:text-base whitespace-nowrap">
              Send OTP
            </button>
          </div>
        </div>

        {/* Email OTP */}
        <div>
          <label className="block mb-2 font-medium text-sm sm:text-base">
            Email OTP
          </label>

          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              placeholder="Enter OTP"
              className="flex-1 border rounded-lg px-4 py-3 text-sm sm:text-base"
            />

            <button className="px-4 py-3 bg-green-700 text-white rounded-lg text-sm sm:text-base whitespace-nowrap">
              Send OTP
            </button>
          </div>
        </div>

        {/* Upload Proof */}
        <div className="md:col-span-2">
          <label className="block mb-2 font-medium text-sm sm:text-base">
            Address Proof (Optional)
          </label>

          <input
            type="file"
            className="w-full border rounded-lg px-4 py-3 text-sm sm:text-base"
          />
        </div>
      </div>

      {/* Checklist */}
      <div className="mt-6 sm:mt-8 bg-green-50 border rounded-xl p-4 sm:p-5">
        <h3 className="font-bold text-base sm:text-lg mb-3">
          Final Verification Checklist
        </h3>

        <ul className="space-y-2 text-gray-700 text-sm">
          <li>• Mobile number active</li>
          <li>• Email accessible</li>
          <li>• Details match official records</li>
          <li>• Upload valid proof if needed</li>
        </ul>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:justify-between mt-6 sm:mt-8">
        <button
          onClick={() => navigate("/citizen/register/panchayat")}
          className="h-12 sm:h-14 px-6 sm:px-7 border border-green-700 text-green-700 rounded-xl flex items-center justify-center gap-2 font-semibold text-sm sm:text-base"
        >
          <ArrowLeft size={18} />
          Back to Panchayat Details
        </button>

        <button className="px-6 py-3 bg-green-700 text-white rounded-lg text-sm sm:text-base"  onClick={() => navigate("/success")}>
          Complete Registration
        </button>
      </div>

    </div>
  );
};

export default Step3Verification;