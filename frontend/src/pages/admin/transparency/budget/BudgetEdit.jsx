import { useState } from "react";

import {
  IndianRupee,
  Wallet,
  Landmark,
  FileText,
  CalendarDays,
  TrendingUp,
  PieChart,
  ArrowLeft,
} from "lucide-react";

import AdminLayout from "../../../../components/admin/AdminLayout";

import { NavLink } from "react-router-dom";

export default function BudgetEdit() {

  // Dynamic States
  const [department, setDepartment] =
    useState("Infrastructure");

  const [allocated, setAllocated] =
    useState("25,00,000");

  const [spent, setSpent] =
    useState("18,50,000");

  const [remaining, setRemaining] =
    useState("6,50,000");

  const [financialYear, setFinancialYear] =
    useState("2025 - 2026");

  const [status, setStatus] =
    useState("Active");

  const [notes, setNotes] =
    useState("");

  // Budget Utilization Calculation
  const allocatedNumber =
    parseInt(allocated.replace(/,/g, "")) || 0;

  const spentNumber =
    parseInt(spent.replace(/,/g, "")) || 0;

  const utilization =
    allocatedNumber > 0
      ? Math.min(
          Math.round(
            (spentNumber / allocatedNumber) * 100
          ),
          100
        )
      : 0;

  return (
    <AdminLayout>

      {/* Top Header */}
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6 mb-10">

        <div>

          <div className="flex items-center gap-3 mb-4">

            <NavLink
              to="/admin/transparency/budget-management"
              className="w-11 h-11 rounded-2xl bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition"
            >
              <ArrowLeft size={18} />
            </NavLink>

            <div>

              <p className="text-green-700 font-semibold">
                Transparency Administration
              </p>

              <h1 className="text-4xl md:text-5xl font-bold text-[#13284c] mt-2">
                Edit Budget Allocation
              </h1>
            </div>
          </div>

          <p className="text-gray-500 text-lg max-w-3xl">
            Update department budget allocation, track expenses,
            and maintain public financial transparency.
          </p>
        </div>

        {/* Live Status Card */}
        <div className="bg-gradient-to-r from-[#0b4f35] to-[#2bb673] rounded-3xl p-6 text-white min-w-[320px] shadow-xl">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-white/80">
                Current Budget Status
              </p>

              <h2 className="text-4xl font-bold mt-3">
                {status}
              </h2>
            </div>

            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
              <PieChart size={32} />
            </div>
          </div>

          <div className="mt-6 h-3 bg-white/20 rounded-full overflow-hidden">

            <div
              className="h-full bg-white rounded-full transition-all duration-500"
              style={{
                width: `${utilization}%`,
              }}
            />
          </div>

          <div className="flex justify-between mt-3 text-sm">

            <span>
              Budget Utilized
            </span>

            <span className="font-semibold">
              {utilization}%
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid xl:grid-cols-[1fr_340px] gap-8">

        {/* LEFT SECTION */}
        <div className="bg-white rounded-[36px] border border-gray-100 shadow-sm p-8 md:p-10">

          {/* Heading */}
          <div className="flex items-center justify-between mb-10">

            <div>

              <h2 className="text-2xl font-bold text-[#13284c]">
                Budget Details
              </h2>

              <p className="text-gray-500 mt-2">
                Edit and manage department financial allocation.
              </p>
            </div>

            <div className="w-16 h-16 rounded-3xl bg-gradient-to-r from-green-600 to-emerald-500 text-white flex items-center justify-center shadow-lg">
              <Wallet size={30} />
            </div>
          </div>

          {/* Form */}
          <div className="grid md:grid-cols-2 gap-8">

            {/* Department */}
            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Department Name
              </label>

              <div className="h-16 rounded-2xl border border-gray-200 px-5 flex items-center gap-4 bg-[#fafafa] focus-within:border-[#0b4f35] transition">

                <Landmark
                  size={20}
                  className="text-gray-400"
                />

                <input
                  type="text"
                  value={department}
                  onChange={(e) =>
                    setDepartment(e.target.value)
                  }
                  className="w-full outline-none bg-transparent text-lg"
                />
              </div>
            </div>

            {/* Allocated */}
            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Allocated Budget
              </label>

              <div className="h-16 rounded-2xl border border-gray-200 px-5 flex items-center gap-4 bg-[#fafafa] focus-within:border-[#0b4f35] transition">

                <IndianRupee
                  size={20}
                  className="text-gray-400"
                />

                <input
                  type="text"
                  value={allocated}
                  onChange={(e) =>
                    setAllocated(e.target.value)
                  }
                  className="w-full outline-none bg-transparent text-lg"
                />
              </div>
            </div>

            {/* Spent */}
            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Amount Spent
              </label>

              <div className="h-16 rounded-2xl border border-gray-200 px-5 flex items-center gap-4 bg-[#fafafa] focus-within:border-[#0b4f35] transition">

                <TrendingUp
                  size={20}
                  className="text-gray-400"
                />

                <input
                  type="text"
                  value={spent}
                  onChange={(e) =>
                    setSpent(e.target.value)
                  }
                  className="w-full outline-none bg-transparent text-lg"
                />
              </div>
            </div>

            {/* Remaining */}
            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Remaining Budget
              </label>

              <div className="h-16 rounded-2xl border border-gray-200 px-5 flex items-center gap-4 bg-[#fafafa] focus-within:border-[#0b4f35] transition">

                <Wallet
                  size={20}
                  className="text-gray-400"
                />

                <input
                  type="text"
                  value={remaining}
                  onChange={(e) =>
                    setRemaining(e.target.value)
                  }
                  className="w-full outline-none bg-transparent text-lg"
                />
              </div>
            </div>

            {/* Financial Year */}
            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Financial Year
              </label>

              <div className="h-16 rounded-2xl border border-gray-200 px-5 flex items-center gap-4 bg-[#fafafa]">

                <CalendarDays
                  size={20}
                  className="text-gray-400"
                />

                <input
                  type="text"
                  value={financialYear}
                  onChange={(e) =>
                    setFinancialYear(e.target.value)
                  }
                  className="w-full outline-none bg-transparent text-lg"
                />
              </div>
            </div>

            {/* Status */}
            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Budget Status
              </label>

              <select
                value={status}
                onChange={(e) =>
                  setStatus(e.target.value)
                }
                className="h-16 w-full rounded-2xl border border-gray-200 px-5 bg-[#fafafa] outline-none text-lg"
              >

                <option>
                  Active
                </option>

                <option>
                  Completed
                </option>

                <option>
                  Pending
                </option>
              </select>
            </div>
          </div>

          {/* Notes */}
          <div className="mt-10">

            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Budget Notes
            </label>

            <div className="rounded-3xl border border-gray-200 bg-[#fafafa] p-5">

              <textarea
                rows={7}
                value={notes}
                onChange={(e) =>
                  setNotes(e.target.value)
                }
                placeholder="Write budget remarks, approvals, or additional financial notes..."
                className="w-full bg-transparent outline-none resize-none text-gray-700"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-end gap-4 mt-10">

            {/* Cancel */}
            <button
              onClick={() => {
                setDepartment("");
                setAllocated("");
                setSpent("");
                setRemaining("");
                setFinancialYear("");
                setStatus("");
                setNotes("");
              }}
              className="w-full sm:w-[220px] px-8 py-4 rounded-2xl border border-gray-200 font-semibold hover:bg-gray-50 transition"
            >
              Cancel
            </button>

            {/* Save */}
            <button className="w-full sm:w-[220px] bg-gradient-to-r from-[#0b4f35] to-[#2bb673] hover:opacity-95 text-white px-8 py-4 rounded-2xl font-semibold transition shadow-lg">
              Save Changes
            </button>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-6">

          {/* Summary */}
          <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm p-8">

            <h3 className="text-2xl font-bold text-[#13284c] mb-6">
              Budget Summary
            </h3>

            <div className="space-y-5">

              <div className="flex justify-between items-center">

                <span className="text-gray-500">
                  Total Allocated
                </span>

                <span className="font-bold text-green-700">
                  ₹{allocated}
                </span>
              </div>

              <div className="flex justify-between items-center">

                <span className="text-gray-500">
                  Amount Spent
                </span>

                <span className="font-bold text-orange-600">
                  ₹{spent}
                </span>
              </div>

              <div className="flex justify-between items-center">

                <span className="text-gray-500">
                  Remaining
                </span>

                <span className="font-bold text-purple-700">
                  ₹{remaining}
                </span>
              </div>

              <div className="pt-4 border-t border-gray-100">

                <div className="flex justify-between mb-3">

                  <span className="text-gray-500">
                    Utilization
                  </span>

                  <span className="font-semibold text-[#13284c]">
                    {utilization}%
                  </span>
                </div>

                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">

                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#0b4f35] to-[#2bb673] transition-all duration-500"
                    style={{
                      width: `${utilization}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Activity */}
          <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm p-8">

            <h3 className="text-2xl font-bold text-[#13284c] mb-6">
              Recent Activity
            </h3>

            <div className="space-y-5">

              <div className="flex gap-4">

                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center">
                  <FileText size={20} />
                </div>

                <div>

                  <p className="font-semibold text-[#13284c]">
                    Budget Updated
                  </p>

                  <p className="text-gray-500 text-sm mt-1">
                    {department} allocation modified.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">

                <div className="w-12 h-12 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center">
                  <Wallet size={20} />
                </div>

                <div>

                  <p className="font-semibold text-[#13284c]">
                    Funds Released
                  </p>

                  <p className="text-gray-500 text-sm mt-1">
                    ₹{spent} utilized for department works.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}