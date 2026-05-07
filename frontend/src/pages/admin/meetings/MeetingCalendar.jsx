import { useState } from "react";

import {
  ChevronLeft,
  ChevronRight,
  CalendarDays,
  Clock3,
  MapPin,
  Users,
  Plus,
} from "lucide-react";

import { NavLink } from "react-router-dom";

import AdminLayout from "../../../components/admin/AdminLayout";

export default function MeetingCalendarView() {

  // Dynamic Month State
  const [currentMonth, setCurrentMonth] =
    useState("May 2026");

  // Dynamic Selected Day
  const [selectedDate, setSelectedDate] =
    useState(14);

  // Meeting Events
  const meetings = [
    {
      id: 1,
      date: 4,
      title: "Village Development Meeting",
      time: "10:00 AM",
      location: "Panchayat Hall",
      attendees: 18,
      status: "Approved",
    },
    {
      id: 2,
      date: 8,
      title: "Water Supply Review",
      time: "02:30 PM",
      location: "Conference Room",
      attendees: 10,
      status: "Pending",
    },
    {
      id: 3,
      date: 14,
      title: "Budget Allocation Meeting",
      time: "11:00 AM",
      location: "Main Hall",
      attendees: 24,
      status: "Approved",
    },
    {
      id: 4,
      date: 14,
      title: "Road Infrastructure Planning",
      time: "04:00 PM",
      location: "Admin Office",
      attendees: 12,
      status: "Completed",
    },
    {
      id: 5,
      date: 22,
      title: "Public Welfare Committee",
      time: "01:00 PM",
      location: "Meeting Room 2",
      attendees: 16,
      status: "Pending",
    },
  ];

  // Dynamic Filter
  const selectedMeetings =
    meetings.filter(
      (item) => item.date === selectedDate
    );

  // Days
  const days = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ];

  // Calendar Dates
  const dates = Array.from(
    { length: 31 },
    (_, i) => i + 1
  );

  // Status Style
  const statusStyle = {
    Approved: "bg-green-100 text-green-700",
    Pending: "bg-yellow-100 text-yellow-700",
    Completed: "bg-blue-100 text-blue-700",
  };

  return (
    <AdminLayout>

      {/* Header */}
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6 mb-10">

        <div>

          <p className="text-green-700 font-semibold mb-2">
            Meetings Administration
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-[#13284c]">
            Calendar View
          </h1>

          <p className="text-gray-500 mt-4 text-lg max-w-3xl">
            Manage Panchayat meetings, schedules, approvals,
            and event planning through an interactive calendar.
          </p>
        </div>

        {/* Add Meeting */}
        <NavLink
          to="/admin/meetings-add"
          className="bg-[#0b4f35] hover:bg-[#083824] text-white px-6 py-4 rounded-2xl font-semibold transition flex items-center gap-3 w-fit"
        >
          <Plus size={20} />

          Add Meeting
        </NavLink>
      </div>

      {/* Top Stats */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">

        {/* Total Meetings */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex items-center justify-center mb-5">

            <CalendarDays size={24} />
          </div>

          <p className="text-gray-500">
            Total Meetings
          </p>

          <h2 className="text-4xl font-bold text-[#13284c] mt-3">
            {meetings.length}
          </h2>
        </div>

        {/* Approved */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-500 text-white flex items-center justify-center mb-5">

            <Users size={24} />
          </div>

          <p className="text-gray-500">
            Approved Meetings
          </p>

          <h2 className="text-4xl font-bold text-green-600 mt-3">
            {
              meetings.filter(
                (item) =>
                  item.status === "Approved"
              ).length
            }
          </h2>
        </div>

        {/* Pending */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 text-white flex items-center justify-center mb-5">

            <Clock3 size={24} />
          </div>

          <p className="text-gray-500">
            Pending Meetings
          </p>

          <h2 className="text-4xl font-bold text-yellow-600 mt-3">
            {
              meetings.filter(
                (item) =>
                  item.status === "Pending"
              ).length
            }
          </h2>
        </div>
      </div>

      {/* Main Layout */}
      <div className="grid xl:grid-cols-[1fr_380px] gap-8">

        {/* Calendar */}
        <div className="bg-white rounded-[36px] border border-gray-100 shadow-sm overflow-hidden">

          {/* Calendar Header */}
          <div className="px-8 py-6 border-b border-gray-100 flex items-center justify-between">

            <div>

              <h2 className="text-2xl font-bold text-[#13284c]">
                Meeting Calendar
              </h2>

              <p className="text-gray-500 mt-2">
                View and manage all scheduled Panchayat meetings.
              </p>
            </div>

            {/* Month Switch */}
            <div className="flex items-center gap-3">

              <button className="w-11 h-11 rounded-2xl bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition">

                <ChevronLeft size={20} />
              </button>

              <div className="px-5 h-11 rounded-2xl bg-[#f8fafc] flex items-center font-semibold text-[#13284c]">
                {currentMonth}
              </div>

              <button className="w-11 h-11 rounded-2xl bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition">

                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Days */}
          <div className="grid grid-cols-7 border-b border-gray-100 bg-[#f8fafc]">

            {days.map((day, index) => (
              <div
                key={index}
                className="p-5 text-center font-semibold text-gray-500"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7">

            {dates.map((date) => {

              const dayMeetings =
                meetings.filter(
                  (item) =>
                    item.date === date
                );

              const isSelected =
                selectedDate === date;

              return (
                <button
                  key={date}
                  onClick={() =>
                    setSelectedDate(date)
                  }
                  className={`min-h-[140px] border border-gray-100 p-3 text-left transition relative hover:bg-[#f8fafc] ${
                    isSelected
                      ? "bg-[#ecfdf5]"
                      : "bg-white"
                  }`}
                >

                  {/* Date */}
                  <div className="flex items-center justify-between">

                    <span
                      className={`w-9 h-9 rounded-xl flex items-center justify-center font-semibold ${
                        isSelected
                          ? "bg-[#0b4f35] text-white"
                          : "text-[#13284c]"
                      }`}
                    >
                      {date}
                    </span>

                    {dayMeetings.length > 0 && (
                      <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700 font-medium">
                        {dayMeetings.length}
                      </span>
                    )}
                  </div>

                  {/* Events */}
                  <div className="mt-4 space-y-2">

                    {dayMeetings
                      .slice(0, 2)
                      .map((event) => (
                        <div
                          key={event.id}
                          className="px-3 py-2 rounded-xl bg-[#f4f7fb] text-xs text-[#13284c] font-medium truncate"
                        >
                          {event.title}
                        </div>
                      ))}

                    {dayMeetings.length > 2 && (
                      <div className="text-xs text-gray-500 font-medium">
                        +{dayMeetings.length - 2} more
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">

          {/* Selected Day */}
          <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm p-8">

            <div className="flex items-center justify-between mb-6">

              <div>

                <h3 className="text-2xl font-bold text-[#13284c]">
                  Meetings
                </h3>

                <p className="text-gray-500 mt-1">
                  {selectedDate} {currentMonth}
                </p>
              </div>

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-[#0b4f35] to-[#2bb673] text-white flex items-center justify-center">

                <CalendarDays size={24} />
              </div>
            </div>

            {/* Meetings List */}
            <div className="space-y-5">

              {selectedMeetings.length > 0 ? (
                selectedMeetings.map((meeting) => (
                  <div
                    key={meeting.id}
                    className="border border-gray-100 rounded-3xl p-5 hover:shadow-md transition"
                  >

                    <div className="flex items-start justify-between gap-4">

                      <div>

                        <h4 className="font-bold text-[#13284c] text-lg">
                          {meeting.title}
                        </h4>

                        <div className="space-y-3 mt-4">

                          <div className="flex items-center gap-3 text-gray-500">

                            <Clock3 size={16} />

                            <span>
                              {meeting.time}
                            </span>
                          </div>

                          <div className="flex items-center gap-3 text-gray-500">

                            <MapPin size={16} />

                            <span>
                              {meeting.location}
                            </span>
                          </div>

                          <div className="flex items-center gap-3 text-gray-500">

                            <Users size={16} />

                            <span>
                              {meeting.attendees} attendees
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Status */}
                      <span
                        className={`px-4 py-2 rounded-full text-sm font-semibold ${statusStyle[meeting.status]}`}
                      >
                        {meeting.status}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="rounded-3xl border border-dashed border-gray-200 p-10 text-center">

                  <CalendarDays
                    size={40}
                    className="mx-auto text-gray-300 mb-4"
                  />

                  <h4 className="font-semibold text-[#13284c] text-lg">
                    No Meetings Scheduled
                  </h4>

                  <p className="text-gray-500 mt-2">
                    There are no meetings planned for this date.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm p-8">

            <h3 className="text-2xl font-bold text-[#13284c] mb-6">
              Quick Actions
            </h3>

            <div className="space-y-4">

              <NavLink
                to="/admin/meetings-add"
                className="w-full bg-[#0b4f35] hover:bg-[#083824] text-white py-4 rounded-2xl font-semibold transition flex items-center justify-center gap-3"
              >
                <Plus size={20} />

                Schedule Meeting
              </NavLink>

              <button className="w-full border border-gray-200 py-4 rounded-2xl font-semibold hover:bg-gray-50 transition">
                Export Calendar
              </button>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}