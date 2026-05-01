import { useMemo, useState } from "react";
import {
  Search,
  FileCheck2,
  Users,
  MapPin,
  Home,
  GraduationCap,
  Baby,
  HeartHandshake,
  
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Certificates = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const certificates = [
    {
      title: "Income Certificate",
      desc: "Used for scholarships, fee concessions and welfare benefits.",
      icon: FileCheck2,
      color: "text-green-700",
      bg: "bg-green-100",
      route: "/incomecertificate",
    },
    {
      title: "Community Certificate",
      desc: "Proof of caste/community for availing government benefits.",
      icon: Users,
      color: "text-purple-700",
      bg: "bg-purple-100",
      route: "/communitycertificate",
    },
    {
      title: "Nativity Certificate",
      desc: "Proof that applicant belongs to the state.",
      icon: MapPin,
      color: "text-blue-700",
      bg: "bg-blue-100",
      route: "/nativitycertificate",
    },
    {
      title: "Residence Certificate",
      desc: "Official proof of address for various purposes.",
      icon: Home,
      color: "text-orange-700",
      bg: "bg-orange-100",
      route: "/residencecertificate",
    },
    {
      title: "First Graduate Certificate",
      desc: "For first graduate candidates in the family.",
      icon: GraduationCap,
      color: "text-amber-700",
      bg: "bg-amber-100",
      route: "/firstgraduatecertificate",
    },
    {
      title: "Birth Certificate",
      desc: "Official certificate of birth issued by Panchayat.",
      icon: Baby,
      color: "text-pink-700",
      bg: "bg-pink-100",
      route: "/birthcertificate",
    },
    {
      title: "Death Certificate",
      desc: "Official certificate of death issued by Panchayat.",
      icon: HeartHandshake,
      color: "text-sky-700",
      bg: "bg-sky-100",
      route: "/deathcertificate",
    },
    {
      title: "Marriage Certificate",
      desc: "Official marriage registration certificate.",
      icon: Users,
      color: "text-rose-700",
      bg: "bg-rose-100",
      route: "/marriagecertificate",
    },
    
  ];

  const filteredCertificates = useMemo(() => {
    return certificates.filter((item) =>
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
          Certificates
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-green-800 mb-2">
            Certificates
          </h1>

          <p className="text-gray-600 text-lg">
            Apply for various certificates online. Easy, fast and transparent
            process.
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
              placeholder="Search certificate..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-12 pl-11 pr-4 rounded-lg border border-gray-200 outline-none focus:border-green-700 bg-white"
            />
          </div>

          <button className="h-12 px-8 rounded-lg bg-green-800 text-white font-semibold hover:bg-green-900 transition">
            Search
          </button>
        </div>

        {/* Section Title */}
        <h2 className="text-2xl font-bold text-green-800 mb-6">
          All Certificates
        </h2>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertificates.map((item, index) => {
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
              Track Your Applications
            </h3>

            <p className="text-gray-500">
              Check the status of your certificate applications.
            </p>
          </div>

          <button
            onClick={() =>
              navigate("/applicationtracker")
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

export default Certificates;