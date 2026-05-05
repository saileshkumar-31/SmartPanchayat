import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Request() {
const { t } = useTranslation();

const [form, setForm] = useState({
title: "",
description: "",
date: "",
time: "",
venue: "",
});

const handleChange = (e) => {
setForm({ ...form, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
e.preventDefault();
console.log(form); // backend later
};

return ( <div className="max-w-3xl mx-auto">
{/* CARD */} <div className="bg-white rounded-2xl shadow-sm border p-6">
{/* HEADER */} <div className="mb-6"> <h2 className="text-xl font-semibold text-gray-800">
{t("request_meeting")} </h2> <p className="text-sm text-gray-500">
{t("meetings_subtitle")} </p> </div>

    {/* FORM */}
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* TITLE */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {t("meeting_title")}
        </label>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder={t("meeting_title_placeholder")}
          className="w-full border rounded-xl px-3 py-2 focus:ring-2 focus:ring-green-600 outline-none"
        />
      </div>

      {/* DESCRIPTION */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {t("description")}
        </label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          rows="3"
          placeholder={t("description_placeholder")}
          className="w-full border rounded-xl px-3 py-2 focus:ring-2 focus:ring-green-600 outline-none"
        />
      </div>

      {/* DATE + TIME */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t("preferred_date")}
          </label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="w-full border rounded-xl px-3 py-2 focus:ring-2 focus:ring-green-600 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t("preferred_time")}
          </label>
          <input
            type="time"
            name="time"
            value={form.time}
            onChange={handleChange}
            className="w-full border rounded-xl px-3 py-2 focus:ring-2 focus:ring-green-600 outline-none"
          />
        </div>
      </div>

      {/* VENUE */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {t("preferred_venue")}
        </label>
        <input
          type="text"
          name="venue"
          value={form.venue}
          onChange={handleChange}
          placeholder={t("venue_placeholder")}
          className="w-full border rounded-xl px-3 py-2 focus:ring-2 focus:ring-green-600 outline-none"
        />
      </div>

      {/* ACTIONS */}
      <div className="flex justify-end gap-3 pt-4">
        <button
          type="button"
          className="px-4 py-2 rounded-xl border text-gray-600 hover:bg-gray-100"
        >
          {t("cancel")}
        </button>

        <button
          type="submit"
          className="px-5 py-2 rounded-xl bg-green-700 text-white hover:bg-green-800 transition"
        >
          {t("submit_request")}
        </button>
      </div>
    </form>
  </div>
</div>


);
}
