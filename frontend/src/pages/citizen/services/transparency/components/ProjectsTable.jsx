
export default function ProjectsTable({ data }) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow">
      <h3 className="font-semibold mb-4">Projects</h3>
      <table className="w-full">
        <thead>
          <tr className="text-left text-gray-500">
            <th>Name</th>
            <th>Budget</th>
            <th>Used</th>
            <th>Progress</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((p, i) => (
            <tr key={i} className="border-t">
              <td>{p.name}</td>
              <td>₹{p.budget}</td>
              <td>₹{p.used}</td>
              <td>
                <div className="bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${p.progress}%` }}
                  />
                </div>
              </td>
              <td>{p.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}