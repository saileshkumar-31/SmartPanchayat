
export default function Filters() {
  return (
    <div className="bg-white p-4 rounded-2xl shadow flex gap-4 flex-wrap">
      <select className="border p-2 rounded">
        <option>Year</option>
      </select>
      <select className="border p-2 rounded">
        <option>Department</option>
      </select>
      <select className="border p-2 rounded">
        <option>District</option>
      </select>
    </div>
  );
}