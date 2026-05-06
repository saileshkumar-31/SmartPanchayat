import {
  User,
  Bell,
  FileText,
  AlertTriangle,
  BadgeCheck,
  ArrowRight,
  CalendarDays,
} from "lucide-react";

export default function CitizenDashboard() {

  const stats = [
    {
      title: "Applications",
      value: "12",
      icon: <FileText size={24} />,
      color: "from-blue-600 to-cyan-500",
    },
    {
      title: "Complaints",
      value: "5",
      icon: <AlertTriangle size={24} />,
      color: "from-red-500 to-pink-500",
    },
    {
      title: "Approved",
      value: "8",
      icon: <BadgeCheck size={24} />,
      color: "from-green-600 to-emerald-500",
    },
    {
      title: "Meetings",
      value: "3",
      icon: <CalendarDays size={24} />,
      color: "from-purple-600 to-indigo-500",
    },
  ];

  const activities = [
    {
      title: "Income Certificate Approved",
      time: "2 hours ago",
    },
    {
      title: "Streetlight Complaint Resolved",
      time: "Yesterday",
    },
    {
      title: "New Gram Sabha Meeting Announced",
      time: "2 days ago",
    },
  ];

  const quickActions = [
    "Apply Certificate",
    "Track Application",
    "Raise Complaint",
    "View Schemes",
    "Transparency Portal",
    "Meetings",
  ];

  return (
    <div className="min-h-screen bg-[#f5f7fb] p-6 md:p-10">

      {/* Top Header */}
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6 mb-10">

        {/* Left */}
        <div>
          <p className="text-green-700 font-semibold mb-2">
            Welcome Back 👋
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-[#13284c]">
            Citizen Dashboard
          </h1>

          <p className="text-gray-500 mt-4 text-lg max-w-2xl">
            Manage your applications, complaints, schemes, and Panchayat services from one place.
          </p>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm flex items-center gap-4 min-w-[300px]">

          <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#0b4f35] to-[#2bb673] text-white flex items-center justify-center">
            <User size={30} />
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800">
              Sailesh Kumar
            </h3>

            <p className="text-gray-500 mt-1">
              Citizen ID: CTZ-1024
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">

        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition"
          >

            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${item.color} text-white flex items-center justify-center mb-5`}>
              {item.icon}
            </div>

            <p className="text-gray-500 text-sm">
              {item.title}
            </p>

            <h2 className="text-4xl font-bold text-[#13284c] mt-2">
              {item.value}
            </h2>
          </div>
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid xl:grid-cols-3 gap-8">

        {/* Left Section */}
        <div className="xl:col-span-2 space-y-8">

          {/* Quick Actions */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">

            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-[#13284c]">
                Quick Actions
              </h2>

              <button className="text-green-700 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                View All
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-5">

              {quickActions.map((item, index) => (
                <button
                  key={index}
                  className="bg-[#f8fafc] hover:bg-[#eefbf5] rounded-2xl p-5 border border-gray-100 text-left transition"
                >
                  <h3 className="font-semibold text-[#13284c] text-lg">
                    {item}
                  </h3>
                </button>
              ))}
            </div>
          </div>

          {/* Recent Applications */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">

            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-[#13284c]">
                Recent Applications
              </h2>

              <button className="text-green-700 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                View All
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="space-y-5">

              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 bg-[#f8fafc] rounded-2xl p-5 border border-gray-100"
                >

                  <div>
                    <h3 className="font-bold text-[#13284c] text-lg">
                      Income Certificate
                    </h3>

                    <p className="text-gray-500 mt-1">
                      Application ID: APP-2026-{item}
                    </p>
                  </div>

                  <span className="px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold w-fit">
                    Approved
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-8">

          {/* Notifications */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">

            <div className="flex items-center gap-3 mb-8">

              <div className="w-12 h-12 rounded-2xl bg-[#eefbf5] text-[#0b4f35] flex items-center justify-center">
                <Bell size={22} />
              </div>

              <h2 className="text-2xl font-bold text-[#13284c]">
                Notifications
              </h2>
            </div>

            <div className="space-y-5">

              {activities.map((item, index) => (
                <div
                  key={index}
                  className="border-b border-gray-100 pb-5 last:border-none"
                >
                  <h3 className="font-semibold text-[#13284c] leading-relaxed">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 text-sm mt-2">
                    {item.time}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Completion */}
          <div className="bg-gradient-to-r from-[#0b4f35] to-[#2bb673] rounded-3xl p-8 text-white shadow-lg">

            <h2 className="text-3xl font-bold mb-5">
              Profile Completion
            </h2>

            <div className="flex items-center justify-between mb-3">
              <span className="text-white/90">
                Completed
              </span>

              <span className="font-bold">
                80%
              </span>
            </div>

            <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden mb-6">
              <div className="bg-white h-full w-[80%] rounded-full" />
            </div>

            <button className="bg-white text-[#0b4f35] px-6 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition">
              Complete Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}