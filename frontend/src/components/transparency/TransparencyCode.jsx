import {
  CheckCircle2,
  Clock3,
  FileCheck,
  Users,
} from "lucide-react";

export default function TransparencyScore() {
  return (
    <div
      className="
        bg-white
        rounded-3xl
        p-6
        shadow-sm
        border
        border-gray-100
      "
    >

      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">

        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Transparency Score
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Panchayat governance metrics
          </p>
        </div>

        <div
          className="
            w-16
            h-16
            rounded-full
            bg-gradient-to-br
            from-[#0b4f35]
            to-[#2bb673]
            text-white
            flex
            items-center
            justify-center
            text-xl
            font-bold
            shadow-lg
          "
        >
          92%
        </div>
      </div>

      {/* METRICS */}
      <div className="space-y-4">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">
            <CheckCircle2
              size={18}
              className="text-green-600"
            />

            <span className="text-gray-700">
              Audit Reports Published
            </span>
          </div>

          <span className="font-semibold text-green-600">
            Yes
          </span>
        </div>

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">
            <FileCheck
              size={18}
              className="text-blue-600"
            />

            <span className="text-gray-700">
              Budget Uploaded
            </span>
          </div>

          <span className="font-semibold text-blue-600">
            Updated
          </span>
        </div>

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">
            <Clock3
              size={18}
              className="text-orange-500"
            />

            <span className="text-gray-700">
              Avg RTI Response
            </span>
          </div>

          <span className="font-semibold text-orange-500">
            4 Days
          </span>
        </div>

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">
            <Users
              size={18}
              className="text-purple-600"
            />

            <span className="text-gray-700">
              Citizen Participation
            </span>
          </div>

          <span className="font-semibold text-purple-600">
            High
          </span>
        </div>
      </div>
    </div>
  );
}