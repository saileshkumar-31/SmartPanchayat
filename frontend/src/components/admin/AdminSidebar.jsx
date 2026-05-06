import {
  LayoutDashboard,
  FileText,
  AlertTriangle,
  Users,
  Landmark,
  ClipboardList,
  BarChart3,
  Settings,
} from "lucide-react";

import { NavLink } from "react-router-dom";

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
    title: "Transparency",
    icon: <ClipboardList size={20} />,
    link: "/admin/transparency-management",
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

export default function AdminSidebar() {
  return (
    <div className="w-[280px] min-h-screen bg-[#0b4f35] text-white p-6 hidden lg:flex flex-col">

      {/* Logo */}
      <div className="mb-12">

        <h1 className="text-3xl font-bold">
          Smart Panchayat
        </h1>

        <p className="text-white/80 mt-2">
          Panchayat Administration
        </p>
      </div>

      {/* Menu */}
      <div className="space-y-3">

        {menu.map((item, index) => (
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