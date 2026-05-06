import DashboardLayout from "../../components/transparency/DashboardLayout";

const projects = [
  {
    title: "Community Hall",
    completed: "12 Apr 2026",
    cost: "₹12,00,000",
  },
  {
    title: "Street Light Installation",
    completed: "2 Mar 2026",
    cost: "₹2,40,000",
  },
];

export default function CompletedProjects() {
  return (
    <DashboardLayout>

      <div className="space-y-6">

        <div>
          <h1 className="text-4xl font-bold text-[#0b4f35]">
            Completed Projects
          </h1>

          <p className="text-gray-500 mt-2">
            Successfully finished Panchayat works.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {projects.map((project, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-3xl
                p-6
                border
                border-gray-100
                shadow-sm
              "
            >
              <h2 className="text-xl font-bold text-gray-800">
                {project.title}
              </h2>

              <p className="mt-4 text-gray-500">
                Completion Date: {project.completed}
              </p>

              <p className="mt-2 font-semibold text-[#0b4f35]">
                Total Cost: {project.cost}
              </p>
            </div>
          ))}

        </div>

      </div>

    </DashboardLayout>
  );
}