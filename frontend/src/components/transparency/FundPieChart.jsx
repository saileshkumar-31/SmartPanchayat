import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { NavLink } from "react-router-dom";

const data = [
  {
    name: "State Government",
    value: 6000000,
    color: "#2563eb",
  },
  {
    name: "Central Schemes",
    value: 3250000,
    color: "#22c55e",
  },
  {
    name: "MLA Fund",
    value: 1500000,
    color: "#facc15",
  },
  {
    name: "MP Fund",
    value: 1000000,
    color: "#f97316",
  },
  {
    name: "Local Tax",
    value: 500000,
    color: "#0f766e",
  },
  {
    name: "Donations",
    value: 200000,
    color: "#8b5cf6",
  },
];

const total = data.reduce((acc, item) => acc + item.value, 0);

const formatCurrency = (value) => {
  return `₹${value.toLocaleString("en-IN")}`;
};

export default function FundPieChart() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">

      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Funds Overview
          </h2>

          <p className="text-gray-500 text-sm mt-1">
            Distribution by funding source
          </p>
        </div>

        <NavLink
  to="/transparency/funds"
  className="text-[#0b4f35] font-semibold text-sm hover:underline"
>
  View All Sources →
</NavLink>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">

        {/* CHART */}
        <div className="relative h-[340px]">

          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                innerRadius={90}
                outerRadius={130}
                paddingAngle={2}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={entry.color}
                  />
                ))}
              </Pie>

              <Tooltip
                formatter={(value) => formatCurrency(value)}
              />
            </PieChart>
          </ResponsiveContainer>

          {/* CENTER TEXT */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <h3 className="text-2xl font-bold text-[#0b4f35]">
              ₹1.24Cr
            </h3>

            <p className="text-gray-500 text-sm">
              Total Funds
            </p>
          </div>
        </div>

        {/* LEGEND */}
        <div className="space-y-5">
          {data.map((item, index) => {
            const percent = (
              (item.value / total) *
              100
            ).toFixed(1);

            return (
              <div
                key={index}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-3">

                  <div
                    className="w-4 h-4 rounded-full"
                    style={{
                      backgroundColor: item.color,
                    }}
                  />

                  <div>
                    <p className="font-medium text-gray-700">
                      {item.name}
                    </p>

                    <p className="text-xs text-gray-400">
                      {percent}%
                    </p>
                  </div>
                </div>

                <p className="font-semibold text-gray-800">
                  {formatCurrency(item.value)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}