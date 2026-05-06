import Sidebar from "../../components/transparency/Sidebar";

import SummaryCards from "../../components/transparency/SummaryCards";

import FundsSourcesChart from "../../components/transparency/FundsSourceChart";

import ProjectProgress from "../../components/transparency/ProgressBar";

import ExpenseChart from "../../components/transparency/ExpenseChart";

import UpdatesCard from "../../components/transparency/UpdatesCard";

import QuickLinks from "../../components/transparency/QuickLinks";

const Transparency = () => {
  return (
    <div className="flex bg-[#f5f7fb] min-h-screen">
      <Sidebar />

      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-800">
              Transparency Dashboard
            </h1>

            <p className="text-gray-500 mt-2">
              Real-time overview of Panchayat finances,
              projects and resources.
            </p>
          </div>

          <div className="text-sm text-gray-500">
            Last Updated: 20 May 2026
          </div>
        </div>

        <SummaryCards />

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
          <FundsSourcesChart />

          <ProjectProgress />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-6">
          <UpdatesCard />

          <ExpenseChart />

          <QuickLinks />
        </div>

        
      </div>
    </div>
  );
};

export default Transparency;