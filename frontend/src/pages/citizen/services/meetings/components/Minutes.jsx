import { useTranslation } from "react-i18next";

export default function Minutes({ minutes = [], loading = false }) {
const { t } = useTranslation();

if (loading) return <p>{t("loading")}</p>;

if (!minutes.length) {
return ( <div className="bg-white p-6 rounded-xl border text-center text-gray-500">
{t("no_summary")} </div>
);
}

return ( <div className="space-y-4">
{minutes.map((m, i) => ( <div key={i} className="bg-white p-4 rounded-xl border"> <h3>{m.title}</h3> <p className="text-sm text-gray-500">{m.date}</p> </div>
))} </div>
);
}
