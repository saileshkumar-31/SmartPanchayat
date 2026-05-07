import { useState } from "react";

import {
  Search,
  Plus,
  FileText,
  IndianRupee,
  Clock3,
  ShieldCheck,
  Pencil,
  Building2,
} from "lucide-react";

import { NavLink } from "react-router-dom";

import AdminLayout from "../../../../components/admin/AdminLayout";

export default function TenderManagement() {

  // Dynamic State
  const [tenders] = useState([
    {
      id: "TND-1001",
      name: "Road Construction Tender",
      department: "Infrastructure",
      amount: "18,00,000",
      deadline: "25 May 2026",
      status: "Open",
    },
    {
      id: "TND-1002",
      name: "Street Light Installation",
      department: "Electrical",
      amount: "6,50,000",
      deadline: "20 May 2026",
      status: "Open",
    },
    {
      id: "TND-1003",
      name: "Drainage Maintenance",
      department: "Sanitation",
      amount: "9,20,000",
      deadline: "15 May 2026",
      status: "Closed",
    },
  ]);

  // Stats
  const totalTenders =
    tenders.length;

  const openTenders =
    tenders.filter(
      (item) => item.status === "Open"
    ).length;

  const closedTenders =
    tenders.filter(
      (item) => item.status === "Closed"
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
            Tender Management
          </h1>

          <p className="text-gray-500 mt-4 text-lg max-w-3xl">
            Manage Panchayat tenders, procurement workflows,
            contractor bidding, and public transparency records.
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
            placeholder="Search tenders..."
            className="bg-transparent outline-none w-full"
          />
        </div>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6 mb-10">

        {/* Total */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex items-center justify-center mb-5">
            <FileText size={24} />
          </div>

          <p className="text-gray-500">
            Total Tenders
          </p>

          <h2 className="text-4xl font-bold text-[#13284c] mt-3">
            {totalTenders}
          </h2>
        </div>

        {/* Open */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-500 text-white flex items-center justify-center mb-5">
            <Clock3 size={24} />
          </div>

          <p className="text-gray-500">
            Open Tenders
          </p>

          <h2 className="text-4xl font-bold text-green-700 mt-3">
            {openTenders}
          </h2>
        </div>

        {/* Closed */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-red-500 to-pink-500 text-white flex items-center justify-center mb-5">
            <ShieldCheck size={24} />
          </div>

          <p className="text-gray-500">
            Closed Tenders
          </p>

          <h2 className="text-4xl font-bold text-red-600 mt-3">
            {closedTenders}
          </h2>
        </div>

        {/* Procurement */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-500 text-white flex items-center justify-center mb-5">
            <Building2 size={24} />
          </div>

          <p className="text-gray-500">
            Departments
          </p>

          <h2 className="text-4xl font-bold text-purple-700 mt-3">
            3
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
                Tender Records
              </h2>

              <p className="text-gray-500 mt-2">
                Monitor active procurement and contractor tender workflows.
              </p>
            </div>

            {/* Add Tender */}
            <NavLink
              to="/admin/transparency/tender-create"
              className="bg-[#0b4f35] hover:bg-[#083824] text-white px-6 py-3 rounded-2xl font-semibold transition flex items-center gap-2"
            >
              <Plus size={18} />

              Add Tender
            </NavLink>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-[#f8fafc]">

              <tr>

                <th className="text-left p-6 text-gray-500 font-semibold">
                  Tender ID
                </th>

                <th className="text-left p-6 text-gray-500 font-semibold">
                  Tender Name
                </th>

                <th className="text-left p-6 text-gray-500 font-semibold">
                  Department
                </th>

                <th className="text-left p-6 text-gray-500 font-semibold">
                  Amount
                </th>

                <th className="text-left p-6 text-gray-500 font-semibold">
                  Deadline
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

              {tenders.map((item, index) => (
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
                    {item.name}
                  </td>

                  {/* Department */}
                  <td className="p-6 text-gray-700">
                    {item.department}
                  </td>

                  {/* Amount */}
                  <td className="p-6">

                    <div className="flex items-center gap-2 font-medium text-green-700">
                      <IndianRupee size={16} />

                      ₹{item.amount}
                    </div>
                  </td>

                  {/* Deadline */}
                  <td className="p-6">

                    <div className="flex items-center gap-2 text-gray-700">
                      <Clock3 size={16} />

                      {item.deadline}
                    </div>
                  </td>

                  {/* Status */}
                  <td className="p-6">

                    <span
                      className={`px-4 py-2 rounded-full text-sm font-semibold ${
                        item.status === "Open"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="p-6">

                    <div className="flex items-center gap-3">

                      {/* Status */}
                      <button className="w-11 h-11 rounded-xl bg-green-100 text-green-700 flex items-center justify-center hover:scale-105 transition">
                        <Clock3 size={18} />
                      </button>

                      {/* Verify */}
                      <button className="w-11 h-11 rounded-xl bg-red-100 text-red-700 flex items-center justify-center hover:scale-105 transition">
                        <ShieldCheck size={18} />
                      </button>

                      {/* Documents */}
                      <button className="w-11 h-11 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center hover:scale-105 transition">
                        <FileText size={18} />
                      </button>

                      {/* Edit */}
                      <NavLink
                        to="/admin/transparency/tender-edit"
                        className="w-11 h-11 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center hover:scale-105 transition"
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