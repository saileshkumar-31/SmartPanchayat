import { useEffect, useState } from "react";

import {
  Search,
  CalendarDays,
  Clock3,
  MapPin,
  Users,
  CheckCircle2,
  Plus,
  Pencil,
  Trash2,
  Bell,
  FileText,
} from "lucide-react";

import { NavLink } from "react-router-dom";

import AdminLayout from "../../../components/admin/AdminLayout";
import { api } from "../../../lib/api";

export default function MeetingSchedule() {

  // Dynamic State
  const [meetings, setMeetings] = useState([]);

  const loadMeetings = async () => {
    const res = await api.get("/meetings");
    setMeetings(
      res.data.map((item) => ({
        id: item.meeting_id,
        title: item.title,
        date: new Date(item.date).toLocaleDateString(),
        rawDate: item.date,
        time: item.time,
        location: item.venue,
        participants: item.attendees,
        organizer: item.type,
        status: item.status,
      }))
    );
  };

  useEffect(() => {
    loadMeetings().catch((error) => alert(error.message));
  }, []);

  // Status Update
  const updateStatus = async (id, newStatus) => {
    const meeting = meetings.find((item) => item.id === id);
    await api.put(`/meetings/${id}`, {
      title: meeting.title,
      date: meeting.rawDate,
      time: meeting.time,
      venue: meeting.location,
      type: meeting.organizer,
      attendees: meeting.participants,
      status: newStatus,
    });
    await loadMeetings();
  };

  const statusStyle = {
    Upcoming: "bg-blue-100 text-blue-700",
    Scheduled: "bg-yellow-100 text-yellow-700",
    Completed: "bg-green-100 text-green-700",
  };

  // Stats
  const totalMeetings = meetings.length;

  const upcomingMeetings = meetings.filter(
    (item) => item.status === "Upcoming"
  ).length;

  const scheduledMeetings = meetings.filter(
    (item) => item.status === "Scheduled"
  ).length;

  const completedMeetings = meetings.filter(
    (item) => item.status === "Completed"
  ).length;

  return (
    <AdminLayout>

      {/* Header */}
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6 mb-10">

        <div>

          <p className="text-green-700 font-semibold mb-2">
            Panchayat Meeting Administration
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-[#13284c]">
            Meeting Schedule
          </h1>

          <p className="text-gray-500 mt-4 text-lg max-w-3xl">
            Organize and manage all approved Panchayat meetings, schedules, agendas, and public participation.
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
            placeholder="Search meetings..."
            className="bg-transparent outline-none w-full"
          />
        </div>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6 mb-10">

        {/* Total */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex items-center justify-center mb-5">
            <CalendarDays size={24} />
          </div>

          <p className="text-gray-500">
            Total Meetings
          </p>

          <h2 className="text-4xl font-bold text-[#13284c] mt-3">
            {totalMeetings}
          </h2>
        </div>

        {/* Upcoming */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-500 text-white flex items-center justify-center mb-5">
            <Clock3 size={24} />
          </div>

          <p className="text-gray-500">
            Upcoming
          </p>

          <h2 className="text-4xl font-bold text-purple-700 mt-3">
            {upcomingMeetings}
          </h2>
        </div>

        {/* Scheduled */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-orange-500 to-yellow-500 text-white flex items-center justify-center mb-5">
            <Bell size={24} />
          </div>

          <p className="text-gray-500">
            Scheduled
          </p>

          <h2 className="text-4xl font-bold text-orange-600 mt-3">
            {scheduledMeetings}
          </h2>
        </div>

        {/* Completed */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-500 text-white flex items-center justify-center mb-5">
            <CheckCircle2 size={24} />
          </div>

          <p className="text-gray-500">
            Completed
          </p>

          <h2 className="text-4xl font-bold text-green-600 mt-3">
            {completedMeetings}
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
                Scheduled Meetings
              </h2>

              <p className="text-gray-500 mt-2">
                Manage approved meetings, schedules, and public sessions.
              </p>
            </div>

            {/* Add Meeting */}
            <NavLink
              to="/admin/meetings-add"
              className="bg-[#0b4f35] hover:bg-[#083824] text-white px-6 py-3 rounded-2xl font-semibold transition flex items-center gap-2"
            >
              <Plus size={18} />

              Add Meeting
            </NavLink>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-[#f8fafc]">

              <tr>

                <th className="text-left p-6 text-gray-500 font-semibold">
                  Meeting ID
                </th>

                <th className="text-left p-6 text-gray-500 font-semibold">
                  Meeting Title
                </th>

                <th className="text-left p-6 text-gray-500 font-semibold">
                  Schedule
                </th>

                <th className="text-left p-6 text-gray-500 font-semibold">
                  Location
                </th>

                <th className="text-left p-6 text-gray-500 font-semibold">
                  Participants
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

              {meetings.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-100 hover:bg-[#f8fafc] transition"
                >

                  {/* ID */}
                  <td className="p-6 font-semibold text-[#13284c]">
                    {item.id}
                  </td>

                  {/* Title */}
                  <td className="p-6">

                    <div>

                      <h3 className="font-semibold text-[#13284c]">
                        {item.title}
                      </h3>

                      <p className="text-gray-500 text-sm mt-1">
                        Organized by {item.organizer}
                      </p>
                    </div>
                  </td>

                  {/* Schedule */}
                  <td className="p-6">

                    <div className="space-y-2">

                      <div className="flex items-center gap-2 text-gray-600 text-sm">

                        <CalendarDays size={16} />

                        {item.date}
                      </div>

                      <div className="flex items-center gap-2 text-gray-600 text-sm">

                        <Clock3 size={16} />

                        {item.time}
                      </div>
                    </div>
                  </td>

                  {/* Location */}
                  <td className="p-6">

                    <div className="flex items-center gap-2 text-gray-600">

                      <MapPin size={16} />

                      {item.location}
                    </div>
                  </td>

                  {/* Participants */}
                  <td className="p-6">

                    <div className="flex items-center gap-2 text-gray-600">

                      <Users size={16} />

                      {item.participants}
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

                      {/* Edit */}
                      <NavLink
                        to="/admin/meetings-edit"
                        className="w-11 h-11 rounded-xl bg-green-100 text-green-700 flex items-center justify-center hover:scale-105 transition"
                      >
                        <Pencil size={18} />
                      </NavLink>

                      {/* Complete */}
                      <button
                        onClick={() =>
                          updateStatus(
                            item.id,
                            "Completed"
                          )
                        }
                        className="w-11 h-11 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center hover:scale-105 transition"
                      >
                        <CheckCircle2 size={18} />
                      </button>

                      {/* Minutes */}
                      <button className="w-11 h-11 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center hover:scale-105 transition">
                        <FileText size={18} />
                      </button>

                      {/* Delete */}
                      <button className="w-11 h-11 rounded-xl bg-red-100 text-red-700 flex items-center justify-center hover:scale-105 transition">
                        <Trash2 size={18} />
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
