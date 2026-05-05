import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useTranslation } from "react-i18next";

export default function Calendar({ meetings = [] }) {
const { i18n } = useTranslation();

const events = meetings.map((m) => ({
title: m.title,
date: m.date,
}));

return (
<FullCalendar
plugins={[dayGridPlugin]}
initialView="dayGridMonth"
events={events}
locale={i18n.language} // works for en by default
/>
);
}
