import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import Scheduled from "./components/Scheduled";
import Request from "./components/Requests";
import Notices from "./components/Notices";
import Minutes from "./components/Minutes";
import Calendar from "./components/Calendar";
import { api } from "../../../../lib/api";

export default function Meetings() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("scheduled");
  const [meetings, setMeetings] = useState([]);
  const [tabs, setTabs] = useState([]);
  const [loading, setLoading] = useState(true);

  const requests = [];
  const notices = [];
  const minutes = [];

  useEffect(() => {
    const fetchData = async () => {
      // Static fallback tabs
      const staticTabs = [
        { key: "scheduled", label: t("scheduled") },
        { key: "calendar", label: t("calendar") },
        { key: "request", label: t("request") },
      ];

      try {
        // Fetch tabs from database
        const tabsRes = await api.get("/meeting-tabs");
        if (tabsRes.data && tabsRes.data.length > 0) {
          setTabs(tabsRes.data.map(tab => ({
            key: tab.key,
            label: t(tab.key) || tab.label_en
          })));
        } else {
          setTabs(staticTabs);
        }

        // Fetch meetings
        const meetingsRes = await api.get("/meetings");
        setMeetings(meetingsRes.data || []);
      } catch (error) {
        console.error("Error fetching meetings data:", error);
        // Use static fallback
        setTabs(staticTabs);
        setMeetings([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [t]);

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
        <div className="flex items-center justify-center min-h-96">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-green-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Loading meetings...</p>
          </div>
        </div>
      </div>
    );
  }

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
              className={`
                px-4 py-2 rounded-full text-sm font-medium transition-all
                ${activeTab === tab.key
                  ? "bg-green-600 text-white shadow-md"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        {activeTab === "scheduled" && <Scheduled meetings={meetings} />}
        {activeTab === "calendar" && <Calendar meetings={meetings} />}
        {activeTab === "request" && <Request />}
        {activeTab === "notices" && <Notices notices={notices} />}
        {activeTab === "minutes" && <Minutes minutes={minutes} />}
      </div>
    </div>
  );
}
