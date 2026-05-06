import React from "react";
import { NavLink } from "react-router-dom";

import {
  Landmark,
  GraduationCap,
  HeartPulse,
  Tractor,
  Home,
  Briefcase,
  ArrowRight,
} from "lucide-react";

const schemes = [
  {
    title: "Housing Scheme",
    desc: "Affordable housing support for eligible rural families.",
    icon: <Home size={34} />,
    color: "from-green-600 to-emerald-500",
    link: "/schemes/housing-scheme",
  },
  {
    title: "Farmer Welfare",
    desc: "Subsidies, irrigation aid, and crop assistance programs.",
    icon: <Tractor size={34} />,
    color: "from-yellow-500 to-orange-500",
    link: "/schemes/farmer-welfare",
  },
  {
    title: "Education Support",
    desc: "Scholarships and financial help for students.",
    icon: <GraduationCap size={34} />,
    color: "from-blue-600 to-cyan-500",
    link: "/schemes/education-support",
  },
  {
    title: "Health Insurance",
    desc: "Medical coverage and emergency treatment benefits.",
    icon: <HeartPulse size={34} />,
    color: "from-red-500 to-pink-500",
    link: "/schemes/health-insurance",
  },
  {
    title: "Employment Scheme",
    desc: "Local job opportunities and skill development programs.",
    icon: <Briefcase size={34} />,
    color: "from-purple-600 to-indigo-500",
    link: "/schemes/employment-scheme",
  },
  {
    title: "Pension Scheme",
    desc: "Monthly pension support for senior citizens.",
    icon: <Landmark size={34} />,
    color: "from-slate-700 to-slate-500",
    link: "/schemes/pension-scheme",
  },
];

const Schemes = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#f8fff6] to-white min-h-screen py-16 px-4 sm:px-6 lg:px-10">
      
      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-14">

        <p className="text-green-700 font-semibold tracking-widest uppercase mb-2">
          Government Benefits
        </p>

        <h1 className="text-4xl sm:text-5xl font-bold text-[#13284c] leading-tight">
          Welfare <span className="text-green-700">Schemes</span>
        </h1>

        <p className="mt-5 text-gray-600 text-lg max-w-2xl mx-auto">
          Explore public welfare schemes available for citizens. Apply easily
          and track your eligibility through Smart Panchayat.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {schemes.map((item, index) => (
          <div
            key={index}
            className="group bg-white rounded-3xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden border border-gray-100"
          >

            {/* Top Color Bar */}
            <div className={`h-2 bg-gradient-to-r ${item.color}`} />

            <div className="p-8">

              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} text-white flex items-center justify-center mb-6 shadow-lg`}
              >
                {item.icon}
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-[#13284c] mb-3">
                {item.title}
              </h2>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6">
                {item.desc}
              </p>

              {/* Navigation Button */}
              <NavLink
                to={item.link}
                className="flex items-center gap-2 text-green-700 font-semibold group-hover:gap-3 transition-all"
              >
                View Details
                <ArrowRight size={18} />
              </NavLink>
            </div>
          </div>
        ))}
      </div>

      
    </section>
  );
};

export default Schemes;