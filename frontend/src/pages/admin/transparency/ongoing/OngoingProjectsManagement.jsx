import { useState } from "react";

import {
  Search,
  FolderKanban,
  IndianRupee,
  CalendarDays,
  Clock3,
  Eye,
  Pencil,
  Plus,
} from "lucide-react";

import { NavLink } from "react-router-dom";

import AdminLayout from "../../../../components/admin/AdminLayout";

export default function OngoingProjectsManagement() {


  const [projects] = useState([
    {
      id: "PRJ-1001",
      name: "Road Development",
      ward: "Ward 3",
      budget: "₹12,00,000",
      deadline: "15 Dec 2026",
      progress: 72,
      status: "In Progress",
    },
    {
      id: "PRJ-1002",
      name: "Water Pipeline Upgrade",
      ward: "Ward 5",
      budget: "₹8,50,000",
      deadline: "28 Nov 2026",
      progress: 48,
      status: "In Progress",
    },
    {
      id: "PRJ-1003",
      name: "Community Hall Renovation",
      ward: "Ward 1",
      budget: "₹15,00,000",
      deadline: "10 Jan 2027",
      progress: 88,
      status: "Near Completion",
    },
  ]);

  const totalProjects = projects.length;

  return (
    <AdminLayout>

      {/* Header */}
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6 mb-10">

        <div>

          <p className="text-green-700 font-semibold mb-2">
            Transparency Administration
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-[#13284c]">
            Ongoing Projects
          </h1>

          <p className="text-gray-500 mt-4 text-lg max-w-3xl">
            Track Panchayat development projects, monitor progress,
            and manage ongoing public works transparently.
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
            placeholder="Search projects..."
            className="bg-transparent outline-none w-full"
          />
        </div>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6 mb-10">

        {/* Total Projects */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex items-center justify-center mb-5">
            <FolderKanban size={24} />
          </div>

          <p className="text-gray-500">
            Active Projects
          </p>

          <h2 className="text-4xl font-bold text-[#13284c] mt-3">
            {totalProjects}
          </h2>
        </div>

        {/* Budget */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-500 text-white flex items-center justify-center mb-5">
            <IndianRupee size={24} />
          </div>

          <p className="text-gray-500">
            Total Budget
          </p>

          <h2 className="text-3xl font-bold text-green-700 mt-3">
            ₹35.5L
          </h2>
        </div>

        {/* Average Progress */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-orange-500 to-yellow-500 text-white flex items-center justify-center mb-5">
            <Clock3 size={24} />
          </div>

          <p className="text-gray-500">
            Avg Progress
          </p>

          <h2 className="text-3xl font-bold text-orange-600 mt-3">
            69%
          </h2>
        </div>

        {/* Completion */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-500 text-white flex items-center justify-center mb-5">
            <CalendarDays size={24} />
          </div>

          <p className="text-gray-500">
            Near Completion
          </p>

          <h2 className="text-3xl font-bold text-purple-700 mt-3">
            1
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
                Project Records
              </h2>

              <p className="text-gray-500 mt-2">
                Manage ongoing Panchayat infrastructure projects.
              </p>
            </div>

            {/* Add Button */}
            <NavLink
              to="/admin/transparency/ongoingprojects-create"
              className="bg-[#0b4f35] hover:bg-[#083824] text-white px-6 py-3 rounded-2xl font-semibold transition flex items-center gap-2"
            >
              <Plus size={18} />

              Add Project
            </NavLink>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-[#f8fafc]">

              <tr>

                <th className="text-left p-6 text-gray-500 font-semibold">
                  Project ID
                </th>

                <th className="text-left p-6 text-gray-500 font-semibold">
                  Project Name
                </th>

                <th className="text-left p-6 text-gray-500 font-semibold">
                  Ward
                </th>

                <th className="text-left p-6 text-gray-500 font-semibold">
                  Budget
                </th>

                <th className="text-left p-6 text-gray-500 font-semibold">
                  Deadline
                </th>

                <th className="text-left p-6 text-gray-500 font-semibold">
                  Progress
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

              {projects.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-100 hover:bg-[#f8fafc] transition"
                >

                  {/* ID */}
                  <td className="p-6 font-semibold text-[#13284c]">
                    {item.id}
                  </td>

                  {/* Name */}
                  <td className="p-6 text-gray-700 font-medium">
                    {item.name}
                  </td>

                  {/* Ward */}
                  <td className="p-6 text-gray-700">
                    {item.ward}
                  </td>

                  {/* Budget */}
                  <td className="p-6">

                    <div className="flex items-center gap-2 text-green-700 font-medium">
                      <IndianRupee size={16} />

                      {item.budget}
                    </div>
                  </td>

                  {/* Deadline */}
                  <td className="p-6 text-gray-700">
                    {item.deadline}
                  </td>

                  {/* Progress */}
                  <td className="p-6 min-w-[220px]">

                    <div className="flex items-center justify-between mb-2">

                      <span className="text-sm text-gray-500">
                        Completion
                      </span>

                      <span className="text-sm font-semibold text-[#13284c]">
                        {item.progress}%
                      </span>
                    </div>

                    <div className="h-3 bg-gray-100 rounded-full overflow-hidden">

                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#0b4f35] to-[#2bb673]"
                        style={{
                          width: `${item.progress}%`,
                        }}
                      />
                    </div>
                  </td>

                  {/* Status */}
                  <td className="p-6">

                    <span
                      className={`px-4 py-2 rounded-full text-sm font-semibold ${
                        item.status === "Near Completion"
                          ? "bg-purple-100 text-purple-700"
                          : "bg-green-100 text-green-700"
                      }`}
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

                      {/* Edit */}
                      <NavLink
                        to="/admin/transparency/ongoingprojects-edit"
                        className="w-11 h-11 rounded-xl bg-green-100 text-green-700 flex items-center justify-center hover:scale-105 transition"
                      >
                        <Pencil size={18} />
                      </NavLink>
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