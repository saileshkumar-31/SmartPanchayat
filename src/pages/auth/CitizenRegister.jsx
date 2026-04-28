
import { Outlet, useLocation } from "react-router-dom";
import { Shield, Clock3, Users } from "lucide-react";
import bgImg from "../../assets/registration/bg.png";

const CitizenRegister = () => {
  const location = useLocation();
  const path = location.pathname;

  let step = 1;

  if (path.includes("/panchayat")) step = 2;
  if (path.includes("/verification")) step = 3;

  return (
    <section className="bg-[#f4f6f5] min-h-screen px-4 sm:px-6 py-6 sm:py-10">
      <div className="max-w-7xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12">

        {/* LEFT PANEL */}
        <div className="lg:col-span-4 bg-[#f5faf6] border-b lg:border-b-0 lg:border-r border-gray-100 px-5 sm:px-8 lg:px-10 py-8 sm:py-10 lg:py-12">

          <h1 className="text-[34px] sm:text-[46px] lg:text-[58px] leading-tight lg:leading-[64px] font-bold text-[#13284c]">
            Create Your <br /> Account
          </h1>

          <h2 className="mt-5 sm:mt-6 lg:mt-7 text-[16px] sm:text-[18px] lg:text-[20px] font-semibold text-green-700 leading-7 lg:leading-8">
            Join Panchayat Digital Platform
          </h2>

          <div className="w-16 h-1 rounded-full bg-green-700 mt-5 sm:mt-6 lg:mt-7"></div>

          <p className="mt-6 sm:mt-7 lg:mt-8 text-[15px] sm:text-[16px] lg:text-[18px] leading-7 sm:leading-8 lg:leading-9 text-gray-600">
            Register as a citizen to access important services,
            raise requests, track applications and stay updated.
          </p>

          <div className="mt-8 sm:mt-9 lg:mt-10 rounded-2xl overflow-hidden">
            <img
              src={bgImg}
              alt="Village"
              className="w-full h-[180px] sm:h-[220px] lg:h-[260px] object-cover"
            />
          </div>

          <div className="bg-white mt-5 sm:mt-6 rounded-2xl shadow-md px-4 sm:px-6 py-5 sm:py-6 grid grid-cols-3 gap-3 text-center">
            <div>
              <Shield size={24} className="mx-auto text-green-700" />
              <p className="font-semibold mt-2 sm:mt-3 text-sm sm:text-base">
                Secure
              </p>
            </div>

            <div>
              <Clock3 size={24} className="mx-auto text-green-700" />
              <p className="font-semibold mt-2 sm:mt-3 text-sm sm:text-base">
                Easy & Fast
              </p>
            </div>

            <div>
              <Users size={24} className="mx-auto text-green-700" />
              <p className="font-semibold mt-2 sm:mt-3 text-sm sm:text-base">
                For Citizens
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="lg:col-span-8 px-4 sm:px-8 lg:px-12 py-6 sm:py-8 lg:py-10">

          {/* Stepper */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-8 sm:mb-10 lg:mb-14">

            <div className="text-center">
              <div
                className={`w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 mx-auto rounded-full flex items-center justify-center font-bold text-sm sm:text-base ${
                  step >= 1
                    ? "bg-green-700 text-white"
                    : "bg-gray-100"
                }`}
              >
                {step > 1 ? "✓" : "1"}
              </div>

              <p className="mt-2 sm:mt-3 lg:mt-4 font-semibold text-[11px] sm:text-sm lg:text-base text-green-700 leading-tight">
                Personal Details
              </p>
            </div>

            <div className="text-center">
              <div
                className={`w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 mx-auto rounded-full flex items-center justify-center font-bold text-sm sm:text-base ${
                  step >= 2
                    ? "bg-green-700 text-white"
                    : "bg-gray-100"
                }`}
              >
                {step > 2 ? "✓" : "2"}
              </div>

              <p className="mt-2 sm:mt-3 lg:mt-4 font-semibold text-[11px] sm:text-sm lg:text-base leading-tight">
                Panchayat Details
              </p>
            </div>

            <div className="text-center">
              <div
                className={`w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 mx-auto rounded-full flex items-center justify-center font-bold text-sm sm:text-base ${
                  step >= 3
                    ? "bg-green-700 text-white"
                    : "bg-gray-100"
                }`}
              >
                3
              </div>

              <p className="mt-2 sm:mt-3 lg:mt-4 font-semibold text-[11px] sm:text-sm lg:text-base leading-tight">
                Verification
              </p>
            </div>

          </div>

          {/* Nested Routes */}
          <Outlet />

        </div>
      </div>
    </section>
  );
};

export default CitizenRegister;