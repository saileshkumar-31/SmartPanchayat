const projects = [
  {
    name: "Concrete Road - Ward 3",
    amount: "₹5,00,000",
    progress: 48,
  },
  {
    name: "Drainage System - Ward 1",
    amount: "₹3,20,000",
    progress: 72,
  },
  {
    name: "Water Tank Construction",
    amount: "₹8,75,000",
    progress: 35,
  },
  {
    name: "Street Light Installation",
    amount: "₹2,40,000",
    progress: 80,
  },
];

export default function ProjectProgress() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Top Ongoing Projects
        </h2>

        <button className="text-[#0b4f35] font-semibold text-sm hover:underline">
          View All →
        </button>
      </div>

      <div className="space-y-5">
        {projects.map((item, index) => (
          <div
            key={index}
            className="p-4 rounded-2xl border border-gray-100 hover:shadow-md transition"
          >
            <div className="flex justify-between mb-2">

              <div>
                <h3 className="font-semibold text-gray-800">
                  {item.name}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  {item.amount}
                </p>
              </div>

              <span className="font-bold text-[#0b4f35]">
                {item.progress}%
              </span>
            </div>

            <div className="h-3 bg-gray-100 rounded-full overflow-hidden mt-3">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#0b4f35] to-[#2bb673]"
                style={{
                  width: `${item.progress}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}