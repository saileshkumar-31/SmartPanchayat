import {
  Wallet,
  Landmark,
  Clock3,
  CheckCircle2,
} from "lucide-react";

import StatCard from "./StatCard";

const SummaryCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
      <StatCard
        title="Total Funds Received"
        value="₹ 1,24,50,000"
        subtitle="This Financial Year"
        icon={<Wallet className="text-green-700" />}
      />

      <StatCard
        title="Funds Utilized"
        value="₹ 78,35,000"
        subtitle="62.92% Utilized"
        icon={<Landmark className="text-yellow-600" />}
      />

      <StatCard
        title="Ongoing Projects"
        value="12"
        subtitle="Active Projects"
        icon={<Clock3 className="text-purple-600" />}
      />

      <StatCard
        title="Completed Projects"
        value="18"
        subtitle="This Financial Year"
        icon={<CheckCircle2 className="text-green-600" />}
      />
    </div>
  );
};

export default SummaryCards;