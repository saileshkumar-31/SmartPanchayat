
export default function SummaryCards({ data }) {
  const card = (title, value) => (
    <div className="bg-white shadow rounded-2xl p-5">
      <p className="text-gray-500">{title}</p>
      <h2 className="text-2xl font-bold">₹{value.toLocaleString()}</h2>
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {card("Total Funds", data.total)}
      {card("Used", data.used)}
      {card("Remaining", data.remaining)}
      {card("Projects", data.projects)}
    </div>
  );
}