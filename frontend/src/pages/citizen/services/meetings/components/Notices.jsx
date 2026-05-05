import { useTranslation } from "react-i18next";

export default function Notices({ notices = [], loading = false }) {
const { t } = useTranslation();

if (loading) return <p>{t("loading")}</p>;

if (!notices.length) {
return ( <div className="bg-white p-6 rounded-xl border text-center text-gray-500">
{t("no_notices")} </div>
);
}

return ( <div className="space-y-4">
{notices.map((n, i) => ( <div key={i} className="bg-white p-4 rounded-xl border"> <h3 className="font-medium">{n.title}</h3> <p className="text-sm text-gray-500">{n.date}</p> </div>
))} </div>
);
}
