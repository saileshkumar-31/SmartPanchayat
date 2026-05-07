import { useState } from "react";

import {
  Search,
  Eye,
  BadgeCheck,
  CalendarDays,
  IndianRupee,
  Download,
  Plus,
} from "lucide-react";

import AdminLayout from "../../../../components/admin/AdminLayout";

export default function CompletedProjectsManagement() {

  // Dynamic State
  const [projects] = useState([
    {
      id: "CP-1001",
      title: "Streetlight Installation",
      completedDate: "14 May 2026",
      budget: "₹4,50,000",
      ward: "Ward 3",
    },
    {
      id: "CP-1002",
      title: "Village Water Pipeline",
      completedDate: "10 May 2026",
      budget: "₹12,00,000",
      ward: "Ward 1",
    },
    {
      id: "CP-1003",
      title: "Community Hall Renovation",
      completedDate: "04 May 2026",
      budget: "₹9,20,000",
      ward: "Ward 5",
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
            Completed Projects
          </h1>

          <p className="text-gray-500 mt-4 text-lg max-w-3xl">
            Review completed Panchayat development works and public infrastructure projects.
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
            placeholder="Search completed projects..."
            className="bg-transparent outline-none w-full"
          />
        </div>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">

        {/* Total */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

          <p className="text-gray-500">
            Total Completed
          </p>

          <h2 className="text-4xl font-bold text-[#13284c] mt-3">
            {totalProjects}
          </h2>
        </div>

        {/* Budget */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

          <p className="text-gray-500">
            Total Budget Utilized
          </p>

          <h2 className="text-4xl font-bold text-green-700 mt-3">
            ₹25.7L
          </h2>
        </div>

        {/* Completion */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

          <p className="text-gray-500">
            Completion Rate
          </p>

          <h2 className="text-4xl font-bold text-blue-700 mt-3">
            94%
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
                Completed Project Records
              </h2>

              <p className="text-gray-500 mt-2">
                Archive and monitor finished Panchayat projects.
              </p>
            </div>

            
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
                  Completed Date
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

                  {/* Ward */}
                  <td className="p-6 text-gray-600">
                    {item.ward}
                  </td>

                  {/* Budget */}
                  <td className="p-6">

                    <div className="flex items-center gap-2 font-medium text-gray-700">
                      <IndianRupee size={16} />
                      {item.budget}
                    </div>
                  </td>

                  {/* Date */}
                  <td className="p-6">

                    <div className="flex items-center gap-2 text-gray-600">
                      <CalendarDays size={16} />

                      {item.completedDate}
                    </div>
                  </td>

                  {/* Status */}
                  <td className="p-6">

                    <span className="px-4 py-2 rounded-full text-sm font-semibold bg-green-100 text-green-700">
                      Completed
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="p-6">

                    <div className="flex items-center gap-3">

                      {/* View */}
                      <button className="w-11 h-11 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center hover:scale-105 transition">
                        <Eye size={18} />
                      </button>

                      {/* Download */}
                      <button className="w-11 h-11 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center hover:scale-105 transition">
                        <Download size={18} />
                      </button>

                      {/* Completed */}
                      <button className="w-11 h-11 rounded-xl bg-green-100 text-green-700 flex items-center justify-center">
                        <BadgeCheck size={18} />
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