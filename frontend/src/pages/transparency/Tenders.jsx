import DashboardLayout from "../../components/transparency/DashboardLayout";
import { NavLink } from "react-router-dom";

const tenders = [
  {
    title: "Road Repair Work",
    department: "Infrastructure",
    contractor: "ABC Builders",
    amount: "₹6,50,000",
    status: "Open",
    deadline: "20 Jun 2024",
    tenderId: "TNDR-001",
  },
  {
    title: "Drainage Maintenance",
    department: "Sanitation",
    contractor: "XYZ Infra",
    amount: "₹3,20,000",
    status: "Closed",
    deadline: "15 May 2024",
    tenderId: "TNDR-002",
  },
  {
    title: "School Painting",
    department: "Education",
    contractor: "Bright Paints",
    amount: "₹2,10,000",
    status: "Open",
    deadline: "28 Jun 2024",
    tenderId: "TNDR-003",
  },
  {
    title: "Water Pipeline Extension",
    department: "Water Supply",
    contractor: "Aqua Tech",
    amount: "₹8,40,000",
    status: "Under Review",
    deadline: "10 Jul 2024",
    tenderId: "TNDR-004",
  },
];

export default function TendersContracts() {
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
                Tender & Contracts
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
              Tenders & Contracts
            </h1>

            {/* SUBTITLE */}
            <p className="text-gray-500 mt-2 text-lg">
              Public tender information and contractor details.
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
              <option>All Status</option>
              <option>Open</option>
              <option>Closed</option>
              <option>Under Review</option>
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
              Total Tenders
            </p>

            <h2 className="text-3xl font-bold text-[#0b4f35] mt-2">
              24
            </h2>

            <p className="text-sm text-gray-400 mt-2">
              Current Financial Year
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
              Open Contracts
            </p>

            <h2 className="text-3xl font-bold text-[#0b4f35] mt-2">
              08
            </h2>

            <p className="text-sm text-gray-400 mt-2">
              Available for Bidding
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
              Total Contract Value
            </p>

            <h2 className="text-3xl font-bold text-[#0b4f35] mt-2">
              ₹3.8Cr
            </h2>

            <p className="text-sm text-gray-400 mt-2">
              Approved Projects
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
              Transparency Records
            </p>

          </div>

        </div>

        {/* TENDER LIST */}
        <div className="space-y-6">

          {tenders.map((tender, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-3xl
                border
                border-gray-100
                shadow-sm
                p-6
              "
            >

              <div
                className="
                  flex
                  flex-col
                  xl:flex-row
                  xl:items-center
                  xl:justify-between
                  gap-6
                "
              >

                {/* LEFT */}
                <div className="flex-1">

                  <div className="flex items-start justify-between gap-5">

                    <div>

                      <h2 className="text-2xl font-bold text-gray-800">
                        {tender.title}
                      </h2>

                      <p className="text-gray-500 mt-2">
                        {tender.department}
                      </p>

                    </div>

                    <span
                      className={`
                        px-4
                        py-2
                        rounded-full
                        text-sm
                        font-semibold
                        ${
                          tender.status === "Open"
                            ? "bg-green-100 text-green-700"
                            : tender.status === "Closed"
                            ? "bg-red-100 text-red-600"
                            : "bg-yellow-100 text-yellow-700"
                        }
                      `}
                    >
                      {tender.status}
                    </span>

                  </div>

                  {/* DETAILS */}
                  <div
                    className="
                      grid
                      grid-cols-1
                      md:grid-cols-2
                      xl:grid-cols-4
                      gap-5
                      mt-6
                    "
                  >

                    <div>

                      <p className="text-sm text-gray-500">
                        Tender ID
                      </p>

                      <p className="font-semibold text-gray-800 mt-1">
                        {tender.tenderId}
                      </p>

                    </div>

                    <div>

                      <p className="text-sm text-gray-500">
                        Contractor
                      </p>

                      <p className="font-semibold text-gray-800 mt-1">
                        {tender.contractor}
                      </p>

                    </div>

                    <div>

                      <p className="text-sm text-gray-500">
                        Amount
                      </p>

                      <p className="font-semibold text-[#0b4f35] mt-1">
                        {tender.amount}
                      </p>

                    </div>

                    <div>

                      <p className="text-sm text-gray-500">
                        Deadline
                      </p>

                      <p className="font-semibold text-gray-800 mt-1">
                        {tender.deadline}
                      </p>

                    </div>

                  </div>

                </div>

                {/* BUTTONS */}
                <div
                  className="
                    flex
                    flex-col
                    sm:flex-row
                    xl:flex-col
                    gap-3
                    min-w-[200px]
                  "
                >

                  <NavLink
  to="/transparency/tenders-details"
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

                  <button
                    className="
                      bg-white
                      border
                      border-gray-200
                      px-5
                      py-3
                      rounded-2xl
                      font-semibold
                      text-gray-700
                      hover:bg-gray-50
                      transition
                    "
                  >
                    Download PDF
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </DashboardLayout>
  );
}