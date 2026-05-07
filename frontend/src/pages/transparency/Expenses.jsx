import { useEffect, useMemo, useState } from "react";
import DashboardLayout from "../../components/transparency/DashboardLayout";
import { api } from "../../lib/api";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const expenseData = [
  {
    category: "Roads",
    allocated: 4000000,
    spent: 3600000,
    utilization: 90,
    color: "#2563eb",
  },
  {
    category: "Water Supply",
    allocated: 3000000,
    spent: 2400000,
    utilization: 80,
    color: "#22c55e",
  },
  {
    category: "Sanitation",
    allocated: 1500000,
    spent: 1200000,
    utilization: 80,
    color: "#f59e0b",
  },
  {
    category: "Education",
    allocated: 1000000,
    spent: 850000,
    utilization: 85,
    color: "#8b5cf6",
  },
  {
    category: "Healthcare",
    allocated: 900000,
    spent: 700000,
    utilization: 77,
    color: "#ef4444",
  },
  {
    category: "Others",
    allocated: 1200000,
    spent: 850000,
    utilization: 72,
    color: "#14b8a6",
  },
];

const formatCurrency = (value) => {
  return `₹${value.toLocaleString("en-IN")}`;
};

export default function ExpenseBreakdown() {
  const [expenses, setExpenses] = useState(expenseData);
  const totalSpent = useMemo(
    () => expenses.reduce((acc, item) => acc + item.spent, 0),
    [expenses]
  );

  useEffect(() => {
    api.get("/transparency/expenses")
      .then((res) => {
        if (!res.data.length) return;
        const colors = ["#2563eb", "#22c55e", "#f59e0b", "#8b5cf6", "#ef4444", "#14b8a6"];
        setExpenses(
          res.data.map((item, index) => ({
            category: item.category,
            allocated: item.amount,
            spent: item.amount,
            utilization: 100,
            color: colors[index % colors.length],
          }))
        );
      })
      .catch(() => {});
  }, []);

  return (
    <DashboardLayout>

      <div className="space-y-8">

        {/* HERO */}
        <div
          className="
            flex
            flex-col
            lg:flex-row
            lg:items-center
            lg:justify-between
            gap-5
          "
        >

          {/* LEFT */}
          <div>

            {/* BREADCRUMB */}
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">

              <span>Home</span>

              <span>/</span>

              <span>Transparency</span>

              <span>/</span>

              <span className="text-gray-500 font-medium">
                Expense Breakdown
              </span>

            </div>

            {/* TITLE */}
            <h1
              className="
                text-4xl
                font-bold
                text-[#0b4f35]
                tracking-tight
              "
            >
              Expense Breakdown
            </h1>

            {/* SUBTITLE */}
            <p className="text-gray-500 mt-2 text-lg">
              Detailed overview of Panchayat spending and fund utilization.
            </p>

          </div>

          {/* RIGHT */}
          <div
            className="
              flex
              flex-wrap
              items-center
              gap-4
            "
          >

            <select
              className="
                bg-white
                border
                border-gray-200
                rounded-2xl
                px-4
                py-3
                text-sm
                font-medium
                text-gray-600
                outline-none
              "
            >
              <option>2023 - 2024</option>
              <option>2024 - 2025</option>
            </select>

            <button
              className="
                bg-[#0b4f35]
                text-white
                px-6
                py-3
                rounded-2xl
                text-sm
                font-semibold
                hover:opacity-90
                transition
              "
            >
              Download Report
            </button>

          </div>

        </div>

        {/* STATS */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-4
            gap-5
          "
        >

          <div
            className="
              bg-white
              rounded-3xl
              p-6
              border
              border-gray-100
              shadow-sm
            "
          >

            <p className="text-sm text-gray-500">
              Total Budget
            </p>

            <h2 className="text-3xl font-bold text-[#0b4f35] mt-2">
              ₹1.24Cr
            </h2>

            <p className="text-sm text-gray-400 mt-2">
              Current Financial Year
            </p>

          </div>

          <div
            className="
              bg-white
              rounded-3xl
              p-6
              border
              border-gray-100
              shadow-sm
            "
          >

            <p className="text-sm text-gray-500">
              Total Spent
            </p>

            <h2 className="text-3xl font-bold text-[#0b4f35] mt-2">
              ₹78.3L
            </h2>

            <p className="text-sm text-gray-400 mt-2">
              Utilized Funds
            </p>

          </div>

          <div
            className="
              bg-white
              rounded-3xl
              p-6
              border
              border-gray-100
              shadow-sm
            "
          >

            <p className="text-sm text-gray-500">
              Remaining Balance
            </p>

            <h2 className="text-3xl font-bold text-[#0b4f35] mt-2">
              ₹45.7L
            </h2>

            <p className="text-sm text-gray-400 mt-2">
              Available Funds
            </p>

          </div>

          <div
            className="
              bg-white
              rounded-3xl
              p-6
              border
              border-gray-100
              shadow-sm
            "
          >

            <p className="text-sm text-gray-500">
              Average Utilization
            </p>

            <h2 className="text-3xl font-bold text-[#0b4f35] mt-2">
              78%
            </h2>

            <p className="text-sm text-gray-400 mt-2">
              Across Categories
            </p>

          </div>

        </div>

        {/* MAIN GRID */}
        <div
          className="
            grid
            grid-cols-1
            xl:grid-cols-3
            gap-6
          "
        >

          {/* LEFT */}
          <div className="xl:col-span-2">

            {/* TABLE */}
            <div
              className="
                bg-white
                rounded-3xl
                border
                border-gray-100
                shadow-sm
                overflow-hidden
              "
            >

              <div className="p-6 border-b border-gray-100">

                <h2 className="text-2xl font-bold text-gray-800">
                  Category Wise Details
                </h2>

                <p className="text-gray-500 mt-1">
                  Expense allocation and utilization by department
                </p>

              </div>

              <div className="overflow-x-auto">

                <table className="w-full min-w-[850px]">

                  <thead className="bg-gray-50">

                    <tr>

                      <th
                        className="
                          px-6
                          py-4
                          text-left
                          text-sm
                          font-semibold
                          text-gray-600
                        "
                      >
                        Category
                      </th>

                      <th
                        className="
                          px-6
                          py-4
                          text-left
                          text-sm
                          font-semibold
                          text-gray-600
                        "
                      >
                        Allocated
                      </th>

                      <th
                        className="
                          px-6
                          py-4
                          text-left
                          text-sm
                          font-semibold
                          text-gray-600
                        "
                      >
                        Spent
                      </th>

                      <th
                        className="
                          px-6
                          py-4
                          text-left
                          text-sm
                          font-semibold
                          text-gray-600
                        "
                      >
                        Utilization
                      </th>

                    </tr>

                  </thead>

                  <tbody>

                    {expenses.map((item, index) => (
                      <tr
                        key={index}
                        className="
                          border-t
                          border-gray-100
                          hover:bg-gray-50
                          transition
                        "
                      >

                        <td className="px-6 py-5">

                          <div className="flex items-center gap-3">

                            <div
                              className="w-4 h-4 rounded-full"
                              style={{
                                backgroundColor: item.color,
                              }}
                            />

                            <span className="font-medium text-gray-800">
                              {item.category}
                            </span>

                          </div>

                        </td>

                        <td className="px-6 py-5 font-semibold text-gray-700">
                          {formatCurrency(item.allocated)}
                        </td>

                        <td className="px-6 py-5 font-semibold text-[#0b4f35]">
                          {formatCurrency(item.spent)}
                        </td>

                        <td className="px-6 py-5">

                          <div className="flex items-center gap-4">

                            <div className="w-32 bg-gray-100 rounded-full h-3">

                              <div
                                className="
                                  bg-[#0b4f35]
                                  h-3
                                  rounded-full
                                "
                                style={{
                                  width: `${item.utilization}%`,
                                }}
                              />

                            </div>

                            <span className="font-semibold text-[#0b4f35]">
                              {item.utilization}%
                            </span>

                          </div>

                        </td>

                      </tr>
                    ))}

                  </tbody>

                </table>

              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="space-y-6">

            {/* PIE CHART */}
            <div
              className="
                bg-white
                rounded-3xl
                p-6
                border
                border-gray-100
                shadow-sm
              "
            >

              <div className="mb-6">

                <h2 className="text-2xl font-bold text-gray-800">
                  Expense Distribution
                </h2>

                <p className="text-gray-500 mt-1">
                  Sector wise spending
                </p>

              </div>

              <div className="relative h-[320px]">

                <ResponsiveContainer width="100%" height="100%">

                  <PieChart>

                    <Pie
                      data={expenses}
                      dataKey="spent"
                      innerRadius={75}
                      outerRadius={110}
                      paddingAngle={3}
                    >

                      {expenses.map((entry, index) => (
                        <Cell
                          key={index}
                          fill={entry.color}
                        />
                      ))}

                    </Pie>

                    <Tooltip
                      formatter={(value) =>
                        formatCurrency(value)
                      }
                    />

                  </PieChart>

                </ResponsiveContainer>

                {/* CENTER */}
                <div
                  className="
                    absolute
                    inset-0
                    flex
                    flex-col
                    items-center
                    justify-center
                    pointer-events-none
                  "
                >

                  <h2 className="text-3xl font-bold text-[#0b4f35]">
                    {formatCurrency(totalSpent)}
                  </h2>

                  <p className="text-gray-500 text-sm">
                    Total Spent
                  </p>

                </div>

              </div>

            </div>

            {/* SUMMARY */}
            <div
              className="
                bg-white
                rounded-3xl
                p-6
                border
                border-gray-100
                shadow-sm
              "
            >

              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Quick Summary
              </h2>

              <div className="space-y-5">

                {expenses.map((item, index) => (
                  <div
                    key={index}
                    className="
                      flex
                      items-center
                      justify-between
                    "
                  >

                    <div className="flex items-center gap-3">

                      <div
                        className="w-4 h-4 rounded-full"
                        style={{
                          backgroundColor: item.color,
                        }}
                      />

                      <p className="font-medium text-gray-700">
                        {item.category}
                      </p>

                    </div>

                    <p className="font-semibold text-gray-800">
                      {item.utilization}%
                    </p>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}
