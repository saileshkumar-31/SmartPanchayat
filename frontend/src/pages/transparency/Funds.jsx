import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Sidebar from "../../components/transparency/Sidebar";
import { api } from "../../lib/api";

const fundsData = [
  {
    id: 1,
    source: "State Government",
    scheme: "Village Development Scheme",
    amount: "₹ 50,00,000",
    date: "12 May 2026",
    remarks: "Infrastructure",
  },
  {
    id: 2,
    source: "Central Government",
    scheme: "Smart Panchayat Mission",
    amount: "₹ 35,00,000",
    date: "18 May 2026",
    remarks: "Digital Services",
  },
  {
    id: 3,
    source: "NGO Funds",
    scheme: "Clean Village Initiative",
    amount: "₹ 10,00,000",
    date: "22 May 2026",
    remarks: "Sanitation",
  },
  {
    id: 4,
    source: "Public Donations",
    scheme: "Community Welfare",
    amount: "₹ 5,50,000",
    date: "25 May 2026",
    remarks: "Public Support",
  },
];

const Funds = () => {
  const { t } = useTranslation();
  const [funds, setFunds] = useState(fundsData);
  const [totalFunds, setTotalFunds] = useState("₹ 0");

  useEffect(() => {
    api.get("/transparency/budgets")
      .then((res) => {
        if (!res.data.length) return;
        const rows = res.data.map((item, index) => ({
          id: index + 1,
          source: item.category,
          scheme: item.title,
          amount: `₹ ${Number(item.allocated).toLocaleString("en-IN")}`,
          date: item.year || "-",
          remarks: item.status,
        }));
        setFunds(rows);
        setTotalFunds(`₹ ${res.data.reduce((sum, item) => sum + item.allocated, 0).toLocaleString("en-IN")}`);
      })
      .catch(() => {});
  }, []);

  return (
    <div className="flex bg-[#f3f4f6] min-h-screen">
      <Sidebar />

      <div className="flex-1 p-6">
        <div className="mb-6">
          <p className="text-sm text-gray-500 mb-2">
            Home / Transparency / Funds
          </p>

          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-800">
                {t("transparency.funds")}
              </h1>

              <p className="text-gray-500 mt-2">
                {t("transparency.fundsSubtitle")}
              </p>
            </div>

            <select className="border rounded-lg px-4 py-2 bg-white">
              <option>2025 - 2026</option>
              <option>2024 - 2025</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-6">
          <div className="bg-white rounded-2xl border p-5">
            <p className="text-gray-500 text-sm">
              {t("transparency.totalFunds")}
            </p>

            <h2 className="text-3xl font-bold text-green-700 mt-2">
              {totalFunds}
            </h2>
          </div>

          <div className="bg-white rounded-2xl border p-5">
            <p className="text-gray-500 text-sm">
              {t("transparency.stateFunds")}
            </p>

            <h2 className="text-3xl font-bold text-green-700 mt-2">
              ₹ 50,00,000
            </h2>
          </div>

          <div className="bg-white rounded-2xl border p-5">
            <p className="text-gray-500 text-sm">
              {t("transparency.centralFunds")}
            </p>

            <h2 className="text-3xl font-bold text-green-700 mt-2">
              ₹ 35,00,000
            </h2>
          </div>

          <div className="bg-white rounded-2xl border p-5">
            <p className="text-gray-500 text-sm">
              {t("transparency.publicFunds")}
            </p>

            <h2 className="text-3xl font-bold text-green-700 mt-2">
              ₹ 15,50,000
            </h2>
          </div>
        </div>

        <div className="bg-white rounded-2xl border overflow-hidden">
          <div className="p-5 border-b">
            <h2 className="text-xl font-semibold">
              {t("transparency.fundsDetails")}
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr className="text-left text-gray-600">
                  <th className="p-4">#</th>
                  <th className="p-4">{t("transparency.source")}</th>
                  <th className="p-4">{t("transparency.scheme")}</th>
                  <th className="p-4">{t("transparency.amount")}</th>
                  <th className="p-4">{t("transparency.date")}</th>
                  <th className="p-4">{t("transparency.remarks")}</th>
                </tr>
              </thead>

              <tbody>
                {funds.map((fund) => (
                  <tr
                    key={fund.id}
                    className="border-t hover:bg-gray-50"
                  >
                    <td className="p-4">{fund.id}</td>
                    <td className="p-4">{fund.source}</td>
                    <td className="p-4">{fund.scheme}</td>

                    <td className="p-4 font-semibold text-green-700">
                      {fund.amount}
                    </td>

                    <td className="p-4">{fund.date}</td>
                    <td className="p-4">{fund.remarks}</td>
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

export default Funds;
