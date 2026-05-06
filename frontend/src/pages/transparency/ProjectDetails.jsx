import DashboardLayout from "../../components/transparency/DashboardLayout";

export default function ProjectDetails() {
  return (
    <DashboardLayout>

      <div className="space-y-8">

        {/* BREADCRUMB */}
        <div className="flex items-center gap-2 text-sm text-gray-400">

          <span>Home</span>

          <span>/</span>

          <span>Transparency</span>

          <span>/</span>

          <span>Ongoing Projects</span>

          <span>/</span>

          <span className="text-gray-500 font-medium">
            Project Details
          </span>

        </div>

        {/* HEADER */}
        <div
          className="
            bg-white
            rounded-3xl
            border
            border-gray-100
            shadow-sm
            overflow-hidden
          "
        >

          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd"
            alt="Project"
            className="
              w-full
              h-[320px]
              object-cover
            "
          />

          <div className="p-8">

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
              <div>

                <h1
                  className="
                    text-4xl
                    font-bold
                    text-[#0b4f35]
                  "
                >
                  Concrete Road - Ward 3
                </h1>

                <p className="text-gray-500 mt-3 text-lg">
                  Panchayat infrastructure development project
                  focused on improving road connectivity.
                </p>

              </div>

              {/* STATUS */}
              <div>

                <span
                  className="
                    inline-flex
                    px-5
                    py-3
                    rounded-2xl
                    bg-[#edf7f2]
                    text-[#0b4f35]
                    font-semibold
                  "
                >
                  In Progress
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* INFO GRID */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-4
            gap-5
          "
        >

          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

            <p className="text-sm text-gray-500">
              Budget
            </p>

            <h2 className="text-3xl font-bold text-[#0b4f35] mt-2">
              ₹5,00,000
            </h2>

          </div>

          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

            <p className="text-sm text-gray-500">
              Amount Spent
            </p>

            <h2 className="text-3xl font-bold text-[#0b4f35] mt-2">
              ₹2,40,000
            </h2>

          </div>

          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

            <p className="text-sm text-gray-500">
              Progress
            </p>

            <h2 className="text-3xl font-bold text-[#0b4f35] mt-2">
              48%
            </h2>

          </div>

          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

            <p className="text-sm text-gray-500">
              Contractor
            </p>

            <h2 className="text-2xl font-bold text-[#0b4f35] mt-2">
              ABC Builders
            </h2>

          </div>

        </div>

        {/* DETAILS */}
        <div
          className="
            bg-white
            rounded-3xl
            p-8
            border
            border-gray-100
            shadow-sm
          "
        >

          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Project Overview
          </h2>

          <p className="text-gray-600 leading-8">
            This project focuses on constructing a new
            concrete road in Ward 3 to improve transportation,
            drainage management, and public accessibility.
            The work includes road laying, side drainage,
            and street-side safety improvements.
          </p>

          {/* PROGRESS */}
          <div className="mt-8">

            <div className="flex items-center justify-between mb-3">

              <p className="font-semibold text-gray-700">
                Completion Progress
              </p>

              <p className="font-bold text-[#0b4f35]">
                48%
              </p>

            </div>

            <div className="w-full bg-gray-100 rounded-full h-4">

              <div
                className="
                  bg-[#0b4f35]
                  h-4
                  rounded-full
                "
                style={{ width: "48%" }}
              />

            </div>

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}