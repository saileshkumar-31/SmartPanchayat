import Sidebar from "../../components/transparency/Sidebar";

const expenses = [
  {
    id: 1,
    category: "Roads",
    allocated: "₹ 25,00,000",
    spent: "₹ 18,00,000",
    utilization: "72%",
  },
  {
    id: 2,
    category: "Water Supply",
    allocated: "₹ 15,00,000",
    spent: "₹ 8,50,000",
    utilization: "56%",
  },
  {
    id: 3,
    category: "Sanitation",
    allocated: "₹ 10,00,000",
    spent: "₹ 7,50,000",
    utilization: "75%",
  },
];

const Expenses = () => {
  return (
    <div className="flex min-h-screen bg-[#f5f7fb]">
      <Sidebar />

      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">
          Expense Breakdown
        </h1>

        <div className="bg-white rounded-2xl border p-6 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-4">Category</th>
                <th className="p-4">Allocated</th>
                <th className="p-4">Spent</th>
                <th className="p-4">Utilization</th>
              </tr>
            </thead>

            <tbody>
              {expenses.map((expense) => (
                <tr key={expense.id} className="border-b hover:bg-gray-50">
                  <td className="p-4">{expense.category}</td>
                  <td className="p-4">{expense.allocated}</td>
                  <td className="p-4">{expense.spent}</td>
                  <td className="p-4 text-green-700 font-medium">
                    {expense.utilization}
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

export default Expenses;