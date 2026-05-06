export default function Topbar() {
  return (
    <header className="h-20 bg-[#0b4f35] text-white flex items-center justify-between px-8 shadow-md">

      <div className="flex items-center gap-10">
        <h1 className="text-xl font-bold">
          Transparency Portal
        </h1>

        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#">Home</a>
          <a href="#">Schemes</a>
          <a href="#">Meetings</a>
          <a href="#">Downloads</a>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <button className="border border-white/30 px-4 py-2 rounded-lg text-sm">
          Citizen Login
        </button>

        <button className="bg-white text-[#0b4f35] px-4 py-2 rounded-lg text-sm font-semibold">
          Admin Login
        </button>
      </div>
    </header>
  );
}