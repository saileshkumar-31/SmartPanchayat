import ProgressBar from "./ProgressBar";

const projects = [
  {
    id: 1,
    name: "Road Construction",
    budget: "₹ 5,00,000",
    progress: 70,
  },
  {
    id: 2,
    name: "Water Tank",
    budget: "₹ 3,50,000",
    progress: 45,
  },
];

const ProjectsTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-4">Project</th>
            <th className="p-4">Budget</th>
            <th className="p-4">Progress</th>
          </tr>
        </thead>

        <tbody>
          {projects.map((project) => (
            <tr key={project.id} className="border-b">
              <td className="p-4">{project.name}</td>
              <td className="p-4">{project.budget}</td>

              <td className="p-4 w-[250px]">
                <ProgressBar value={project.progress} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectsTable;