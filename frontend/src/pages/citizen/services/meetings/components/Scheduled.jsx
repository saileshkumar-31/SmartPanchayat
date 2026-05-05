import { useTranslation } from "react-i18next";

function StatusBadge({ status }) {
const { t } = useTranslation();

const map = {
upcoming: "bg-green-100 text-green-700",
approved: "bg-blue-100 text-blue-700",
};

return (
<span className={`px-2 py-1 text-xs rounded-full ${map[status]}`}>
{t(status)} {/* ✅ translate status */} </span>
);
}

function StatCard({ title, value }) {
return ( <div className="bg-gray-50 p-4 rounded-xl border"> <p className="text-sm text-gray-500">{title}</p> <h2 className="text-lg font-semibold">{value}</h2> </div>
);
}

export default function Scheduled({ meetings = [] }) {
const { t } = useTranslation();

return ( <div className="space-y-6">

  {/* STATS */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    <StatCard title={t("upcoming")} value={0} />
    <StatCard title={t("this_month")} value={0} />
    <StatCard title={t("joinable")} value={0} />
    <StatCard title={t("requested")} value={0} />
  </div>

  {/* EMPTY STATE */}
  {!meetings.length ? (
    <div className="text-center text-gray-500 py-12">
      {t("no_meetings")}
    </div>
  ) : (
    <table className="w-full text-sm">
      <thead className="bg-gray-50">
        <tr>
          <th className="p-3 text-left">{t("title")}</th>
          <th>{t("date")}</th>
          <th>{t("venue")}</th>
          <th>{t("type")}</th>
          <th>{t("status")}</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {meetings.map((m, i) => (
          <tr key={i} className="border-t">
            <td className="p-3">{m.title}</td>
            <td>{m.date}</td>
            <td>{m.venue}</td>
            <td>{m.type}</td>
            <td>
              <StatusBadge status={m.status} />
            </td>
            <td>
              <button className="text-green-700">
                {t("view")}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )}
</div>

);
}
