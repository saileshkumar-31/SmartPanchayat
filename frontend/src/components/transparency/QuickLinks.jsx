const links = [
  "Download Reports",
  "View Budget",
  "Tender Information",
  "RTI Information",
];

const QuickLinks = () => {
  return (
    <div className="bg-white rounded-2xl border p-5">
      <h2 className="text-lg font-semibold mb-5">
        Quick Links
      </h2>

      <div className="space-y-3">
        {links.map((item, index) => (
          <button
            key={index}
            className="w-full flex justify-between items-center border rounded-xl px-4 py-3 hover:bg-gray-50"
          >
            <span>{item}</span>

            <span>→</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickLinks;