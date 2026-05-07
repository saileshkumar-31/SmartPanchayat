import { useState } from "react";

import {
  Search,
  CheckCircle2,
  XCircle,
  Clock3,
  Users,
  CalendarDays,
  MapPin,
  ClipboardCheck,
  Eye,
  MessageSquare,
} from "lucide-react";

import AdminLayout from "../../../components/admin/AdminLayout";

export default function MeetingRequests() {

  // Dynamic State
  const [requests, setRequests] = useState([
    {
      id: "MTR-1001",
      requester: "Ward 3 Residents",
      purpose: "Road Development Discussion",
      location: "Community Hall",
      date: "18 May 2026",
      participants: 48,
      priority: "High",
      status: "Pending",
    },
    {
      id: "MTR-1002",
      requester: "Water Supply Committee",
      purpose: "Water Leakage Review",
      location: "Panchayat Office",
      date: "20 May 2026",
      participants: 26,
      priority: "Medium",
      status: "Approved",
    },
    {
      id: "MTR-1003",
      requester: "Sanitation Team",
      purpose: "Waste Management Planning",
      location: "Ward 5",
      date: "22 May 2026",
      participants: 18,
      priority: "Low",
      status: "Rejected",
    },
    {
      id: "MTR-1004",
      requester: "Public Health Department",
      purpose: "Health Awareness Program",
      location: "Primary School",
      date: "25 May 2026",
      participants: 62,
      priority: "High",
      status: "Pending",
    },
  ]);

  // Dynamic Status Update
  const updateStatus = (id, newStatus) => {

    setRequests((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, status: newStatus }
          : item
      )
    );
  };

  const statusStyle = {
    Pending: "bg-orange-100 text-orange-700",
    Approved: "bg-green-100 text-green-700",
    Rejected: "bg-red-100 text-red-700",
  };

  const priorityStyle = {
    High: "bg-red-100 text-red-700",
    Medium: "bg-yellow-100 text-yellow-700",
    Low: "bg-blue-100 text-blue-700",
  };

  // Stats
  const totalRequests = requests.length;

  const approvedCount = requests.filter(
    (item) => item.status === "Approved"
  ).length;

  const pendingCount = requests.filter(
    (item) => item.status === "Pending"
  ).length;

  const rejectedCount = requests.filter(
    (item) => item.status === "Rejected"
  ).length;

  return (
    <AdminLayout>

      {/* Header */}
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6 mb-10">

        <div>

          <p className="text-green-700 font-semibold mb-2">
            Panchayat Meeting Administration
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-[#13284c]">
            Meeting Requests
          </h1>

          <p className="text-gray-500 mt-4 text-lg max-w-3xl">
            Review, approve, reject, and manage public meeting requests submitted by citizens and departments.
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
            placeholder="Search requests..."
            className="bg-transparent outline-none w-full"
          />
        </div>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6 mb-10">

        {/* Total */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex items-center justify-center mb-5">
            <ClipboardCheck size={24} />
          </div>

          <p className="text-gray-500">
            Total Requests
          </p>

          <h2 className="text-4xl font-bold text-[#13284c] mt-3">
            {totalRequests}
          </h2>
        </div>

        {/* Pending */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-orange-500 to-yellow-500 text-white flex items-center justify-center mb-5">
            <Clock3 size={24} />
          </div>

          <p className="text-gray-500">
            Pending
          </p>

          <h2 className="text-4xl font-bold text-orange-600 mt-3">
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

      {/* Table */}
      <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden">

        {/* Header */}
        <div className="px-8 py-6 border-b border-gray-100">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

            <div>

              <h2 className="text-2xl font-bold text-[#13284c]">
                Meeting Request Records
              </h2>

              <p className="text-gray-500 mt-2">
                Track and manage all incoming meeting requests.
              </p>
            </div>

            <button className="bg-[#0b4f35] hover:bg-[#083824] text-white px-6 py-3 rounded-2xl font-semibold transition">
              Export Requests
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-[#f8fafc]">

              <tr>

                <th className="text-left p-6 text-gray-500 font-semibold">
                  Request ID
                </th>

                <th className="text-left p-6 text-gray-500 font-semibold">
                  Requester
                </th>

                <th className="text-left p-6 text-gray-500 font-semibold">
                  Purpose
                </th>

                <th className="text-left p-6 text-gray-500 font-semibold">
                  Meeting Details
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

              {requests.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-100 hover:bg-[#f8fafc] transition"
                >

                  {/* ID */}
                  <td className="p-6 font-semibold text-[#13284c]">
                    {item.id}
                  </td>

                  {/* Requester */}
                  <td className="p-6 text-gray-700">
                    {item.requester}
                  </td>

                  {/* Purpose */}
                  <td className="p-6 text-gray-700">
                    {item.purpose}
                  </td>

                  {/* Details */}
                  <td className="p-6">

                    <div className="space-y-2">

                      <div className="flex items-center gap-2 text-gray-500 text-sm">

                        <CalendarDays size={16} />

                        {item.date}
                      </div>

                      <div className="flex items-center gap-2 text-gray-500 text-sm">

                        <MapPin size={16} />

                        {item.location}
                      </div>

                      <div className="flex items-center gap-2 text-gray-500 text-sm">

                        <Users size={16} />

                        {item.participants} Participants
                      </div>
                    </div>
                  </td>

                  {/* Priority */}
                  <td className="p-6">

                    <span
                      className={`px-4 py-2 rounded-full text-sm font-semibold ${priorityStyle[item.priority]}`}
                    >
                      {item.priority}
                    </span>
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
                          updateStatus(
                            item.id,
                            "Approved"
                          )
                        }
                        className="w-11 h-11 rounded-xl bg-green-100 text-green-700 flex items-center justify-center hover:scale-105 transition"
                      >
                        <CheckCircle2 size={18} />
                      </button>

                      {/* Pending */}
                      <button
                        onClick={() =>
                          updateStatus(
                            item.id,
                            "Pending"
                          )
                        }
                        className="w-11 h-11 rounded-xl bg-orange-100 text-orange-700 flex items-center justify-center hover:scale-105 transition"
                      >
                        <Clock3 size={18} />
                      </button>

                      {/* Reject */}
                      <button
                        onClick={() =>
                          updateStatus(
                            item.id,
                            "Rejected"
                          )
                        }
                        className="w-11 h-11 rounded-xl bg-red-100 text-red-700 flex items-center justify-center hover:scale-105 transition"
                      >
                        <XCircle size={18} />
                      </button>

                      {/* Discussion */}
                      <button className="w-11 h-11 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center hover:scale-105 transition">
                        <MessageSquare size={18} />
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