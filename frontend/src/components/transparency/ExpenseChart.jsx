import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Roads",
    amount: 40,
  },
  {
    name: "Water",
    amount: 18,
  },
  {
    name: "Sanitation",
    amount: 12,
  },
  {
    name: "Education",
    amount: 8,
  },
  {
    name: "Health",
    amount: 6,
  },
];

const ExpenseChart = () => {
  return (
    <div className="bg-white rounded-2xl border p-5">
      <h2 className="text-lg font-semibold mb-5">
        Expense Breakdown (This Year)
      </h2>

      <div className="h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Bar dataKey="amount" fill="#16a34a" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ExpenseChart;