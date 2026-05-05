
"use client";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

export default function TimeAnalytics({ data }) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow">
      <h3 className="font-semibold mb-3">Monthly Trends</h3>
      <LineChart width={600} height={300} data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="received" />
        <Line type="monotone" dataKey="spent" />
      </LineChart>
    </div>
  );
}