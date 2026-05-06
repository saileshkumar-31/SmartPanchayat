const updates = [
  "New fund of ₹ 5,00,000 received.",
  "Road construction in Ward 5 completed.",
  "Community Hall project approved.",
];

const UpdatesCard = () => {
  return (
    <div className="bg-white rounded-2xl border p-5">
      <h2 className="text-lg font-semibold mb-5">
        Recent Updates
      </h2>

      <div className="space-y-4">
        {updates.map((item, index) => (
          <div
            key={index}
            className="border-b pb-3 text-sm"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpdatesCard;