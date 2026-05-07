import { useState } from "react";

import {
  Search,
  Eye,
  CheckCircle2,
  Clock3,
  AlertTriangle,
  MapPin,
  MessageSquareWarning,
  XCircle,
} from "lucide-react";

import AdminLayout from "../../components/admin/AdminLayout";

export default function ComplaintsManagement() {

  // Dynamic State
  const [complaints, setComplaints] = useState([
    {
      id: "CMP-1001",
      citizen: "Sailesh Kumar",
      issue: "Streetlight Not Working",
      location: "Ward 3",
      date: "14 May 2026",
      priority: "High",
      status: "Pending",
    },
    {
      id: "CMP-1002",
      citizen: "Arun Kumar",
      issue: "Water Leakage",
      location: "Ward 1",
      date: "13 May 2026",
      priority: "Medium",
      status: "In Progress",
    },
    {
      id: "CMP-1003",
      citizen: "Priya",
      issue: "Garbage Collection Delay",
      location: "Ward 5",
      date: "12 May 2026",
      priority: "Low",
      status: "Resolved",
    },
    {
      id: "CMP-1004",
      citizen: "Kavin",
      issue: "Road Damage",
      location: "Ward 2",
      date: "11 May 2026",
      priority: "High",
      status: "Rejected",
    },
  ]);

  // Dynamic Status Update
  const updateStatus = (id, newStatus) => {

    setComplaints((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, status: newStatus }
          : item
      )
    );
  };

  // Dynamic Priority Update
  const updatePriority = (id, newPriority) => {

    setComplaints((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, priority: newPriority }
          : item
      )
    );
  };

  const statusStyle = {
    Pending: "bg-red-100 text-red-700",
    "In Progress": "bg-yellow-100 text-yellow-700",
    Resolved: "bg-green-100 text-green-700",
    Rejected: "bg-gray-200 text-gray-700",
  };

  const priorityStyle = {
    High: "bg-red-100 text-red-700",
    Medium: "bg-orange-100 text-orange-700",
    Low: "bg-blue-100 text-blue-700",
  };

  // Dynamic Stats
  const totalComplaints = complaints.length;

  const pendingCount = complaints.filter(
    (item) => item.status === "Pending"
  ).length;

  const progressCount = complaints.filter(
    (item) => item.status === "In Progress"
  ).length;

  const resolvedCount = complaints.filter(
    (item) => item.status === "Resolved"
  ).length;

  const rejectedCount = complaints.filter(
    (item) => item.status === "Rejected"
  ).length;

  return (
    <AdminLayout>

      {/* Header */}
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6 mb-10">

        <div>

          <p className="text-green-700 font-semibold mb-2">
            Public Issue Monitoring
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-[#13284c]">
            Complaints Management
          </h1>

          <p className="text-gray-500 mt-4 text-lg max-w-3xl">
            Monitor and resolve citizen complaints efficiently through the Smart Panchayat system.
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
            placeholder="Search complaints..."
            className="bg-transparent outline-none w-full"
          />
        </div>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-5 gap-6 mb-10">

        {/* Total */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex items-center justify-center mb-5">
            <MessageSquareWarning size={24} />
          </div>

          <p className="text-gray-500">
            Total Complaints
          </p>

          <h2 className="text-4xl font-bold text-[#13284c] mt-3">
            {totalComplaints}
          </h2>
        </div>

        {/* Pending */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-red-500 to-pink-500 text-white flex items-center justify-center mb-5">
            <AlertTriangle size={24} />
          </div>

          <p className="text-gray-500">
            Pending
          </p>

          <h2 className="text-4xl font-bold text-red-600 mt-3">
            {pendingCount}
          </h2>
        </div>

        {/* Progress */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 text-white flex items-center justify-center mb-5">
            <Clock3 size={24} />
          </div>

          <p className="text-gray-500">
            In Progress
          </p>

          <h2 className="text-4xl font-bold text-yellow-600 mt-3">
            {progressCount}
          </h2>
        </div>

        {/* Resolved */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-500 text-white flex items-center justify-center mb-5">
            <CheckCircle2 size={24} />
          </div>

          <p className="text-gray-500">
            Resolved
          </p>

          <h2 className="text-4xl font-bold text-green-600 mt-3">
            {resolvedCount}
          </h2>
        </div>

        {/* Rejected */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-gray-600 to-gray-400 text-white flex items-center justify-center mb-5">
            <XCircle size={24} />
          </div>

          <p className="text-gray-500">
            Rejected
          </p>

          <h2 className="text-4xl font-bold text-gray-700 mt-3">
            {rejectedCount}
          </h2>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden">

        {/* Table Header */}
        <div className="px-8 py-6 border-b border-gray-100">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

            <div>

              <h2 className="text-2xl font-bold text-[#13284c]">
                Complaint Records
              </h2>

              <p className="text-gray-500 mt-2">
                Review and manage public issue reports submitted by citizens.
              </p>
            </div>

            <button className="bg-[#0b4f35] hover:bg-[#083824] text-white px-6 py-3 rounded-2xl font-semibold transition">
              Export Complaints
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-[#f8fafc]">

              <tr>

                <th className="text-left p-6 text-gray-500 font-semibold">
                  Complaint ID
                </th>

                <th className="text-left p-6 text-gray-500 font-semibold">
                  Citizen
                </th>

                <th className="text-left p-6 text-gray-500 font-semibold">
                  Issue
                </th>

                <th className="text-left p-6 text-gray-500 font-semibold">
                  Location
                </th>

                <th className="text-left p-6 text-gray-500 font-semibold">
                  Priority
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

              {complaints.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-100 hover:bg-[#f8fafc] transition"
                >

                  {/* ID */}
                  <td className="p-6 font-semibold text-[#13284c]">
                    {item.id}
                  </td>

                  {/* Citizen */}
                  <td className="p-6 text-gray-700">
                    {item.citizen}
                  </td>

                  {/* Issue */}
                  <td className="p-6 text-gray-700">
                    {item.issue}
                  </td>

                  {/* Location */}
                  <td className="p-6">

                    <div className="flex items-center gap-2 text-gray-500">
                      <MapPin size={16} />

                      {item.location}
                    </div>
                  </td>

                  {/* Editable Priority */}
                  <td className="p-6">

                    <select
                      value={item.priority}
                      onChange={(e) =>
                        updatePriority(
                          item.id,
                          e.target.value
                        )
                      }
                      className={`px-4 py-2 rounded-full text-sm font-semibold outline-none border-0 ${priorityStyle[item.priority]}`}
                    >

                      <option value="High">
                        High
                      </option>

                      <option value="Medium">
                        Medium
                      </option>

                      <option value="Low">
                        Low
                      </option>
                    </select>
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

                      {/* Pending */}
                      <button
                        onClick={() =>
                          updateStatus(
                            item.id,
                            "Pending"
                          )
                        }
                        className="w-11 h-11 rounded-xl bg-red-100 text-red-700 flex items-center justify-center hover:scale-105 transition"
                      >
                        <AlertTriangle size={18} />
                      </button>

                      {/* Approve / In Progress */}
                      <button
                        onClick={() =>
                          updateStatus(
                            item.id,
                            "In Progress"
                          )
                        }
                        className="w-11 h-11 rounded-xl bg-yellow-100 text-yellow-700 flex items-center justify-center hover:scale-105 transition"
                      >
                        <Clock3 size={18} />
                      </button>

                      {/* Resolve */}
                      <button
                        onClick={() =>
                          updateStatus(
                            item.id,
                            "Resolved"
                          )
                        }
                        className="w-11 h-11 rounded-xl bg-green-100 text-green-700 flex items-center justify-center hover:scale-105 transition"
                      >
                        <CheckCircle2 size={18} />
                      </button>

                      {/* Reject */}
                      <button
                        onClick={() =>
                          updateStatus(
                            item.id,
                            "Rejected"
                          )
                        }
                        className="w-11 h-11 rounded-xl bg-gray-200 text-gray-700 flex items-center justify-center hover:scale-105 transition"
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