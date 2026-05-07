import { useEffect, useState } from "react";

import {
  Search,
  Eye,
  CheckCircle2,
  XCircle,
  FileBadge,
  CalendarDays,
} from "lucide-react";

import AdminLayout from "../../components/admin/AdminLayout";
import { api } from "../../lib/api";

export default function ApplicationsManagement() {

  // Dynamic State
  const [applications, setApplications] = useState([]);

  const loadApplications = async () => {
    const res = await api.get("/applications");
    setApplications(
      res.data.map((item) => ({
        id: item.application_id,
        reference: item.reference_no,
        name: item.applicant_name,
        type: item.service_name,
        date: new Date(item.created_at).toLocaleDateString(),
        status: item.status,
      }))
    );
  };

  useEffect(() => {
    loadApplications().catch((error) => alert(error.message));
  }, []);

  // Update Status
  const updateStatus = async (id, newStatus) => {
    await api.patch(`/applications/${id}`, { status: newStatus });
    await loadApplications();
  };

  const statusStyle = {
    Submitted: "bg-yellow-100 text-yellow-700",
    Pending: "bg-yellow-100 text-yellow-700",
    Approved: "bg-green-100 text-green-700",
    Rejected: "bg-red-100 text-red-700",
  };

  // Dynamic Stats
  const totalApplications = applications.length;

  const pendingCount = applications.filter((item) =>
    ["Submitted", "Pending"].includes(item.status)
  ).length;

  const approvedCount = applications.filter(
    (item) => item.status === "Approved"
  ).length;

  const rejectedCount = applications.filter(
    (item) => item.status === "Rejected"
  ).length;

  return (
    <AdminLayout>

      {/* Header */}
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6 mb-10">

        <div>

          <p className="text-green-700 font-semibold mb-2">
            Certificate Verification System
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-[#13284c]">
            Certificate Applications
          </h1>

          <p className="text-gray-500 mt-4 text-lg max-w-3xl">
            Review and verify certificate applications submitted through the Smart Panchayat portal.
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
            placeholder="Search certificates..."
            className="bg-transparent outline-none w-full"
          />
        </div>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6 mb-10">

        {/* Total */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex items-center justify-center mb-5">
            <FileBadge size={24} />
          </div>

          <p className="text-gray-500">
            Total Applications
          </p>

          <h2 className="text-4xl font-bold text-[#13284c] mt-3">
            {totalApplications}
          </h2>
        </div>

        {/* Pending */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 text-white flex items-center justify-center mb-5">
            <CalendarDays size={24} />
          </div>

          <p className="text-gray-500">
            Pending Review
          </p>

          <h2 className="text-4xl font-bold text-yellow-600 mt-3">
            {pendingCount}
          </h2>
        </div>

        {/* Approved */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-500 text-white flex items-center justify-center mb-5">
            <CheckCircle2 size={24} />
          </div>

          <p className="text-gray-500">
            Approved
          </p>

          <h2 className="text-4xl font-bold text-green-600 mt-3">
            {approvedCount}
          </h2>
        </div>

        {/* Rejected */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-red-500 to-pink-500 text-white flex items-center justify-center mb-5">
            <XCircle size={24} />
          </div>

          <p className="text-gray-500">
            Rejected
          </p>

          <h2 className="text-4xl font-bold text-red-600 mt-3">
            {rejectedCount}
          </h2>
        </div>
      </div>

      {/* Main Table */}
      <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden">

        {/* Table Header */}
        <div className="px-8 py-6 border-b border-gray-100">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

            <div>

              <h2 className="text-2xl font-bold text-[#13284c]">
                Certificate Requests
              </h2>

              <p className="text-gray-500 mt-2">
                Manage and verify citizen certificate applications.
              </p>
            </div>

            <button className="bg-[#0b4f35] hover:bg-[#0a442e] text-white px-6 py-3 rounded-2xl font-semibold transition">
              Export Records
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-[#f8fafc]">

              <tr>

                <th className="text-left p-6 text-gray-500 font-semibold">
                  Application ID
                </th>

                <th className="text-left p-6 text-gray-500 font-semibold">
                  Citizen Name
                </th>

                <th className="text-left p-6 text-gray-500 font-semibold">
                  Certificate Type
                </th>

                <th className="text-left p-6 text-gray-500 font-semibold">
                  Applied Date
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

              {applications.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-100 hover:bg-[#f8fafc] transition"
                >

                  {/* ID */}
                  <td className="p-6 font-semibold text-[#13284c]">
                    {item.reference}
                  </td>

                  {/* Name */}
                  <td className="p-6 text-gray-700">
                    {item.name}
                  </td>

                  {/* Certificate */}
                  <td className="p-6 text-gray-700">
                    {item.type}
                  </td>

                  {/* Date */}
                  <td className="p-6 text-gray-500">
                    {item.date}
                  </td>

                  {/* Status */}
                  <td className="p-6">

                    <span
                      className={`px-4 py-2 rounded-full text-sm font-semibold ${statusStyle[item.status]}`}
                    >
                      {item.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="p-6">

                    <div className="flex items-center gap-3">

                      {/* View */}
                      <button className="w-11 h-11 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center hover:scale-105 transition">
                        <Eye size={18} />
                      </button>

                      {/* Approve */}
                      <button
                        onClick={() =>
                          updateStatus(item.id, "Approved")
                        }
                        className="w-11 h-11 rounded-xl bg-green-100 text-green-700 flex items-center justify-center hover:scale-105 transition"
                      >
                        <CheckCircle2 size={18} />
                      </button>

                      {/* Reject */}
                      <button
                        onClick={() =>
                          updateStatus(item.id, "Rejected")
                        }
                        className="w-11 h-11 rounded-xl bg-red-100 text-red-700 flex items-center justify-center hover:scale-105 transition"
                      >
                        <XCircle size={18} />
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
