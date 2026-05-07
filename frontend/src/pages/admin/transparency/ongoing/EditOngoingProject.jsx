import { useState } from "react";

import {
  ArrowLeft,
  FolderKanban,
  IndianRupee,
  CalendarDays,
  User,
  MapPin,
  Clock3,
  FileText,
} from "lucide-react";

import { NavLink } from "react-router-dom";

import AdminLayout from "../../../../components/admin/AdminLayout";

export default function EditOngoingProject() {

  // Dynamic State
  const [projectName, setProjectName] =
    useState("Road Development");

  const [ward, setWard] =
    useState("Ward 3");

  const [budget, setBudget] =
    useState("12,00,000");

  const [contractor, setContractor] =
    useState("ABC Constructions");

  const [startDate, setStartDate] =
    useState("2026-05-10");

  const [deadline, setDeadline] =
    useState("2026-12-15");

  const [progress, setProgress] =
    useState("72");

  const [status, setStatus] =
    useState("In Progress");

  const [description, setDescription] =
    useState(
      "Main road widening and drainage infrastructure development project."
    );

  return (
    <AdminLayout>

      {/* Header */}
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6 mb-10">

        <div>

          <div className="flex items-center gap-3 mb-4">

            <NavLink
              to="/admin/transparency/ongoingprojects-management"
              className="w-11 h-11 rounded-2xl bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition"
            >
              <ArrowLeft size={18} />
            </NavLink>

            <div>

              <p className="text-green-700 font-semibold">
                Transparency Administration
              </p>

              <h1 className="text-4xl md:text-5xl font-bold text-[#13284c] mt-2">
                Edit Ongoing Project
              </h1>
            </div>
          </div>

          <p className="text-gray-500 text-lg max-w-3xl">
            Update project details, progress tracking,
            and public infrastructure management.
          </p>
        </div>

        {/* Progress Card */}
        <div className="bg-gradient-to-r from-[#0b4f35] to-[#2bb673] rounded-3xl p-6 text-white min-w-[320px] shadow-xl">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-white/80">
                Project Progress
              </p>

              <h2 className="text-4xl font-bold mt-3">
                {progress || 0}%
              </h2>
            </div>

            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
              <Clock3 size={30} />
            </div>
          </div>

          <div className="mt-6 h-3 bg-white/20 rounded-full overflow-hidden">

            <div
              className="h-full bg-white rounded-full transition-all duration-500"
              style={{
                width: `${progress || 0}%`,
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
                Project Details
              </h2>

              <p className="text-gray-500 mt-2">
                Edit and manage ongoing project information.
              </p>
            </div>

            <div className="w-16 h-16 rounded-3xl bg-gradient-to-r from-green-600 to-emerald-500 text-white flex items-center justify-center shadow-lg">
              <FolderKanban size={30} />
            </div>
          </div>

          {/* Form */}
          <div className="grid md:grid-cols-2 gap-8">

            {/* Project Name */}
            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Project Name
              </label>

              <div className="h-16 rounded-2xl border border-gray-200 px-5 flex items-center gap-4 bg-[#fafafa]">

                <FolderKanban
                  size={20}
                  className="text-gray-400"
                />

                <input
                  type="text"
                  value={projectName}
                  onChange={(e) =>
                    setProjectName(e.target.value)
                  }
                  className="w-full outline-none bg-transparent text-lg"
                />
              </div>
            </div>

            {/* Ward */}
            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Ward
              </label>

              <div className="h-16 rounded-2xl border border-gray-200 px-5 flex items-center gap-4 bg-[#fafafa]">

                <MapPin
                  size={20}
                  className="text-gray-400"
                />

                <input
                  type="text"
                  value={ward}
                  onChange={(e) =>
                    setWard(e.target.value)
                  }
                  className="w-full outline-none bg-transparent text-lg"
                />
              </div>
            </div>

            {/* Budget */}
            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Budget
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
                  className="w-full outline-none bg-transparent text-lg"
                />
              </div>
            </div>

            {/* Contractor */}
            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Contractor
              </label>

              <div className="h-16 rounded-2xl border border-gray-200 px-5 flex items-center gap-4 bg-[#fafafa]">

                <User
                  size={20}
                  className="text-gray-400"
                />

                <input
                  type="text"
                  value={contractor}
                  onChange={(e) =>
                    setContractor(e.target.value)
                  }
                  className="w-full outline-none bg-transparent text-lg"
                />
              </div>
            </div>

            {/* Start Date */}
            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Start Date
              </label>

              <div className="h-16 rounded-2xl border border-gray-200 px-5 flex items-center gap-4 bg-[#fafafa]">

                <CalendarDays
                  size={20}
                  className="text-gray-400"
                />

                <input
                  type="date"
                  value={startDate}
                  onChange={(e) =>
                    setStartDate(e.target.value)
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

            {/* Progress */}
            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Progress %
              </label>

              <div className="h-16 rounded-2xl border border-gray-200 px-5 flex items-center gap-4 bg-[#fafafa]">

                <Clock3
                  size={20}
                  className="text-gray-400"
                />

                <input
                  type="number"
                  value={progress}
                  onChange={(e) =>
                    setProgress(e.target.value)
                  }
                  className="w-full outline-none bg-transparent text-lg"
                />
              </div>
            </div>

            {/* Status */}
            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Project Status
              </label>

              <select
                value={status}
                onChange={(e) =>
                  setStatus(e.target.value)
                }
                className="h-16 w-full rounded-2xl border border-gray-200 px-5 bg-[#fafafa] outline-none text-lg"
              >

                <option>
                  Planned
                </option>

                <option>
                  In Progress
                </option>

                <option>
                  Near Completion
                </option>

                <option>
                  Delayed
                </option>

                <option>
                  Completed
                </option>
              </select>
            </div>
          </div>

          {/* Description */}
          <div className="mt-10">

            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Project Description
            </label>

            <div className="rounded-3xl border border-gray-200 bg-[#fafafa] p-5">

              <textarea
                rows={7}
                value={description}
                onChange={(e) =>
                  setDescription(e.target.value)
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
                setProjectName("");
                setWard("");
                setBudget("");
                setContractor("");
                setStartDate("");
                setDeadline("");
                setProgress("");
                setStatus("");
                setDescription("");
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
              Live Summary
            </h3>

            <div className="space-y-5">

              <div className="flex justify-between items-center">

                <span className="text-gray-500">
                  Project
                </span>

                <span className="font-bold text-[#13284c]">
                  {projectName || "-"}
                </span>
              </div>

              <div className="flex justify-between items-center">

                <span className="text-gray-500">
                  Ward
                </span>

                <span className="font-bold text-[#13284c]">
                  {ward || "-"}
                </span>
              </div>

              <div className="flex justify-between items-center">

                <span className="text-gray-500">
                  Budget
                </span>

                <span className="font-bold text-green-700">
                  ₹{budget || 0}
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
                    Progress
                  </span>

                  <span className="font-semibold text-[#13284c]">
                    {progress || 0}%
                  </span>
                </div>

                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">

                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#0b4f35] to-[#2bb673]"
                    style={{
                      width: `${progress || 0}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Activity */}
          <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm p-8">

            <h3 className="text-2xl font-bold text-[#13284c] mb-6">
              Project Activity
            </h3>

            <div className="space-y-5">

              <div className="flex gap-4">

                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center">
                  <FileText size={20} />
                </div>

                <div>

                  <p className="font-semibold text-[#13284c]">
                    Project Updated
                  </p>

                  <p className="text-gray-500 text-sm mt-1">
                    Project details modified successfully.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">

                <div className="w-12 h-12 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center">
                  <Clock3 size={20} />
                </div>

                <div>

                  <p className="font-semibold text-[#13284c]">
                    Live Tracking
                  </p>

                  <p className="text-gray-500 text-sm mt-1">
                    Progress updates reflect instantly.
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