import Sidebar from "../../components/transparency/Sidebar";

const reports = [
  {
    id: 1,
    name: "Annual Budget Report",
    type: "PDF",
    date: "12 May 2026",
  },
  {
    id: 2,
    name: "Water Project Audit",
    type: "PDF",
    date: "20 April 2026",
  },
  {
    id: 3,
    name: "Village Development Summary",
    type: "PDF",
    date: "10 March 2026",
  },
];

const Reports = () => {
  return (
    <div className="flex min-h-screen bg-[#f5f7fb]">
      <Sidebar />

      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">
          Reports & Downloads
        </h1>

        <div className="bg-white rounded-2xl border p-6 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-4">Report</th>
                <th className="p-4">Type</th>
                <th className="p-4">Date</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>

            <tbody>
              {reports.map((report) => (
                <tr key={report.id} className="border-b hover:bg-gray-50">
                  <td className="p-4">{report.name}</td>
                  <td className="p-4">{report.type}</td>
                  <td className="p-4">{report.date}</td>

                  <td className="p-4">
                    <button className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition-all duration-200">
                      Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Reports;