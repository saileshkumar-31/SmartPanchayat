const projects = [
  {
    name: "Concrete Road - Ward 3",
    amount: "₹ 5,00,000",
    progress: 48,
  },
  {
    name: "Drainage System - Ward 1",
    amount: "₹ 3,20,000",
    progress: 62,
  },
  {
    name: "Water Tank Construction",
    amount: "₹ 8,75,000",
    progress: 35,
  },
  {
    name: "Street Light Installation",
    amount: "₹ 2,40,000",
    progress: 80,
  },
];

const ProjectProgress = () => {
  return (
    <div className="bg-white rounded-2xl border p-5">
      <h2 className="text-lg font-semibold mb-6">
        Top Ongoing Projects
      </h2>

      <div className="space-y-5">
        {projects.map((project, index) => (
          <div key={index}>
            <div className="flex justify-between mb-2">
              <div>
                <h3 className="font-medium text-sm">
                  {project.name}
                </h3>

                <p className="text-xs text-gray-500">
                  {project.amount}
                </p>
              </div>

              <span className="text-sm font-medium">
                {project.progress}%
              </span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-green-700 h-2 rounded-full"
                style={{
                  width: `${project.progress}%`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectProgress;