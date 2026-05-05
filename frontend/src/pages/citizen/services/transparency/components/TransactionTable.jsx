
export default function TransactionTable({ data }) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow">
      <h3 className="font-semibold mb-4">Transactions</h3>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-gray-500">
            <th>Date</th>
            <th>Dept</th>
            <th>Amount</th>
            <th>Purpose</th>
            <th>Approved</th>
          </tr>
        </thead>
        <tbody>
          {data.map((t, i) => (
            <tr key={i} className="border-t">
              <td>{t.date}</td>
              <td>{t.dept}</td>
              <td>₹{t.amount}</td>
              <td>{t.purpose}</td>
              <td>{t.approved}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}