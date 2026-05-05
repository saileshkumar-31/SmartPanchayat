
"use client";
import { BarChart, Bar, PieChart, Pie, Tooltip, XAxis, YAxis } from "recharts";

export default function FundSourcesChart({ data }) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <BarChart width={400} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" />
      </BarChart>

      <PieChart width={300} height={300}>
        <Pie data={data} dataKey="value" nameKey="name" />
        <Tooltip />
      </PieChart>
    </div>
  );
}