import { useTranslation } from "react-i18next";

export default function Ongoing({ data = [] }) {
  const { t } = useTranslation();

  return (
    <div className="p-4">
      <h2>{t("ongoing_projects")}</h2>
      {!data.length && <p>{t("no_ongoing")}</p>}
    </div>
  );
}