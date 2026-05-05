import { useTranslation } from "react-i18next";

export default function Reports({ data = [] }) {
  const { t } = useTranslation();

  return (
    <div className="p-4">
      <h2>{t("budget_reports")}</h2>
      {!data.length && <p>{t("no_reports")}</p>}
    </div>
  );
}