import Sidebar from "./Sidebar";


export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#f4f7f6]">

      <div className="flex">

        {/* SIDEBAR */}
        <Sidebar />

        {/* PAGE CONTENT */}
        <main className="flex-1 p-6 lg:p-8">
          {children}
        </main>

      </div>

    </div>
  );
}