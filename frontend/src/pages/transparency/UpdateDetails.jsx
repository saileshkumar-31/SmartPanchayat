import {
  CalendarDays,
  Bell,
  Download,
  ArrowLeft,
  FileText,
  Building2,
  CircleCheckBig,
} from "lucide-react";

import { NavLink } from "react-router-dom";

export default function UpdateDetails() {

  // Static data for now
  const update = {
    title: "New fund of ₹15,00,000 approved for village infrastructure",
    category: "Funding",
    date: "14 May 2026",
    description:
      "State government approved new infrastructure development funds for roads, drainage, and public facilities.",
    fullDescription:
      "The state government has officially sanctioned ₹15,00,000 for village infrastructure development under the rural modernization initiative. The allocated funds will be utilized for concrete roads, drainage system improvements, drinking water pipeline upgrades, and public utility enhancements across multiple wards.",
  };

  return (
    <div className="min-h-screen bg-[#f5f7f9] p-6 md:p-10">

      {/* Back Button */}
      <NavLink
        to="/transparency/recent-updates"
        className="inline-flex items-center gap-2 text-[#0b4f35] font-semibold mb-8 hover:underline"
      >
        <ArrowLeft size={18} />
        Back to Updates
      </NavLink>

      {/* Main Card */}
      <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-sm border border-gray-100">

        {/* Top Header */}
        <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-8">

          {/* Left Side */}
          <div className="flex gap-5">

            {/* Icon */}
            <div className="w-16 h-16 rounded-3xl bg-[#e8f5ef] flex items-center justify-center shrink-0">
              <Bell
                className="text-[#0b4f35]"
                size={30}
              />
            </div>

            {/* Content */}
            <div>

              {/* Badge + Date */}
              <div className="flex flex-wrap items-center gap-4 mb-5">

                <span className="px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
                  {update.category}
                </span>

                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <CalendarDays size={16} />
                  {update.date}
                </div>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight max-w-4xl">
                {update.title}
              </h1>
            </div>
          </div>

          {/* Download Button */}
          <button className="h-14 px-6 flex items-center justify-center gap-3 rounded-2xl border border-gray-200 hover:bg-gray-50 transition font-semibold">
            <Download size={20} />
            Download PDF
          </button>
        </div>

        {/* Description */}
        <div className="mt-10">
          <p className="text-lg text-gray-600 leading-loose">
            {update.description}
          </p>
        </div>

        {/* Detailed Section */}
        <div className="mt-10 bg-[#f8faf9] rounded-[28px] p-8 border border-gray-100">

          <div className="flex items-center gap-3 mb-6">

            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm">
              <FileText
                className="text-[#0b4f35]"
                size={22}
              />
            </div>

            <h2 className="text-3xl font-bold text-gray-800">
              Detailed Information
            </h2>
          </div>

          <p className="text-gray-600 leading-loose text-lg">
            {update.fullDescription}
          </p>
        </div>

        {/* Information Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">

          {/* Department */}
          <div className="bg-[#f8faf9] rounded-3xl p-6 border border-gray-100">

            <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-5">
              <Building2
                className="text-[#0b4f35]"
                size={22}
              />
            </div>

            <p className="text-sm text-gray-400 mb-2">
              Department
            </p>

            <h3 className="text-xl font-bold text-gray-800">
              Rural Development
            </h3>
          </div>

          {/* Status */}
          <div className="bg-[#f8faf9] rounded-3xl p-6 border border-gray-100">

            <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-5">
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

          {/* Updated */}
          <div className="bg-[#f8faf9] rounded-3xl p-6 border border-gray-100">

            <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-5">
              <CalendarDays
                className="text-[#0b4f35]"
                size={22}
              />
            </div>

            <p className="text-sm text-gray-400 mb-2">
              Last Updated
            </p>

            <h3 className="text-xl font-bold text-gray-800">
              {update.date}
            </h3>
          </div>
        </div>

        {/* Notes Section */}
        <div className="mt-10 bg-gradient-to-r from-[#0b4f35] to-[#14754f] rounded-[30px] p-8 text-white">

          <h2 className="text-3xl font-bold mb-5">
            Public Transparency Note
          </h2>

          <p className="leading-loose text-white/90 text-lg">
            This update has been officially published through the Smart Panchayat Transparency Portal to ensure open governance and citizen awareness regarding public development activities and fund allocations.
          </p>
        </div>
      </div>
    </div>
  );
}