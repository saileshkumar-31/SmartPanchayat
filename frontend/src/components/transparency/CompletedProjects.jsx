import DashboardLayout from "../../components/transparency/DashboardLayout";
import { NavLink } from "react-router-dom";

const completedProjects = [
  {
    title: "Community Hall Construction",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2",
    projectId: "CP-001",
    budget: "₹12,00,000",
    completedOn: "12 Mar 2024",
    contractor: "ABC Builders",
    location: "Ward 2",
  },
  {
    title: "Overhead Water Tank",
    image:
      "https://images.unsplash.com/photo-1590490359683-658d3d23f972",
    projectId: "CP-002",
    budget: "₹8,00,000",
    completedOn: "05 Feb 2024",
    contractor: "Aqua Tech",
    location: "Ward 5",
  },
  {
    title: "Drainage System - Phase 1",
    image:
      "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15",
    projectId: "CP-003",
    budget: "₹4,25,000",
    completedOn: "18 Jan 2024",
    contractor: "XYZ Infra",
    location: "Ward 1",
  },
  {
    title: "School Boundary Wall",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    projectId: "CP-004",
    budget: "₹2,10,000",
    completedOn: "22 Dec 2023",
    contractor: "BuildWell Constructions",
    location: "Ward 4",
  },
];

export default function CompletedProjects() {
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
                Completed Projects
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
              Completed Projects
            </h1>

            {/* SUBTITLE */}
            <p className="text-gray-500 mt-2 text-lg">
              Successfully completed Panchayat development works.
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
              <option>Infrastructure</option>
              <option>Water Supply</option>
              <option>Public Works</option>
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
              <option>2022 - 2023</option>
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
              Completed Projects
            </p>

            <h2 className="text-3xl font-bold text-[#0b4f35] mt-2">
              18
            </h2>

            <p className="text-sm text-gray-400 mt-2">
              This Financial Year
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
              Total Budget Used
            </p>

            <h2 className="text-3xl font-bold text-[#0b4f35] mt-2">
              ₹1.8Cr
            </h2>

            <p className="text-sm text-gray-400 mt-2">
              Completed Works
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
              Average Completion
            </p>

            <h2 className="text-3xl font-bold text-[#0b4f35] mt-2">
              100%
            </h2>

            <p className="text-sm text-gray-400 mt-2">
              Successfully Finished
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
              Public Transparency
            </p>

          </div>

        </div>

        {/* PROJECT LIST */}
        <div className="space-y-6">

          {completedProjects.map((project, index) => (
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
                            Location:
                          </span>{" "}
                          {project.location}
                        </p>

                      </div>

                      {/* COMPLETION BAR */}
                      <div className="mt-6">

                        <div className="flex items-center justify-between mb-2">

                          <p className="text-sm font-medium text-gray-700">
                            Completion Status
                          </p>

                          <p className="text-sm font-bold text-[#0b4f35]">
                            100%
                          </p>

                        </div>

                        <div className="w-full bg-gray-100 rounded-full h-3">

                          <div
                            className="
                              bg-[#0b4f35]
                              h-3
                              rounded-full
                              w-full
                            "
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
                          Completed On
                        </p>

                        <p className="font-semibold text-gray-800 mt-1">
                          {project.completedOn}
                        </p>

                      </div>

                      <div>

                        <p className="text-sm text-gray-500">
                          Contractor
                        </p>

                        <p className="font-semibold text-gray-800 mt-1">
                          {project.contractor}
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
                          Completed
                        </span>

                      </div>

                      <NavLink
  to="/transparency/completed-project-details"
  className="
    w-full
    flex
    items-center
    justify-center
    bg-[#0b4f35]
    text-white
    py-3
    rounded-2xl
    font-semibold
    hover:opacity-90
    transition
  "
>
  View Details
</NavLink>

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