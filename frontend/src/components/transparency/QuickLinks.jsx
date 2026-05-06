import {
  Download,
  FileText,
  Landmark,
  ShieldCheck,
} from "lucide-react";

const links = [
  {
    title: "Reports",
    icon: Download,
  },
  {
    title: "Tender",
    icon: FileText,
  },
  {
    title: "Budget",
    icon: Landmark,
  },
  {
    title: "RTI",
    icon: ShieldCheck,
  },
];

export default function QuickLinks() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">

        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Quick Links
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Important transparency resources
          </p>
        </div>

        <button className="text-[#0b4f35] font-semibold text-sm hover:underline">
          View All →
        </button>
      </div>

      {/* HORIZONTAL CARDS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

        {links.map((item, index) => {
          const Icon = item.icon;

          return (
            <button
              key={index}
              className="
                group
                bg-gradient-to-br
                from-white
                to-[#f7faf8]
                border
                border-gray-100
                rounded-3xl
                p-6
                hover:shadow-lg
                transition-all
                duration-300
              "
            >
              <div className="flex flex-col items-center text-center">

                <div className="
                  bg-[#edf7f2]
                  p-4
                  rounded-2xl
                  group-hover:scale-110
                  transition
                ">
                  <Icon
                    size={24}
                    className="text-[#0b4f35]"
                  />
                </div>

                <h3 className="mt-4 font-semibold text-gray-700">
                  {item.title}
                </h3>

                <p className="text-xs text-gray-400 mt-1">
                  Open Resource
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}