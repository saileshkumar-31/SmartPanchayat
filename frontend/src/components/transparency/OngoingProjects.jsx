import DashboardLayout from "../../components/transparency/DashboardLayout";

const projects = [
  {
    title: "Concrete Road - Ward 3",
    budget: "₹5,00,000",
    progress: "48%",
    status: "In Progress",
  },
  {
    title: "Drainage System - Ward 1",
    budget: "₹3,20,000",
    progress: "72%",
    status: "In Progress",
  },
  {
    title: "Water Tank Construction",
    budget: "₹8,75,000",
    progress: "35%",
    status: "Started",
  },
];

export default function OngoingProjects() {
  return (
    <DashboardLayout>

      <div className="space-y-6">

        <div>
          <h1 className="text-4xl font-bold text-[#0b4f35]">
            Ongoing Projects
          </h1>

          <p className="text-gray-500 mt-2">
            Track current Panchayat development works.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">

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
              <div className="flex items-center justify-between">

                <div>
                  <h2 className="text-xl font-bold text-gray-800">
                    {project.title}
                  </h2>

                  <p className="text-gray-500 mt-2">
                    Budget: {project.budget}
                  </p>
                </div>

                <div className="text-right">

                  <p className="font-bold text-[#0b4f35] text-xl">
                    {project.progress}
                  </p>

                  <p className="text-sm text-gray-500">
                    {project.status}
                  </p>
                </div>
              </div>
            </div>
          ))}

        </div>

      </div>

    </DashboardLayout>
  );
}