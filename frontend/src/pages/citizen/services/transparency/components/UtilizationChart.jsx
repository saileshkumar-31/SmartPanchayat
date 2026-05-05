
"use client";
import { PieChart, Pie, Tooltip } from "recharts";

export default function UtilizationChart({ data }) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow">
      <h3 className="font-semibold mb-3">Fund Utilization</h3>
      <PieChart width={400} height={300}>
        <Pie data={data} dataKey="value" nameKey="name" />
        <Tooltip />
      </PieChart>
    </div>
  );
}