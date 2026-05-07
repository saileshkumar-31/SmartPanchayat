import { useState } from "react";

import {
  ArrowLeft,
  FileText,
  IndianRupee,
  CalendarDays,
  Building2,
  Clock3,
  ShieldCheck,
  Upload,
} from "lucide-react";

import { NavLink } from "react-router-dom";

import AdminLayout from "../../../../components/admin/AdminLayout";

export default function EditTender() {

  // Dynamic State
  const [tenderName, setTenderName] =
    useState("Road Construction Tender");

  const [department, setDepartment] =
    useState("Infrastructure");

  const [amount, setAmount] =
    useState("18,00,000");

  const [deadline, setDeadline] =
    useState("2026-05-25");

  const [company, setCompany] =
    useState("ABC Infrastructure Pvt Ltd");

  const [status, setStatus] =
    useState("Open");

  const [remarks, setRemarks] =
    useState(
      "Tender published for public infrastructure road construction."
    );

  return (
    <AdminLayout>

      {/* Header */}
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6 mb-10">

        <div>

          <div className="flex items-center gap-3 mb-4">

            <NavLink
              to="/admin/transparency/tender-management"
              className="w-11 h-11 rounded-2xl bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition"
            >
              <ArrowLeft size={18} />
            </NavLink>

            <div>

              <p className="text-green-700 font-semibold">
                Transparency Administration
              </p>

              <h1 className="text-4xl md:text-5xl font-bold text-[#13284c] mt-2">
                Edit Tender
              </h1>
            </div>
          </div>

          <p className="text-gray-500 text-lg max-w-3xl">
            Update Panchayat tender details, procurement information,
            and contractor records.
          </p>
        </div>

        {/* Status Card */}
        <div className="bg-gradient-to-r from-[#0b4f35] to-[#2bb673] rounded-3xl p-6 text-white min-w-[320px] shadow-xl">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-white/80">
                Tender Status
              </p>

              <h2 className="text-4xl font-bold mt-3">
                {status}
              </h2>
            </div>

            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
              <ShieldCheck size={30} />
            </div>
          </div>

          <div className="mt-6 h-3 bg-white/20 rounded-full overflow-hidden">

            <div
              className="h-full bg-white rounded-full"
              style={{
                width:
                  status === "Open"
                    ? "70%"
                    : status === "In Review"
                    ? "50%"
                    : "100%",
              }}
            />
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid xl:grid-cols-[1fr_340px] gap-8">

        {/* Left */}
        <div className="bg-white rounded-[36px] border border-gray-100 shadow-sm p-8 md:p-10">

          {/* Top */}
          <div className="flex items-center justify-between mb-10">

            <div>

              <h2 className="text-2xl font-bold text-[#13284c]">
                Tender Details
              </h2>

              <p className="text-gray-500 mt-2">
                Edit and manage tender procurement details.
              </p>
            </div>

            <div className="w-16 h-16 rounded-3xl bg-gradient-to-r from-green-600 to-emerald-500 text-white flex items-center justify-center shadow-lg">
              <FileText size={30} />
            </div>
          </div>

          {/* Form */}
          <div className="grid md:grid-cols-2 gap-8">

            {/* Tender Name */}
            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Tender Name
              </label>

              <div className="h-16 rounded-2xl border border-gray-200 px-5 flex items-center gap-4 bg-[#fafafa]">

                <FileText
                  size={20}
                  className="text-gray-400"
                />

                <input
                  type="text"
                  value={tenderName}
                  onChange={(e) =>
                    setTenderName(e.target.value)
                  }
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
                  className="w-full outline-none bg-transparent text-lg"
                />
              </div>
            </div>

            {/* Amount */}
            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Tender Amount
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
                  className="w-full outline-none bg-transparent text-lg"
                />
              </div>
            </div>

            {/* Deadline */}
            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Deadline
              </label>

              <div className="h-16 rounded-2xl border border-gray-200 px-5 flex items-center gap-4 bg-[#fafafa]">

                <CalendarDays
                  size={20}
                  className="text-gray-400"
                />

                <input
                  type="date"
                  value={deadline}
                  onChange={(e) =>
                    setDeadline(e.target.value)
                  }
                  className="w-full outline-none bg-transparent text-lg"
                />
              </div>
            </div>

            {/* Company */}
            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Contractor / Company
              </label>

              <div className="h-16 rounded-2xl border border-gray-200 px-5 flex items-center gap-4 bg-[#fafafa]">

                <Building2
                  size={20}
                  className="text-gray-400"
                />

                <input
                  type="text"
                  value={company}
                  onChange={(e) =>
                    setCompany(e.target.value)
                  }
                  className="w-full outline-none bg-transparent text-lg"
                />
              </div>
            </div>

            {/* Status */}
            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Tender Status
              </label>

              <select
                value={status}
                onChange={(e) =>
                  setStatus(e.target.value)
                }
                className="h-16 w-full rounded-2xl border border-gray-200 px-5 bg-[#fafafa] outline-none text-lg"
              >

                <option>
                  Open
                </option>

                <option>
                  In Review
                </option>

                <option>
                  Approved
                </option>

                <option>
                  Closed
                </option>
              </select>
            </div>
          </div>

          {/* Upload */}
          <div className="mt-10">

            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Tender Documents
            </label>

            <div className="border-2 border-dashed border-gray-300 rounded-3xl p-8 bg-[#fafafa] flex flex-col items-center justify-center text-center">

              <div className="w-16 h-16 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center mb-4">
                <Upload size={28} />
              </div>

              <p className="font-semibold text-[#13284c]">
                Upload Tender Documents
              </p>

              <p className="text-gray-500 mt-2 text-sm">
                PDF, DOC, or procurement files.
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
              Remarks
            </label>

            <div className="rounded-3xl border border-gray-200 bg-[#fafafa] p-5">

              <textarea
                rows={7}
                value={remarks}
                onChange={(e) =>
                  setRemarks(e.target.value)
                }
                className="w-full bg-transparent outline-none resize-none text-gray-700"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-end gap-4 mt-10">

            {/* Cancel */}
            <button
              onClick={() => {
                setTenderName("");
                setDepartment("");
                setAmount("");
                setDeadline("");
                setCompany("");
                setStatus("");
                setRemarks("");
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

        {/* Right Sidebar */}
        <div className="space-y-6">

          {/* Summary */}
          <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm p-8">

            <h3 className="text-2xl font-bold text-[#13284c] mb-6">
              Tender Summary
            </h3>

            <div className="space-y-5">

              <div className="flex justify-between items-center">

                <span className="text-gray-500">
                  Tender
                </span>

                <span className="font-bold text-[#13284c]">
                  {tenderName || "-"}
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
                  Status
                </span>

                <span className="font-bold text-[#13284c]">
                  {status || "-"}
                </span>
              </div>

              <div className="pt-4 border-t border-gray-100">

                <div className="flex justify-between mb-3">

                  <span className="text-gray-500">
                    Tender Progress
                  </span>

                  <span className="font-semibold text-[#13284c]">
                    {status}
                  </span>
                </div>

                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">

                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#0b4f35] to-[#2bb673]"
                    style={{
                      width:
                        status === "Open"
                          ? "70%"
                          : status === "In Review"
                          ? "50%"
                          : "100%",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Activity */}
          <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm p-8">

            <h3 className="text-2xl font-bold text-[#13284c] mb-6">
              Tender Activity
            </h3>

            <div className="space-y-5">

              <div className="flex gap-4">

                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center">
                  <FileText size={20} />
                </div>

                <div>

                  <p className="font-semibold text-[#13284c]">
                    Tender Updated
                  </p>

                  <p className="text-gray-500 text-sm mt-1">
                    Tender details modified successfully.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">

                <div className="w-12 h-12 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center">
                  <Clock3 size={20} />
                </div>

                <div>

                  <p className="font-semibold text-[#13284c]">
                    Procurement Tracking
                  </p>

                  <p className="text-gray-500 text-sm mt-1">
                    Tender workflow updates instantly.
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