import React, { useEffect, useState } from "react";
import {
  FileText,
  Search,
} from "lucide-react";
import { api, getCurrentUser } from "../../../lib/api";

const MyComplaints = () => {
  const [search, setSearch] = useState("");
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const user = getCurrentUser();
    const query = user?.user_id ? `?citizen_id=${user.user_id}` : "";
    api.get(`/complaints${query}`)
      .then((res) => setComplaints(res.data))
      .catch((error) => alert(error.message));
  }, []);

  const filteredComplaints = complaints.filter(
    (item) =>
      item.reference_no.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="min-h-screen bg-[#f6f8f6] px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-8">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-green-800 text-white flex items-center justify-center">
              <FileText size={24} />
            </div>

            <div>
              <h1 className="text-3xl font-bold text-green-800">
                My Complaints
              </h1>

              <p className="text-gray-500 mt-1">
                View all submitted complaints and track their current status.
              </p>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-8">
          <div className="relative">
            <Search
              size={18}
              className="absolute left-4 top-4 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search by Complaint ID or Type..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-12 pl-11 pr-4 rounded-lg border border-gray-200 outline-none focus:border-green-700"
            />
          </div>
        </div>

        {/* Empty State */}
        {filteredComplaints.length === 0 && (
          <div className="bg-white rounded-2xl border border-dashed border-gray-200 p-12 text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-4">
              <FileText
                size={28}
                className="text-green-700"
              />
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              No Complaints Yet
            </h2>

            <p className="text-gray-500 max-w-md mx-auto leading-7">
              You have not submitted any complaints yet. Once you raise a complaint,
              it will appear here with its progress and status updates.
            </p>
          </div>
        )}

        {filteredComplaints.length > 0 && (
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-[#f8fafc] text-gray-500">
                  <tr>
                    <th className="p-4">Reference</th>
                    <th className="p-4">Type</th>
                    <th className="p-4">Location</th>
                    <th className="p-4">Priority</th>
                    <th className="p-4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredComplaints.map((item) => (
                    <tr key={item.complaint_id} className="border-t border-gray-100">
                      <td className="p-4 font-semibold text-[#13284c]">{item.reference_no}</td>
                      <td className="p-4">{item.category}</td>
                      <td className="p-4">{item.location}</td>
                      <td className="p-4">{item.priority}</td>
                      <td className="p-4 font-semibold text-green-700">{item.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyComplaints;
