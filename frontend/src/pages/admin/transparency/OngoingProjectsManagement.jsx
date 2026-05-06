import { useState } from "react";

import {
  Search,
  Eye,
  CheckCircle2,
  Clock3,
  Plus,
  IndianRupee,
} from "lucide-react";

import AdminLayout from "../../../components/admin/AdminLayout";

export default function OngoingProjectsManagement() {

  // Dynamic State
  const [projects, setProjects] = useState([
    {
      id: "PRJ-1001",
      title: "Road Construction - Ward 3",
      budget: "₹12,00,000",
      progress: 68,
      status: "Ongoing",
    },
    {
      id: "PRJ-1002",
      title: "Drainage System Upgrade",
      budget: "₹8,50,000",
      progress: 42,
      status: "Ongoing",
    },
    {
      id: "PRJ-1003",
      title: "Water Tank Construction",
      budget: "₹15,00,000",
      progress: 90,
      status: "Near Completion",
    },
  ]);

  // Dynamic Update
  const updateStatus = (id, newStatus) => {

    setProjects((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              status: newStatus,
              progress:
                newStatus === "Completed"
                  ? 100
                  : item.progress,
            }
          : item
      )
    );
  };

  const statusStyle = {
    Ongoing: "bg-yellow-100 text-yellow-700",
    "Near Completion": "bg-blue-100 text-blue-700",
    Completed: "bg-green-100 text-green-700",
  };

  // Dynamic Stats
  const totalProjects = projects.length;

  const ongoingCount = projects.filter(
    (item) => item.status === "Ongoing"
  ).length;

  const nearCompletion = projects.filter(
    (item) => item.status === "Near Completion"
  ).length;

  const completedCount = projects.filter(
    (item) => item.status === "Completed"
  ).length;

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
            Monitor, update, and manage Panchayat development projects.
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

        {/* Total */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

          <p className="text-gray-500">
            Total Projects
          </p>

          <h2 className="text-4xl font-bold text-[#13284c] mt-3">
            {totalProjects}
          </h2>
        </div>

        {/* Ongoing */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

          <p className="text-gray-500">
            Ongoing
          </p>

          <h2 className="text-4xl font-bold text-yellow-600 mt-3">
            {ongoingCount}
          </h2>
        </div>

        {/* Near Completion */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

          <p className="text-gray-500">
            Near Completion
          </p>

          <h2 className="text-4xl font-bold text-blue-600 mt-3">
            {nearCompletion}
          </h2>
        </div>

        {/* Completed */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

          <p className="text-gray-500">
            Completed
          </p>

          <h2 className="text-4xl font-bold text-green-600 mt-3">
            {completedCount}
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
                Project Records
              </h2>

              <p className="text-gray-500 mt-2">
                Manage ongoing development works and progress tracking.
              </p>
            </div>

            <button className="bg-[#0b4f35] hover:bg-[#083824] text-white px-6 py-3 rounded-2xl font-semibold transition flex items-center gap-2">
              <Plus size={18} />
              Add Project
            </button>
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
                  Budget
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
                  <td className="p-6 text-gray-700">
                    {item.title}
                  </td>

                  {/* Budget */}
                  <td className="p-6">

                    <div className="flex items-center gap-2 font-medium text-gray-700">
                      <IndianRupee size={16} />
                      {item.budget}
                    </div>
                  </td>

                  {/* Progress */}
                  <td className="p-6 min-w-[220px]">

                    <div>

                      <div className="flex items-center justify-between mb-2">

                        <span className="text-sm text-gray-500">
                          Progress
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

                  {/* Actions */}
                  <td className="p-6">

                    <div className="flex items-center gap-3">

                      {/* View */}
                      <button className="w-11 h-11 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center hover:scale-105 transition">
                        <Eye size={18} />
                      </button>

                      {/* Ongoing */}
                      <button
                        onClick={() =>
                          updateStatus(item.id, "Ongoing")
                        }
                        className="w-11 h-11 rounded-xl bg-yellow-100 text-yellow-700 flex items-center justify-center hover:scale-105 transition"
                      >
                        <Clock3 size={18} />
                      </button>

                      {/* Completed */}
                      <button
                        onClick={() =>
                          updateStatus(item.id, "Completed")
                        }
                        className="w-11 h-11 rounded-xl bg-green-100 text-green-700 flex items-center justify-center hover:scale-105 transition"
                      >
                        <CheckCircle2 size={18} />
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