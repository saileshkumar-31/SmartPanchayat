import  { useMemo, useState } from "react";
import {
  Search,
  AlertTriangle,
  Lightbulb,
  Droplets,
  Trash2,
  Road,
  ShieldAlert,
  ArrowRight,
  
  FileText,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Complaints = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const complaintTypes = [
    {
      title: "Street Light Issue",
      desc: "Report damaged or non-working street lights.",
      icon: Lightbulb,
      color: "text-yellow-700",
      bg: "bg-yellow-100",
    },
    {
      title: "Water Supply Issue",
      desc: "Low pressure, leakage or no water supply complaints.",
      icon: Droplets,
      color: "text-blue-700",
      bg: "bg-blue-100",
    },
    {
      title: "Garbage / Sanitation",
      desc: "Waste collection delay or sanitation problems.",
      icon: Trash2,
      color: "text-green-700",
      bg: "bg-green-100",
    },
    {
      title: "Road Damage",
      desc: "Potholes, broken roads or unsafe pathways.",
      icon: Road,
      color: "text-orange-700",
      bg: "bg-orange-100",
    },
    {
      title: "Public Safety",
      desc: "Dangerous locations or urgent civic risks.",
      icon: ShieldAlert,
      color: "text-red-700",
      bg: "bg-red-100",
    },
    {
      title: "Other Complaint",
      desc: "Submit any other Panchayat-related grievance.",
      icon: AlertTriangle,
      color: "text-purple-700",
      bg: "bg-purple-100",
    },
  ];

  const filteredComplaints = useMemo(() => {
    return complaintTypes.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const complaintHistory = [
    {
      id: "CMP1025",
      issue: "Street Light Issue",
      date: "22 Apr 2026",
      status: "In Progress",
    },
    {
      id: "CMP1018",
      issue: "Water Supply Issue",
      date: "18 Apr 2026",
      status: "Resolved",
    },
    {
      id: "CMP1009",
      issue: "Garbage / Sanitation",
      date: "10 Apr 2026",
      status: "Pending",
    },
  ];

  const getStatusStyle = (status) => {
    if (status === "Resolved")
      return "bg-green-100 text-green-700";
    if (status === "In Progress")
      return "bg-blue-100 text-blue-700";
    return "bg-orange-100 text-orange-700";
  };

  return (
    <section className="min-h-screen bg-[#f6f8f6] px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-4">
          Home <span className="mx-2">›</span>
          Services <span className="mx-2">›</span>
          Complaints
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-green-800 mb-2">
            Complaints & Grievances
          </h1>

          <p className="text-gray-600 text-lg">
            Raise civic complaints online and track resolution status easily.
          </p>
        </div>

        {/* Search */}
        <div className="flex flex-col sm:flex-row gap-3 mb-10 max-w-2xl">
          <div className="relative flex-1">
            <Search
              size={18}
              className="absolute left-4 top-4 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search complaint type..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-12 pl-11 pr-4 rounded-lg border border-gray-200 outline-none focus:border-green-700 bg-white"
            />
          </div>

          <button className="h-12 px-8 rounded-lg bg-green-800 text-white font-semibold hover:bg-green-900 transition">
            Search
          </button>
        </div>

        {/* Complaint Cards */}
        <h2 className="text-2xl font-bold text-green-800 mb-6">
          Raise a Complaint
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredComplaints.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition p-6"
              >
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center mb-5 ${item.bg}`}
                >
                  <Icon
                    size={24}
                    className={item.color}
                  />
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm leading-7 min-h-[72px] mb-6">
                  {item.desc}
                </p>

                <button className="text-green-700 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  Submit Complaint
                  <ArrowRight size={18} />
                </button>
              </div>
            );
          })}
        </div>

        {/* Tracker */}
        <div className="mt-10 bg-white rounded-2xl border border-gray-100 p-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-2xl font-bold text-green-800 mb-2">
                Complaint Tracker
              </h3>

              <p className="text-gray-500">
                Monitor the progress of submitted complaints.
              </p>
            </div>

            <button
              onClick={() => navigate("/application-status")}
              className="h-11 px-6 rounded-lg bg-green-800 text-white font-semibold hover:bg-green-900 transition"
            >
              View All
            </button>
          </div>

          <div className="space-y-4">
            {complaintHistory.map((item, index) => (
              <div
                key={index}
                className="border border-gray-100 rounded-xl p-5 flex flex-col lg:flex-row lg:items-center justify-between gap-4"
              >
                <div>
                  <p className="font-bold text-gray-800">
                    {item.id}
                  </p>

                  <p className="text-gray-600 mt-1">
                    {item.issue}
                  </p>

                  <p className="text-sm text-gray-400 mt-1">
                    Submitted: {item.date}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-medium ${getStatusStyle(
                      item.status
                    )}`}
                  >
                    {item.status}
                  </span>

                  <button className="text-green-700 font-semibold text-sm">
                    Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Info Bar */}
        <div className="mt-8 bg-white rounded-2xl border border-gray-100 p-6 flex flex-col lg:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-green-800 text-white flex items-center justify-center">
              <FileText size={22} />
            </div>

            <div>
              <h4 className="text-xl font-bold text-green-800">
                Complaint Guidelines
              </h4>

              <p className="text-gray-600">
                Provide accurate details and location for faster resolution.
              </p>
            </div>
          </div>

          <button className="h-11 px-6 rounded-lg border border-green-800 text-green-800 font-semibold hover:bg-green-800 hover:text-white transition">
            Read Guidelines
          </button>
        </div>
      </div>
    </section>
  );
};

export default Complaints;