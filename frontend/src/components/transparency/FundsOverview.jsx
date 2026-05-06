// src/pages/transparency/FundsOverview.jsx

import DashboardLayout from "../../components/transparency/DashboardLayout";

import {
  Landmark,
  Wallet,
  IndianRupee,
  TrendingUp,
  Download,
  Filter,
} from "lucide-react";

const fundSources = [
  {
    source: "State Government",
    amount: "₹60,00,000",
    utilization: "72%",
    status: "Active",
  },
  {
    source: "Central Schemes",
    amount: "₹32,50,000",
    utilization: "64%",
    status: "Active",
  },
  {
    source: "MLA Fund",
    amount: "₹15,00,000",
    utilization: "81%",
    status: "Completed",
  },
  {
    source: "MP Fund",
    amount: "₹10,00,000",
    utilization: "56%",
    status: "In Progress",
  },
  {
    source: "Local Tax",
    amount: "₹5,00,000",
    utilization: "49%",
    status: "Active",
  },
  {
    source: "Public Donations",
    amount: "₹2,00,000",
    utilization: "100%",
    status: "Completed",
  },
];

function FundCard({ title, value, subtitle, icon: Icon }) {
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
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>

          <h2 className="text-3xl font-bold text-[#0b4f35] mt-2">
            {value}
          </h2>

          <p className="text-sm text-gray-400 mt-2">{subtitle}</p>
        </div>

        <div
          className="
            w-14
            h-14
            rounded-2xl
            bg-[#edf7f2]
            flex
            items-center
            justify-center
          "
        >
          <Icon className="text-[#0b4f35]" size={28} />
        </div>
      </div>
    </div>
  );
}

export default function FundsOverview() {
  return (
    <DashboardLayout>
      <div className="space-y-8">

        {/* PAGE HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

          <div>
            <p className="text-sm text-gray-400 mb-2">
              Dashboard / Transparency / Funds Overview
            </p>

            <h1 className="text-4xl font-bold text-[#0b4f35]">
              Funds Overview
            </h1>

            <p className="text-gray-500 mt-2 max-w-2xl">
              Monitor Panchayat fund allocation, utilization,
              government grants, local taxes, and public contributions.
            </p>
          </div>

          <div className="flex items-center gap-3">

            <button
              className="
                flex
                items-center
                gap-2
                bg-white
                border
                border-gray-200
                px-5
                py-3
                rounded-2xl
                text-sm
                font-medium
                hover:shadow-md
                transition
              "
            >
              <Filter size={18} />
              Filter
            </button>

            <button
              className="
                flex
                items-center
                gap-2
                bg-[#0b4f35]
                text-white
                px-5
                py-3
                rounded-2xl
                text-sm
                font-medium
                hover:opacity-90
                transition
              "
            >
              <Download size={18} />
              Download Report
            </button>

          </div>
        </div>

        {/* STATS */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-4
            gap-5
          "
        >

          <FundCard
            title="Total Funds"
            value="₹1.24 Cr"
            subtitle="Current Financial Year"
            icon={Landmark}
          />

          <FundCard
            title="Funds Utilized"
            value="₹78.3 L"
            subtitle="62.9% Utilized"
            icon={Wallet}
          />

          <FundCard
            title="Available Balance"
            value="₹45.7 L"
            subtitle="Remaining Budget"
            icon={IndianRupee}
          />

          <FundCard
            title="Growth"
            value="+18%"
            subtitle="Compared to Last Year"
            icon={TrendingUp}
          />

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
          <div className="xl:col-span-2 space-y-6">

            {/* FUND DISTRIBUTION */}
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

              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Fund Distribution
                  </h2>

                  <p className="text-gray-500 mt-1">
                    Allocation by funding source
                  </p>
                </div>

                <button className="text-[#0b4f35] font-medium text-sm">
                  View Details →
                </button>
              </div>

              <div className="space-y-5">

                <div>
                  <div className="flex justify-between mb-2 text-sm font-medium">
                    <span>State Government</span>
                    <span>48%</span>
                  </div>

                  <div className="w-full bg-gray-100 rounded-full h-3">
                    <div className="bg-blue-600 h-3 rounded-full w-[48%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2 text-sm font-medium">
                    <span>Central Schemes</span>
                    <span>26%</span>
                  </div>

                  <div className="w-full bg-gray-100 rounded-full h-3">
                    <div className="bg-green-500 h-3 rounded-full w-[26%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2 text-sm font-medium">
                    <span>MLA Fund</span>
                    <span>12%</span>
                  </div>

                  <div className="w-full bg-gray-100 rounded-full h-3">
                    <div className="bg-yellow-400 h-3 rounded-full w-[12%]"></div>
                  </div>
                </div>

              </div>
            </div>

            {/* TABLE */}
            <div
              className="
                bg-white
                rounded-3xl
                shadow-sm
                border
                border-gray-100
                overflow-hidden
              "
            >

              <div className="p-6 border-b border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900">
                  Fund Sources
                </h2>

                <p className="text-gray-500 mt-1">
                  Complete overview of all active funding channels
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[800px]">

                  <thead className="bg-gray-50 text-left">
                    <tr>
                      <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                        Source
                      </th>

                      <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                        Amount
                      </th>

                      <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                        Utilization
                      </th>

                      <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                        Status
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {fundSources.map((item, index) => (
                      <tr
                        key={index}
                        className="border-t border-gray-100 hover:bg-gray-50 transition"
                      >

                        <td className="px-6 py-5 font-medium text-gray-800">
                          {item.source}
                        </td>

                        <td className="px-6 py-5 font-semibold text-[#0b4f35]">
                          {item.amount}
                        </td>

                        <td className="px-6 py-5">
                          <div className="flex items-center gap-3">

                            <div className="w-32 bg-gray-100 rounded-full h-2.5">
                              <div
                                className="bg-green-600 h-2.5 rounded-full"
                                style={{ width: item.utilization }}
                              ></div>
                            </div>

                            <span className="text-sm font-medium text-gray-600">
                              {item.utilization}
                            </span>

                          </div>
                        </td>

                        <td className="px-6 py-5">
                          <span
                            className="
                              px-4
                              py-1.5
                              rounded-full
                              text-sm
                              font-medium
                              bg-[#edf7f2]
                              text-[#0b4f35]
                            "
                          >
                            {item.status}
                          </span>
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

            {/* UTILIZATION */}
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

              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Utilization Summary
              </h2>

              <div className="space-y-5">

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Infrastructure</span>
                    <span>82%</span>
                  </div>

                  <div className="w-full bg-gray-100 rounded-full h-3">
                    <div className="bg-[#0b4f35] h-3 rounded-full w-[82%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Water & Sanitation</span>
                    <span>67%</span>
                  </div>

                  <div className="w-full bg-gray-100 rounded-full h-3">
                    <div className="bg-[#0b4f35] h-3 rounded-full w-[67%]"></div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}