import { useState } from "react";

import {
  LayoutDashboard,
  FileText,
  AlertTriangle,
  Users,
  Landmark,
  ClipboardList,
  BarChart3,
  Settings,
  ChevronDown,
  ChevronRight,
  FolderKanban,
  BadgeCheck,
  Receipt,
  Wallet,
  Newspaper,
  FileSpreadsheet,
  CalendarDays,
  CalendarClock,
  ClipboardCheck,
} from "lucide-react";

import {
  NavLink,
  useLocation,
} from "react-router-dom";

export default function AdminSidebar() {

  const location = useLocation();

  // Transparency Dropdown State
  const [openTransparency, setOpenTransparency] =
    useState(
      location.pathname.includes("/admin/transparency")
    );

  // Meetings Dropdown State
  const [openMeetings, setOpenMeetings] =
    useState(
      location.pathname.includes("/admin/meetings")
    );

  // Main Menu
  const menu = [
    {
      title: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      link: "/admin/dashboard",
    },
    {
      title: "Applications",
      icon: <FileText size={20} />,
      link: "/admin/application-management",
    },
    {
      title: "Complaints",
      icon: <AlertTriangle size={20} />,
      link: "/admin/complaints-management",
    },
    {
      title: "Users",
      icon: <Users size={20} />,
      link: "/admin/users-management",
    },
    {
      title: "Schemes",
      icon: <Landmark size={20} />,
      link: "/admin/schemes-management",
    },
    {
      title: "Reports",
      icon: <BarChart3 size={20} />,
      link: "/admin/reports-analytics",
    },
    {
      title: "Settings",
      icon: <Settings size={20} />,
      link: "/admin/settings",
    },
  ];

  // Transparency Sub Menu
  const transparencyMenu = [
    {
      title: "Ongoing Projects",
      icon: <FolderKanban size={18} />,
      link: "/admin/transparency/ongoingprojects-management",
    },
    {
      title: "Completed Projects",
      icon: <BadgeCheck size={18} />,
      link: "/admin/transparency/completedprojects-management",
    },
    {
      title: "Tender Management",
      icon: <ClipboardList size={18} />,
      link: "/admin/transparency/tender-management",
    },
    {
      title: "Expenses",
      icon: <Receipt size={18} />,
      link: "/admin/transparency/expenses-management",
    },
    {
      title: "Budget Allocation",
      icon: <Wallet size={18} />,
      link: "/admin/transparency/budget-management",
    },
    {
      title: "Recent Updates",
      icon: <Newspaper size={18} />,
      link: "/admin/transparency/recentupdates-management",
    },
    {
      title: "Transparency Reports",
      icon: <FileSpreadsheet size={18} />,
      link: "/admin/transparency/reports",
    },
  ];

  // Meetings Sub Menu
  const meetingsMenu = [
    {
      title: "Meeting Requests",
      icon: <ClipboardCheck size={18} />,
      link: "/admin/meetings-requests",
    },
    {
      title: "Meeting Schedule",
      icon: <CalendarClock size={18} />,
      link: "/admin/meetings-schedule",
    },
    {
      title: "Calendar View",
      icon: <CalendarDays size={18} />,
      link: "/admin/meetings-calendarview",
    },
  ];

  return (
    <div className="w-[290px] min-h-screen bg-[#0b4f35] text-white p-6 hidden lg:flex flex-col overflow-y-auto">

      {/* Logo */}
      <div className="mb-12">

        <h1 className="text-3xl font-bold">
          Smart Panchayat
        </h1>

        <p className="text-white/80 mt-2">
          Panchayat Administration
        </p>
      </div>

      {/* Sidebar Menu */}
      <div className="space-y-3">

        {/* Dashboard */}
        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) =>
            `flex items-center gap-4 px-5 py-4 rounded-2xl transition-all ${
              isActive
                ? "bg-white text-[#0b4f35] font-semibold shadow-md"
                : "hover:bg-white/10 text-white/90"
            }`
          }
        >
          <LayoutDashboard size={20} />

          <span>
            Dashboard
          </span>
        </NavLink>

        {/* Applications */}
        <NavLink
          to="/admin/application-management"
          className={({ isActive }) =>
            `flex items-center gap-4 px-5 py-4 rounded-2xl transition-all ${
              isActive
                ? "bg-white text-[#0b4f35] font-semibold shadow-md"
                : "hover:bg-white/10 text-white/90"
            }`
          }
        >
          <FileText size={20} />

          <span>
            Applications
          </span>
        </NavLink>

        {/* Transparency Dropdown */}
        <div>

          <div className="flex items-center gap-2">

            {/* Clickable Transparency Link */}
            <NavLink
              to="/admin/transparency-management"
              className={({ isActive }) =>
                `flex-1 flex items-center gap-4 px-5 py-4 rounded-2xl transition-all ${
                  isActive
                    ? "bg-white text-[#0b4f35] font-semibold shadow-md"
                    : "hover:bg-white/10 text-white/90"
                }`
              }
            >
              <ClipboardList size={20} />

              <span className="font-medium">
                Transparency
              </span>
            </NavLink>

            {/* Dropdown Toggle */}
            <button
              onClick={() =>
                setOpenTransparency(!openTransparency)
              }
              className="w-12 h-12 rounded-2xl hover:bg-white/10 flex items-center justify-center transition"
            >
              {openTransparency ? (
                <ChevronDown size={18} />
              ) : (
                <ChevronRight size={18} />
              )}
            </button>
          </div>

          {/* Transparency Dropdown Items */}
          {openTransparency && (

            <div className="ml-4 mt-3 space-y-2 border-l border-white/20 pl-4">

              {transparencyMenu.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.link}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition ${
                      isActive
                        ? "bg-white text-[#0b4f35] font-semibold shadow-sm"
                        : "hover:bg-white/10 text-white/80"
                    }`
                  }
                >
                  {item.icon}

                  <span>
                    {item.title}
                  </span>
                </NavLink>
              ))}
            </div>
          )}
        </div>

        {/* Meetings Dropdown */}
        <div>

          <div className="flex items-center gap-2">

            {/* Meetings Main Link */}
            <NavLink
              to="/admin/meetings"
              className={({ isActive }) =>
                `flex-1 flex items-center gap-4 px-5 py-4 rounded-2xl transition-all ${
                  isActive
                    ? "bg-white text-[#0b4f35] font-semibold shadow-md"
                    : "hover:bg-white/10 text-white/90"
                }`
              }
            >
              <CalendarDays size={20} />

              <span className="font-medium">
                Meetings
              </span>
            </NavLink>

            {/* Meetings Dropdown Toggle */}
            <button
              onClick={() =>
                setOpenMeetings(!openMeetings)
              }
              className="w-12 h-12 rounded-2xl hover:bg-white/10 flex items-center justify-center transition"
            >
              {openMeetings ? (
                <ChevronDown size={18} />
              ) : (
                <ChevronRight size={18} />
              )}
            </button>
          </div>

          {/* Meetings Dropdown Items */}
          {openMeetings && (

            <div className="ml-4 mt-3 space-y-2 border-l border-white/20 pl-4">

              {meetingsMenu.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.link}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition ${
                      isActive
                        ? "bg-white text-[#0b4f35] font-semibold shadow-sm"
                        : "hover:bg-white/10 text-white/80"
                    }`
                  }
                >
                  {item.icon}

                  <span>
                    {item.title}
                  </span>
                </NavLink>
              ))}
            </div>
          )}
        </div>

        {/* Remaining Menu */}
        {menu.slice(2).map((item, index) => (
          <NavLink
            key={index}
            to={item.link}
            className={({ isActive }) =>
              `flex items-center gap-4 px-5 py-4 rounded-2xl transition-all ${
                isActive
                  ? "bg-white text-[#0b4f35] font-semibold shadow-md"
                  : "hover:bg-white/10 text-white/90"
              }`
            }
          >
            {item.icon}

            <span>
              {item.title}
            </span>
          </NavLink>
        ))}
      </div>
    </div>
  );
}