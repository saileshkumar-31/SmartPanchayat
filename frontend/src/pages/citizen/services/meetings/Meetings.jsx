import { useState } from "react";
import { useTranslation } from "react-i18next";

import Scheduled from "./components/Scheduled";
import Request from "./components/Requests";
import Notices from "./components/Notices";
import Minutes from "./components/Minutes";
import Calendar from "./components/Calendar";

export default function Meetings() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("scheduled");

  const meetings = [];
  const requests = [];
  const notices = [];
  const minutes = [];

  const tabs = [
    { key: "scheduled", label: t("scheduled") },
    { key: "calendar", label: t("calendar") },
    { key: "request", label: t("request") },
    { key: "notices", label: t("notices") },
    { key: "minutes", label: t("summary") },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">

      {/* HEADER */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-semibold">
          {t("meetings_title")}
        </h1>
        <p className="text-gray-500 text-sm">
          {t("meetings_subtitle")}
        </p>
      </div>

      {/* TABS */}
      <div className="flex justify-center">
        <div className="flex gap-2 bg-gray-100 p-1 rounded-full">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-5 py-2 rounded-full text-sm ${
                activeTab === tab.key
                  ? "bg-white shadow text-green-700"
                  : "text-gray-500"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <div className="bg-white rounded-2xl border shadow-sm p-6 min-h-[300px]">
        {activeTab === "scheduled" && (
          <Scheduled meetings={meetings} />
        )}

        {activeTab === "calendar" && (
          <Calendar meetings={meetings} />
        )}

        {activeTab === "request" && (
          <Request requests={requests} />
        )}

        {activeTab === "notices" && (
          <Notices notices={notices} />
        )}

        {activeTab === "minutes" && (
          <Minutes minutes={minutes} />
        )}
      </div>
    </div>
  );
}