import { useState, useMemo  } from "react";

import {
  Search,
  ChevronRight,
  FileText,
  MessageCircleWarning,
  Landmark,
  Users,
  BarChart3,
  PenSquare,
  BadgeCheck,
  Download,
  Phone,
  Megaphone,
  ArrowRight,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import heroImg from "../../../assets/services/services.png";

const Services = () => {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [submittedSearch, setSubmittedSearch] = useState("");

  // /* ---------------- LOGIN CHECK ---------------- */
  // const isLoggedIn = localStorage.getItem("token");

  // // const goProtected = (path) => {
  // //   if (isLoggedIn) {
  // //     navigate(path);
  // //   } else {
  // //     navigate("/citizen");
  // //   }
  // // };
const goProtected = (path) => {
  navigate(path);
};
  /* ---------------- DATA ---------------- */
  const categories = [
    {
      title: "Certificates",
      color: "text-green-700",
      bg: "bg-green-100",
      icon: FileText,
      path: "/certificates",
      items: [
        "Income Certificate",
        "Community Certificate",
        "Nativity Certificate",
        "Residence Certificate",
        "First Graduate Certificate",
      ],
      button: "View All Certificates",
    },
    {
      title: "Complaints & Grievances",
      color: "text-blue-700",
      bg: "bg-blue-100",
      icon: MessageCircleWarning,
      path: "/complaints",
      items: [
        "Raise Complaint",
        "Track Complaint",
        "Report Water Issue",
        "Streetlight Issue",
        "Sanitation Issue",
      ],
      button: "View All Complaints",
    },
    {
      title: "Civic Services",
      color: "text-orange-700",
      bg: "bg-orange-100",
      icon: Landmark,
      path: "/civilservices",
      items: [
        "Birth Certificate Request",
        "Death Certificate Request",
        "Property Tax Information",
        "Water Connection Request",
        "Waste Collection Request",
      ],
      button: "View All Civic Services",
    },
    {
      title: "Meetings & Participation",
      color: "text-purple-700",
      bg: "bg-purple-100",
      icon: Users,
      path: "/meetings",
      items: [
        "View Scheduled Meetings",
        "Request Public Meeting",
        "Gram Sabha Notices",
        "Meeting Minutes",
      ],
      button: "View All Meetings",
    },
    {
      title: "Transparency",
      color: "text-green-800",
      bg: "bg-green-100",
      icon: BarChart3,
      path: "/transparency",
      items: [
        "Panchayat Funds",
        "Ongoing Projects",
        "Completed Works",
        "Budget Reports",
      ],
      button: "View All Reports",
    },
  ];

  const quickActions = [
    {
      icon: PenSquare,
      title: "Apply Now",
      desc: "Start a new application",
      path: "/certificates",
    },
    {
      icon: BadgeCheck,
      title: "Track Status",
      desc: "Check application status",
      path: "/citizen/services/application-status",
    },
    {
      icon: Download,
      title: "Download Forms",
      desc: "Get required documents",
      path: "/downloads",
    },
    {
      icon: Phone,
      title: "Contact Office",
      desc: "Reach Panchayat office",
      path: "/contact-us",
    },
  ];

  /* ---------------- SEARCH ---------------- */
  const handleSearch = () => {
    setSubmittedSearch(searchTerm.trim());
  };

  const filteredCategories = useMemo(() => {
    if (!submittedSearch) return categories;

    const keyword = submittedSearch.toLowerCase();

    return categories.filter(
      (item) =>
        item.title.toLowerCase().includes(keyword) ||
        item.items.some((sub) =>
          sub.toLowerCase().includes(keyword)
        )
    );
  }, [submittedSearch]);

  return (
    <section className="min-h-screen bg-[#f6f8f6]">
      {/* HERO */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center">
          <div className="px-6 lg:px-8 py-10">
            <div className="text-sm text-gray-500 mb-5">
              Home <span className="mx-2">›</span> Services
            </div>

            <h1 className="text-5xl font-bold text-green-800 mb-5">
              Citizen Services
            </h1>

            <p className="text-gray-600 text-lg leading-9 max-w-xl mb-8">
              Apply, track and access Panchayat services online.
            </p>

            {/* SEARCH */}
            <div className="flex gap-3 max-w-xl">
              <div className="relative flex-1">
                <Search
                  size={18}
                  className="absolute left-4 top-4 text-gray-400"
                />

                <input
                  type="text"
                  placeholder="Search for a service..."
                  value={searchTerm}
                  onChange={(e) =>
                    setSearchTerm(e.target.value)
                  }
                  className="w-full h-12 pl-11 pr-4 rounded-lg border border-gray-200 outline-none"
                />
              </div>

              <button
                onClick={handleSearch}
                className="h-12 px-8 rounded-lg bg-green-800 text-white font-semibold"
              >
                Search
              </button>
            </div>
          </div>

          <div className="relative h-full min-h-[340px]">
            <img
              src={heroImg}
              alt="Services"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-y-0 left-0 w-52 bg-gradient-to-r from-white via-white/70 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* CATEGORY */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredCategories.map((cat, index) => {
            const Icon = cat.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm"
              >
                <div className="p-6 text-center">
                  <div
                    className={`w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4 ${cat.bg}`}
                  >
                    <Icon
                      className={cat.color}
                      size={28}
                    />
                  </div>

                  <h3
                    className={`text-xl font-bold ${cat.color}`}
                  >
                    {cat.title}
                  </h3>
                </div>

                {/* SUB ITEMS */}
                <div className="border-t border-gray-100">
                  {cat.items.map((item, i) => (
                    <button
                      key={i}
                      onClick={() =>
                        goProtected(cat.path)
                      }
                      className="w-full px-5 py-3 flex items-center justify-between text-gray-700 border-b border-gray-50 hover:bg-gray-50"
                    >
                      <span className="text-sm">
                        {item}
                      </span>
                      <ChevronRight size={16} />
                    </button>
                  ))}
                </div>

                {/* VIEW BUTTON */}
                <div className="p-5 text-center">
                  <button
                    onClick={() =>
                      goProtected(cat.path)
                    }
                    className={`font-semibold ${cat.color} inline-flex items-center gap-2`}
                  >
                    {cat.button}
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* QUICK ACTIONS */}
        <div className="mt-10 grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {quickActions.map((item, index) => {
            const Icon = item.icon;

            return (
              <button
                key={index}
                onClick={() => goProtected(item.path)}
                className="bg-white border border-gray-100 rounded-xl p-5 text-left hover:shadow-md transition"
              >
                <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                  <Icon
                    size={22}
                    className="text-green-800"
                  />
                </div>

                <h4 className="font-bold text-gray-800 mb-1">
                  {item.title}
                </h4>

                <p className="text-sm text-gray-500">
                  {item.desc}
                </p>
              </button>
            );
          })}
        </div>

        {/* INFO */}
        <div className="mt-8 bg-white rounded-2xl border border-gray-100 p-6 flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <div className="w-14 h-14 rounded-full bg-green-800 text-white flex items-center justify-center">
              <Megaphone size={22} />
            </div>

            <div>
              <h4 className="text-xl font-bold text-green-800">
                Important Information
              </h4>

              <p className="text-gray-600">
                Login required for citizen service access.
              </p>
            </div>
          </div>

          <button className="px-6 h-11 rounded-lg bg-green-800 text-white font-semibold">
            View Guidelines
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;