import { useState } from "react";

import {
  Search,
  FileSpreadsheet,
  BarChart3,
  IndianRupee,
  Eye,
  Download,
  CalendarDays,
  PieChart,
  TrendingUp,
  FileText,
  Plus,
  Pencil,
  Trash2,
} from "lucide-react";

import { NavLink } from "react-router-dom";

import AdminLayout from "../../../components/admin/AdminLayout";

export default function TransparencyReports() {

  // Dynamic State
  const [reports] = useState([
    {
      id: "RPT-1001",
      title: "Quarterly Financial Report",
      category: "Finance",
      generated: "14 May 2026",
      status: "Published",
      downloads: 1280,
    },
    {
      id: "RPT-1002",
      title: "Road Development Analysis",
      category: "Infrastructure",
      generated: "11 May 2026",
      status: "Published",
      downloads: 860,
    },
    {
      id: "RPT-1003",
      title: "Water Supply Audit",
      category: "Water Supply",
      generated: "08 May 2026",
      status: "Draft",
      downloads: 210,
    },
  ]);

  // Dynamic Stats
  const totalReports = reports.length;

  const publishedReports = reports.filter(
    (item) => item.status === "Published"
  ).length;

  const draftReports = reports.filter(
    (item) => item.status === "Draft"
  ).length;

  const totalDownloads = reports.reduce(
    (acc, item) => acc + item.downloads,
    0
  );

  const statusStyle = {
    Published:
      "bg-green-100 text-green-700",

    Draft:
      "bg-orange-100 text-orange-700",
  };

  return (
    <AdminLayout>

      {/* Header */}
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6 mb-10">

        <div>

          <p className="text-green-700 font-semibold mb-2">
            Transparency Administration
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-[#13284c]">
            Transparency Reports
          </h1>

          <p className="text-gray-500 mt-4 text-lg max-w-3xl">
            Generate, manage, and publish Panchayat transparency reports,
            financial summaries, audits, and public accountability documents.
          </p>
        </div>

        {/* Search */}
        <div className="bg-white rounded-2xl border border-gray-100 px-5 h-14 flex items-center gap-3 shadow-sm min-w-[320px]">

          <Search
            className="text-gray-400"
            size={20}
          />

          <input
            type="text"
            placeholder="Search reports..."
            className="bg-transparent outline-none w-full"
          />
        </div>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6 mb-10">

        {/* Total Reports */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex items-center justify-center mb-5">

            <FileSpreadsheet size={24} />
          </div>

          <p className="text-gray-500">
            Total Reports
          </p>

          <h2 className="text-4xl font-bold text-[#13284c] mt-3">
            {totalReports}
          </h2>
        </div>

        {/* Published */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-500 text-white flex items-center justify-center mb-5">

            <BarChart3 size={24} />
          </div>

          <p className="text-gray-500">
            Published
          </p>

          <h2 className="text-4xl font-bold text-green-700 mt-3">
            {publishedReports}
          </h2>
        </div>

        {/* Draft */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-orange-500 to-yellow-500 text-white flex items-center justify-center mb-5">

            <FileText size={24} />
          </div>

          <p className="text-gray-500">
            Draft Reports
          </p>

          <h2 className="text-4xl font-bold text-orange-600 mt-3">
            {draftReports}
          </h2>
        </div>

        {/* Downloads */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-500 text-white flex items-center justify-center mb-5">

            <Download size={24} />
          </div>

          <p className="text-gray-500">
            Total Downloads
          </p>

          <h2 className="text-4xl font-bold text-purple-700 mt-3">
            {totalDownloads}
          </h2>
        </div>
      </div>

      {/* Analytics Cards */}
      <div className="grid lg:grid-cols-3 gap-6 mb-10">

        {/* Financial */}
        <div className="bg-gradient-to-r from-[#0b4f35] to-[#2bb673] rounded-[32px] p-8 text-white shadow-xl">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-white/80">
                Financial Transparency
              </p>

              <h2 className="text-4xl font-bold mt-4">
                ₹48.5L
              </h2>
            </div>

            <div className="w-16 h-16 rounded-3xl bg-white/20 flex items-center justify-center">

              <IndianRupee size={30} />
            </div>
          </div>

          <div className="mt-8 flex items-center gap-2 text-white/80">

            <TrendingUp size={18} />

            12% increase from last quarter
          </div>
        </div>

        {/* Audit */}
        <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm p-8">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-gray-500">
                Audit Coverage
              </p>

              <h2 className="text-4xl font-bold text-[#13284c] mt-4">
                92%
              </h2>
            </div>

            <div className="w-16 h-16 rounded-3xl bg-purple-100 text-purple-700 flex items-center justify-center">

              <PieChart size={30} />
            </div>
          </div>

          <p className="text-gray-500 mt-8">
            Public expenditure records verified and published.
          </p>
        </div>

        {/* Public Views */}
        <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm p-8">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-gray-500">
                Public Engagement
              </p>

              <h2 className="text-4xl font-bold text-[#13284c] mt-4">
                8.2K
              </h2>
            </div>

            <div className="w-16 h-16 rounded-3xl bg-blue-100 text-blue-700 flex items-center justify-center">

              <Eye size={30} />
            </div>
          </div>

          <p className="text-gray-500 mt-8">
            Citizens viewed transparency reports this month.
          </p>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden">

        {/* Table Header */}
        <div className="px-8 py-6 border-b border-gray-100">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

            <div>

              <h2 className="text-2xl font-bold text-[#13284c]">
                Public Transparency Reports
              </h2>

              <p className="text-gray-500 mt-2">
                Manage financial reports, audits, and public accountability documents.
              </p>
            </div>

            {/* Add Report */}
            <NavLink
              to="/admin/transparency/reports-add"
              className="bg-[#0b4f35] hover:bg-[#083824] text-white px-6 py-3 rounded-2xl font-semibold transition flex items-center gap-2"
            >

              <Plus size={18} />

              Add Report
            </NavLink>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-[#f8fafc]">

              <tr>

                <th className="text-left p-6 text-gray-500 font-semibold">
                  Report ID
                </th>

                <th className="text-left p-6 text-gray-500 font-semibold">
                  Report Title
                </th>

                <th className="text-left p-6 text-gray-500 font-semibold">
                  Category
                </th>

                <th className="text-left p-6 text-gray-500 font-semibold">
                  Generated Date
                </th>

                <th className="text-left p-6 text-gray-500 font-semibold">
                  Status
                </th>

                <th className="text-left p-6 text-gray-500 font-semibold">
                  Downloads
                </th>

                <th className="text-left p-6 text-gray-500 font-semibold">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>

              {reports.map((item, index) => (

                <tr
                  key={index}
                  className="border-b border-gray-100 hover:bg-[#f8fafc] transition"
                >

                  {/* ID */}
                  <td className="p-6 font-semibold text-[#13284c]">
                    {item.id}
                  </td>

                  {/* Title */}
                  <td className="p-6 text-gray-700 font-medium">
                    {item.title}
                  </td>

                  {/* Category */}
                  <td className="p-6">

                    <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">

                      {item.category}
                    </span>
                  </td>

                  {/* Date */}
                  <td className="p-6">

                    <div className="flex items-center gap-2 text-gray-500">

                      <CalendarDays size={16} />

                      {item.generated}
                    </div>
                  </td>

                  {/* Status */}
                  <td className="p-6">

                    <span
                      className={`px-4 py-2 rounded-full text-sm font-semibold ${statusStyle[item.status]}`}
                    >
                      {item.status}
                    </span>
                  </td>

                  {/* Downloads */}
                  <td className="p-6">

                    <div className="font-bold text-purple-700">
                      {item.downloads}
                    </div>
                  </td>

                  {/* Actions */}
                  <td className="p-6">

                    <div className="flex items-center gap-3">

                      {/* Download */}
                      <button className="w-11 h-11 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center hover:scale-105 transition">

                        <Download size={18} />
                      </button>

                      {/* Edit */}
                      <NavLink
                        to="/admin/transparency/reports-edit"
                        className="w-11 h-11 rounded-xl bg-green-100 text-green-700 flex items-center justify-center hover:scale-105 transition"
                      >

                        <Pencil size={18} />
                      </NavLink>

                      {/* Delete */}
                      <button className="w-11 h-11 rounded-xl bg-red-100 text-red-700 flex items-center justify-center hover:scale-105 transition">

                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}