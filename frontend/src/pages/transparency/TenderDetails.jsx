import {
  ArrowLeft,
  CalendarDays,
  Building2,
  Download,
  IndianRupee,
  FileText,
  CircleCheckBig,
  ClipboardList,
} from "lucide-react";

import { NavLink } from "react-router-dom";

export default function TenderDetails() {

  // Static for now
  const tender = {
    title: "Road Repair Work",
    category: "Infrastructure",
    tenderId: "TNDR-001",
    contractor: "ABC Builders",
    amount: "₹6,50,000",
    deadline: "20 Jun 2024",
    status: "Open",
    description:
      "Road maintenance and repair work for damaged village roads and drainage pathways.",
    fullDescription:
      "The Panchayat has officially opened tenders for village road repair and infrastructure restoration work. The selected contractor will handle pothole repairs, side drainage improvements, concrete resurfacing, and road safety enhancements across multiple wards.",
  };

  return (
    <div className="min-h-screen bg-[#f5f7f9] p-6 md:p-10">

      {/* Back */}
      <NavLink
        to="/transparency/tenders-contracts"
        className="inline-flex items-center gap-2 text-[#0b4f35] font-semibold mb-8 hover:underline"
      >
        <ArrowLeft size={18} />
        Back to Tenders
      </NavLink>

      {/* Main Card */}
      <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden">

        {/* Top Banner */}
        <div className="bg-gradient-to-r from-[#0b4f35] to-[#14754f] p-10 text-white">

          <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-8">

            {/* Left */}
            <div>

              <div className="flex flex-wrap items-center gap-4 mb-5">

                <span className="px-4 py-2 rounded-full bg-white/20 text-sm font-semibold">
                  {tender.category}
                </span>

                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <CalendarDays size={16} />
                  Deadline: {tender.deadline}
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                {tender.title}
              </h1>

              <p className="text-white/90 text-lg mt-5 leading-loose max-w-4xl">
                {tender.description}
              </p>
            </div>

            {/* Download */}
            <button className="h-14 px-6 flex items-center justify-center gap-3 rounded-2xl bg-white text-[#0b4f35] hover:bg-gray-100 transition font-semibold">
              <Download size={20} />
              Download PDF
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 md:p-10">

          {/* Info Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

            {/* Tender ID */}
            <div className="bg-[#f8faf9] rounded-3xl p-6 border border-gray-100">

              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-5">
                <FileText
                  className="text-[#0b4f35]"
                  size={22}
                />
              </div>

              <p className="text-sm text-gray-400 mb-2">
                Tender ID
              </p>

              <h3 className="text-xl font-bold text-gray-800">
                {tender.tenderId}
              </h3>
            </div>

            {/* Contractor */}
            <div className="bg-[#f8faf9] rounded-3xl p-6 border border-gray-100">

              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-5">
                <Building2
                  className="text-[#0b4f35]"
                  size={22}
                />
              </div>

              <p className="text-sm text-gray-400 mb-2">
                Contractor
              </p>

              <h3 className="text-xl font-bold text-gray-800">
                {tender.contractor}
              </h3>
            </div>

            {/* Amount */}
            <div className="bg-[#f8faf9] rounded-3xl p-6 border border-gray-100">

              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-5">
                <IndianRupee
                  className="text-[#0b4f35]"
                  size={22}
                />
              </div>

              <p className="text-sm text-gray-400 mb-2">
                Contract Value
              </p>

              <h3 className="text-xl font-bold text-gray-800">
                {tender.amount}
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
                {tender.status}
              </h3>
            </div>
          </div>

          {/* Detailed Section */}
          <div className="mt-10 bg-[#f8faf9] rounded-[30px] p-8 border border-gray-100">

            <div className="flex items-center gap-3 mb-6">

              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center">
                <ClipboardList
                  className="text-[#0b4f35]"
                  size={22}
                />
              </div>

              <h2 className="text-3xl font-bold text-gray-800">
                Tender Information
              </h2>
            </div>

            <p className="text-lg text-gray-600 leading-loose">
              {tender.fullDescription}
            </p>
          </div>

          {/* Timeline */}
          <div className="mt-10">

            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Tender Timeline
            </h2>

            <div className="space-y-5">

              <div className="bg-white border border-gray-100 rounded-3xl p-6 flex items-center justify-between">

                <div>
                  <h3 className="font-bold text-gray-800">
                    Tender Published
                  </h3>

                  <p className="text-gray-500 mt-1">
                    Official public announcement released.
                  </p>
                </div>

                <span className="text-sm text-gray-400">
                  10 May 2024
                </span>
              </div>

              <div className="bg-white border border-gray-100 rounded-3xl p-6 flex items-center justify-between">

                <div>
                  <h3 className="font-bold text-gray-800">
                    Bidding Open
                  </h3>

                  <p className="text-gray-500 mt-1">
                    Contractors may submit applications.
                  </p>
                </div>

                <span className="text-sm text-gray-400">
                  12 May 2024
                </span>
              </div>

              <div className="bg-white border border-gray-100 rounded-3xl p-6 flex items-center justify-between">

                <div>
                  <h3 className="font-bold text-gray-800">
                    Submission Deadline
                  </h3>

                  <p className="text-gray-500 mt-1">
                    Final submission closing date.
                  </p>
                </div>

                <span className="text-sm text-gray-400">
                  {tender.deadline}
                </span>
              </div>
            </div>
          </div>

          {/* Transparency Note */}
          <div className="mt-10 bg-gradient-to-r from-[#0b4f35] to-[#14754f] rounded-[30px] p-8 text-white">

            <h2 className="text-3xl font-bold mb-5">
              Public Transparency Note
            </h2>

            <p className="leading-loose text-white/90 text-lg">
              This tender information is publicly available through the Smart Panchayat Transparency Portal to ensure accountability and fair contractor participation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}