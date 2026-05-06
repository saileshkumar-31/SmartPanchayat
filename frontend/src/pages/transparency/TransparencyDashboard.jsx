

import DashboardLayout from "../../components/transparency/DashboardLayout";

import StatCard from "../../components/transparency/StatCard";
import FundPieChart from "../../components/transparency/FundPieChart";
import ExpenseBarChart from "../../components/transparency/ExpenseBarChart";
import ProjectProgress from "../../components/transparency/ProjectProgress";
import RecentUpdates from "../../components/transparency/RecentUpdate";
import QuickLinks from "../../components/transparency/QuickLinks";
import TransparencyScore from "../../components/transparency/TransparencyCode";
import {
  Landmark,
  Wallet,
  FolderKanban,
  CheckCircle,
} from "lucide-react";

export default function TransparencyDashboard() {
  return (
    <DashboardLayout>

      <div className="space-y-6">

        {/* PAGE HEADER */}
        <div className="flex items-center justify-between">

          {/* LEFT */}
          <div>
            <h1 className="text-4xl font-bold text-[#0b4f35]">
              Transparency Dashboard
            </h1>

            <p className="text-gray-500 mt-2">
              Real-time overview of Panchayat finances,
              projects and transparency records.
            </p>
          </div>

          {/* RIGHT */}
          <div className="hidden md:flex items-center gap-3">

            <button
              className="
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
              Download Report
            </button>

            <button
              className="
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
              View Analytics
            </button>
          </div>
        </div>

        {/* TOP STATS */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-4
            gap-5
          "
        >

          <StatCard
            title="Total Funds"
            value="₹1.24 Cr"
            subtitle="This Financial Year"
            icon={Landmark}
          />

          <StatCard
            title="Funds Utilized"
            value="₹78.3 L"
            subtitle="62.9% Utilized"
            icon={Wallet}
          />

          <StatCard
            title="Ongoing Projects"
            value="12"
            subtitle="Active Works"
            icon={FolderKanban}
          />

          <StatCard
            title="Completed Projects"
            value="18"
            subtitle="Completed This Year"
            icon={CheckCircle}
          />

        </div>

        {/* MAIN DASHBOARD GRID */}
        <div
          className="
            grid
            grid-cols-1
            xl:grid-cols-3
            gap-6
            items-start
          "
        >

          {/* LEFT SIDE */}
          <div className="xl:col-span-2 space-y-6">

            {/* FUNDS OVERVIEW */}
            <FundPieChart />

            {/* EXPENSE BREAKDOWN */}
            <ExpenseBarChart />

            {/* QUICK LINKS */}
            <QuickLinks />

          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">

            {/* PROJECT PROGRESS */}
            <ProjectProgress />

            {/* RECENT UPDATES */}
            <RecentUpdates />

            {/* TRANSPARENCY SCORE */}
            <TransparencyScore />

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}