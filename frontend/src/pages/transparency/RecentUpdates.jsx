import {
  Bell,
  CalendarDays,
  Download,
  ArrowRight,
  Search,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const updates = [
  {
    id: 1,
    title: "New fund of ₹15,00,000 approved for village infrastructure",
    category: "Funding",
    date: "14 May 2026",
    description:
      "State government approved new infrastructure development funds for roads, drainage, and public facilities.",
  },
  {
    id: 2,
    title: "Road construction in Ward 5 completed",
    category: "Project Update",
    date: "12 May 2026",
    description:
      "Concrete road construction covering 2.5 KM successfully completed and opened for public usage.",
  },
  {
    id: 3,
    title: "Community Hall Project sanctioned",
    category: "Announcement",
    date: "10 May 2026",
    description:
      "New community hall approved under rural development scheme with seating capacity of 500 people.",
  },
  {
    id: 4,
    title: "New drinking water pipeline work started",
    category: "Project Update",
    date: "08 May 2026",
    description:
      "Pipeline installation work initiated to improve water supply across Ward 2 and Ward 3.",
  },
  {
    id: 5,
    title: "Gram Sabha meeting scheduled",
    category: "Meeting",
    date: "06 May 2026",
    description:
      "Village administrative meeting scheduled to discuss new development plans and citizen requests.",
  },
];

export default function RecentUpdates() {
  return (
    <div className="min-h-screen bg-[#f5f7f9] p-6 md:p-10">

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-10">

        <div>
          <h1 className="text-4xl font-bold text-gray-800">
            Recent Updates
          </h1>

          <p className="text-gray-500 mt-2">
            Latest announcements, project updates, fund releases, and village development activities.
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full lg:w-[350px]">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />

          <input
            type="text"
            placeholder="Search updates..."
            className="w-full pl-11 pr-4 py-3 rounded-2xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#0b4f35]"
          />
        </div>
      </div>

      {/* Updates List */}
      <div className="space-y-6">
        {updates.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition"
          >
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">

              {/* Left */}
              <div className="flex gap-5 flex-1">

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-[#e8f5ef] flex items-center justify-center shrink-0">
                  <Bell
                    className="text-[#0b4f35]"
                    size={26}
                  />
                </div>

                {/* Content */}
                <div className="flex-1">

                  <div className="flex flex-wrap items-center gap-3 mb-3">

                    <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                      {item.category}
                    </span>

                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <CalendarDays size={15} />
                      {item.date}
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-800 mb-3">
                    {item.title}
                  </h2>

                  <p className="text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Right Buttons */}
              <div className="flex items-center gap-3 self-center lg:self-center">

  <button className="h-12 px-5 flex items-center justify-center gap-2 rounded-2xl border border-gray-200 hover:bg-gray-50 transition">
    <Download size={18} />
    PDF
  </button>

  <NavLink
    to="/transparency/update-details"
    className="h-12 px-5 flex items-center justify-center gap-2 rounded-2xl bg-[#0b4f35] text-white font-semibold hover:scale-105 transition"
  >
    View Details
    <ArrowRight size={18} />
  </NavLink>
</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}