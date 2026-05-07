import {
  CalendarDays,
  Users,
  ClipboardCheck,
  Clock3,
  Bell,
  FileText,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

import { NavLink } from "react-router-dom";

import AdminLayout from "../../../components/admin/AdminLayout";

export default function MeetingsDashboard() {

  const stats = [
    {
      title: "Total Meetings",
      value: "48",
      icon: <CalendarDays size={24} />,
      color:
        "from-blue-600 to-cyan-500",
    },
    {
      title: "Pending Requests",
      value: "12",
      icon: <ClipboardCheck size={24} />,
      color:
        "from-orange-500 to-yellow-500",
    },
    {
      title: "Upcoming Meetings",
      value: "7",
      icon: <Clock3 size={24} />,
      color:
        "from-purple-600 to-indigo-500",
    },
    {
      title: "Notifications Sent",
      value: "134",
      icon: <Bell size={24} />,
      color:
        "from-green-600 to-emerald-500",
    },
  ];

  const recentMeetings = [
    {
      title: "Gram Sabha Meeting",
      date: "18 May 2026",
      status: "Upcoming",
      attendees: 82,
    },
    {
      title: "Budget Planning Discussion",
      date: "15 May 2026",
      status: "Completed",
      attendees: 34,
    },
    {
      title: "Water Supply Review",
      date: "20 May 2026",
      status: "Scheduled",
      attendees: 26,
    },
  ];

  const quickActions = [
    {
      title: "Meeting Requests",
      description:
        "Review citizen meeting requests and approvals.",
      link: "/admin/meetings/meeting-requests",
      icon: <ClipboardCheck size={24} />,
    },
    {
      title: "Meeting Schedule",
      description:
        "Manage upcoming Panchayat meetings and agendas.",
      link: "/admin/meetings/meeting-schedule",
      icon: <Clock3 size={24} />,
    },
    {
      title: "Calendar View",
      description:
        "Visualize all meetings in calendar format.",
      link: "/admin/meetings/calendar-view",
      icon: <CalendarDays size={24} />,
    },
  ];

  return (
    <AdminLayout>

      {/* Header */}
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6 mb-10">

        <div>

          <p className="text-green-700 font-semibold mb-2">
            Panchayat Meeting Administration
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-[#13284c]">
            Meetings Dashboard
          </h1>

          <p className="text-gray-500 mt-4 text-lg max-w-3xl">
            Manage Panchayat meetings, citizen requests,
            schedules, notifications, and public participation.
          </p>
        </div>

        {/* Header Card */}
        <div className="bg-gradient-to-r from-[#0b4f35] to-[#2bb673] rounded-3xl p-6 text-white min-w-[320px] shadow-xl">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-white/80">
                Upcoming Meetings
              </p>

              <h2 className="text-5xl font-bold mt-3">
                7
              </h2>
            </div>

            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
              <CalendarDays size={32} />
            </div>
          </div>

          <p className="mt-6 text-sm text-white/80">
            Scheduled meetings across all wards this month.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">

        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm"
          >

            <div
              className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${item.color} text-white flex items-center justify-center mb-5`}
            >
              {item.icon}
            </div>

            <p className="text-gray-500">
              {item.title}
            </p>

            <h2 className="text-4xl font-bold text-[#13284c] mt-3">
              {item.value}
            </h2>
          </div>
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid xl:grid-cols-[1fr_360px] gap-8">

        {/* Left */}
        <div className="space-y-8">

          {/* Quick Actions */}
          <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm p-8">

            <div className="flex items-center justify-between mb-8">

              <div>

                <h2 className="text-2xl font-bold text-[#13284c]">
                  Quick Actions
                </h2>

                <p className="text-gray-500 mt-2">
                  Navigate through meeting management modules.
                </p>
              </div>

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-[#0b4f35] to-[#2bb673] text-white flex items-center justify-center">
                <TrendingUp size={26} />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">

              {quickActions.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.link}
                  className="group rounded-3xl border border-gray-100 p-6 hover:border-[#0b4f35] hover:shadow-lg transition"
                >

                  <div className="w-14 h-14 rounded-2xl bg-green-100 text-[#0b4f35] flex items-center justify-center mb-5">
                    {item.icon}
                  </div>

                  <h3 className="text-xl font-bold text-[#13284c]">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 mt-3 leading-7">
                    {item.description}
                  </p>

                  <div className="flex items-center gap-2 mt-6 text-[#0b4f35] font-semibold">

                    Open

                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition"
                    />
                  </div>
                </NavLink>
              ))}
            </div>
          </div>

          {/* Recent Meetings */}
          <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden">

            <div className="px-8 py-6 border-b border-gray-100">

              <h2 className="text-2xl font-bold text-[#13284c]">
                Recent Meetings
              </h2>

              <p className="text-gray-500 mt-2">
                Monitor recently conducted and upcoming meetings.
              </p>
            </div>

            <div className="divide-y divide-gray-100">

              {recentMeetings.map((meeting, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 p-8 hover:bg-[#fafafa] transition"
                >

                  <div>

                    <h3 className="text-xl font-bold text-[#13284c]">
                      {meeting.title}
                    </h3>

                    <p className="text-gray-500 mt-2">
                      {meeting.date}
                    </p>
                  </div>

                  <div className="flex items-center gap-6">

                    <div className="flex items-center gap-2 text-gray-500">

                      <Users size={18} />

                      {meeting.attendees}
                    </div>

                    <span
                      className={`px-4 py-2 rounded-full text-sm font-semibold ${
                        meeting.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : meeting.status === "Upcoming"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {meeting.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">

          {/* Meeting Insights */}
          <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm p-8">

            <h3 className="text-2xl font-bold text-[#13284c] mb-6">
              Meeting Insights
            </h3>

            <div className="space-y-6">

              <div className="flex gap-4">

                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center">
                  <CalendarDays size={20} />
                </div>

                <div>

                  <p className="font-semibold text-[#13284c]">
                    Monthly Meetings
                  </p>

                  <p className="text-gray-500 text-sm mt-1">
                    18 meetings scheduled this month.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">

                <div className="w-12 h-12 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center">
                  <Users size={20} />
                </div>

                <div>

                  <p className="font-semibold text-[#13284c]">
                    Citizen Participation
                  </p>

                  <p className="text-gray-500 text-sm mt-1">
                    Increased public participation by 24%.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">

                <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-700 flex items-center justify-center">
                  <FileText size={20} />
                </div>

                <div>

                  <p className="font-semibold text-[#13284c]">
                    Minutes Uploaded
                  </p>

                  <p className="text-gray-500 text-sm mt-1">
                    32 meeting reports published publicly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Activity Timeline */}
          <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm p-8">

            <h3 className="text-2xl font-bold text-[#13284c] mb-6">
              Recent Activity
            </h3>

            <div className="space-y-6">

              <div className="border-l-2 border-green-500 pl-5">

                <p className="font-semibold text-[#13284c]">
                  New Meeting Request
                </p>

                <p className="text-gray-500 text-sm mt-2">
                  Ward 4 residents submitted a public meeting request.
                </p>
              </div>

              <div className="border-l-2 border-blue-500 pl-5">

                <p className="font-semibold text-[#13284c]">
                  Meeting Approved
                </p>

                <p className="text-gray-500 text-sm mt-2">
                  Water Supply Committee meeting approved for 20 May.
                </p>
              </div>

              <div className="border-l-2 border-orange-500 pl-5">

                <p className="font-semibold text-[#13284c]">
                  Minutes Published
                </p>

                <p className="text-gray-500 text-sm mt-2">
                  Gram Sabha meeting minutes uploaded successfully.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}