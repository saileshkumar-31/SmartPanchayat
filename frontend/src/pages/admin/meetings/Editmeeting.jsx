import { useState } from "react";

import {
  ArrowLeft,
  CalendarDays,
  Clock3,
  MapPin,
  Users,
  FileText,
  Bell,
  Save,
  ClipboardList,
  UserRound,
  CheckCircle2,
} from "lucide-react";

import { NavLink } from "react-router-dom";

import AdminLayout from "../../../components/admin/AdminLayout";

export default function EditMeeting() {

  // Dynamic State
  const [title, setTitle] =
    useState("Gram Sabha Meeting");

  const [organizer, setOrganizer] =
    useState("Panchayat Office");

  const [date, setDate] =
    useState("2026-05-18");

  const [time, setTime] =
    useState("10:00");

  const [location, setLocation] =
    useState("Community Hall");

  const [participants, setParticipants] =
    useState("82");

  const [status, setStatus] =
    useState("Upcoming");

  const [agenda, setAgenda] =
    useState(
      "Village development planning, water supply discussion, road maintenance review."
    );

  const [notes, setNotes] =
    useState(
      "Ensure all ward representatives attend the session."
    );

  const [sendNotification, setSendNotification] =
    useState(true);

  return (
    <AdminLayout>

      {/* Header */}
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6 mb-10">

        <div>

          <div className="flex items-center gap-3 mb-4">

            <NavLink
              to="/admin/meetings"
              className="w-11 h-11 rounded-2xl bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition"
            >
              <ArrowLeft size={18} />
            </NavLink>

            <div>

              <p className="text-green-700 font-semibold">
                Panchayat Meeting Administration
              </p>

              <h1 className="text-4xl md:text-5xl font-bold text-[#13284c] mt-2">
                Edit Meeting
              </h1>
            </div>
          </div>

          <p className="text-gray-500 text-lg max-w-3xl">
            Update meeting schedules, agendas, participation details,
            and public session information.
          </p>
        </div>

        {/* Status Card */}
        <div className="bg-gradient-to-r from-[#0b4f35] to-[#2bb673] rounded-3xl p-6 text-white min-w-[320px] shadow-xl">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-white/80">
                Meeting Status
              </p>

              <h2 className="text-4xl font-bold mt-3">
                {status}
              </h2>
            </div>

            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
              <CheckCircle2 size={30} />
            </div>
          </div>

          <p className="mt-6 text-sm text-white/80">
            Keep meeting information updated for public transparency.
          </p>
        </div>
      </div>

      {/* Main Layout */}
      <div className="grid xl:grid-cols-[1fr_360px] gap-8">

        {/* Left */}
        <div className="bg-white rounded-[36px] border border-gray-100 shadow-sm p-8 md:p-10">

          {/* Top */}
          <div className="flex items-center justify-between mb-10">

            <div>

              <h2 className="text-2xl font-bold text-[#13284c]">
                Meeting Details
              </h2>

              <p className="text-gray-500 mt-2">
                Edit Panchayat meeting schedule and public session data.
              </p>
            </div>

            <div className="w-16 h-16 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex items-center justify-center shadow-lg">
              <ClipboardList size={30} />
            </div>
          </div>

          {/* Form */}
          <div className="grid md:grid-cols-2 gap-8">

            {/* Title */}
            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Meeting Title
              </label>

              <div className="h-16 rounded-2xl border border-gray-200 px-5 flex items-center gap-4 bg-[#fafafa]">

                <ClipboardList
                  size={20}
                  className="text-gray-400"
                />

                <input
                  type="text"
                  value={title}
                  onChange={(e) =>
                    setTitle(e.target.value)
                  }
                  className="w-full bg-transparent outline-none text-lg"
                />
              </div>
            </div>

            {/* Organizer */}
            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Organizer
              </label>

              <div className="h-16 rounded-2xl border border-gray-200 px-5 flex items-center gap-4 bg-[#fafafa]">

                <UserRound
                  size={20}
                  className="text-gray-400"
                />

                <input
                  type="text"
                  value={organizer}
                  onChange={(e) =>
                    setOrganizer(e.target.value)
                  }
                  className="w-full bg-transparent outline-none text-lg"
                />
              </div>
            </div>

            {/* Date */}
            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Meeting Date
              </label>

              <div className="h-16 rounded-2xl border border-gray-200 px-5 flex items-center gap-4 bg-[#fafafa]">

                <CalendarDays
                  size={20}
                  className="text-gray-400"
                />

                <input
                  type="date"
                  value={date}
                  onChange={(e) =>
                    setDate(e.target.value)
                  }
                  className="w-full bg-transparent outline-none text-lg"
                />
              </div>
            </div>

            {/* Time */}
            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Meeting Time
              </label>

              <div className="h-16 rounded-2xl border border-gray-200 px-5 flex items-center gap-4 bg-[#fafafa]">

                <Clock3
                  size={20}
                  className="text-gray-400"
                />

                <input
                  type="time"
                  value={time}
                  onChange={(e) =>
                    setTime(e.target.value)
                  }
                  className="w-full bg-transparent outline-none text-lg"
                />
              </div>
            </div>

            {/* Location */}
            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Location
              </label>

              <div className="h-16 rounded-2xl border border-gray-200 px-5 flex items-center gap-4 bg-[#fafafa]">

                <MapPin
                  size={20}
                  className="text-gray-400"
                />

                <input
                  type="text"
                  value={location}
                  onChange={(e) =>
                    setLocation(e.target.value)
                  }
                  className="w-full bg-transparent outline-none text-lg"
                />
              </div>
            </div>

            {/* Participants */}
            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Participants
              </label>

              <div className="h-16 rounded-2xl border border-gray-200 px-5 flex items-center gap-4 bg-[#fafafa]">

                <Users
                  size={20}
                  className="text-gray-400"
                />

                <input
                  type="number"
                  value={participants}
                  onChange={(e) =>
                    setParticipants(e.target.value)
                  }
                  className="w-full bg-transparent outline-none text-lg"
                />
              </div>
            </div>

            {/* Status */}
            <div className="md:col-span-2">

              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Meeting Status
              </label>

              <select
                value={status}
                onChange={(e) =>
                  setStatus(e.target.value)
                }
                className="h-16 w-full rounded-2xl border border-gray-200 px-5 bg-[#fafafa] outline-none text-lg"
              >

                <option>
                  Upcoming
                </option>

                <option>
                  Scheduled
                </option>

                <option>
                  Completed
                </option>

                <option>
                  Cancelled
                </option>
              </select>
            </div>
          </div>

          {/* Agenda */}
          <div className="mt-10">

            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Meeting Agenda
            </label>

            <div className="rounded-3xl border border-gray-200 bg-[#fafafa] p-5">

              <textarea
                rows={5}
                value={agenda}
                onChange={(e) =>
                  setAgenda(e.target.value)
                }
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
                setOrganizer("");
                setDate("");
                setTime("");
                setLocation("");
                setParticipants("");
                setStatus("");
                setAgenda("");
                setNotes("");
                setSendNotification(false);
              }}
              className="px-8 py-4 rounded-2xl border border-gray-200 font-semibold hover:bg-gray-50 transition"
            >
              Cancel
            </button>

            {/* Save */}
            <button className="bg-gradient-to-r from-[#0b4f35] to-[#2bb673] hover:opacity-95 text-white px-8 py-4 rounded-2xl font-semibold transition flex items-center justify-center gap-3 shadow-lg">

              <Save size={20} />

              Save Changes
            </button>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">

          {/* Summary */}
          <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm p-8">

            <h3 className="text-2xl font-bold text-[#13284c] mb-6">
              Meeting Summary
            </h3>

            <div className="space-y-5">

              <div className="flex justify-between">

                <span className="text-gray-500">
                  Meeting
                </span>

                <span className="font-bold text-[#13284c]">
                  {title || "-"}
                </span>
              </div>

              <div className="flex justify-between">

                <span className="text-gray-500">
                  Organizer
                </span>

                <span className="font-bold text-[#13284c]">
                  {organizer || "-"}
                </span>
              </div>

              <div className="flex justify-between">

                <span className="text-gray-500">
                  Date
                </span>

                <span className="font-bold text-blue-700">
                  {date || "-"}
                </span>
              </div>

              <div className="flex justify-between">

                <span className="text-gray-500">
                  Participants
                </span>

                <span className="font-bold text-green-700">
                  {participants || 0}
                </span>
              </div>

              <div className="flex justify-between">

                <span className="text-gray-500">
                  Status
                </span>

                <span className="font-bold text-purple-700">
                  {status}
                </span>
              </div>
            </div>
          </div>

          {/* Notification */}
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
                  Send updated meeting schedule notifications to citizens and departments.
                </p>

                <label className="flex items-center gap-3 mt-5">

                  <input
                    type="checkbox"
                    checked={sendNotification}
                    onChange={() =>
                      setSendNotification(
                        !sendNotification
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

          {/* Activity */}
          <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm p-8">

            <h3 className="text-2xl font-bold text-[#13284c] mb-6">
              Recent Activity
            </h3>

            <div className="space-y-5">

              <div className="flex gap-4">

                <div className="w-12 h-12 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center">
                  <CheckCircle2 size={20} />
                </div>

                <div>

                  <p className="font-semibold text-[#13284c]">
                    Meeting Updated
                  </p>

                  <p className="text-gray-500 text-sm mt-1">
                    Meeting details modified successfully.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">

                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center">
                  <FileText size={20} />
                </div>

                <div>

                  <p className="font-semibold text-[#13284c]">
                    Agenda Published
                  </p>

                  <p className="text-gray-500 text-sm mt-1">
                    Citizens can view meeting agenda publicly.
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