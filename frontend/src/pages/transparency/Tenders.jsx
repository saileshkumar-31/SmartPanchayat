import Sidebar from "../../components/transparency/Sidebar";

const tenders = [
  {
    id: 1,
    title: "Road Repair Work",
    contractor: "ABC Builders",
    amount: "₹ 6,50,000",
    status: "Open",
  },
  {
    id: 2,
    title: "Drainage Maintenance",
    contractor: "XYZ Infra",
    amount: "₹ 3,20,000",
    status: "Closed",
  },
  {
    id: 3,
    title: "School Painting",
    contractor: "Bright Paints",
    amount: "₹ 2,10,000",
    status: "Open",
  },
];

const Tenders = () => {
  return (
    <div className="flex min-h-screen bg-[#f5f7fb]">
      <Sidebar />

      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">
          Tenders & Contracts
        </h1>

        <div className="bg-white rounded-2xl border p-6 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-4">Tender</th>
                <th className="p-4">Contractor</th>
                <th className="p-4">Amount</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>

            <tbody>
              {tenders.map((tender) => (
                <tr key={tender.id} className="border-b hover:bg-gray-50">
                  <td className="p-4">{tender.title}</td>
                  <td className="p-4">{tender.contractor}</td>
                  <td className="p-4">{tender.amount}</td>
                  <td className="p-4 text-green-700 font-medium">
                    {tender.status}
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

export default Tenders;