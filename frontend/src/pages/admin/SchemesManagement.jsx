import { useState } from "react";

import {
  Search,
  Landmark,
  Users,
  IndianRupee,
  Eye,
  CheckCircle2,
  XCircle,
  Plus,
} from "lucide-react";

import AdminLayout from "../../components/admin/AdminLayout";

export default function SchemesManagement() {

  // Dynamic State
  const [schemes, setSchemes] = useState([
    {
      id: "SCH-1001",
      title: "Housing Scheme",
      beneficiaries: 124,
      amount: "₹25,00,000",
      status: "Active",
    },
    {
      id: "SCH-1002",
      title: "Farmer Welfare",
      beneficiaries: 210,
      amount: "₹18,50,000",
      status: "Active",
    },
    {
      id: "SCH-1003",
      title: "Education Support",
      beneficiaries: 94,
      amount: "₹12,00,000",
      status: "Inactive",
    },
    {
      id: "SCH-1004",
      title: "Health Insurance",
      beneficiaries: 176,
      amount: "₹30,00,000",
      status: "Active",
    },
  ]);

  // Dynamic Toggle
  const updateStatus = (id, newStatus) => {

    setSchemes((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, status: newStatus }
          : item
      )
    );
  };

  const statusStyle = {
    Active: "bg-green-100 text-green-700",
    Inactive: "bg-red-100 text-red-700",
  };

  // Dynamic Stats
  const totalSchemes = schemes.length;

  const activeSchemes = schemes.filter(
    (item) => item.status === "Active"
  ).length;

  const inactiveSchemes = schemes.filter(
    (item) => item.status === "Inactive"
  ).length;

  const totalBeneficiaries = schemes.reduce(
    (sum, item) => sum + item.beneficiaries,
    0
  );

  return (
    <AdminLayout>

      {/* Header */}
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6 mb-10">

        <div>

          <p className="text-green-700 font-semibold mb-2">
            Welfare Administration
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-[#13284c]">
            Schemes Management
          </h1>

          <p className="text-gray-500 mt-4 text-lg max-w-3xl">
            Manage government welfare schemes, beneficiaries, and public support programs.
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
            placeholder="Search schemes..."
            className="bg-transparent outline-none w-full"
          />
        </div>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6 mb-10">

        {/* Total */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex items-center justify-center mb-5">
            <Landmark size={24} />
          </div>

          <p className="text-gray-500">
            Total Schemes
          </p>

          <h2 className="text-4xl font-bold text-[#13284c] mt-3">
            {totalSchemes}
          </h2>
        </div>

        {/* Active */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-500 text-white flex items-center justify-center mb-5">
            <CheckCircle2 size={24} />
          </div>

          <p className="text-gray-500">
            Active Schemes
          </p>

          <h2 className="text-4xl font-bold text-green-600 mt-3">
            {activeSchemes}
          </h2>
        </div>

        {/* Inactive */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-red-500 to-pink-500 text-white flex items-center justify-center mb-5">
            <XCircle size={24} />
          </div>

          <p className="text-gray-500">
            Inactive Schemes
          </p>

          <h2 className="text-4xl font-bold text-red-600 mt-3">
            {inactiveSchemes}
          </h2>
        </div>

        {/* Beneficiaries */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-500 text-white flex items-center justify-center mb-5">
            <Users size={24} />
          </div>

          <p className="text-gray-500">
            Beneficiaries
          </p>

          <h2 className="text-4xl font-bold text-purple-700 mt-3">
            {totalBeneficiaries}
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
                Welfare Schemes
              </h2>

              <p className="text-gray-500 mt-2">
                Monitor and manage public welfare initiatives.
              </p>
            </div>

            <button className="bg-[#0b4f35] hover:bg-[#083824] text-white px-6 py-3 rounded-2xl font-semibold transition flex items-center gap-2">
              <Plus size={18} />
              Add Scheme
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-[#f8fafc]">

              <tr>

                <th className="text-left p-6 text-gray-500 font-semibold">
                  Scheme ID
                </th>

                <th className="text-left p-6 text-gray-500 font-semibold">
                  Scheme Name
                </th>

                <th className="text-left p-6 text-gray-500 font-semibold">
                  Beneficiaries
                </th>

                <th className="text-left p-6 text-gray-500 font-semibold">
                  Budget
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

              {schemes.map((item, index) => (
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

                  {/* Beneficiaries */}
                  <td className="p-6 text-gray-700">
                    {item.beneficiaries}
                  </td>

                  {/* Budget */}
                  <td className="p-6">

                    <div className="flex items-center gap-2 text-gray-700 font-medium">
                      <IndianRupee size={16} />
                      {item.amount}
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

                      {/* Activate */}
                      <button
                        onClick={() =>
                          updateStatus(item.id, "Active")
                        }
                        className="w-11 h-11 rounded-xl bg-green-100 text-green-700 flex items-center justify-center hover:scale-105 transition"
                      >
                        <CheckCircle2 size={18} />
                      </button>

                      {/* Deactivate */}
                      <button
                        onClick={() =>
                          updateStatus(item.id, "Inactive")
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