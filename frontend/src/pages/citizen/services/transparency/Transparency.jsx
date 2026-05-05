// app/transparency/page.jsx
import SummaryCards from "./components/SummaryCards";
import FundSourcesChart from "./components/FundSourcesChart";
import UtilizationChart from "./components/UtilizationChart";
import ProjectsTable from "./components/ProjectsTable";
import TransactionTable from "./components/TransactionTable";
import TimeAnalytics from "./components/TimeAnalytics";
import Filters from "./components/Filters";

import {
  summary,
  fundSources,
  utilization,
  projects,
  transactions,
  trends,
} from "../../../../../lib/data";

export default function TransparencyPage() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen space-y-6">
      <h1 className="text-2xl font-bold">Transparency Dashboard</h1>

      <Filters />

      <SummaryCards data={summary} />

      <FundSourcesChart data={fundSources} />

      <UtilizationChart data={utilization} />

      <TimeAnalytics data={trends} />

      <ProjectsTable data={projects} />

      <TransactionTable data={transactions} />

      <div className="text-sm text-gray-500">
        Last Updated: May 2026 • Verified Data
      </div>
    </div>
  );
}