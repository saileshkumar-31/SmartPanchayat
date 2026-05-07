import { useState } from "react";

import {
  ArrowLeft,
  Newspaper,
  Upload,
  CalendarDays,
  Bell,
  Eye,
  FileText,
  Image as ImageIcon,
} from "lucide-react";

import { NavLink } from "react-router-dom";

import AdminLayout from "../../../../components/admin/AdminLayout";
export default function CreateRecentUpdate() {

  // Dynamic State
  const [title, setTitle] =
    useState("");

  const [category, setCategory] =
    useState("Infrastructure");

  const [publishDate, setPublishDate] =
    useState("");

  const [status, setStatus] =
    useState("Draft");

  const [summary, setSummary] =
    useState("");

  const [content, setContent] =
    useState("");

  const [author, setAuthor] =
    useState("");

  return (
    <AdminLayout>

      {/* Header */}
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6 mb-10">

        <div>

          <div className="flex items-center gap-3 mb-4">

            <NavLink
              to="/admin/transparency/recentupdates-management"
              className="w-11 h-11 rounded-2xl bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition"
            >
              <ArrowLeft size={18} />
            </NavLink>

            <div>

              <p className="text-green-700 font-semibold">
                Transparency Administration
              </p>

              <h1 className="text-4xl md:text-5xl font-bold text-[#13284c] mt-2">
                Add Public Update
              </h1>
            </div>
          </div>

          <p className="text-gray-500 text-lg max-w-3xl">
            Publish Panchayat announcements,
            project updates, public notices,
            and transparency communications.
          </p>
        </div>

        {/* Status Card */}
        <div className="bg-gradient-to-r from-[#0b4f35] to-[#2bb673] rounded-3xl p-6 text-white min-w-[320px] shadow-xl">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-white/80">
                Update Status
              </p>

              <h2 className="text-4xl font-bold mt-3">
                {status}
              </h2>
            </div>

            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
              <Bell size={30} />
            </div>
          </div>

          <div className="mt-6 h-3 bg-white/20 rounded-full overflow-hidden">

            <div
              className="h-full bg-white rounded-full transition-all duration-500"
              style={{
                width:
                  status === "Published"
                    ? "100%"
                    : "60%",
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
                Update Information
              </h2>

              <p className="text-gray-500 mt-2">
                Fill all required announcement details.
              </p>
            </div>

            <div className="w-16 h-16 rounded-3xl bg-gradient-to-r from-green-600 to-emerald-500 text-white flex items-center justify-center shadow-lg">
              <Newspaper size={30} />
            </div>
          </div>

          {/* Form */}
          <div className="grid md:grid-cols-2 gap-8">

            {/* Title */}
            <div className="md:col-span-2">

              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Update Title
              </label>

              <div className="h-16 rounded-2xl border border-gray-200 px-5 flex items-center gap-4 bg-[#fafafa]">

                <Newspaper
                  size={20}
                  className="text-gray-400"
                />

                <input
                  type="text"
                  value={title}
                  onChange={(e) =>
                    setTitle(e.target.value)
                  }
                  placeholder="Road Construction Phase 2 Started"
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
                  Infrastructure
                </option>

                <option>
                  Water Supply
                </option>

                <option>
                  Electrical
                </option>

                <option>
                  Sanitation
                </option>

                <option>
                  Public Notice
                </option>
              </select>
            </div>

            {/* Publish Date */}
            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Publish Date
              </label>

              <div className="h-16 rounded-2xl border border-gray-200 px-5 flex items-center gap-4 bg-[#fafafa]">

                <CalendarDays
                  size={20}
                  className="text-gray-400"
                />

                <input
                  type="date"
                  value={publishDate}
                  onChange={(e) =>
                    setPublishDate(e.target.value)
                  }
                  className="w-full outline-none bg-transparent text-lg"
                />
              </div>
            </div>

            {/* Status */}
            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Update Status
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

            {/* Author */}
            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Author
              </label>

              <div className="h-16 rounded-2xl border border-gray-200 px-5 flex items-center gap-4 bg-[#fafafa]">

                <FileText
                  size={20}
                  className="text-gray-400"
                />

                <input
                  type="text"
                  value={author}
                  onChange={(e) =>
                    setAuthor(e.target.value)
                  }
                  placeholder="Panchayat Administration"
                  className="w-full outline-none bg-transparent text-lg"
                />
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="mt-10">

            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Short Summary
            </label>

            <div className="rounded-3xl border border-gray-200 bg-[#fafafa] p-5">

              <textarea
                rows={4}
                value={summary}
                onChange={(e) =>
                  setSummary(e.target.value)
                }
                placeholder="Write short update summary..."
                className="w-full bg-transparent outline-none resize-none text-gray-700"
              />
            </div>
          </div>

          {/* Full Content */}
          <div className="mt-10">

            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Full Update Content
            </label>

            <div className="rounded-3xl border border-gray-200 bg-[#fafafa] p-5">

              <textarea
                rows={8}
                value={content}
                onChange={(e) =>
                  setContent(e.target.value)
                }
                placeholder="Write detailed public update content..."
                className="w-full bg-transparent outline-none resize-none text-gray-700"
              />
            </div>
          </div>

          {/* Upload */}
          <div className="mt-10">

            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Media & Documents
            </label>

            <div className="border-2 border-dashed border-gray-300 rounded-3xl p-8 bg-[#fafafa] flex flex-col items-center justify-center text-center">

              <div className="w-16 h-16 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center mb-4">
                <Upload size={28} />
              </div>

              <p className="font-semibold text-[#13284c]">
                Upload Images & Documents
              </p>

              <p className="text-gray-500 mt-2 text-sm">
                Upload update banners, notices, or PDF documents.
              </p>

              <input
                type="file"
                className="mt-5"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-end gap-4 mt-10">

            {/* Cancel */}
            <button
              onClick={() => {
                setTitle("");
                setCategory("");
                setPublishDate("");
                setStatus("");
                setSummary("");
                setContent("");
                setAuthor("");
              }}
              className="w-full sm:w-[220px] px-8 py-4 rounded-2xl border border-gray-200 font-semibold hover:bg-gray-50 transition"
            >
              Cancel
            </button>

            {/* Create */}
            <button className="w-full sm:w-[220px] bg-gradient-to-r from-[#0b4f35] to-[#2bb673] hover:opacity-95 text-white px-8 py-4 rounded-2xl font-semibold transition shadow-lg">
              Publish Update
            </button>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">

          {/* Live Preview */}
          <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm p-8">

            <h3 className="text-2xl font-bold text-[#13284c] mb-6">
              Live Preview
            </h3>

            <div className="rounded-3xl overflow-hidden border border-gray-100">

              <div className="h-40 bg-gradient-to-r from-[#0b4f35] to-[#2bb673] flex items-center justify-center">

                <ImageIcon
                  size={50}
                  className="text-white/80"
                />
              </div>

              <div className="p-6">

                <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
                  {category || "Category"}
                </span>

                <h4 className="text-xl font-bold text-[#13284c] mt-4">
                  {title || "Update title preview"}
                </h4>

                <p className="text-gray-500 mt-3 text-sm leading-7">
                  {summary || "Short update summary preview will appear here."}
                </p>

                <div className="flex items-center justify-between mt-6 text-sm text-gray-500">

                  <span>
                    {publishDate || "Date"}
                  </span>

                  <span className="font-semibold text-green-700">
                    {status}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm p-8">

            <h3 className="text-2xl font-bold text-[#13284c] mb-6">
              Update Insights
            </h3>

            <div className="space-y-5">

              <div className="flex gap-4">

                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center">
                  <Eye size={20} />
                </div>

                <div>

                  <p className="font-semibold text-[#13284c]">
                    Public Visibility
                  </p>

                  <p className="text-gray-500 text-sm mt-1">
                    Published updates appear on citizen dashboard.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">

                <div className="w-12 h-12 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center">
                  <Bell size={20} />
                </div>

                <div>

                  <p className="font-semibold text-[#13284c]">
                    Instant Notifications
                  </p>

                  <p className="text-gray-500 text-sm mt-1">
                    Citizens receive transparency updates immediately.
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