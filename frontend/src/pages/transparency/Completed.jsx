import Sidebar from "../../components/transparency/Sidebar";

const completedProjects = [
  {
    id: 1,
    name: "Street Light Installation",
    ward: "Ward 2",
    budget: "₹ 4,00,000",
    completed: "15 May 2026",
  },
  {
    id: 2,
    name: "Community Hall",
    ward: "Ward 4",
    budget: "₹ 18,00,000",
    completed: "10 April 2026",
  },
  {
    id: 3,
    name: "Village Water Pipeline",
    ward: "Ward 1",
    budget: "₹ 9,50,000",
    completed: "22 March 2026",
  },
];

const Completed = () => {
  return (
    <div className="flex min-h-screen bg-[#f5f7fb]">
      <Sidebar />

      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">
          Completed Projects
        </h1>

        <div className="bg-white rounded-2xl border p-6 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-4">Project</th>
                <th className="p-4">Ward</th>
                <th className="p-4">Budget</th>
                <th className="p-4">Completed On</th>
              </tr>
            </thead>

            <tbody>
              {completedProjects.map((project) => (
                <tr key={project.id} className="border-b hover:bg-gray-50">
                  <td className="p-4">{project.name}</td>
                  <td className="p-4">{project.ward}</td>
                  <td className="p-4">{project.budget}</td>
                  <td className="p-4 text-green-700 font-medium">
                    {project.completed}
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

export default Completed;