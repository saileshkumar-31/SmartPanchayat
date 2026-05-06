import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  Tooltip,
  Cell,
  YAxis,
  CartesianGrid,
} from "recharts";

const data = [
  {
    name: "Roads",
    amount: 40,
    color: "#2563eb",
  },
  {
    name: "Water",
    amount: 25,
    color: "#22c55e",
  },
  {
    name: "Health",
    amount: 18,
    color: "#f59e0b",
  },
  {
    name: "Education",
    amount: 12,
    color: "#8b5cf6",
  },
  {
    name: "Sanitation",
    amount: 15,
    color: "#ef4444",
  },
];

function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div
        className="
          bg-[#0f172a]
          text-white
          px-4
          py-3
          rounded-2xl
          shadow-2xl
          border
          border-slate-700
        "
      >
        <p className="font-semibold text-sm">
          {payload[0].payload.name}
        </p>

        <p className="text-slate-300 text-sm mt-1">
          ₹ {payload[0].value} Lakhs
        </p>
      </div>
    );
  }

  return null;
}

export default function ExpenseBarChart() {
  return (
    <div
      className="
        bg-white
        rounded-3xl
        p-6
        shadow-sm
        border
        border-gray-100
      "
    >
      {/* HEADER */}
      <div className="flex items-center justify-between mb-8">

        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Expense Breakdown
          </h2>

          <p className="text-gray-500 text-sm mt-1">
            Yearly sector-wise expenditure
          </p>
        </div>

        <select
          className="
            border
            border-gray-200
            rounded-xl
            px-4
            py-2
            text-sm
            outline-none
            bg-white
          "
        >
          <option>2026</option>
          <option>2025</option>
        </select>
      </div>

      {/* CHART */}
      <div className="h-[300px]">

        <ResponsiveContainer width="100%" height="100%">

          <BarChart
            data={data}
            barGap={18}
            margin={{
              top: 10,
              right: 10,
              left: 0,
              bottom: 0,
            }}
          >
            {/* GRID */}
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#f1f5f9"
            />

            {/* X AXIS */}
            <XAxis
              dataKey="name"
              tickLine={false}
              axisLine={false}
              tick={{
                fill: "#6b7280",
                fontSize: 14,
                fontWeight: 500,
              }}
            />

            {/* Y AXIS */}
            <YAxis hide />

            {/* TOOLTIP */}
            <Tooltip
              content={<CustomTooltip />}
              cursor={{
                fill: "rgba(15,23,42,0.04)",
              }}
            />

            {/* BARS */}
            <Bar
              dataKey="amount"
              radius={[18, 18, 0, 0]}
            >
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={entry.color}
                />
              ))}
            </Bar>
          </BarChart>

        </ResponsiveContainer>
      </div>

      {/* FOOTER STATS */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">

        {data.map((item, index) => (
          <div
            key={index}
            className="
              bg-[#f8fafc]
              rounded-2xl
              p-4
              border
              border-gray-100
            "
          >
            <div className="flex items-center gap-2 mb-2">

              <div
                className="w-3 h-3 rounded-full"
                style={{
                  backgroundColor: item.color,
                }}
              />

              <p className="text-sm font-medium text-gray-600">
                {item.name}
              </p>
            </div>

            <h3 className="text-lg font-bold text-gray-800">
              ₹{item.amount}L
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}