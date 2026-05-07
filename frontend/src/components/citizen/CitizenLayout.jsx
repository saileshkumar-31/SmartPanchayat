import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  Home,
  FileText,
  AlertTriangle,
  Calendar,
  User,
  LogOut,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import { getCurrentUser, clearAuthSession } from "../../lib/api";

export default function CitizenLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [complaintsDropdown, setComplaintsDropdown] = useState(false);
  const currentUser = getCurrentUser();

  const handleLogout = () => {
    clearAuthSession();
    navigate("/citizen");
  };

  const isActive = (path) => {
    return location.pathname === path || location.pathname.startsWith(path + "/");
  };

  const menuItems = [
    {
      title: "Dashboard",
      icon: <Home size={20} />,
      path: "/citizen/dashboard",
    },
    {
      title: "Services",
      icon: <FileText size={20} />,
      hasDropdown: true,
      dropdownOpen: servicesDropdown,
      setDropdownOpen: setServicesDropdown,
      dropdownItems: [
        { title: "All Services", path: "/services" },
        { title: "Certificates", path: "/certificates" },
        { title: "Civil Services", path: "/civilservices" },
        { title: "Application Tracker", path: "/applicationtracker" },
        { title: "Job Opportunities", path: "/Jobs" },
      ],
    },
    {
      title: "Complaints",
      icon: <AlertTriangle size={20} />,
      hasDropdown: true,
      dropdownOpen: complaintsDropdown,
      setDropdownOpen: setComplaintsDropdown,
      dropdownItems: [
        { title: "File Complaint", path: "/complaints" },
        { title: "My Complaints", path: "/complaints/my-complaints" },
        { title: "Complaint Guidelines", path: "/complaints/complaint-guidelines" },
      ],
    },
    {
      title: "Meetings",
      icon: <Calendar size={20} />,
      path: "/Meetings",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 w-64 h-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:z-auto ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-green-800">
                Citizen Portal
              </h2>
              <button
                onClick={() => setSidebarOpen(false)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
              >
                <X size={20} />
              </button>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center">
                <User size={20} />
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  {currentUser?.user_name || "Citizen"}
                </p>
                <p className="text-xs text-gray-500">
                  {currentUser?.user_mobile || "User"}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {menuItems.map((item, index) => (
              <div key={index}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => item.setDropdownOpen(!item.dropdownOpen)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-colors ${
                        isActive(item.path)
                          ? "bg-green-50 text-green-700"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {item.icon}
                        <span className="font-medium">{item.title}</span>
                      </div>
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          item.dropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {item.dropdownOpen && (
                      <div className="mt-2 ml-4 space-y-1">
                        {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                          <Link
                            key={dropdownIndex}
                            to={dropdownItem.path}
                            onClick={() => setSidebarOpen(false)}
                            className={`block px-4 py-2 rounded-lg text-sm transition-colors ${
                              isActive(dropdownItem.path)
                                ? "bg-green-50 text-green-700"
                                : "text-gray-600 hover:bg-gray-100"
                            }`}
                          >
                            {dropdownItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                      isActive(item.path)
                        ? "bg-green-50 text-green-700"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {item.icon}
                    <span className="font-medium">{item.title}</span>
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200">
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition-colors"
            >
              <LogOut size={20} />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Top Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
              >
                <Menu size={20} />
              </button>
              <div className="flex items-center gap-4">
                <Link
                  to="/"
                  className="text-green-700 hover:text-green-800 font-medium"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
