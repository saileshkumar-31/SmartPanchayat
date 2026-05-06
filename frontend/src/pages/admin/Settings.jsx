import { useState } from "react";

import {
  Save,
  Bell,
  Shield,
  Globe,
  UserCog,
  Database,
  Lock,
} from "lucide-react";

import AdminLayout from "../../components/admin/AdminLayout";

export default function Settings() {

  // Dynamic State
  const [settings, setSettings] = useState({
    notifications: true,
    maintenanceMode: false,
    publicTransparency: true,
    tamilLanguage: true,
    citizenRegistration: true,
    autoApproval: false,
  });

  // Dynamic Toggle
  const toggleSetting = (key) => {

    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <AdminLayout>

      {/* Header */}
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6 mb-10">

        <div>

          <p className="text-green-700 font-semibold mb-2">
            System Administration
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-[#13284c]">
            Settings
          </h1>

          <p className="text-gray-500 mt-4 text-lg max-w-3xl">
            Configure Panchayat system preferences, security, public access, and platform controls.
          </p>
        </div>

        {/* Save Button */}
        <button className="bg-[#0b4f35] hover:bg-[#083824] text-white px-6 py-4 rounded-2xl font-semibold shadow-lg transition flex items-center gap-3 w-fit">
          <Save size={20} />
          Save Settings
        </button>
      </div>

      {/* Settings Grid */}
      <div className="grid xl:grid-cols-2 gap-8">

        {/* Notifications */}
        <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm">

          <div className="flex items-center gap-4 mb-8">

            <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center">
              <Bell size={24} />
            </div>

            <div>

              <h2 className="text-2xl font-bold text-[#13284c]">
                Notifications
              </h2>

              <p className="text-gray-500 mt-1">
                Manage platform notification settings.
              </p>
            </div>
          </div>

          <div className="space-y-6">

            {/* Notification Toggle */}
            <div className="flex items-center justify-between bg-[#f8fafc] rounded-2xl p-5 border border-gray-100">

              <div>

                <h3 className="font-semibold text-[#13284c]">
                  Enable Notifications
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Send alerts for applications and complaints.
                </p>
              </div>

              <button
                onClick={() => toggleSetting("notifications")}
                className={`w-14 h-8 rounded-full flex items-center px-1 transition ${
                  settings.notifications
                    ? "bg-green-500 justify-end"
                    : "bg-gray-300 justify-start"
                }`}
              >
                <div className="w-6 h-6 rounded-full bg-white" />
              </button>
            </div>

            {/* Public Transparency */}
            <div className="flex items-center justify-between bg-[#f8fafc] rounded-2xl p-5 border border-gray-100">

              <div>

                <h3 className="font-semibold text-[#13284c]">
                  Public Transparency Portal
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Allow citizens to access transparency data.
                </p>
              </div>

              <button
                onClick={() => toggleSetting("publicTransparency")}
                className={`w-14 h-8 rounded-full flex items-center px-1 transition ${
                  settings.publicTransparency
                    ? "bg-green-500 justify-end"
                    : "bg-gray-300 justify-start"
                }`}
              >
                <div className="w-6 h-6 rounded-full bg-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Security */}
        <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm">

          <div className="flex items-center gap-4 mb-8">

            <div className="w-14 h-14 rounded-2xl bg-red-100 text-red-700 flex items-center justify-center">
              <Shield size={24} />
            </div>

            <div>

              <h2 className="text-2xl font-bold text-[#13284c]">
                Security
              </h2>

              <p className="text-gray-500 mt-1">
                Configure platform access and protection.
              </p>
            </div>
          </div>

          <div className="space-y-6">

            {/* Maintenance */}
            <div className="flex items-center justify-between bg-[#f8fafc] rounded-2xl p-5 border border-gray-100">

              <div>

                <h3 className="font-semibold text-[#13284c]">
                  Maintenance Mode
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Temporarily disable public access.
                </p>
              </div>

              <button
                onClick={() => toggleSetting("maintenanceMode")}
                className={`w-14 h-8 rounded-full flex items-center px-1 transition ${
                  settings.maintenanceMode
                    ? "bg-red-500 justify-end"
                    : "bg-gray-300 justify-start"
                }`}
              >
                <div className="w-6 h-6 rounded-full bg-white" />
              </button>
            </div>

            {/* Auto Approval */}
            <div className="flex items-center justify-between bg-[#f8fafc] rounded-2xl p-5 border border-gray-100">

              <div>

                <h3 className="font-semibold text-[#13284c]">
                  Auto Approval
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Automatically approve selected requests.
                </p>
              </div>

              <button
                onClick={() => toggleSetting("autoApproval")}
                className={`w-14 h-8 rounded-full flex items-center px-1 transition ${
                  settings.autoApproval
                    ? "bg-green-500 justify-end"
                    : "bg-gray-300 justify-start"
                }`}
              >
                <div className="w-6 h-6 rounded-full bg-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Localization */}
        <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm">

          <div className="flex items-center gap-4 mb-8">

            <div className="w-14 h-14 rounded-2xl bg-yellow-100 text-yellow-700 flex items-center justify-center">
              <Globe size={24} />
            </div>

            <div>

              <h2 className="text-2xl font-bold text-[#13284c]">
                Localization
              </h2>

              <p className="text-gray-500 mt-1">
                Configure language and regional settings.
              </p>
            </div>
          </div>

          <div className="space-y-6">

            {/* Tamil */}
            <div className="flex items-center justify-between bg-[#f8fafc] rounded-2xl p-5 border border-gray-100">

              <div>

                <h3 className="font-semibold text-[#13284c]">
                  Tamil Translation
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Enable Tamil language support.
                </p>
              </div>

              <button
                onClick={() => toggleSetting("tamilLanguage")}
                className={`w-14 h-8 rounded-full flex items-center px-1 transition ${
                  settings.tamilLanguage
                    ? "bg-green-500 justify-end"
                    : "bg-gray-300 justify-start"
                }`}
              >
                <div className="w-6 h-6 rounded-full bg-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Registration */}
        <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm">

          <div className="flex items-center gap-4 mb-8">

            <div className="w-14 h-14 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center">
              <UserCog size={24} />
            </div>

            <div>

              <h2 className="text-2xl font-bold text-[#13284c]">
                User Registration
              </h2>

              <p className="text-gray-500 mt-1">
                Manage citizen account creation settings.
              </p>
            </div>
          </div>

          <div className="space-y-6">

            {/* Registration */}
            <div className="flex items-center justify-between bg-[#f8fafc] rounded-2xl p-5 border border-gray-100">

              <div>

                <h3 className="font-semibold text-[#13284c]">
                  Citizen Registration
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Allow new citizens to register accounts.
                </p>
              </div>

              <button
                onClick={() => toggleSetting("citizenRegistration")}
                className={`w-14 h-8 rounded-full flex items-center px-1 transition ${
                  settings.citizenRegistration
                    ? "bg-green-500 justify-end"
                    : "bg-gray-300 justify-start"
                }`}
              >
                <div className="w-6 h-6 rounded-full bg-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Cards */}
      <div className="grid md:grid-cols-3 gap-6 mt-10">

        {/* Database */}
        <div className="bg-gradient-to-r from-[#13284c] to-[#1f4d8c] rounded-3xl p-8 text-white shadow-lg">

          <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
            <Database size={24} />
          </div>

          <h2 className="text-2xl font-bold mb-3">
            Database Status
          </h2>

          <p className="text-white/80">
            Connected & Operational
          </p>
        </div>

        {/* Security */}
        <div className="bg-gradient-to-r from-[#0b4f35] to-[#2bb673] rounded-3xl p-8 text-white shadow-lg">

          <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
            <Shield size={24} />
          </div>

          <h2 className="text-2xl font-bold mb-3">
            System Security
          </h2>

          <p className="text-white/80">
            Protected & Secure
          </p>
        </div>

        {/* Access */}
        <div className="bg-gradient-to-r from-[#7c3aed] to-[#9333ea] rounded-3xl p-8 text-white shadow-lg">

          <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
            <Lock size={24} />
          </div>

          <h2 className="text-2xl font-bold mb-3">
            Access Control
          </h2>

          <p className="text-white/80">
            Admin Protected
          </p>
        </div>
      </div>
    </AdminLayout>
  );
}