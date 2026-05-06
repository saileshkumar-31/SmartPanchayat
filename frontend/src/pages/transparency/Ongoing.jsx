import { useTranslation } from "react-i18next";
import Sidebar from "../../components/transparency/Sidebar";

const projects = [
  {
    id: 1,
    project: "Road Construction - Ward 5",
    budget: "₹ 12,00,000",
    spent: "₹ 7,50,000",
    progress: 65,
    contractor: "ABC Builders",
    status: "Ongoing",
  },
  {
    id: 2,
    project: "Drainage System",
    budget: "₹ 8,50,000",
    spent: "₹ 4,00,000",
    progress: 48,
    contractor: "XYZ Infra",
    status: "Ongoing",
  },
  {
    id: 3,
    project: "Water Tank Construction",
    budget: "₹ 5,00,000",
    spent: "₹ 4,20,000",
    progress: 84,
    contractor: "Aqua Tech",
    status: "Near Completion",
  },
];

const Ongoing = () => {
  const { t } = useTranslation();

  return (
    <div className="flex bg-[#f3f4f6] min-h-screen">
      <Sidebar />

      <div className="flex-1 p-6">
        <div className="mb-6">
          <p className="text-sm text-gray-500 mb-2">
            Home / Transparency / Ongoing Projects
          </p>

          <h1 className="text-4xl font-bold text-gray-800">
            {t("transparency.ongoingProjects")}
          </h1>

          <p className="text-gray-500 mt-2">
            {t("transparency.ongoingSubtitle")}
          </p>
        </div>

        <div className="bg-white rounded-2xl border overflow-hidden">
          <div className="p-5 border-b">
            <h2 className="text-xl font-semibold">
              {t("transparency.projectDetails")}
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr className="text-left text-gray-600">
                  <th className="p-4">#</th>
                  <th className="p-4">
                    {t("transparency.projectName")}
                  </th>
                  <th className="p-4">{t("transparency.budget")}</th>
                  <th className="p-4">{t("transparency.spent")}</th>
                  <th className="p-4">{t("transparency.progress")}</th>
                  <th className="p-4">{t("transparency.contractor")}</th>
                  <th className="p-4">{t("transparency.status")}</th>
                </tr>
              </thead>

              <tbody>
                {projects.map((item) => (
                  <tr key={item.id} className="border-t hover:bg-gray-50">
                    <td className="p-4">{item.id}</td>
                    <td className="p-4">{item.project}</td>
                    <td className="p-4">{item.budget}</td>
                    <td className="p-4">{item.spent}</td>

                    <td className="p-4 w-[250px]">
                      <div className="flex items-center gap-3">
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div
                            className="bg-green-700 h-3 rounded-full"
                            style={{
                              width: `${item.progress}%`,
                            }}
                          ></div>
                        </div>

                        <span className="text-sm font-medium">
                          {item.progress}%
                        </span>
                      </div>
                    </td>

                    <td className="p-4">{item.contractor}</td>

                    <td className="p-4">
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ongoing;