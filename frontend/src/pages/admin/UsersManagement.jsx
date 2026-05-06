import {
  Search,
  User,
  ShieldCheck,
  UserCheck,
  UserX,
  Phone,
  Mail,
} from "lucide-react";

import AdminLayout from "../../components/admin/AdminLayout";

const users = [
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
];

export default function UsersManagement() {

  const statusStyle = {
    Active: "bg-green-100 text-green-700",
    Inactive: "bg-red-100 text-red-700",
  };

  const roleStyle = {
    Admin: "bg-purple-100 text-purple-700",
    Citizen: "bg-blue-100 text-blue-700",
  };

  return (
    <AdminLayout>

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
            Manage registered citizens, administrators, and account activities.
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

        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex items-center justify-center mb-5">
            <User size={24} />
          </div>

          <p className="text-gray-500">
            Total Users
          </p>

          <h2 className="text-4xl font-bold text-[#13284c] mt-3">
            1,204
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-500 text-white flex items-center justify-center mb-5">
            <UserCheck size={24} />
          </div>

          <p className="text-gray-500">
            Active Users
          </p>

          <h2 className="text-4xl font-bold text-green-600 mt-3">
            1,078
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-red-500 to-pink-500 text-white flex items-center justify-center mb-5">
            <UserX size={24} />
          </div>

          <p className="text-gray-500">
            Inactive Users
          </p>

          <h2 className="text-4xl font-bold text-red-600 mt-3">
            126
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-500 text-white flex items-center justify-center mb-5">
            <ShieldCheck size={24} />
          </div>

          <p className="text-gray-500">
            Administrators
          </p>

          <h2 className="text-4xl font-bold text-purple-600 mt-3">
            8
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
                Monitor and manage citizen accounts and administrators.
              </p>
            </div>

            <button className="bg-[#0b4f35] hover:bg-[#083824] text-white px-6 py-3 rounded-2xl font-semibold transition">
              Add User
            </button>
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

                  <td className="p-6 font-semibold text-[#13284c]">
                    {item.id}
                  </td>

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

                  <td className="p-6">

                    <span
                      className={`px-4 py-2 rounded-full text-sm font-semibold ${roleStyle[item.role]}`}
                    >
                      {item.role}
                    </span>
                  </td>

                  <td className="p-6">

                    <div className="flex items-center gap-2 text-gray-600">
                      <Phone size={15} />
                      {item.phone}
                    </div>
                  </td>

                  <td className="p-6">

                    <span
                      className={`px-4 py-2 rounded-full text-sm font-semibold ${statusStyle[item.status]}`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td className="p-6">

                    <div className="flex items-center gap-3">

                      <button className="px-4 py-2 rounded-xl bg-blue-100 text-blue-700 font-medium hover:scale-105 transition">
                        View
                      </button>

                      <button className="px-4 py-2 rounded-xl bg-yellow-100 text-yellow-700 font-medium hover:scale-105 transition">
                        Edit
                      </button>

                      <button className="px-4 py-2 rounded-xl bg-red-100 text-red-700 font-medium hover:scale-105 transition">
                        Disable
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