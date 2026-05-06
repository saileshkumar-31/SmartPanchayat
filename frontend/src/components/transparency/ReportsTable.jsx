const reports = [
  {
    id: 1,
    name: "Annual Budget Report",
    date: "12 May 2026",
  },
  {
    id: 2,
    name: "Fund Utilization Report",
    date: "18 May 2026",
  },
];

const ReportsTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-4">Report Name</th>
            <th className="p-4">Date</th>
            <th className="p-4">Action</th>
          </tr>
        </thead>

        <tbody>
          {reports.map((report) => (
            <tr key={report.id} className="border-b">
              <td className="p-4">{report.name}</td>
              <td className="p-4">{report.date}</td>

              <td className="p-4">
                <button className="bg-green-700 text-white px-4 py-2 rounded-lg">
                  Download
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportsTable;