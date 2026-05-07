import { useState } from "react";

import {
  ArrowLeft,
  Receipt,
  IndianRupee,
  Building2,
  CalendarDays,
  Wallet,
  Upload,
  FileText,
} from "lucide-react";

import { NavLink } from "react-router-dom";

import AdminLayout from "../../../../components/admin/AdminLayout";

export default function CreateExpense() {

  // Dynamic State
  const [expenseTitle, setExpenseTitle] =
    useState("");

  const [department, setDepartment] =
    useState("");

  const [category, setCategory] =
    useState("Construction");

  const [amount, setAmount] =
    useState("");

  const [expenseDate, setExpenseDate] =
    useState("");

  const [vendor, setVendor] =
    useState("");

  const [paymentMethod, setPaymentMethod] =
    useState("Bank Transfer");

  const [remarks, setRemarks] =
    useState("");

  return (
    <AdminLayout>

      {/* Header */}
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6 mb-10">

        <div>

          <div className="flex items-center gap-3 mb-4">

            <NavLink
              to="/admin/transparency/expenses-management"
              className="w-11 h-11 rounded-2xl bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition"
            >
              <ArrowLeft size={18} />
            </NavLink>

            <div>

              <p className="text-green-700 font-semibold">
                Transparency Administration
              </p>

              <h1 className="text-4xl md:text-5xl font-bold text-[#13284c] mt-2">
                Add Expense
              </h1>
            </div>
          </div>

          <p className="text-gray-500 text-lg max-w-3xl">
            Record Panchayat spending, department expenditures,
            and public financial transparency reports.
          </p>
        </div>

        {/* Expense Card */}
        <div className="bg-gradient-to-r from-[#0b4f35] to-[#2bb673] rounded-3xl p-6 text-white min-w-[320px] shadow-xl">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-white/80">
                Expense Status
              </p>

              <h2 className="text-4xl font-bold mt-3">
                Draft
              </h2>
            </div>

            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
              <Wallet size={30} />
            </div>
          </div>

          <div className="mt-6 h-3 bg-white/20 rounded-full overflow-hidden">

            <div className="h-full bg-white rounded-full w-[60%]" />
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid xl:grid-cols-[1fr_340px] gap-8">

        {/* Left Section */}
        <div className="bg-white rounded-[36px] border border-gray-100 shadow-sm p-8 md:p-10">

          {/* Top */}
          <div className="flex items-center justify-between mb-10">

            <div>

              <h2 className="text-2xl font-bold text-[#13284c]">
                Expense Information
              </h2>

              <p className="text-gray-500 mt-2">
                Fill all financial expenditure details.
              </p>
            </div>

            <div className="w-16 h-16 rounded-3xl bg-gradient-to-r from-green-600 to-emerald-500 text-white flex items-center justify-center shadow-lg">
              <Receipt size={30} />
            </div>
          </div>

          {/* Form */}
          <div className="grid md:grid-cols-2 gap-8">

            {/* Expense Title */}
            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Expense Title
              </label>

              <div className="h-16 rounded-2xl border border-gray-200 px-5 flex items-center gap-4 bg-[#fafafa]">

                <Receipt
                  size={20}
                  className="text-gray-400"
                />

                <input
                  type="text"
                  value={expenseTitle}
                  onChange={(e) =>
                    setExpenseTitle(e.target.value)
                  }
                  placeholder="Road Construction Materials"
                  className="w-full outline-none bg-transparent text-lg"
                />
              </div>
            </div>

            {/* Department */}
            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Department
              </label>

              <div className="h-16 rounded-2xl border border-gray-200 px-5 flex items-center gap-4 bg-[#fafafa]">

                <Building2
                  size={20}
                  className="text-gray-400"
                />

                <input
                  type="text"
                  value={department}
                  onChange={(e) =>
                    setDepartment(e.target.value)
                  }
                  placeholder="Infrastructure"
                  className="w-full outline-none bg-transparent text-lg"
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
                  Construction
                </option>

                <option>
                  Maintenance
                </option>

                <option>
                  Repair
                </option>

                <option>
                  Utilities
                </option>

                <option>
                  Procurement
                </option>
              </select>
            </div>

            {/* Amount */}
            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Expense Amount
              </label>

              <div className="h-16 rounded-2xl border border-gray-200 px-5 flex items-center gap-4 bg-[#fafafa]">

                <IndianRupee
                  size={20}
                  className="text-gray-400"
                />

                <input
                  type="text"
                  value={amount}
                  onChange={(e) =>
                    setAmount(e.target.value)
                  }
                  placeholder="4,50,000"
                  className="w-full outline-none bg-transparent text-lg"
                />
              </div>
            </div>

            {/* Date */}
            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Expense Date
              </label>

              <div className="h-16 rounded-2xl border border-gray-200 px-5 flex items-center gap-4 bg-[#fafafa]">

                <CalendarDays
                  size={20}
                  className="text-gray-400"
                />

                <input
                  type="date"
                  value={expenseDate}
                  onChange={(e) =>
                    setExpenseDate(e.target.value)
                  }
                  className="w-full outline-none bg-transparent text-lg"
                />
              </div>
            </div>

            {/* Vendor */}
            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Vendor / Contractor
              </label>

              <div className="h-16 rounded-2xl border border-gray-200 px-5 flex items-center gap-4 bg-[#fafafa]">

                <Building2
                  size={20}
                  className="text-gray-400"
                />

                <input
                  type="text"
                  value={vendor}
                  onChange={(e) =>
                    setVendor(e.target.value)
                  }
                  placeholder="ABC Constructions"
                  className="w-full outline-none bg-transparent text-lg"
                />
              </div>
            </div>

            {/* Payment */}
            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Payment Method
              </label>

              <select
                value={paymentMethod}
                onChange={(e) =>
                  setPaymentMethod(e.target.value)
                }
                className="h-16 w-full rounded-2xl border border-gray-200 px-5 bg-[#fafafa] outline-none text-lg"
              >

                <option>
                  Bank Transfer
                </option>

                <option>
                  Cash
                </option>

                <option>
                  UPI
                </option>

                <option>
                  Cheque
                </option>
              </select>
            </div>
          </div>

          {/* Upload */}
          <div className="mt-10">

            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Expense Documents
            </label>

            <div className="border-2 border-dashed border-gray-300 rounded-3xl p-8 bg-[#fafafa] flex flex-col items-center justify-center text-center">

              <div className="w-16 h-16 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center mb-4">
                <Upload size={28} />
              </div>

              <p className="font-semibold text-[#13284c]">
                Upload Expense Bills
              </p>

              <p className="text-gray-500 mt-2 text-sm">
                Upload invoices, receipts, or financial documents.
              </p>

              <input
                type="file"
                className="mt-5"
              />
            </div>
          </div>

          {/* Remarks */}
          <div className="mt-10">

            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Expense Remarks
            </label>

            <div className="rounded-3xl border border-gray-200 bg-[#fafafa] p-5">

              <textarea
                rows={7}
                value={remarks}
                onChange={(e) =>
                  setRemarks(e.target.value)
                }
                placeholder="Write financial remarks or expenditure notes..."
                className="w-full bg-transparent outline-none resize-none text-gray-700"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-end gap-4 mt-10">

            {/* Cancel */}
            <button
              onClick={() => {
                setExpenseTitle("");
                setDepartment("");
                setCategory("");
                setAmount("");
                setExpenseDate("");
                setVendor("");
                setPaymentMethod("");
                setRemarks("");
              }}
              className="w-full sm:w-[220px] px-8 py-4 rounded-2xl border border-gray-200 font-semibold hover:bg-gray-50 transition"
            >
              Cancel
            </button>

            {/* Create */}
            <button className="w-full sm:w-[220px] bg-gradient-to-r from-[#0b4f35] to-[#2bb673] hover:opacity-95 text-white px-8 py-4 rounded-2xl font-semibold transition shadow-lg">
              Create Expense
            </button>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">

          {/* Summary */}
          <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm p-8">

            <h3 className="text-2xl font-bold text-[#13284c] mb-6">
              Live Summary
            </h3>

            <div className="space-y-5">

              <div className="flex justify-between items-center">

                <span className="text-gray-500">
                  Expense
                </span>

                <span className="font-bold text-[#13284c]">
                  {expenseTitle || "-"}
                </span>
              </div>

              <div className="flex justify-between items-center">

                <span className="text-gray-500">
                  Department
                </span>

                <span className="font-bold text-[#13284c]">
                  {department || "-"}
                </span>
              </div>

              <div className="flex justify-between items-center">

                <span className="text-gray-500">
                  Amount
                </span>

                <span className="font-bold text-green-700">
                  ₹{amount || 0}
                </span>
              </div>

              <div className="flex justify-between items-center">

                <span className="text-gray-500">
                  Payment
                </span>

                <span className="font-bold text-[#13284c]">
                  {paymentMethod || "-"}
                </span>
              </div>

              <div className="pt-4 border-t border-gray-100">

                <div className="flex justify-between mb-3">

                  <span className="text-gray-500">
                    Expense Workflow
                  </span>

                  <span className="font-semibold text-[#13284c]">
                    Draft
                  </span>
                </div>

                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">

                  <div className="h-full rounded-full bg-gradient-to-r from-[#0b4f35] to-[#2bb673] w-[60%]" />
                </div>
              </div>
            </div>
          </div>

          {/* Activity */}
          <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm p-8">

            <h3 className="text-2xl font-bold text-[#13284c] mb-6">
              Expense Draft
            </h3>

            <div className="space-y-5">

              <div className="flex gap-4">

                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center">
                  <FileText size={20} />
                </div>

                <div>

                  <p className="font-semibold text-[#13284c]">
                    Draft Created
                  </p>

                  <p className="text-gray-500 text-sm mt-1">
                    Financial expense record is being prepared.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">

                <div className="w-12 h-12 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center">
                  <Wallet size={20} />
                </div>

                <div>

                  <p className="font-semibold text-[#13284c]">
                    Live Financial Preview
                  </p>

                  <p className="text-gray-500 text-sm mt-1">
                    Expense summary updates instantly while editing.
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