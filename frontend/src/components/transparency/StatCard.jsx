export default function StatCard({
  title,
  value,
  subtitle,
  icon: Icon,
}) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">

      <div className="flex items-start justify-between">

        <div>
          <p className="text-gray-500 text-sm">
            {title}
          </p>

          <h2 className="text-3xl font-bold mt-2 text-[#0b4f35]">
            {value}
          </h2>

          <p className="text-sm text-gray-400 mt-2">
            {subtitle}
          </p>
        </div>

        <div className="bg-[#edf5f2] p-3 rounded-xl">
          <Icon className="text-[#0b4f35]" />
        </div>
      </div>
    </div>
  );
}