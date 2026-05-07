import { useState } from "react";

import {
  Search,
  User,
  ShieldCheck,
  UserCheck,
  UserX,
  Phone,
  Mail,
  Eye,
  Pencil,
  Trash2,
  X,
} from "lucide-react";

import { NavLink } from "react-router-dom";

import AdminLayout from "../../../components/admin/AdminLayout";

export default function UsersManagement() {

  // Dynamic Users State
  const [users, setUsers] = useState([
    {
      id: "USR-1001",
      name: "Sailesh Kumar",
      role: "Citizen",
      phone: "+91 9876543210",
      email: "sailesh@gmail.com",
      status: "Active",
    },
    {
      id: "USR-1002",
      name: "Arun Kumar",
      role: "Citizen",
      phone: "+91 9123456780",
      email: "arun@gmail.com",
      status: "Inactive",
    },
    {
      id: "USR-1003",
      name: "Village Officer",
      role: "Admin",
      phone: "+91 9000011111",
      email: "admin@panchayat.in",
      status: "Active",
    },
    {
      id: "USR-1004",
      name: "Priya",
      role: "Citizen",
      phone: "+91 9876501234",
      email: "priya@gmail.com",
      status: "Active",
    },
  ]);

  // Delete Modal State
  const [deleteModal, setDeleteModal] =
    useState(false);

  const [selectedUser, setSelectedUser] =
    useState(null);

  // Delete Function
  const handleDeleteClick = (user) => {
    setSelectedUser(user);
    setDeleteModal(true);
  };

  const confirmDelete = () => {
    setUsers((prev) =>
      prev.filter(
        (item) => item.id !== selectedUser.id
      )
    );

    setDeleteModal(false);
    setSelectedUser(null);
  };

  // Disable / Enable User
  const toggleStatus = (id) => {
    setUsers((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              status:
                item.status === "Active"
                  ? "Inactive"
                  : "Active",
            }
          : item
      )
    );
  };

  // Styles
  const statusStyle = {
    Active: "bg-green-100 text-green-700",
    Inactive: "bg-red-100 text-red-700",
  };

  const roleStyle = {
    Admin: "bg-purple-100 text-purple-700",
    Citizen: "bg-blue-100 text-blue-700",
  };

  // Dynamic Stats
  const totalUsers = users.length;

  const activeUsers = users.filter(
    (item) => item.status === "Active"
  ).length;

  const inactiveUsers = users.filter(
    (item) => item.status === "Inactive"
  ).length;

  const adminUsers = users.filter(
    (item) => item.role === "Admin"
  ).length;

  return (
    <AdminLayout>

      {/* Delete Modal */}
      {deleteModal && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-5">

          <div className="bg-white w-full max-w-md rounded-[32px] p-8 shadow-2xl">

            <div className="flex items-center justify-between mb-6">

              <h2 className="text-2xl font-bold text-[#13284c]">
                Delete User
              </h2>

              <button
                onClick={() =>
                  setDeleteModal(false)
                }
                className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center"
              >
                <X size={18} />
              </button>
            </div>

            <p className="text-gray-600 leading-7">
              Are you sure you want to delete
              <span className="font-semibold text-[#13284c]">
                {" "}
                {selectedUser?.name}
              </span>
              ? This action cannot be undone.
            </p>

            <div className="flex gap-4 mt-8">

              <button
                onClick={() =>
                  setDeleteModal(false)
                }
                className="flex-1 py-4 rounded-2xl border border-gray-200 font-semibold hover:bg-gray-50 transition"
              >
                Cancel
              </button>

              <button
                onClick={confirmDelete}
                className="flex-1 py-4 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-semibold transition"
              >
                Delete User
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6 mb-10">

        <div>

          <p className="text-green-700 font-semibold mb-2">
            Citizen Administration
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-[#13284c]">
            Users Management
          </h1>

          <p className="text-gray-500 mt-4 text-lg max-w-3xl">
            Manage registered citizens, administrators,
            and account activities.
          </p>
        </div>

        {/* Search */}
        <div className="bg-white rounded-2xl border border-gray-100 px-5 h-14 flex items-center gap-3 shadow-sm min-w-[320px]">

          <Search
            className="text-gray-400"
            size={20}
          />

          <input
            type="text"
            placeholder="Search users..."
            className="bg-transparent outline-none w-full"
          />
        </div>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6 mb-10">

        {/* Total */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex items-center justify-center mb-5">
            <User size={24} />
          </div>

          <p className="text-gray-500">
            Total Users
          </p>

          <h2 className="text-4xl font-bold text-[#13284c] mt-3">
            {totalUsers}
          </h2>
        </div>

        {/* Active */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-500 text-white flex items-center justify-center mb-5">
            <UserCheck size={24} />
          </div>

          <p className="text-gray-500">
            Active Users
          </p>

          <h2 className="text-4xl font-bold text-green-600 mt-3">
            {activeUsers}
          </h2>
        </div>

        {/* Inactive */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-red-500 to-pink-500 text-white flex items-center justify-center mb-5">
            <UserX size={24} />
          </div>

          <p className="text-gray-500">
            Inactive Users
          </p>

          <h2 className="text-4xl font-bold text-red-600 mt-3">
            {inactiveUsers}
          </h2>
        </div>

        {/* Admin */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-500 text-white flex items-center justify-center mb-5">
            <ShieldCheck size={24} />
          </div>

          <p className="text-gray-500">
            Administrators
          </p>

          <h2 className="text-4xl font-bold text-purple-600 mt-3">
            {adminUsers}
          </h2>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden">

        {/* Header */}
        <div className="px-8 py-6 border-b border-gray-100">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

            <div>

              <h2 className="text-2xl font-bold text-[#13284c]">
                Registered Users
              </h2>

              <p className="text-gray-500 mt-2">
                Monitor and manage citizen accounts
                and administrators.
              </p>
            </div>

            <NavLink
              to="/admin/users-add"
              className="bg-[#0b4f35] hover:bg-[#083824] text-white px-6 py-3 rounded-2xl font-semibold transition inline-flex items-center justify-center"
            >
              Add User
            </NavLink>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-[#f8fafc]">

              <tr>

                <th className="text-left p-6 text-gray-500 font-semibold">
                  User ID
                </th>

                <th className="text-left p-6 text-gray-500 font-semibold">
                  Name
                </th>

                <th className="text-left p-6 text-gray-500 font-semibold">
                  Role
                </th>

                <th className="text-left p-6 text-gray-500 font-semibold">
                  Contact
                </th>

                <th className="text-left p-6 text-gray-500 font-semibold">
                  Status
                </th>

                <th className="text-left p-6 text-gray-500 font-semibold">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>

              {users.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-100 hover:bg-[#f8fafc] transition"
                >

                  {/* ID */}
                  <td className="p-6 font-semibold text-[#13284c]">
                    {item.id}
                  </td>

                  {/* Name */}
                  <td className="p-6">

                    <div>

                      <h3 className="font-semibold text-[#13284c]">
                        {item.name}
                      </h3>

                      <p className="text-sm text-gray-500 mt-1 flex items-center gap-2">
                        <Mail size={14} />
                        {item.email}
                      </p>
                    </div>
                  </td>

                  {/* Role */}
                  <td className="p-6">

                    <span
                      className={`px-4 py-2 rounded-full text-sm font-semibold ${roleStyle[item.role]}`}
                    >
                      {item.role}
                    </span>
                  </td>

                  {/* Contact */}
                  <td className="p-6">

                    <div className="flex items-center gap-2 text-gray-600">
                      <Phone size={15} />
                      {item.phone}
                    </div>
                  </td>

                  {/* Status */}
                  <td className="p-6">

                    <span
                      className={`px-4 py-2 rounded-full text-sm font-semibold ${statusStyle[item.status]}`}
                    >
                      {item.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="p-6">

                    <div className="flex items-center gap-3">

                      {/* View */}
                      <button className="w-11 h-11 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center hover:scale-105 transition">
                        <Eye size={18} />
                      </button>

                      {/* Edit */}
                      <NavLink
                        to="/admin/users-edit"
                        className="w-11 h-11 rounded-xl bg-yellow-100 text-yellow-700 flex items-center justify-center hover:scale-105 transition"
                      >
                        <Pencil size={18} />
                      </NavLink>

                      {/* Disable */}
                      <button
                        onClick={() =>
                          toggleStatus(item.id)
                        }
                        className="w-11 h-11 rounded-xl bg-orange-100 text-orange-700 flex items-center justify-center hover:scale-105 transition"
                      >
                        <UserX size={18} />
                      </button>

                      {/* Delete */}
                      <button
                        onClick={() =>
                          handleDeleteClick(item)
                        }
                        className="w-11 h-11 rounded-xl bg-red-100 text-red-700 flex items-center justify-center hover:scale-105 transition"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}