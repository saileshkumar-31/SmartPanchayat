import { useState } from "react";

import {
  BarChart3,
  TrendingUp,
  Users,
  FileText,
  AlertTriangle,
  CircleDollarSign,
  CalendarDays,
  Download,
} from "lucide-react";

import AdminLayout from "../../components/admin/AdminLayout";

export default function ReportsAnalytics() {

  // Dynamic State
  const [reports, setReports] = useState([
    {
      id: "RPT-1001",
      title: "Monthly Complaint Analysis",
      category: "Complaints",
      generated: "15 May 2026",
      status: "Generated",
    },
    {
      id: "RPT-1002",
      title: "Certificate Approval Report",
      category: "Certificates",
      generated: "14 May 2026",
      status: "Generated",
    },
    {
      id: "RPT-1003",
      title: "Transparency Budget Report",
      category: "Finance",
      generated: "13 May 2026",
      status: "Pending",
    },
  ]);

  // Dynamic Generate
  const generateReport = (id) => {

    setReports((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, status: "Generated" }
          : item
      )
    );
  };

  const statusStyle = {
    Generated: "bg-green-100 text-green-700",
    Pending: "bg-yellow-100 text-yellow-700",
  };

  // Dynamic Stats
  const totalReports = reports.length;

  const generatedCount = reports.filter(
    (item) => item.status === "Generated"
  ).length;

  const pendingCount = reports.filter(
    (item) => item.status === "Pending"
  ).length;

  return (
    <AdminLayout>

      {/* Header */}
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6 mb-10">

        <div>

          <p className="text-green-700 font-semibold mb-2">
            Panchayat Insights & Analytics
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-[#13284c]">
            Reports & Analytics
          </h1>

          <p className="text-gray-500 mt-4 text-lg max-w-3xl">
            Analyze Panchayat operations, citizen services, applications, and public transparency metrics.
          </p>
        </div>

        <button className="bg-[#0b4f35] hover:bg-[#083824] text-white px-6 py-4 rounded-2xl font-semibold shadow-lg transition flex items-center gap-3 w-fit">
          <Download size={20} />
          Export Analytics
        </button>
      </div>

      {/* Analytics Cards */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">

        {/* Reports */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex items-center justify-center mb-5">
            <BarChart3 size={24} />
          </div>

          <p className="text-gray-500">
            Total Reports
          </p>

          <h2 className="text-4xl font-bold text-[#13284c] mt-3">
            {totalReports}
          </h2>
        </div>

        {/* Generated */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-500 text-white flex items-center justify-center mb-5">
            <TrendingUp size={24} />
          </div>

          <p className="text-gray-500">
            Generated Reports
          </p>

          <h2 className="text-4xl font-bold text-green-600 mt-3">
            {generatedCount}
          </h2>
        </div>

        {/* Pending */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 text-white flex items-center justify-center mb-5">
            <CalendarDays size={24} />
          </div>

          <p className="text-gray-500">
            Pending Reports
          </p>

          <h2 className="text-4xl font-bold text-yellow-600 mt-3">
            {pendingCount}
          </h2>
        </div>

        {/* Revenue */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-500 text-white flex items-center justify-center mb-5">
            <CircleDollarSign size={24} />
          </div>

          <p className="text-gray-500">
            Total Budget Tracked
          </p>

          <h2 className="text-3xl font-bold text-purple-700 mt-3">
            ₹39.7L
          </h2>
        </div>
      </div>

      {/* Dashboard Analytics */}
      <div className="grid xl:grid-cols-3 gap-8 mb-10">

        {/* Applications */}
        <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm">

          <div className="flex items-center gap-3 mb-8">

            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center">
              <FileText size={22} />
            </div>

            <h2 className="text-2xl font-bold text-[#13284c]">
              Applications
            </h2>
          </div>

          <div className="space-y-5">

            <div>
              <div className="flex items-center justify-between mb-2">

                <span className="text-gray-500">
                  Approved
                </span>

                <span className="font-semibold text-green-700">
                  72%
                </span>
              </div>

              <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full w-[72%] bg-green-500 rounded-full" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">

                <span className="text-gray-500">
                  Pending
                </span>

                <span className="font-semibold text-yellow-700">
                  20%
                </span>
              </div>

              <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full w-[20%] bg-yellow-500 rounded-full" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">

                <span className="text-gray-500">
                  Rejected
                </span>

                <span className="font-semibold text-red-700">
                  8%
                </span>
              </div>

              <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full w-[8%] bg-red-500 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Complaints */}
        <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm">

          <div className="flex items-center gap-3 mb-8">

            <div className="w-12 h-12 rounded-2xl bg-red-100 text-red-700 flex items-center justify-center">
              <AlertTriangle size={22} />
            </div>

            <h2 className="text-2xl font-bold text-[#13284c]">
              Complaints
            </h2>
          </div>

          <div className="space-y-5">

            <div>
              <div className="flex items-center justify-between mb-2">

                <span className="text-gray-500">
                  Resolved
                </span>

                <span className="font-semibold text-green-700">
                  82%
                </span>
              </div>

              <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full w-[82%] bg-green-500 rounded-full" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">

                <span className="text-gray-500">
                  In Progress
                </span>

                <span className="font-semibold text-yellow-700">
                  12%
                </span>
              </div>

              <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full w-[12%] bg-yellow-500 rounded-full" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">

                <span className="text-gray-500">
                  Pending
                </span>

                <span className="font-semibold text-red-700">
                  6%
                </span>
              </div>

              <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full w-[6%] bg-red-500 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Citizens */}
        <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm">

          <div className="flex items-center gap-3 mb-8">

            <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center">
              <Users size={22} />
            </div>

            <h2 className="text-2xl font-bold text-[#13284c]">
              Citizens
            </h2>
          </div>

          <div className="space-y-6">

            <div className="bg-[#f8fafc] rounded-2xl p-5 border border-gray-100">

              <p className="text-gray-500">
                Registered Users
              </p>

              <h3 className="text-3xl font-bold text-[#13284c] mt-3">
                1,204
              </h3>
            </div>

            <div className="bg-[#f8fafc] rounded-2xl p-5 border border-gray-100">

              <p className="text-gray-500">
                Active Citizens
              </p>

              <h3 className="text-3xl font-bold text-green-700 mt-3">
                1,078
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Reports Table */}
      <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden">

        {/* Header */}
        <div className="px-8 py-6 border-b border-gray-100">

          <h2 className="text-2xl font-bold text-[#13284c]">
            Generated Reports
          </h2>
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
                  Report Name
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

                  <td className="p-6 font-semibold text-[#13284c]">
                    {item.id}
                  </td>

                  <td className="p-6 text-gray-700">
                    {item.title}
                  </td>

                  <td className="p-6 text-gray-700">
                    {item.category}
                  </td>

                  <td className="p-6 text-gray-500">
                    {item.generated}
                  </td>

                  <td className="p-6">

                    <span
                      className={`px-4 py-2 rounded-full text-sm font-semibold ${statusStyle[item.status]}`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td className="p-6">

                    <div className="flex items-center gap-3">

                      {/* Generate */}
                      <button
                        onClick={() =>
                          generateReport(item.id)
                        }
                        className="px-4 py-2 rounded-xl bg-green-100 text-green-700 font-medium hover:scale-105 transition"
                      >
                        Generate
                      </button>

                      {/* Download */}
                      <button className="px-4 py-2 rounded-xl bg-blue-100 text-blue-700 font-medium hover:scale-105 transition">
                        Download
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