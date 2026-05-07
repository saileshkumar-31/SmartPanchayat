import { useState } from "react";

import {
  Search,
  Plus,
  Wallet,
  IndianRupee,
  CalendarDays,
  Pencil,
  Download,
  Receipt,
  Building2,
} from "lucide-react";

import { NavLink } from "react-router-dom";

import AdminLayout from "../../../../components/admin/AdminLayout";

export default function ExpensesManagement() {

  // Dynamic State
  const [expenses] = useState([
    {
      id: "EXP-1001",
      title: "Road Construction Materials",
      department: "Infrastructure",
      category: "Construction",
      amount: "4,50,000",
      date: "14 May 2026",
    },
    {
      id: "EXP-1002",
      title: "Street Light Maintenance",
      department: "Electrical",
      category: "Maintenance",
      amount: "1,20,000",
      date: "10 May 2026",
    },
    {
      id: "EXP-1003",
      title: "Water Pipeline Repair",
      department: "Water Supply",
      category: "Repair",
      amount: "2,80,000",
      date: "06 May 2026",
    },
  ]);

  // Stats
  const totalRecords =
    expenses.length;

  return (
    <AdminLayout>

      {/* Header */}
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6 mb-10">

        <div>

          <p className="text-green-700 font-semibold mb-2">
            Transparency Administration
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-[#13284c]">
            Expenses Management
          </h1>

          <p className="text-gray-500 mt-4 text-lg max-w-3xl">
            Track Panchayat expenses, department spending,
            and public financial transparency records.
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
            placeholder="Search expenses..."
            className="bg-transparent outline-none w-full"
          />
        </div>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6 mb-10">

        {/* Total Records */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex items-center justify-center mb-5">
            <Receipt size={24} />
          </div>

          <p className="text-gray-500">
            Total Records
          </p>

          <h2 className="text-4xl font-bold text-[#13284c] mt-3">
            {totalRecords}
          </h2>
        </div>

        {/* Budget Utilized */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-500 text-white flex items-center justify-center mb-5">
            <IndianRupee size={24} />
          </div>

          <p className="text-gray-500">
            Budget Utilized
          </p>

          <h2 className="text-4xl font-bold text-green-700 mt-3">
            ₹8.5L
          </h2>
        </div>

        {/* Departments */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-500 text-white flex items-center justify-center mb-5">
            <Building2 size={24} />
          </div>

          <p className="text-gray-500">
            Departments
          </p>

          <h2 className="text-4xl font-bold text-purple-700 mt-3">
            6
          </h2>
        </div>

        {/* This Month */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-orange-500 to-yellow-500 text-white flex items-center justify-center mb-5">
            <CalendarDays size={24} />
          </div>

          <p className="text-gray-500">
            This Month
          </p>

          <h2 className="text-4xl font-bold text-orange-600 mt-3">
            ₹3.2L
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
                Expense Records
              </h2>

              <p className="text-gray-500 mt-2">
                Manage Panchayat expenditure and department financial reports.
              </p>
            </div>

            {/* Add Expense */}
            <NavLink
              to="/admin/transparency/expenses-create"
              className="bg-[#0b4f35] hover:bg-[#083824] text-white px-6 py-3 rounded-2xl font-semibold transition flex items-center gap-2"
            >
              <Plus size={18} />

              Add Expense
            </NavLink>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-[#f8fafc]">

              <tr>

                <th className="text-left p-6 text-gray-500 font-semibold">
                  Expense ID
                </th>

                <th className="text-left p-6 text-gray-500 font-semibold">
                  Expense Title
                </th>

                <th className="text-left p-6 text-gray-500 font-semibold">
                  Department
                </th>

                <th className="text-left p-6 text-gray-500 font-semibold">
                  Category
                </th>

                <th className="text-left p-6 text-gray-500 font-semibold">
                  Amount
                </th>

                <th className="text-left p-6 text-gray-500 font-semibold">
                  Date
                </th>

                <th className="text-left p-6 text-gray-500 font-semibold">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>

              {expenses.map((item, index) => (
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

                  {/* Department */}
                  <td className="p-6 text-gray-700">
                    {item.department}
                  </td>

                  {/* Category */}
                  <td className="p-6">

                    <span className="px-4 py-2 rounded-full text-sm font-semibold bg-blue-100 text-blue-700">
                      {item.category}
                    </span>
                  </td>

                  {/* Amount */}
                  <td className="p-6">

                    <div className="flex items-center gap-2 font-medium text-green-700">
                      <IndianRupee size={16} />

                      ₹{item.amount}
                    </div>
                  </td>

                  {/* Date */}
                  <td className="p-6">

                    <div className="flex items-center gap-2 text-gray-700">
                      <CalendarDays size={16} />

                      {item.date}
                    </div>
                  </td>

                  {/* Actions */}
                  <td className="p-6">

                    <div className="flex items-center gap-3">

                      {/* Download */}
                      <button className="w-11 h-11 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center hover:scale-105 transition">
                        <Download size={18} />
                      </button>

                      {/* Receipt */}
                      <button className="w-11 h-11 rounded-xl bg-green-100 text-green-700 flex items-center justify-center hover:scale-105 transition">
                        <Receipt size={18} />
                      </button>

                      {/* Edit */}
                      <NavLink
                        to="/admin/transparency/expenses-edit"
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