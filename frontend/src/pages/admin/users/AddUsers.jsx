import { useState } from "react";

import {
  ArrowLeft,
  User,
  Mail,
  Phone,
  Shield,
  Lock,
  MapPin,
  Save,
  Users,
  CheckCircle2,
  UserPlus,
  Eye,
  EyeOff,
} from "lucide-react";

import { NavLink } from "react-router-dom";

import AdminLayout from "../../../components/admin/AdminLayout";

export default function CreateUser() {

  // Dynamic States
  const [fullName, setFullName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [phone, setPhone] =
    useState("");

  const [role, setRole] =
    useState("Citizen");

  const [status, setStatus] =
    useState("Active");

  const [password, setPassword] =
    useState("");

  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [address, setAddress] =
    useState("");

  const [notes, setNotes] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  return (
    <AdminLayout>

      {/* Header */}
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6 mb-10">

        <div>

          <div className="flex items-center gap-3 mb-4">

            <NavLink
              to="/admin/users-management"
              className="w-11 h-11 rounded-2xl bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition"
            >
              <ArrowLeft size={18} />
            </NavLink>

            <div>

              <p className="text-green-700 font-semibold">
                User Administration
              </p>

              <h1 className="text-4xl md:text-5xl font-bold text-[#13284c] mt-2">
                Create User
              </h1>
            </div>
          </div>

          <p className="text-gray-500 text-lg max-w-3xl">
            Add new citizens, Panchayat staff, officers, and administrators to the Smart Panchayat platform.
          </p>
        </div>

        {/* Summary Card */}
        <div className="bg-gradient-to-r from-[#0b4f35] to-[#2bb673] rounded-3xl p-6 text-white min-w-[320px] shadow-xl">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-white/80">
                User Role
              </p>

              <h2 className="text-4xl font-bold mt-3">
                {role}
              </h2>
            </div>

            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">

              <Users size={30} />
            </div>
          </div>

          <div className="mt-6">

            <div className="flex justify-between text-sm mb-2">

              <span>
                Account Status
              </span>

              <span className="font-semibold">
                {status}
              </span>
            </div>

            <div className="h-3 bg-white/20 rounded-full overflow-hidden">

              <div
                className="h-full bg-white rounded-full"
                style={{
                  width: status === "Active"
                    ? "100%"
                    : "45%",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Layout */}
      <div className="grid xl:grid-cols-[1fr_360px] gap-8">

        {/* Left Section */}
        <div className="bg-white rounded-[36px] border border-gray-100 shadow-sm p-8 md:p-10">

          {/* Top */}
          <div className="flex items-center justify-between mb-10">

            <div>

              <h2 className="text-2xl font-bold text-[#13284c]">
                User Information
              </h2>

              <p className="text-gray-500 mt-2">
                Enter user account details and access permissions.
              </p>
            </div>

            <div className="w-16 h-16 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex items-center justify-center shadow-lg">

              <UserPlus size={30} />
            </div>
          </div>

          {/* Form */}
          <div className="grid md:grid-cols-2 gap-8">

            {/* Full Name */}
            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Full Name
              </label>

              <div className="h-16 rounded-2xl border border-gray-200 px-5 flex items-center gap-4 bg-[#fafafa]">

                <User
                  size={20}
                  className="text-gray-400"
                />

                <input
                  type="text"
                  value={fullName}
                  onChange={(e) =>
                    setFullName(e.target.value)
                  }
                  placeholder="Enter full name"
                  className="w-full bg-transparent outline-none text-lg"
                />
              </div>
            </div>

            {/* Email */}
            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Email Address
              </label>

              <div className="h-16 rounded-2xl border border-gray-200 px-5 flex items-center gap-4 bg-[#fafafa]">

                <Mail
                  size={20}
                  className="text-gray-400"
                />

                <input
                  type="email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  placeholder="Enter email"
                  className="w-full bg-transparent outline-none text-lg"
                />
              </div>
            </div>

            {/* Phone */}
            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Phone Number
              </label>

              <div className="h-16 rounded-2xl border border-gray-200 px-5 flex items-center gap-4 bg-[#fafafa]">

                <Phone
                  size={20}
                  className="text-gray-400"
                />

                <input
                  type="text"
                  value={phone}
                  onChange={(e) =>
                    setPhone(e.target.value)
                  }
                  placeholder="+91 9876543210"
                  className="w-full bg-transparent outline-none text-lg"
                />
              </div>
            </div>

            {/* Role */}
            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-3">
                User Role
              </label>

              <select
                value={role}
                onChange={(e) =>
                  setRole(e.target.value)
                }
                className="h-16 w-full rounded-2xl border border-gray-200 px-5 bg-[#fafafa] outline-none text-lg"
              >

                <option>
                  Citizen
                </option>

                <option>
                  Admin
                </option>

                <option>
                  Village Officer
                </option>

                <option>
                  Staff
                </option>
              </select>
            </div>

            {/* Password */}
            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Password
              </label>

              <div className="h-16 rounded-2xl border border-gray-200 px-5 flex items-center gap-4 bg-[#fafafa]">

                <Lock
                  size={20}
                  className="text-gray-400"
                />

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  placeholder="Enter password"
                  className="w-full bg-transparent outline-none text-lg"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? (
                    <EyeOff
                      size={20}
                      className="text-gray-400"
                    />
                  ) : (
                    <Eye
                      size={20}
                      className="text-gray-400"
                    />
                  )}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Confirm Password
              </label>

              <div className="h-16 rounded-2xl border border-gray-200 px-5 flex items-center gap-4 bg-[#fafafa]">

                <Shield
                  size={20}
                  className="text-gray-400"
                />

                <input
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  value={confirmPassword}
                  onChange={(e) =>
                    setConfirmPassword(
                      e.target.value
                    )
                  }
                  placeholder="Confirm password"
                  className="w-full bg-transparent outline-none text-lg"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(
                      !showConfirmPassword
                    )
                  }
                >
                  {showConfirmPassword ? (
                    <EyeOff
                      size={20}
                      className="text-gray-400"
                    />
                  ) : (
                    <Eye
                      size={20}
                      className="text-gray-400"
                    />
                  )}
                </button>
              </div>
            </div>

            {/* Status */}
            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Account Status
              </label>

              <select
                value={status}
                onChange={(e) =>
                  setStatus(e.target.value)
                }
                className="h-16 w-full rounded-2xl border border-gray-200 px-5 bg-[#fafafa] outline-none text-lg"
              >

                <option>
                  Active
                </option>

                <option>
                  Inactive
                </option>

                <option>
                  Suspended
                </option>
              </select>
            </div>

            {/* Address */}
            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Address
              </label>

              <div className="h-16 rounded-2xl border border-gray-200 px-5 flex items-center gap-4 bg-[#fafafa]">

                <MapPin
                  size={20}
                  className="text-gray-400"
                />

                <input
                  type="text"
                  value={address}
                  onChange={(e) =>
                    setAddress(e.target.value)
                  }
                  placeholder="Ward / Street / Area"
                  className="w-full bg-transparent outline-none text-lg"
                />
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="mt-10">

            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Admin Notes
            </label>

            <div className="rounded-3xl border border-gray-200 bg-[#fafafa] p-5">

              <textarea
                rows={5}
                value={notes}
                onChange={(e) =>
                  setNotes(e.target.value)
                }
                placeholder="Write additional notes or access remarks..."
                className="w-full bg-transparent outline-none resize-none text-gray-700"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-end gap-4 mt-10">

            {/* Cancel */}
            <button
              onClick={() => {
                setFullName("");
                setEmail("");
                setPhone("");
                setRole("");
                setStatus("");
                setPassword("");
                setConfirmPassword("");
                setAddress("");
                setNotes("");
              }}
              className="px-8 py-4 rounded-2xl border border-gray-200 font-semibold hover:bg-gray-50 transition"
            >
              Cancel
            </button>

            {/* Save */}
            <button className="bg-gradient-to-r from-[#0b4f35] to-[#2bb673] hover:opacity-95 text-white px-8 py-4 rounded-2xl font-semibold transition flex items-center justify-center gap-3 shadow-lg">

              <Save size={20} />

              Create User
            </button>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">

          {/* Live Summary */}
          <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm p-8">

            <h3 className="text-2xl font-bold text-[#13284c] mb-6">
              Live Summary
            </h3>

            <div className="space-y-5">

              <div className="flex justify-between">

                <span className="text-gray-500">
                  Name
                </span>

                <span className="font-bold text-[#13284c]">
                  {fullName || "-"}
                </span>
              </div>

              <div className="flex justify-between">

                <span className="text-gray-500">
                  Role
                </span>

                <span className="font-bold text-blue-700">
                  {role || "-"}
                </span>
              </div>

              <div className="flex justify-between">

                <span className="text-gray-500">
                  Status
                </span>

                <span className="font-bold text-green-700">
                  {status || "-"}
                </span>
              </div>

              <div className="flex justify-between">

                <span className="text-gray-500">
                  Phone
                </span>

                <span className="font-bold text-[#13284c]">
                  {phone || "-"}
                </span>
              </div>

              <div className="pt-4 border-t border-gray-100">

                <div className="flex items-center gap-3">

                  <div className="w-12 h-12 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center">

                    <CheckCircle2 size={20} />
                  </div>

                  <div>

                    <p className="font-semibold text-[#13284c]">
                      Account Ready
                    </p>

                    <p className="text-gray-500 text-sm mt-1">
                      User account details are ready for creation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Permissions */}
          <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm p-8">

            <h3 className="text-2xl font-bold text-[#13284c] mb-6">
              Access Permissions
            </h3>

            <div className="space-y-5">

              <div className="flex gap-4">

                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center">

                  <Shield size={20} />
                </div>

                <div>

                  <p className="font-semibold text-[#13284c]">
                    Role Access
                  </p>

                  <p className="text-gray-500 text-sm mt-1">
                    User permissions are assigned based on selected role.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">

                <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center">

                  <Lock size={20} />
                </div>

                <div>

                  <p className="font-semibold text-[#13284c]">
                    Secure Authentication
                  </p>

                  <p className="text-gray-500 text-sm mt-1">
                    Password-protected secure login access enabled.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">

                <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-700 flex items-center justify-center">

                  <Users size={20} />
                </div>

                <div>

                  <p className="font-semibold text-[#13284c]">
                    User Management
                  </p>

                  <p className="text-gray-500 text-sm mt-1">
                    Admins can edit, disable, or manage accounts later.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}