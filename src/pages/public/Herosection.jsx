import React from "react";
import { useNavigate } from "react-router-dom";
import bg from "../../assets/herosection/bgimg.png";
import land from "../../assets/herosection/landscape.png";

import {
  Users,
  FileText,
  Shield,
  IndianRupee,
  ArrowRight,
  Megaphone,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#f7faf7] px-4 sm:px-5 md:px-6 py-5">
      <div className="max-w-[1500px] mx-auto">

        {/* HERO CONTAINER */}
        <div className="grid grid-cols-1 lg:grid-cols-[44%_56%] rounded-2xl overflow-hidden border border-green-100 bg-white shadow-sm min-h-auto lg:min-h-[690px]">

          {/* LEFT SIDE */}
          <div className="relative px-5 sm:px-8 md:px-10 lg:px-12 pt-8 sm:pt-10 lg:pt-14 pb-36 sm:pb-44 lg:pb-0 bg-[#f9fcf8] overflow-hidden">

            {/* Tag */}
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold">
              🌿 Empowering Villages, Enriching Lives
            </div>

            {/* Heading */}
            <h1 className="mt-6 sm:mt-8 text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] leading-tight lg:leading-[66px] font-bold text-gray-900">
              <span className="text-green-700">Smart Panchayat</span>
              <br />
              Portal
            </h1>

            {/* Text */}
            <p className="mt-5 sm:mt-6 text-[16px] sm:text-[18px] lg:text-[19px] leading-7 sm:leading-8 lg:leading-[38px] text-gray-600 max-w-xl">
              A digital initiative for transparent governance and better citizen
              services. Together, let’s build a stronger and smarter community.
            </p>

            {/* Divider */}
            <div className="w-16 h-1 bg-green-700 rounded-full mt-7 sm:mt-8"></div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 sm:mt-10 relative z-20">
              <button
                onClick={() => navigate("/citizen")}
                className="bg-green-700 text-white px-6 sm:px-7 py-4 rounded-xl font-semibold text-base sm:text-lg flex items-center justify-center gap-2 hover:bg-green-800"
              >
                Citizen Login <ArrowRight size={18} />
              </button>

              <button 
              onClick={() => navigate("/adminLogin")} className="border-2 border-green-700 text-green-700 px-6 sm:px-7 py-4 rounded-xl font-semibold text-base sm:text-lg flex items-center justify-center gap-2 hover:bg-green-50">
                Admin Login <ArrowRight size={18} />
              </button>
            </div>

            {/* Landscape Bottom */}
            <img
              src={land}
              alt="Landscape"
              className="absolute bottom-0 left-0 w-full h-28 sm:h-40 md:h-48 lg:h-60 object-cover object-center"
            />
          </div>

          {/* RIGHT SIDE */}
          <div className="relative min-h-[420px] sm:min-h-[520px] lg:min-h-[690px]">

            {/* Main Image */}
            <img
              src={bg}
              alt="Panchayat Building"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* White Fade */}
            <div className="absolute inset-y-0 left-0 w-20 sm:w-28 lg:w-36 bg-gradient-to-r from-[#f9fcf8] via-[#f9fcf8]/70 to-transparent z-10"></div>

            {/* Stats Cards */}
            <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 z-20 w-[94%] grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">

              <div className="bg-white rounded-2xl shadow-md p-4 sm:p-5 text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-3">
                  <Users size={24} className="text-green-700" />
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-700">
                  12,450+
                </h3>
                <p className="text-gray-500 mt-2 text-sm sm:text-base">
                  Happy Citizens
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-md p-4 sm:p-5 text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-3">
                  <FileText size={24} className="text-green-700" />
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-700">
                  8,200+
                </h3>
                <p className="text-gray-500 mt-2 text-sm sm:text-base">
                  Applications Processed
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-md p-4 sm:p-5 text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-3">
                  <Shield size={24} className="text-green-700" />
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-700">
                  1,150+
                </h3>
                <p className="text-gray-500 mt-2 text-sm sm:text-base">
                  Complaints Resolved
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-md p-4 sm:p-5 text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-3">
                  <IndianRupee size={24} className="text-green-700" />
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-700">
                  ₹32.5 Cr+
                </h3>
                <p className="text-gray-500 mt-2 text-sm sm:text-base">
                  Funds Utilized
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* ANNOUNCEMENT BAR */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-[250px_1fr] rounded-2xl overflow-hidden border border-green-100 bg-white shadow-sm">

          <div className="bg-green-700 text-white px-6 sm:px-7 py-6 sm:py-7 flex items-center gap-4">
            <Megaphone size={26} />
            <h3 className="text-lg sm:text-xl font-bold">Announcements</h3>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">

            <div className="px-6 py-6 border-b md:border-r md:border-b-0">
              <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs">
                New
              </span>
              <p className="mt-4 text-gray-700 text-sm sm:text-base leading-7">
                Apply for Birth & Death Certificates online.
              </p>
            </div>

            <div className="px-6 py-6 border-b xl:border-r xl:border-b-0">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs">
                Update
              </span>
              <p className="mt-4 text-gray-700 text-sm sm:text-base leading-7">
                Gram Sabha Meeting on 25th May 2024 at 11:00 AM.
              </p>
            </div>

            <div className="px-6 py-6">
              <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs">
                Notice
              </span>
              <p className="mt-4 text-gray-700 text-sm sm:text-base leading-7">
                Property Tax payment now available online.
              </p>
            </div>

            <div className="absolute right-4 bottom-4 flex gap-2">
              <button className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100">
                <ChevronLeft size={18} />
              </button>

              <button className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;