import {
  ArrowLeft,
  House,
  IndianRupee,
  Users,
  FileText,
  CircleCheckBig,
} from "lucide-react";

import { NavLink } from "react-router-dom";

export default function HousingScheme() {

  const scheme = {
    title: "Housing Scheme",
    description:
      "Affordable housing support for eligible rural families.",
    amount: "₹2,50,000",
    eligibility: "Below Poverty Line Families",
    department: "Rural Development Department",
    benefits:
      "Financial support for constructing new houses and renovating damaged homes under rural housing development initiatives.",
  };

  return (
    <div className="min-h-screen bg-[#f5f7f9] p-6 md:p-10">

      <NavLink
        to="/schemes"
        className="inline-flex items-center gap-2 text-[#0b4f35] font-semibold mb-8 hover:underline"
      >
        <ArrowLeft size={18} />
        Back to Schemes
      </NavLink>

      <div className="bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-sm">

        {/* Banner */}
        <div className="bg-gradient-to-r from-[#0b4f35] to-[#1a8f5a] p-10 text-white">

          <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-8">

            <div>

              <div className="w-20 h-20 rounded-3xl bg-white/20 flex items-center justify-center mb-6">
                <House size={40} />
              </div>

              <h1 className="text-4xl md:text-5xl font-bold">
                {scheme.title}
              </h1>

              <p className="text-white/90 text-lg mt-5 max-w-3xl leading-loose">
                {scheme.description}
              </p>
            </div>

            <button className="h-14 px-6 rounded-2xl bg-white text-[#0b4f35] font-semibold hover:bg-gray-100 transition">
              Apply Now
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 md:p-10">

          {/* Info Grid */}
          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-[#f8faf9] rounded-3xl p-6 border border-gray-100">

              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-5">
                <IndianRupee
                  className="text-[#0b4f35]"
                  size={22}
                />
              </div>

              <p className="text-sm text-gray-400 mb-2">
                Financial Support
              </p>

              <h3 className="text-2xl font-bold text-gray-800">
                {scheme.amount}
              </h3>
            </div>

            <div className="bg-[#f8faf9] rounded-3xl p-6 border border-gray-100">

              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-5">
                <Users
                  className="text-[#0b4f35]"
                  size={22}
                />
              </div>

              <p className="text-sm text-gray-400 mb-2">
                Eligibility
              </p>

              <h3 className="text-xl font-bold text-gray-800">
                {scheme.eligibility}
              </h3>
            </div>

            <div className="bg-[#f8faf9] rounded-3xl p-6 border border-gray-100">

              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-5">
                <CircleCheckBig
                  className="text-green-600"
                  size={22}
                />
              </div>

              <p className="text-sm text-gray-400 mb-2">
                Status
              </p>

              <h3 className="text-xl font-bold text-green-700">
                Active
              </h3>
            </div>
          </div>

          {/* Details */}
          <div className="mt-10 bg-[#f8faf9] rounded-[30px] p-8 border border-gray-100">

            <div className="flex items-center gap-3 mb-6">

              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm">
                <FileText
                  className="text-[#0b4f35]"
                  size={22}
                />
              </div>

              <h2 className="text-3xl font-bold text-gray-800">
                Scheme Details
              </h2>
            </div>

            <p className="text-lg text-gray-600 leading-loose">
              {scheme.benefits}
            </p>
          </div>

          {/* Department */}
          <div className="mt-10 bg-gradient-to-r from-[#0b4f35] to-[#14754f] rounded-[30px] p-8 text-white">

            <h2 className="text-3xl font-bold mb-5">
              Managing Department
            </h2>

            <p className="text-white/90 text-lg leading-loose">
              {scheme.department}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}