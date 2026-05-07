import { useState } from "react";

import {
  ArrowLeft,
  FileSpreadsheet,
  FileText,
  CalendarDays,
  IndianRupee,
  PieChart,
  Download,
  Eye,
  Save,
  BarChart3,
  ClipboardList,
  Bell,
} from "lucide-react";

import { NavLink } from "react-router-dom";

import AdminLayout from "../../../components/admin/AdminLayout";

export default function CreateTransparencyReport() {

  // Dynamic State
  const [title, setTitle] =
    useState("");

  const [category, setCategory] =
    useState("Finance");

  const [reportDate, setReportDate] =
    useState("");

  const [status, setStatus] =
    useState("Draft");

  const [budget, setBudget] =
    useState("");

  const [expenses, setExpenses] =
    useState("");

  const [summary, setSummary] =
    useState("");

  const [notes, setNotes] =
    useState("");

  const [visibility, setVisibility] =
    useState("Public");

  const [notifyCitizens, setNotifyCitizens] =
    useState(true);

  // Dynamic Calculations
  const budgetValue =
    parseInt(budget.replace(/,/g, "")) || 0;

  const expensesValue =
    parseInt(expenses.replace(/,/g, "")) || 0;

  const remaining =
    budgetValue - expensesValue;

  const utilization =
    budgetValue > 0
      ? Math.min(
          Math.round(
            (expensesValue / budgetValue) * 100
          ),
          100
        )
      : 0;

  return (
    <AdminLayout>

      {/* Header */}
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6 mb-10">

        <div>

          <div className="flex items-center gap-3 mb-4">

            <NavLink
              to="/admin/transparency/reports"
              className="w-11 h-11 rounded-2xl bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition"
            >
              <ArrowLeft size={18} />
            </NavLink>

            <div>

              <p className="text-green-700 font-semibold">
                Transparency Administration
              </p>

              <h1 className="text-4xl md:text-5xl font-bold text-[#13284c] mt-2">
                Create Report
              </h1>
            </div>
          </div>

          <p className="text-gray-500 text-lg max-w-3xl">
            Generate new transparency reports, publish financial summaries,
            and improve public accountability.
          </p>
        </div>

        {/* Status Card */}
        <div className="bg-gradient-to-r from-[#0b4f35] to-[#2bb673] rounded-3xl p-6 text-white min-w-[320px] shadow-xl">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-white/80">
                Report Status
              </p>

              <h2 className="text-4xl font-bold mt-3">
                {status}
              </h2>
            </div>

            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">

              <FileSpreadsheet size={30} />
            </div>
          </div>

          <div className="mt-6">

            <div className="flex justify-between text-sm mb-2">

              <span>
                Budget Utilization
              </span>

              <span className="font-semibold">
                {utilization}%
              </span>
            </div>

            <div className="h-3 bg-white/20 rounded-full overflow-hidden">

              <div
                className="h-full bg-white rounded-full transition-all duration-500"
                style={{
                  width: `${utilization}%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Layout */}
      <div className="grid xl:grid-cols-[1fr_360px] gap-8">

        {/* Left Section */}
        <div className="bg-white rounded-[36px] border border-gray-100 shadow-sm p-8 md:p-10">

          {/* Top */}
          <div className="flex items-center justify-between mb-10">

            <div>

              <h2 className="text-2xl font-bold text-[#13284c]">
                Report Information
              </h2>

              <p className="text-gray-500 mt-2">
                Enter transparency report details and financial summaries.
              </p>
            </div>

            <div className="w-16 h-16 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex items-center justify-center shadow-lg">

              <BarChart3 size={30} />
            </div>
          </div>

          {/* Form */}
          <div className="grid md:grid-cols-2 gap-8">

            {/* Title */}
            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Report Title
              </label>

              <div className="h-16 rounded-2xl border border-gray-200 px-5 flex items-center gap-4 bg-[#fafafa]">

                <FileText
                  size={20}
                  className="text-gray-400"
                />

                <input
                  type="text"
                  value={title}
                  onChange={(e) =>
                    setTitle(e.target.value)
                  }
                  placeholder="Quarterly Financial Report"
                  className="w-full bg-transparent outline-none text-lg"
                />
              </div>
            </div>

            {/* Category */}
            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Category
              </label>

              <select
                value={category}
                onChange={(e) =>
                  setCategory(e.target.value)
                }
                className="h-16 w-full rounded-2xl border border-gray-200 px-5 bg-[#fafafa] outline-none text-lg"
              >

                <option>
                  Finance
                </option>

                <option>
                  Infrastructure
                </option>

                <option>
                  Water Supply
                </option>

                <option>
                  Sanitation
                </option>

                <option>
                  Public Welfare
                </option>
              </select>
            </div>

            {/* Date */}
            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Report Date
              </label>

              <div className="h-16 rounded-2xl border border-gray-200 px-5 flex items-center gap-4 bg-[#fafafa]">

                <CalendarDays
                  size={20}
                  className="text-gray-400"
                />

                <input
                  type="date"
                  value={reportDate}
                  onChange={(e) =>
                    setReportDate(e.target.value)
                  }
                  className="w-full bg-transparent outline-none text-lg"
                />
              </div>
            </div>

            {/* Status */}
            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Report Status
              </label>

              <select
                value={status}
                onChange={(e) =>
                  setStatus(e.target.value)
                }
                className="h-16 w-full rounded-2xl border border-gray-200 px-5 bg-[#fafafa] outline-none text-lg"
              >

                <option>
                  Draft
                </option>

                <option>
                  Published
                </option>
              </select>
            </div>

            {/* Budget */}
            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Total Budget
              </label>

              <div className="h-16 rounded-2xl border border-gray-200 px-5 flex items-center gap-4 bg-[#fafafa]">

                <IndianRupee
                  size={20}
                  className="text-gray-400"
                />

                <input
                  type="text"
                  value={budget}
                  onChange={(e) =>
                    setBudget(e.target.value)
                  }
                  placeholder="45,00,000"
                  className="w-full bg-transparent outline-none text-lg"
                />
              </div>
            </div>

            {/* Expenses */}
            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Total Expenses
              </label>

              <div className="h-16 rounded-2xl border border-gray-200 px-5 flex items-center gap-4 bg-[#fafafa]">

                <PieChart
                  size={20}
                  className="text-gray-400"
                />

                <input
                  type="text"
                  value={expenses}
                  onChange={(e) =>
                    setExpenses(e.target.value)
                  }
                  placeholder="28,00,000"
                  className="w-full bg-transparent outline-none text-lg"
                />
              </div>
            </div>

            {/* Visibility */}
            <div className="md:col-span-2">

              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Visibility
              </label>

              <select
                value={visibility}
                onChange={(e) =>
                  setVisibility(e.target.value)
                }
                className="h-16 w-full rounded-2xl border border-gray-200 px-5 bg-[#fafafa] outline-none text-lg"
              >

                <option>
                  Public
                </option>

                <option>
                  Internal
                </option>
              </select>
            </div>
          </div>

          {/* Summary */}
          <div className="mt-10">

            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Report Summary
            </label>

            <div className="rounded-3xl border border-gray-200 bg-[#fafafa] p-5">

              <textarea
                rows={6}
                value={summary}
                onChange={(e) =>
                  setSummary(e.target.value)
                }
                placeholder="Write transparency report summary..."
                className="w-full bg-transparent outline-none resize-none text-gray-700"
              />
            </div>
          </div>

          {/* Notes */}
          <div className="mt-8">

            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Additional Notes
            </label>

            <div className="rounded-3xl border border-gray-200 bg-[#fafafa] p-5">

              <textarea
                rows={4}
                value={notes}
                onChange={(e) =>
                  setNotes(e.target.value)
                }
                placeholder="Audit notes, approvals, or additional remarks..."
                className="w-full bg-transparent outline-none resize-none text-gray-700"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-end gap-4 mt-10">

            {/* Cancel */}
            <button
              onClick={() => {
                setTitle("");
                setCategory("Finance");
                setReportDate("");
                setStatus("Draft");
                setBudget("");
                setExpenses("");
                setSummary("");
                setNotes("");
                setVisibility("Public");
                setNotifyCitizens(true);
              }}
              className="px-8 py-4 rounded-2xl border border-gray-200 font-semibold hover:bg-gray-50 transition"
            >
              Cancel
            </button>

            {/* Save */}
            <button className="bg-gradient-to-r from-[#0b4f35] to-[#2bb673] hover:opacity-95 text-white px-8 py-4 rounded-2xl font-semibold transition flex items-center justify-center gap-3 shadow-lg">

              <Save size={20} />

              Create Report
            </button>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">

          {/* Live Summary */}
          <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm p-8">

            <h3 className="text-2xl font-bold text-[#13284c] mb-6">
              Live Summary
            </h3>

            <div className="space-y-5">

              <div className="flex justify-between">

                <span className="text-gray-500">
                  Report
                </span>

                <span className="font-bold text-[#13284c]">
                  {title || "-"}
                </span>
              </div>

              <div className="flex justify-between">

                <span className="text-gray-500">
                  Category
                </span>

                <span className="font-bold text-blue-700">
                  {category}
                </span>
              </div>

              <div className="flex justify-between">

                <span className="text-gray-500">
                  Budget
                </span>

                <span className="font-bold text-green-700">
                  ₹{budget || 0}
                </span>
              </div>

              <div className="flex justify-between">

                <span className="text-gray-500">
                  Expenses
                </span>

                <span className="font-bold text-orange-600">
                  ₹{expenses || 0}
                </span>
              </div>

              <div className="flex justify-between">

                <span className="text-gray-500">
                  Remaining
                </span>

                <span className="font-bold text-purple-700">
                  ₹{remaining > 0 ? remaining : 0}
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
                    className="h-full rounded-full bg-gradient-to-r from-[#0b4f35] to-[#2bb673]"
                    style={{
                      width: `${utilization}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Citizen Notification */}
          <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm p-8">

            <h3 className="text-2xl font-bold text-[#13284c] mb-6">
              Notifications
            </h3>

            <div className="flex items-start gap-4">

              <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-700 flex items-center justify-center">

                <Bell size={20} />
              </div>

              <div className="flex-1">

                <p className="font-semibold text-[#13284c]">
                  Notify Citizens
                </p>

                <p className="text-gray-500 text-sm mt-2 leading-6">
                  Send report publication alerts to citizens and public users.
                </p>

                <label className="flex items-center gap-3 mt-5">

                  <input
                    type="checkbox"
                    checked={notifyCitizens}
                    onChange={() =>
                      setNotifyCitizens(
                        !notifyCitizens
                      )
                    }
                    className="w-5 h-5 accent-[#0b4f35]"
                  />

                  <span className="text-gray-700 font-medium">
                    Enable Notifications
                  </span>
                </label>
              </div>
            </div>
          </div>

          {/* Quick Insights */}
          <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm p-8">

            <h3 className="text-2xl font-bold text-[#13284c] mb-6">
              Quick Insights
            </h3>

            <div className="space-y-5">

              <div className="flex gap-4">

                <div className="w-12 h-12 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center">

                  <IndianRupee size={20} />
                </div>

                <div>

                  <p className="font-semibold text-[#13284c]">
                    Budget Tracking
                  </p>

                  <p className="text-gray-500 text-sm mt-1">
                    Monitor Panchayat financial allocation transparency.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">

                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center">

                  <Eye size={20} />
                </div>

                <div>

                  <p className="font-semibold text-[#13284c]">
                    Public Visibility
                  </p>

                  <p className="text-gray-500 text-sm mt-1">
                    Citizens can access published transparency reports.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">

                <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center">

                  <Download size={20} />
                </div>

                <div>

                  <p className="font-semibold text-[#13284c]">
                    Download Reports
                  </p>

                  <p className="text-gray-500 text-sm mt-1">
                    Export reports as downloadable public records.
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