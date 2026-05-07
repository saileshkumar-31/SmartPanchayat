import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Lock } from "lucide-react";
import { api, getCurrentUser } from "../../lib/api";

export default function RestrictedGate({ children }) {
  const [settings, setSettings] = useState(null);
  const location = useLocation();
  const user = getCurrentUser();
  const isAdminArea =
    location.pathname.startsWith("/admin/");
  const isAdminLogin = location.pathname === "/admin" || location.pathname === "/adminLogin";
  const publicPaths = [
    "/",
    "/citizen",
    "/citizen/register",
    "/citizen/register/personal",
    "/citizen/register/panchayat",
    "/citizen/register/verification",
    "/success",
    "/forgotpassword",
    "/adminLogin",
    "/aboutus",
    "/contact",
    "/schemes",
  ];
  const isPublicSchemeDetails = location.pathname.startsWith("/schemes/");
  const isPublicPage = publicPaths.includes(location.pathname) || isPublicSchemeDetails;

  useEffect(() => {
    api
      .get("/settings")
      .then((res) => setSettings(res.data))
      .catch(() => setSettings({ maintenanceMode: false }));
  }, []);

  if (!settings) {
    // Show loading spinner while fetching settings
    return (
      <main className="min-h-screen bg-[#f5f7f4] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-green-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading Smart Panchayat...</p>
        </div>
      </main>
    );
  }

  if (settings.maintenanceMode && !isAdminArea && !isAdminLogin) {
    return (
      <main className="min-h-screen bg-[#f5f7f4] flex items-center justify-center px-4">
        <section className="max-w-xl w-full bg-white border border-gray-100 rounded-2xl shadow-sm p-8 text-center">
          <div className="w-16 h-16 rounded-full bg-red-50 text-red-700 flex items-center justify-center mx-auto mb-6">
            <Lock size={28} />
          </div>
          <h1 className="text-3xl font-bold text-[#13284c]">Website Restricted</h1>
          <p className="text-gray-600 mt-4 leading-7">
            {settings.restrictionMessage ||
              "Smart Panchayat is temporarily restricted by the administrator."}
          </p>
        </section>
      </main>
    );
  }

  if (isAdminArea && user?.user_role?.toLowerCase() !== "admin") {
    return <Navigate to="/adminLogin" replace />;
  }

  if (!isPublicPage && !user) {
    return <Navigate to="/citizen" replace />;
  }

  return children;
}
