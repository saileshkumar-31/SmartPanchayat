import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

/** ---------- Small UI pieces ---------- */

function Badge({ status }) {
  const map = {
    upcoming: "bg-green-100 text-green-700",
    ongoing: "bg-blue-100 text-blue-700",
    completed: "bg-gray-200 text-gray-700",
    cancelled: "bg-red-100 text-red-700",
  };
  const cls = map[status] || "bg-gray-100 text-gray-700";
  return (
    <span className={`text-xs px-2 py-1 rounded ${cls}`}>
      {status || "—"}
    </span>
  );
}

function EmptyState({ onRefresh }) {
  return (
    <div className="text-center py-16">
      <div className="text-4xl mb-3">📅</div>
      <h3 className="font-semibold text-lg mb-1">No meetings yet</h3>
      <p className="text-sm text-gray-500 mb-4">
        When meetings are available, they’ll appear here.
      </p>
      <button
        onClick={onRefresh}
        className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800"
      >
        Refresh
      </button>
    </div>
  );
}

function SkeletonCard() {
  return (
    <div className="bg-white rounded-xl shadow p-4 animate-pulse">
      <div className="h-4 w-2/3 bg-gray-200 rounded mb-3" />
      <div className="h-3 w-1/2 bg-gray-200 rounded mb-2" />
      <div className="h-3 w-1/3 bg-gray-200 rounded mb-4" />
      <div className="flex gap-2">
        <div className="h-8 w-24 bg-gray-200 rounded" />
        <div className="h-8 w-24 bg-gray-200 rounded" />
      </div>
    </div>
  );
}

function MeetingCard({ m, onJoin, onView }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-gray-800">
            {m?.title || "—"}
          </h3>
          <Badge status={m?.status} />
        </div>

        <div className="mt-2 text-sm text-gray-600 space-y-1">
          <div>📅 {m?.date || "—"}</div>
          <div>🕒 {m?.time || "—"}</div>
          <div>📍 {m?.venue || "—"}</div>
          <div>🏷 {m?.category || "—"}</div>
        </div>
      </div>

      <div className="mt-4 flex gap-2">
        <button
          onClick={() => onJoin?.(m)}
          className="bg-green-700 text-white px-3 py-2 rounded-lg text-sm hover:bg-green-800"
        >
          Join
        </button>
        <button
          onClick={() => onView?.(m)}
          className="border px-3 py-2 rounded-lg text-sm"
        >
          Details
        </button>
      </div>
    </div>
  );
}

/** ---------- Page ---------- */

export default function Meetings() {
  const navigate = useNavigate();

  // later you’ll replace this with API data
  const [meetings, setMeetings] = useState([]); // <-- no dummy data
  const [loading, setLoading] = useState(false);

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [view, setView] = useState("list"); // list | calendar

  const filtered = useMemo(() => {
    return meetings.filter((m) => {
      const q = query.toLowerCase();
      const matchesQuery =
        !q ||
        m.title?.toLowerCase().includes(q) ||
        m.venue?.toLowerCase().includes(q);
      const matchesCat = !category || m.category === category;
      return matchesQuery && matchesCat;
    });
  }, [meetings, query, category]);

  const handleRefresh = () => {
    // placeholder for future API call
    setLoading(true);
    setTimeout(() => setLoading(false), 600);
  };

  const handleJoin = (m) => {
    // wire this to backend later
    console.log("join", m);
  };

  const handleView = (m) => {
    navigate("/meetingdetails", { state: m });
  };

  return (
    <div className="px-4 py-10">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-green-700">
              Meetings
            </h1>
            <p className="text-gray-500 text-sm">
              Browse, join and track public meetings.
            </p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setView("list")}
              className={`px-3 py-2 rounded-lg text-sm ${
                view === "list"
                  ? "bg-green-700 text-white"
                  : "border"
              }`}
            >
              List
            </button>
            <button
              onClick={() => setView("calendar")}
              className={`px-3 py-2 rounded-lg text-sm ${
                view === "calendar"
                  ? "bg-green-700 text-white"
                  : "border"
              }`}
            >
              Calendar
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow p-4 mb-6 flex flex-col md:flex-row gap-3">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search meetings…"
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2"
          >
            <option value="">All Categories</option>
            <option value="General">General</option>
            <option value="Health">Health</option>
            <option value="Water">Water</option>
            <option value="Infrastructure">Infrastructure</option>
          </select>

          <button
            onClick={handleRefresh}
            className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800"
          >
            Refresh
          </button>
        </div>

        {/* Content */}
        {view === "list" ? (
          <>
            {loading ? (
              <div className="grid md:grid-cols-3 gap-4">
                {[...Array(6)].map((_, i) => (
                  <SkeletonCard key={i} />
                ))}
              </div>
            ) : filtered.length === 0 ? (
              <EmptyState onRefresh={handleRefresh} />
            ) : (
              <div className="grid md:grid-cols-3 gap-4">
                {filtered.map((m) => (
                  <MeetingCard
                    key={m.id}
                    m={m}
                    onJoin={handleJoin}
                    onView={handleView}
                  />
                ))}
              </div>
            )}
          </>
        ) : (
          <CalendarShell />
        )}
      </div>
    </div>
  );
}

/** ---------- Calendar (UI shell only) ---------- */

function CalendarShell() {
  const days = Array.from({ length: 35 }); // placeholder grid
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">Calendar</h3>
        <div className="text-sm text-gray-500">Month View</div>
      </div>

      <div className="grid grid-cols-7 gap-2 text-xs text-center text-gray-500 mb-2">
        {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {days.map((_, i) => (
          <div
            key={i}
            className="h-20 border rounded-lg flex items-start justify-end p-1 text-xs text-gray-400"
          >
            {/* later: date + events */}
          </div>
        ))}
      </div>
    </div>
  );
}