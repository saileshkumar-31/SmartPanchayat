import { useMemo, useState } from "react";
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
import { useTranslation } from "react-i18next";

const Complaints = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const [search, setSearch] = useState("");
  const [trackerId, setTrackerId] = useState("");
  const [searchedId, setSearchedId] = useState("");

  const complaintTypes = [
    {
      title: t("streetLight"),
      desc: t("streetLightDesc"),
      icon: Lightbulb,
      color: "text-yellow-700",
      bg: "bg-yellow-100",
      path: "/complaints/streetlight",
    },
    {
      title: t("waterSupply"),
      desc: t("waterSupplyDesc"),
      icon: Droplets,
      color: "text-blue-700",
      bg: "bg-blue-100",
      path: "/complaints/water-supply",
    },
    {
      title: t("garbage"),
      desc: t("garbageDesc"),
      icon: Trash2,
      color: "text-green-700",
      bg: "bg-green-100",
      path: "/complaints/garbage",
    },
    {
      title: t("roadDamage"),
      desc: t("roadDamageDesc"),
      icon: Road,
      color: "text-orange-700",
      bg: "bg-orange-100",
      path: "/complaints/road-damage",
    },
    {
      title: t("publicSafety"),
      desc: t("publicSafetyDesc"),
      icon: ShieldAlert,
      color: "text-red-700",
      bg: "bg-red-100",
      path: "/complaints/public-safety",
    },
    {
      title: t("otherComplaint"),
      desc: t("otherComplaintDesc"),
      icon: AlertTriangle,
      color: "text-purple-700",
      bg: "bg-purple-100",
      path: "/complaints/other",
    },
  ];

  const filteredComplaints = useMemo(() => {
    return complaintTypes.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const handleTrackerSearch = () => {
    if (!trackerId.trim()) return;
    setSearchedId(trackerId.toUpperCase());
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
            {t("complaintsTitle")}
          </h1>

          <p className="text-gray-600 text-lg">
            {t("complaintsSubtitle")}
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
          {t("raiseComplaint")}
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
                  <Icon size={24} className={item.color} />
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm leading-7 min-h-[72px] mb-6">
                  {item.desc}
                </p>

                <button
                  onClick={() => navigate(item.path)}
                  className="text-green-700 font-semibold flex items-center gap-2 hover:gap-3 transition-all"
                >
                  {t("raiseComplaint")}
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
                {t("complaintTracker")}
              </h3>

              <p className="text-gray-500">
                {t("trackerDescription")}
              </p>
            </div>

            <button
              onClick={() => navigate("/complaints/my-complaints")}
              className="h-11 px-6 rounded-lg bg-green-800 text-white font-semibold hover:bg-green-900 transition"
            >
              {t("viewAll")}
            </button>
          </div>

          {/* Search Tracker ID */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <input
              type="text"
              placeholder={t("enterComplaintId")}
              value={trackerId}
              onChange={(e) => setTrackerId(e.target.value)}
              className="flex-1 h-12 px-4 rounded-lg border border-gray-200 outline-none focus:border-green-700"
            />

            <button
              onClick={handleTrackerSearch}
              className="h-12 px-8 rounded-lg bg-green-800 text-white font-semibold hover:bg-green-900 transition"
            >
              {t("track")}
            </button>
          </div>

          {/* Result */}
          {searchedId ? (
            <div className="border border-gray-100 rounded-xl p-5 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div>
                <p className="font-bold text-gray-800">
                  {searchedId}
                </p>

                <p className="text-gray-600 mt-1">
                  {t("complaintStatus")}
                </p>

                <p className="text-sm text-gray-400 mt-1">
                  {t("lastUpdated")}: Today
                </p>
              </div>

              <span className="px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-700">
                {t("inProgress")}
              </span>
            </div>
          ) : (
            <div className="border border-dashed border-gray-200 rounded-xl p-8 text-center text-gray-400">
              {t("enterComplaintId")}
            </div>
          )}
        </div>

        {/* Guidelines */}
        <div className="mt-8 bg-white rounded-2xl border border-gray-100 p-6 flex flex-col lg:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-green-800 text-white flex items-center justify-center">
              <FileText size={22} />
            </div>

            <div>
              <h4 className="text-xl font-bold text-green-800">
                {t("complaintGuidelines")}
              </h4>

              <p className="text-gray-600">
                {t("guidelinesDescription")}
              </p>
            </div>
          </div>

          <button
            onClick={() => navigate("/complaints/complaint-guidelines")}
            className="h-11 px-6 rounded-lg border border-green-800 text-green-800 font-semibold hover:bg-green-800 hover:text-white transition"
          >
            {t("readGuidelines")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Complaints;