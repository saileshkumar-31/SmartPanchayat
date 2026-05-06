import {
  LayoutDashboard,
  FolderKanban,
  CheckCircle2,
  BarChart3,
  FileText,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const menus = [
  {
    name: "Overview",
    icon: LayoutDashboard,
    path: "/transparency",
  },
  {
    name: "Ongoing Projects",
    icon: FolderKanban,
    path: "/transparency/ongoing-projects",
  },
  {
    name: "Completed Projects",
    icon: CheckCircle2,
    path: "/transparency/completed-projects",
  },
  {
    name: "Expense Breakdown",
    icon: BarChart3,
    path: "/transparency/expenses",
  },
  {
    name: "Tender & Contracts",
    icon: FileText,
    path: "/transparency/tenders",
  },
];

export default function Sidebar() {
  return (
    <aside
      className="
        hidden
        lg:flex
        w-72
        bg-white
        border-r
        border-gray-200
        min-h-screen
        flex-col
      "
    >
      {/* LOGO */}
      <div className="p-6 border-b border-gray-100">

        <h2 className="text-2xl font-bold text-[#0b4f35]">
          Smart Panchayat
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          Transparent. Simple. Trusted.
        </p>
      </div>

      {/* MENU */}
      <div className="p-4 space-y-3">

        {menus.map((item, index) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `
                flex
                items-center
                gap-4
                px-4
                py-4
                rounded-2xl
                transition-all
                duration-300
                font-medium
                ${
                  isActive
                    ? "bg-[#0b4f35] text-white shadow-lg"
                    : "hover:bg-[#edf7f2] text-gray-700"
                }
              `
              }
            >
              <Icon size={20} />

              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </div>
    </aside>
  );
}