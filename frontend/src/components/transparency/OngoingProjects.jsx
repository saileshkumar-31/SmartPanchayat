import DashboardLayout from "../../components/transparency/DashboardLayout";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Concrete Road - Ward 3",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd",
    projectId: "PRJ-001",
    budget: "₹5,00,000",
    spent: "₹2,40,000",
    progress: 48,
    startDate: "01 Apr 2024",
    expectedEnd: "30 Jun 2024",
    status: "In Progress",
  },
  {
    title: "Drainage System - Ward 1",
    image:
      "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15",
    projectId: "PRJ-002",
    budget: "₹3,20,000",
    spent: "₹1,80,000",
    progress: 72,
    startDate: "15 Mar 2024",
    expectedEnd: "30 Jun 2024",
    status: "In Progress",
  },
  {
    title: "Water Tank Construction",
    image:
      "https://images.unsplash.com/photo-1590490359683-658d3d23f972",
    projectId: "PRJ-003",
    budget: "₹8,75,000",
    spent: "₹3,10,000",
    progress: 35,
    startDate: "10 Apr 2024",
    expectedEnd: "30 Aug 2024",
    status: "Started",
  },
  {
    title: "Street Light Installation",
    image:
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
    projectId: "PRJ-004",
    budget: "₹2,40,000",
    spent: "₹1,90,000",
    progress: 80,
    startDate: "05 Apr 2024",
    expectedEnd: "15 May 2024",
    status: "Near Completion",
  },
];

export default function OngoingProjects() {
  return (
    <DashboardLayout>

      <div className="space-y-8">

        {/* HERO SECTION */}
        <div
          className="
            flex
            flex-col
            lg:flex-row
            lg:items-center
            lg:justify-between
            gap-5
          "
        >

          {/* LEFT */}
          <div>

            {/* BREADCRUMB */}
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">

              <span>Home</span>

              <span>/</span>

              <span>Transparency</span>

              <span>/</span>

              <span className="text-gray-500 font-medium">
                Ongoing Projects
              </span>

            </div>

            {/* TITLE */}
            <h1
              className="
                text-4xl
                font-bold
                text-[#0b4f35]
                tracking-tight
              "
            >
              Ongoing Projects
            </h1>

            {/* SUBTITLE */}
            <p className="text-gray-500 mt-2 text-lg">
              Track progress of all ongoing projects in the Panchayat.
            </p>

          </div>

          {/* RIGHT */}
          <div
            className="
              flex
              flex-wrap
              items-center
              gap-4
            "
          >

            <select
              className="
                bg-white
                border
                border-gray-200
                rounded-2xl
                px-4
                py-3
                text-sm
                font-medium
                text-gray-600
                outline-none
              "
            >
              <option>All Projects</option>
              <option>Road Works</option>
              <option>Water Supply</option>
              <option>Drainage</option>
            </select>

            <select
              className="
                bg-white
                border
                border-gray-200
                rounded-2xl
                px-4
                py-3
                text-sm
                font-medium
                text-gray-600
                outline-none
              "
            >
              <option>2023 - 2024</option>
              <option>2024 - 2025</option>
            </select>

            <button
              className="
                bg-[#0b4f35]
                text-white
                px-6
                py-3
                rounded-2xl
                text-sm
                font-semibold
                hover:opacity-90
                transition
              "
            >
              Download Report
            </button>

          </div>

        </div>

        {/* TOP STATS */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-4
            gap-5
          "
        >

          <div
            className="
              bg-white
              rounded-3xl
              p-6
              border
              border-gray-100
              shadow-sm
            "
          >

            <p className="text-sm text-gray-500">
              Total Projects
            </p>

            <h2 className="text-3xl font-bold text-[#0b4f35] mt-2">
              12
            </h2>

            <p className="text-sm text-gray-400 mt-2">
              Active Projects
            </p>

          </div>

          <div
            className="
              bg-white
              rounded-3xl
              p-6
              border
              border-gray-100
              shadow-sm
            "
          >

            <p className="text-sm text-gray-500">
              Total Budget
            </p>

            <h2 className="text-3xl font-bold text-[#0b4f35] mt-2">
              ₹78.5L
            </h2>

            <p className="text-sm text-gray-400 mt-2">
              Allocated Funds
            </p>

          </div>

          <div
            className="
              bg-white
              rounded-3xl
              p-6
              border
              border-gray-100
              shadow-sm
            "
          >

            <p className="text-sm text-gray-500">
              Completed %
            </p>

            <h2 className="text-3xl font-bold text-[#0b4f35] mt-2">
              64%
            </h2>

            <p className="text-sm text-gray-400 mt-2">
              Average Progress
            </p>

          </div>

          <div
            className="
              bg-white
              rounded-3xl
              p-6
              border
              border-gray-100
              shadow-sm
            "
          >

            <p className="text-sm text-gray-500">
              Last Updated
            </p>

            <h2 className="text-2xl font-bold text-[#0b4f35] mt-2">
              20 May
            </h2>

            <p className="text-sm text-gray-400 mt-2">
              Real-time Tracking
            </p>

          </div>

        </div>

        {/* PROJECT CARDS */}
        <div className="space-y-6">

          {projects.map((project, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-3xl
                border
                border-gray-100
                shadow-sm
                overflow-hidden
              "
            >

              <div
                className="
                  flex
                  flex-col
                  xl:flex-row
                "
              >

                {/* IMAGE */}
                <div className="xl:w-[280px] h-[220px] xl:h-auto">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      w-full
                      h-full
                      object-cover
                    "
                  />

                </div>

                {/* CONTENT */}
                <div className="flex-1 p-6">

                  <div
                    className="
                      flex
                      flex-col
                      lg:flex-row
                      lg:items-start
                      lg:justify-between
                      gap-6
                    "
                  >

                    {/* LEFT */}
                    <div className="flex-1">

                      <h2 className="text-2xl font-bold text-gray-800">
                        {project.title}
                      </h2>

                      <div className="mt-5 space-y-2 text-sm text-gray-600">

                        <p>
                          <span className="font-semibold">
                            Project ID:
                          </span>{" "}
                          {project.projectId}
                        </p>

                        <p>
                          <span className="font-semibold">
                            Budget:
                          </span>{" "}
                          {project.budget}
                        </p>

                        <p>
                          <span className="font-semibold">
                            Spent:
                          </span>{" "}
                          {project.spent}
                        </p>

                      </div>

                      {/* PROGRESS */}
                      <div className="mt-6">

                        <div className="flex items-center justify-between mb-2">

                          <p className="text-sm font-medium text-gray-700">
                            Progress
                          </p>

                          <p className="text-sm font-bold text-[#0b4f35]">
                            {project.progress}%
                          </p>

                        </div>

                        <div className="w-full bg-gray-100 rounded-full h-3">

                          <div
                            className="
                              bg-[#0b4f35]
                              h-3
                              rounded-full
                            "
                            style={{
                              width: `${project.progress}%`,
                            }}
                          />

                        </div>

                      </div>

                    </div>

                    {/* RIGHT */}
                    <div
                      className="
                        min-w-[220px]
                        space-y-4
                      "
                    >

                      <div>

                        <p className="text-sm text-gray-500">
                          Start Date
                        </p>

                        <p className="font-semibold text-gray-800 mt-1">
                          {project.startDate}
                        </p>

                      </div>

                      <div>

                        <p className="text-sm text-gray-500">
                          Expected End
                        </p>

                        <p className="font-semibold text-gray-800 mt-1">
                          {project.expectedEnd}
                        </p>

                      </div>

                      <div>

                        <p className="text-sm text-gray-500">
                          Status
                        </p>

                        <span
                          className="
                            inline-flex
                            mt-2
                            px-4
                            py-2
                            rounded-full
                            text-sm
                            font-semibold
                            bg-[#edf7f2]
                            text-[#0b4f35]
                          "
                        >
                          {project.status}
                        </span>

                      </div>

                      <Link
                        to="/transparency/ongoing-projects/project-details"
                        className="block text-center w-full bg-[#0b4f35] text-white py-3 rounded-2xl font-semibold hover:opacity-90 transition"
                      >
                        View Details
                      </Link>

                    </div>

                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </DashboardLayout>
  );
}


