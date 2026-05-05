import { useTranslation } from "react-i18next";

export default function Completed({ data = [] }) {
  const { t } = useTranslation();

  return (
    <div className="p-4">
      <h2>{t("completed_projects")}</h2>
      {!data.length && <p>{t("no_completed")}</p>}
    </div>
  );
}