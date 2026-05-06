import {
  ArrowLeft,
  GraduationCap,
  IndianRupee,
  Users,
  FileText,
  CircleCheckBig,
  BookOpen,
} from "lucide-react";

import { NavLink } from "react-router-dom";

export default function EducationSupport() {

  const scheme = {
    title: "Education Support",
    description:
      "Scholarships and financial assistance programs for students pursuing education.",
    amount: "₹75,000",
    eligibility: "School & College Students",
    department: "Education Department",
    benefits:
      "Financial support for tuition fees, educational materials, scholarships, transport assistance, and higher education development initiatives.",
  };

  return (
    <div className="min-h-screen bg-[#f5f7f9] p-6 md:p-10">

      {/* Back */}
      <NavLink
        to="/schemes"
        className="inline-flex items-center gap-2 text-[#0b4f35] font-semibold mb-8 hover:underline"
      >
        <ArrowLeft size={18} />
        Back to Schemes
      </NavLink>

      {/* Main Card */}
      <div className="bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-sm">

        {/* Banner */}
        <div className="bg-gradient-to-r from-[#0057b8] to-[#00a6fb] p-10 text-white">

          <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-8">

            {/* Left */}
            <div>

              <div className="w-20 h-20 rounded-3xl bg-white/20 flex items-center justify-center mb-6">
                <GraduationCap size={40} />
              </div>

              <h1 className="text-4xl md:text-5xl font-bold">
                {scheme.title}
              </h1>

              <p className="text-white/90 text-lg mt-5 max-w-3xl leading-loose">
                {scheme.description}
              </p>
            </div>

            {/* Apply Button */}
            <button className="h-14 px-6 rounded-2xl bg-white text-[#0057b8] font-semibold hover:bg-gray-100 transition">
              Apply Now
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 md:p-10">

          {/* Info Grid */}
          <div className="grid md:grid-cols-3 gap-6">

            {/* Financial Support */}
            <div className="bg-[#f3f9ff] rounded-3xl p-6 border border-blue-100">

              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-5">
                <IndianRupee
                  className="text-[#0057b8]"
                  size={22}
                />
              </div>

              <p className="text-sm text-gray-400 mb-2">
                Scholarship Amount
              </p>

              <h3 className="text-2xl font-bold text-gray-800">
                {scheme.amount}
              </h3>
            </div>

            {/* Eligibility */}
            <div className="bg-[#f3f9ff] rounded-3xl p-6 border border-blue-100">

              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-5">
                <Users
                  className="text-[#0057b8]"
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

            {/* Status */}
            <div className="bg-[#f3f9ff] rounded-3xl p-6 border border-blue-100">

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
          <div className="mt-10 bg-[#f3f9ff] rounded-[30px] p-8 border border-blue-100">

            <div className="flex items-center gap-3 mb-6">

              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm">
                <FileText
                  className="text-[#0057b8]"
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

          {/* Benefits */}
          <div className="mt-10 bg-[#f3f9ff] rounded-[30px] p-8 border border-blue-100">

            <div className="flex items-center gap-3 mb-6">

              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm">
                <BookOpen
                  className="text-[#0057b8]"
                  size={22}
                />
              </div>

              <h2 className="text-3xl font-bold text-gray-800">
                Key Benefits
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-5">

              <div className="bg-white rounded-2xl p-5 border border-blue-100">
                Tuition Fee Assistance
              </div>

              <div className="bg-white rounded-2xl p-5 border border-blue-100">
                Student Scholarships
              </div>

              <div className="bg-white rounded-2xl p-5 border border-blue-100">
                Free Educational Materials
              </div>

              <div className="bg-white rounded-2xl p-5 border border-blue-100">
                Transport Support
              </div>
            </div>
          </div>

          {/* Department */}
          <div className="mt-10 bg-gradient-to-r from-[#0057b8] to-[#00a6fb] rounded-[30px] p-8 text-white">

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