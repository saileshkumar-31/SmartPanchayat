import React, { useMemo, useState } from "react";
import {
  Search,
  Droplets,
  Home,
  Trash2,
  Building2,
  Store,
  FileCheck,
  Landmark,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const CivilServices = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const services = [
    {
      title: "Water Connection Request",
      desc: "Apply for a new domestic or commercial water connection.",
      icon: Droplets,
      color: "text-blue-700",
      bg: "bg-blue-100",
      route: "/citizen/services/civil-tracker",
    },
    {
      title: "Property Tax Information",
      desc: "View dues, payment history and property tax details.",
      icon: Home,
      color: "text-orange-700",
      bg: "bg-orange-100",
      route: "/citizen/services/civil-tracker",
    },
    {
      title: "Waste Collection Request",
      desc: "Request garbage pickup and sanitation support.",
      icon: Trash2,
      color: "text-green-700",
      bg: "bg-green-100",
      route: "/citizen/services/civil-tracker",
    },
    {
      title: "Building Permission",
      desc: "Apply for residential or commercial building approval.",
      icon: Building2,
      color: "text-red-700",
      bg: "bg-red-100",
      route: "/citizen/services/civil-tracker",
    },
    {
      title: "Trade License",
      desc: "Apply or renew your local business trade license.",
      icon: Store,
      color: "text-purple-700",
      bg: "bg-purple-100",
      route: "/citizen/services/civil-tracker",
    },
    {
      title: "No Objection Certificate",
      desc: "Apply for NOC for various official requirements.",
      icon: FileCheck,
      color: "text-indigo-700",
      bg: "bg-indigo-100",
      route: "/citizen/services/civil-tracker",
    },
    {
      title: "Other Civic Services",
      desc: "Explore additional Panchayat civic services.",
      icon: Landmark,
      color: "text-emerald-700",
      bg: "bg-emerald-100",
      route: "/citizen/services/civil-tracker",
    },
  ];

  const filteredServices = useMemo(() => {
    return services.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <section className="min-h-screen bg-[#f6f8f6] px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-4">
          Home <span className="mx-2">›</span>
          Services <span className="mx-2">›</span>
          Civic Services
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-green-800 mb-2">
            Civic Services
          </h1>

          <p className="text-gray-600 text-lg">
            Access Panchayat civic services online quickly and transparently.
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
              placeholder="Search civic service..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-12 pl-11 pr-4 rounded-lg border border-gray-200 outline-none focus:border-green-700 bg-white"
            />
          </div>

          <button className="h-12 px-8 rounded-lg bg-green-800 text-white font-semibold hover:bg-green-900 transition">
            Search
          </button>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-green-800 mb-6">
          Available Civic Services
        </h2>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((item, index) => {
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

                <button
                  onClick={() => navigate(item.route)}
                  className="text-green-700 font-semibold flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Apply Now
                  <ArrowRight size={18} />
                </button>
              </div>
            );
          })}
        </div>

        {/* Tracker CTA */}
        <div className="mt-10 bg-white rounded-2xl border border-gray-100 p-6 flex flex-col lg:flex-row items-center justify-between gap-5">
          <div>
            <h3 className="text-2xl font-bold text-green-800 mb-2">
              Track Civic Service Applications
            </h3>

            <p className="text-gray-500">
              Check status of submitted water, tax, NOC and other applications.
            </p>
          </div>

          <button
            onClick={() =>
              navigate("/citizen/services/civil-tracker")
            }
            className="h-12 px-8 rounded-lg bg-green-800 text-white font-semibold hover:bg-green-900 transition flex items-center gap-2"
          >
            Open Tracker
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CivilServices;