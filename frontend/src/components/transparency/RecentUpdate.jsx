import { NavLink } from "react-router-dom";
const updates = [
  {
    title: "New fund of ₹15,00,000 approved",
    date: "14 May 2026",
  },
  {
    title: "Road construction in Ward 5 completed",
    date: "12 May 2026",
  },
  {
    title: "Community Hall Project sanctioned",
    date: "10 May 2026",
  },
];

export default function RecentUpdates() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Recent Updates
        </h2>

        <NavLink
          to="/transparency/recent-updates"
          className="text-[#0b4f35] font-semibold text-sm hover:underline"
        >
          View All →
        </NavLink>
      </div>

      <div className="space-y-6">
        {updates.map((item, index) => (
          <div
            key={index}
            className="flex gap-4"
          >
            <div className="flex flex-col items-center">
              <div className="w-3 h-3 bg-[#0b4f35] rounded-full" />

              {index !== updates.length - 1 && (
                <div className="w-[2px] flex-1 bg-gray-200 mt-2" />
              )}
            </div>

            <div>
              <h3 className="font-medium text-gray-800">
                {item.title}
              </h3>

              <p className="text-sm text-gray-400 mt-1">
                {item.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}