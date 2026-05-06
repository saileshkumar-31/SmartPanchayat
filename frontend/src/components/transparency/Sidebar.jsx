import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Landmark,
  Clock3,
  CheckCircle2,
  Receipt,
  FileText,
  FileBarChart2,
} from "lucide-react";

const Sidebar = () => {
  const links = [
    {
      name: "Dashboard",
      path: "/transparency",
      icon: <LayoutDashboard size={18} />,
    },
    {
      name: "Funds",
      path: "/transparency/funds",
      icon: <Landmark size={18} />,
    },
    {
      name: "Ongoing",
      path: "/transparency/ongoing",
      icon: <Clock3 size={18} />,
    },
    {
      name: "Completed",
      path: "/transparency/completed",
      icon: <CheckCircle2 size={18} />,
    },
    {
      name: "Expenses",
      path: "/transparency/expenses",
      icon: <Receipt size={18} />,
    },
    {
      name: "Tenders",
      path: "/transparency/tenders",
      icon: <FileText size={18} />,
    },
    {
      name: "Reports",
      path: "/transparency/reports",
      icon: <FileBarChart2 size={18} />,
    },
  ];

  return (
    <div className="w-[250px] min-h-screen bg-white border-r p-4">
      <h2 className="text-2xl font-bold text-green-700 mb-8">
        Transparency
      </h2>

      <div className="flex flex-col gap-2">
        {links.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-green-700 text-white"
                  : "text-gray-700 hover:bg-green-50"
              }`
            }
          >
            {link.icon}
            <span>{link.name}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;