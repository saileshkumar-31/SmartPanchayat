import { useEffect, useState } from "react";
import {
  FileText,
  AlertTriangle,
  Users,
  BadgeCheck,
  ArrowRight,
  Bell,
} from "lucide-react";

import AdminLayout from "../../components/admin/AdminLayout";
import { api } from "../../lib/api";

export default function AdminDashboard() {

  const [summary, setSummary] = useState({
    applications: 0,
    complaints: 0,
    users: 0,
    pendingApplications: 0,
  });

  useEffect(() => {
    api.get("/dashboard/summary")
      .then((res) => setSummary(res.data))
      .catch(() => {});
  }, []);

  const stats = [
    {
      title: "Applications",
      value: summary.applications,
      icon: <FileText size={24} />,
      color: "from-blue-600 to-cyan-500",
    },
    {
      title: "Complaints",
      value: summary.complaints,
      icon: <AlertTriangle size={24} />,
      color: "from-red-500 to-pink-500",
    },
    {
      title: "Citizens",
      value: summary.users,
      icon: <Users size={24} />,
      color: "from-purple-600 to-indigo-500",
    },
    {
      title: "Approved",
      value: summary.applications - summary.pendingApplications,
      icon: <BadgeCheck size={24} />,
      color: "from-green-600 to-emerald-500",
    },
  ];

  const activities = [
    {
      title: "Income Certificate Approved",
      time: "10 mins ago",
    },
    {
      title: "New Complaint Registered",
      time: "25 mins ago",
    },
    {
      title: "Tender Updated",
      time: "1 hour ago",
    },
  ];

  return (
    <AdminLayout>

      {/* Header */}
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6 mb-10">

        <div>

          <p className="text-green-700 font-semibold mb-2">
            Panchayat Administration
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-[#13284c]">
            Admin Dashboard
          </h1>

          <p className="text-gray-500 mt-4 text-lg max-w-2xl">
            Monitor applications, complaints, citizen services, and Panchayat operations.
          </p>
        </div>

        {/* Admin Card */}
        <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm min-w-[280px]">

          <h3 className="text-2xl font-bold text-[#13284c]">
            Village Admin
          </h3>

          <p className="text-gray-500 mt-2">
            Super Administrator
          </p>
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

        {/* Left */}
        <div className="xl:col-span-2 space-y-8">

          {/* Pending Applications */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">

            <div className="flex items-center justify-between mb-8">

              <h2 className="text-3xl font-bold text-[#13284c]">
                Pending Applications
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
                      Applicant ID: APP-2026-{item}
                    </p>
                  </div>

                  <button className="px-5 py-2 rounded-xl bg-[#0b4f35] text-white font-semibold w-fit hover:opacity-90 transition">
                    Review
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Complaints */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">

            <div className="flex items-center justify-between mb-8">

              <h2 className="text-3xl font-bold text-[#13284c]">
                Recent Complaints
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
                      Streetlight Not Working
                    </h3>

                    <p className="text-gray-500 mt-1">
                      Complaint ID: CMP-2026-{item}
                    </p>
                  </div>

                  <span className="px-4 py-2 rounded-full bg-red-100 text-red-700 text-sm font-semibold w-fit">
                    Pending
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right */}
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

          {/* System Status */}
          <div className="bg-gradient-to-r from-[#13284c] to-[#1f4d8c] rounded-3xl p-8 text-white shadow-lg">

            <h2 className="text-3xl font-bold mb-5">
              System Status
            </h2>

            <div className="space-y-4">

              <div className="flex items-center justify-between">
                <span>Server</span>

                <span className="text-green-300 font-semibold">
                  Online
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span>Applications</span>

                <span className="text-green-300 font-semibold">
                  Running
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span>Database</span>

                <span className="text-green-300 font-semibold">
                  Connected
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
