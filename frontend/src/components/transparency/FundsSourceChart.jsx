import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "State", value: 6000000 },
  { name: "Central", value: 3250000 },
  { name: "MLA", value: 1500000 },
  { name: "Public", value: 1000000 },
];

const COLORS = [
  "#2563eb",
  "#16a34a",
  "#eab308",
  "#14b8a6",
];

const FundsSourcesChart = () => {
  return (
    <div className="bg-white rounded-2xl border p-5">
      <h2 className="text-lg font-semibold mb-4">
        Funds Overview (By Source)
      </h2>

      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              innerRadius={60}
              outerRadius={100}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="space-y-3 mt-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-between text-sm"
          >
            <div className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{
                  backgroundColor: COLORS[index],
                }}
              ></div>

              <span>{item.name}</span>
            </div>

            <span>
              ₹ {(item.value / 100000).toFixed(1)} L
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FundsSourcesChart;