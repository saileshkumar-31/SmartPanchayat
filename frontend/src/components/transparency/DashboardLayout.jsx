import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#f4f7f6]">

      <Topbar />

      <div className="flex">

        <Sidebar />

        <main className="flex-1 p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}