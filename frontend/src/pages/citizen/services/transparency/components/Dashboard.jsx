import { useTranslation } from "react-i18next";

function StatCard({ title, value, sub }) {
  return (
    <div className="bg-white p-4 rounded-xl border shadow-sm">
      <p className="text-sm text-gray-500">{title}</p>
      <h2 className="text-xl font-semibold">{value}</h2>
      <p className="text-xs text-gray-400">{sub}</p>
    </div>
  );
}

export default function Dashboard() {
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">

      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-semibold">
          {t("transparency_dashboard")}
        </h1>
        <p className="text-gray-500 text-sm">
          {t("dashboard_subtitle")}
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <StatCard title={t("total_funds")} value="₹0" sub={t("this_year")} />
        <StatCard title={t("expenditure")} value="₹0" sub={t("utilized")} />
        <StatCard title={t("ongoing_projects")} value="0" sub={t("active")} />
        <StatCard title={t("completed_projects")} value="0" sub={t("this_year")} />
        <StatCard title={t("pending_projects")} value="0" sub={t("attention")} />
      </div>

      {/* CHARTS PLACEHOLDER */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white h-64 rounded-xl border flex items-center justify-center">
          {t("funds_chart")}
        </div>
        <div className="bg-white h-64 rounded-xl border flex items-center justify-center">
          {t("expenditure_chart")}
        </div>
      </div>

      {/* PROJECT SUMMARY */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-xl border">
          <h3>{t("project_summary")}</h3>
          <p>{t("no_data")}</p>
        </div>

        <div className="bg-white p-4 rounded-xl border">
          <h3>{t("recent_updates")}</h3>
          <p>{t("no_updates")}</p>
        </div>
      </div>

      {/* TABLES */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-xl border">
          <h3>{t("ongoing_projects")}</h3>
          <p>{t("no_data")}</p>
        </div>

        <div className="bg-white p-4 rounded-xl border">
          <h3>{t("completed_projects")}</h3>
          <p>{t("no_data")}</p>
        </div>
      </div>
    </div>
  );
}