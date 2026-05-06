const StatCard = ({ title, value, subtitle, icon }) => {
  return (
    <div className="bg-white border rounded-2xl p-5 hover:shadow-md transition-all duration-300">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-500 mb-2">{title}</p>

          <h2 className="text-3xl font-bold text-green-700">
            {value}
          </h2>

          <p className="text-xs text-gray-400 mt-2">
            {subtitle}
          </p>
        </div>

        <div className="bg-green-50 p-3 rounded-xl">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatCard;