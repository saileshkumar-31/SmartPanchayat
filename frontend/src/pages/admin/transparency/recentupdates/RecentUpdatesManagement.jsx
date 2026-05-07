import { useState } from "react";

import {
  Search,
  Plus,
  Newspaper,
  CalendarDays,
  Clock3,
  Bell,
  Pencil,
  Trash2,
  Eye,
  Upload,
} from "lucide-react";

import { NavLink } from "react-router-dom";

import AdminLayout from "../../../../components/admin/AdminLayout";

export default function RecentUpdatesManagement() {

  // Dynamic State
  const [updates] = useState([
    {
      id: "UPD-1001",
      title: "Road Construction Phase 2 Started",
      category: "Infrastructure",
      date: "14 May 2026",
      status: "Published",
      views: 1280,
    },
    {
      id: "UPD-1002",
      title: "New Water Pipeline Approved",
      category: "Water Supply",
      date: "12 May 2026",
      status: "Published",
      views: 920,
    },
    {
      id: "UPD-1003",
      title: "Street Light Maintenance Scheduled",
      category: "Electrical",
      date: "10 May 2026",
      status: "Draft",
      views: 210,
    },
  ]);

  // Stats
  const totalUpdates =
    updates.length;

  const publishedUpdates =
    updates.filter(
      (item) => item.status === "Published"
    ).length;

  const draftUpdates =
    updates.filter(
      (item) => item.status === "Draft"
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
            Recent Updates
          </h1>

          <p className="text-gray-500 mt-4 text-lg max-w-3xl">
            Manage Panchayat announcements,
            public notices, development updates,
            and transparency communications.
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
            placeholder="Search updates..."
            className="bg-transparent outline-none w-full"
          />
        </div>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6 mb-10">

        {/* Total */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex items-center justify-center mb-5">
            <Newspaper size={24} />
          </div>

          <p className="text-gray-500">
            Total Updates
          </p>

          <h2 className="text-4xl font-bold text-[#13284c] mt-3">
            {totalUpdates}
          </h2>
        </div>

        {/* Published */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-500 text-white flex items-center justify-center mb-5">
            <Bell size={24} />
          </div>

          <p className="text-gray-500">
            Published
          </p>

          <h2 className="text-4xl font-bold text-green-700 mt-3">
            {publishedUpdates}
          </h2>
        </div>

        {/* Draft */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-orange-500 to-yellow-500 text-white flex items-center justify-center mb-5">
            <Clock3 size={24} />
          </div>

          <p className="text-gray-500">
            Draft Updates
          </p>

          <h2 className="text-4xl font-bold text-orange-600 mt-3">
            {draftUpdates}
          </h2>
        </div>

        {/* Views */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-500 text-white flex items-center justify-center mb-5">
            <Eye size={24} />
          </div>

          <p className="text-gray-500">
            Total Views
          </p>

          <h2 className="text-4xl font-bold text-purple-700 mt-3">
            2.4K
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
                Public Updates
              </h2>

              <p className="text-gray-500 mt-2">
                Manage Panchayat public announcements and notices.
              </p>
            </div>

            {/* Add */}
            <NavLink
              to="/admin/transparency/recentupdates-create"
              className="bg-[#0b4f35] hover:bg-[#083824] text-white px-6 py-3 rounded-2xl font-semibold transition flex items-center gap-2"
            >
              <Plus size={18} />

              Add Update
            </NavLink>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-[#f8fafc]">

              <tr>

                <th className="text-left p-6 text-gray-500 font-semibold">
                  Update ID
                </th>

                <th className="text-left p-6 text-gray-500 font-semibold">
                  Title
                </th>

                <th className="text-left p-6 text-gray-500 font-semibold">
                  Category
                </th>

                <th className="text-left p-6 text-gray-500 font-semibold">
                  Date
                </th>

                <th className="text-left p-6 text-gray-500 font-semibold">
                  Status
                </th>

                <th className="text-left p-6 text-gray-500 font-semibold">
                  Views
                </th>

                <th className="text-left p-6 text-gray-500 font-semibold">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>

              {updates.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-100 hover:bg-[#f8fafc] transition"
                >

                  {/* ID */}
                  <td className="p-6 font-semibold text-[#13284c]">
                    {item.id}
                  </td>

                  {/* Title */}
                  <td className="p-6 text-gray-700">
                    {item.title}
                  </td>

                  {/* Category */}
                  <td className="p-6">

                    <span className="px-4 py-2 rounded-full text-sm font-semibold bg-blue-100 text-blue-700">
                      {item.category}
                    </span>
                  </td>

                  {/* Date */}
                  <td className="p-6">

                    <div className="flex items-center gap-2 text-gray-700">
                      <CalendarDays size={16} />

                      {item.date}
                    </div>
                  </td>

                  {/* Status */}
                  <td className="p-6">

                    <span
                      className={`px-4 py-2 rounded-full text-sm font-semibold ${
                        item.status === "Published"
                          ? "bg-green-100 text-green-700"
                          : "bg-orange-100 text-orange-700"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>

                  {/* Views */}
                  <td className="p-6 font-semibold text-purple-700">
                    {item.views}
                  </td>

                  {/* Actions */}
                  <td className="p-6">

                    <div className="flex items-center gap-3">

                      {/* Preview */}
                      <button className="w-11 h-11 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center hover:scale-105 transition">
                        <Eye size={18} />
                      </button>

                      {/* Upload */}
                      <button className="w-11 h-11 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center hover:scale-105 transition">
                        <Upload size={18} />
                      </button>

                      {/* Edit */}
                      <NavLink
                        to="/admin/transparency/recentupdates-edit"
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