import {
  ArrowLeft,
  CalendarDays,
  CircleCheckBig,
  Building2,
  Download,
  IndianRupee,
  MapPin,
  FileText,
} from "lucide-react";

import { NavLink } from "react-router-dom";

export default function CompletedProjectDetails() {

  // Static for now
  const project = {
    title: "Community Hall Construction",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2",
    projectId: "CP-001",
    budget: "₹12,00,000",
    completedOn: "12 Mar 2024",
    contractor: "ABC Builders",
    location: "Ward 2",
    description:
      "Modern community hall constructed for public meetings, cultural events, and village gatherings.",
    fullDescription:
      "The Panchayat successfully completed the Community Hall Construction project under the Rural Infrastructure Development initiative. The facility includes a large meeting hall, stage area, lighting system, public seating arrangements, washrooms, and accessibility infrastructure for village residents.",
  };

  return (
    <div className="min-h-screen bg-[#f5f7f9] p-6 md:p-10">

      {/* Back */}
      <NavLink
        to="/transparency/completed-projects"
        className="inline-flex items-center gap-2 text-[#0b4f35] font-semibold mb-8 hover:underline"
      >
        <ArrowLeft size={18} />
        Back to Completed Projects
      </NavLink>

      {/* Main Card */}
      <div className="bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-sm">

        {/* Image */}
        <div className="h-[320px] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-8 md:p-10">

          {/* Top */}
          <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-8">

            {/* Left */}
            <div>

              <div className="flex flex-wrap items-center gap-4 mb-5">

                <span className="px-4 py-2 rounded-full bg-[#edf7f2] text-[#0b4f35] text-sm font-semibold">
                  Completed Project
                </span>

                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <CalendarDays size={16} />
                  {project.completedOn}
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                {project.title}
              </h1>

              <p className="text-lg text-gray-500 mt-5 leading-loose max-w-4xl">
                {project.description}
              </p>
            </div>

            {/* Download */}
            <button className="h-14 px-6 flex items-center justify-center gap-3 rounded-2xl border border-gray-200 hover:bg-gray-50 transition font-semibold">
              <Download size={20} />
              Download Report
            </button>
          </div>

          {/* Info Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">

            <div className="bg-[#f8faf9] rounded-3xl p-6 border border-gray-100">

              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-5">
                <FileText
                  className="text-[#0b4f35]"
                  size={22}
                />
              </div>

              <p className="text-sm text-gray-400 mb-2">
                Project ID
              </p>

              <h3 className="text-xl font-bold text-gray-800">
                {project.projectId}
              </h3>
            </div>

            <div className="bg-[#f8faf9] rounded-3xl p-6 border border-gray-100">

              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-5">
                <IndianRupee
                  className="text-[#0b4f35]"
                  size={22}
                />
              </div>

              <p className="text-sm text-gray-400 mb-2">
                Budget
              </p>

              <h3 className="text-xl font-bold text-gray-800">
                {project.budget}
              </h3>
            </div>

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
                {project.contractor}
              </h3>
            </div>

            <div className="bg-[#f8faf9] rounded-3xl p-6 border border-gray-100">

              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-5">
                <MapPin
                  className="text-[#0b4f35]"
                  size={22}
                />
              </div>

              <p className="text-sm text-gray-400 mb-2">
                Location
              </p>

              <h3 className="text-xl font-bold text-gray-800">
                {project.location}
              </h3>
            </div>
          </div>

          {/* Detailed Section */}
          <div className="mt-10 bg-[#f8faf9] rounded-[30px] p-8 border border-gray-100">

            <div className="flex items-center gap-3 mb-6">

              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center">
                <CircleCheckBig
                  className="text-[#0b4f35]"
                  size={22}
                />
              </div>

              <h2 className="text-3xl font-bold text-gray-800">
                Completion Summary
              </h2>
            </div>

            <p className="text-lg text-gray-600 leading-loose">
              {project.fullDescription}
            </p>
          </div>

          {/* Completion Status */}
          <div className="mt-10">

            <div className="flex items-center justify-between mb-3">

              <h3 className="text-xl font-bold text-gray-800">
                Completion Status
              </h3>

              <span className="text-[#0b4f35] font-bold">
                100%
              </span>
            </div>

            <div className="w-full bg-gray-100 rounded-full h-4 overflow-hidden">

              <div className="bg-[#0b4f35] h-full w-full rounded-full" />

            </div>
          </div>

          {/* Transparency Note */}
          <div className="mt-10 bg-gradient-to-r from-[#0b4f35] to-[#14754f] rounded-[30px] p-8 text-white">

            <h2 className="text-3xl font-bold mb-5">
              Transparency Note
            </h2>

            <p className="leading-loose text-white/90 text-lg">
              This completed project has been officially documented in the Smart Panchayat Transparency Portal for public access and accountability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}