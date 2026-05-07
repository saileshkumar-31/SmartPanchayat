import { useState } from "react";

import {
  Search,
  IndianRupee,
  Wallet,
  Landmark,
  PieChart,
  Eye,
  Download,
  Plus,
  Pencil,
} from "lucide-react";

import AdminLayout from "../../../../components/admin/AdminLayout";

import { NavLink } from "react-router-dom";

export default function BudgetManagement() {

  // Dynamic State
  const [budgets] = useState([
    {
      id: "BDG-1001",
      department: "Infrastructure",
      allocated: "₹25,00,000",
      spent: "₹18,50,000",
      remaining: "₹6,50,000",
      status: "Active",
    },
    {
      id: "BDG-1002",
      department: "Water Supply",
      allocated: "₹12,00,000",
      spent: "₹7,20,000",
      remaining: "₹4,80,000",
      status: "Active",
    },
    {
      id: "BDG-1003",
      department: "Sanitation",
      allocated: "₹9,50,000",
      spent: "₹9,50,000",
      remaining: "₹0",
      status: "Completed",
    },
  ]);

  // Stats
  const totalDepartments = budgets.length;

  return (
    <AdminLayout>

      {/* Header */}
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6 mb-10">

        <div>

          <p className="text-green-700 font-semibold mb-2">
            Transparency Administration
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-[#13284c]">
            Budget Management
          </h1>

          <p className="text-gray-500 mt-4 text-lg max-w-3xl">
            Manage Panchayat fund allocation, expenditure, and financial transparency.
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
            placeholder="Search departments..."
            className="bg-transparent outline-none w-full"
          />
        </div>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6 mb-10">

        {/* Departments */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex items-center justify-center mb-5">
            <Landmark size={24} />
          </div>

          <p className="text-gray-500">
            Departments
          </p>

          <h2 className="text-4xl font-bold text-[#13284c] mt-3">
            {totalDepartments}
          </h2>
        </div>

        {/* Allocated */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-500 text-white flex items-center justify-center mb-5">
            <IndianRupee size={24} />
          </div>

          <p className="text-gray-500">
            Total Allocated
          </p>

          <h2 className="text-3xl font-bold text-green-700 mt-3">
            ₹46.5L
          </h2>
        </div>

        {/* Spent */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-orange-500 to-yellow-500 text-white flex items-center justify-center mb-5">
            <Wallet size={24} />
          </div>

          <p className="text-gray-500">
            Total Spent
          </p>

          <h2 className="text-3xl font-bold text-orange-600 mt-3">
            ₹35.2L
          </h2>
        </div>

        {/* Remaining */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-500 text-white flex items-center justify-center mb-5">
            <PieChart size={24} />
          </div>

          <p className="text-gray-500">
            Remaining Budget
          </p>

          <h2 className="text-3xl font-bold text-purple-700 mt-3">
            ₹11.3L
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
                Budget Allocation Records
              </h2>

              <p className="text-gray-500 mt-2">
                Track departmental budget allocation and spending.
              </p>
            </div>

            {/* Add New Budget */}
            <NavLink
              to="/admin/transparency/budget-create"
              className="bg-[#0b4f35] hover:bg-[#083824] text-white px-6 py-3 rounded-2xl font-semibold transition flex items-center gap-2"
            >
              <Plus size={18} />

              Add Budget
            </NavLink>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-[#f8fafc]">

              <tr>

                <th className="text-left p-6 text-gray-500 font-semibold">
                  Budget ID
                </th>

                <th className="text-left p-6 text-gray-500 font-semibold">
                  Department
                </th>

                <th className="text-left p-6 text-gray-500 font-semibold">
                  Allocated
                </th>

                <th className="text-left p-6 text-gray-500 font-semibold">
                  Spent
                </th>

                <th className="text-left p-6 text-gray-500 font-semibold">
                  Remaining
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

              {budgets.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-100 hover:bg-[#f8fafc] transition"
                >

                  {/* ID */}
                  <td className="p-6 font-semibold text-[#13284c]">
                    {item.id}
                  </td>

                  {/* Department */}
                  <td className="p-6 text-gray-700">
                    {item.department}
                  </td>

                  {/* Allocated */}
                  <td className="p-6">

                    <div className="flex items-center gap-2 font-medium text-green-700">
                      <IndianRupee size={16} />

                      {item.allocated}
                    </div>
                  </td>

                  {/* Spent */}
                  <td className="p-6">

                    <div className="flex items-center gap-2 font-medium text-orange-600">
                      <Wallet size={16} />

                      {item.spent}
                    </div>
                  </td>

                  {/* Remaining */}
                  <td className="p-6">

                    <div className="flex items-center gap-2 font-medium text-purple-700">
                      <PieChart size={16} />

                      {item.remaining}
                    </div>
                  </td>

                  {/* Status */}
                  <td className="p-6">

                    <span
                      className={`px-4 py-2 rounded-full text-sm font-semibold ${
                        item.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-blue-100 text-blue-700"
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

                      {/* Download */}
                      <button className="w-11 h-11 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center hover:scale-105 transition">
                        <Download size={18} />
                      </button>

                      {/* Edit */}
                      <NavLink
                        to="/admin/transparency/budget-edit"
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