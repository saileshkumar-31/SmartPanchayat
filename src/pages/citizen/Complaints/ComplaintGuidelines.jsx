
import {
  FileText,
  CheckCircle,
  AlertTriangle,
  Clock,
  ShieldCheck,
} from "lucide-react";

const ComplaintGuidelines = () => {
  const guidelines = [
    "Provide accurate complaint details and exact location.",
    "Upload clear photos if available for faster verification.",
    "Use respectful and factual language in your complaint.",
    "Avoid duplicate submissions for the same issue.",
    "Keep your complaint reference ID for tracking updates.",
    "Emergency threats should be reported directly to local authorities.",
  ];

  const notAllowed = [
    "False or misleading complaints.",
    "Abusive, offensive, or threatening language.",
    "Spam or repeated duplicate complaints.",
    "Personal disputes unrelated to Panchayat services.",
  ];

  return (
    <section className="min-h-screen bg-[#f6f8f6] px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl border border-gray-100 shadow-sm p-6 lg:p-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-10">
          <div className="w-14 h-14 rounded-full bg-green-800 text-white flex items-center justify-center">
            <FileText size={24} />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-green-800">
              Complaint Guidelines
            </h1>

            <p className="text-gray-500 mt-1">
              Follow these instructions for faster and proper grievance resolution.
            </p>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Do's */}
          <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
            <div className="flex items-center gap-3 mb-5">
              <CheckCircle
                size={24}
                className="text-green-700"
              />

              <h2 className="text-xl font-bold text-green-800">
                What To Do
              </h2>
            </div>

            <div className="space-y-4">
              {guidelines.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-3"
                >
                  <CheckCircle
                    size={18}
                    className="text-green-700 mt-1 shrink-0"
                  />

                  <p className="text-gray-700 leading-7">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Don'ts */}
          <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
            <div className="flex items-center gap-3 mb-5">
              <AlertTriangle
                size={24}
                className="text-red-700"
              />

              <h2 className="text-xl font-bold text-red-700">
                Avoid These
              </h2>
            </div>

            <div className="space-y-4">
              {notAllowed.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-3"
                >
                  <AlertTriangle
                    size={18}
                    className="text-red-700 mt-1 shrink-0"
                  />

                  <p className="text-gray-700 leading-7">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
            <div className="flex items-center gap-3 mb-3">
              <Clock
                size={22}
                className="text-blue-700"
              />

              <h3 className="text-lg font-bold text-blue-700">
                Resolution Time
              </h3>
            </div>

            <p className="text-gray-700 leading-7">
              Complaint resolution time depends on issue type and urgency.
              Updates will be available in the complaint tracker.
            </p>
          </div>

          <div className="bg-yellow-50 rounded-2xl p-6 border border-yellow-100">
            <div className="flex items-center gap-3 mb-3">
              <ShieldCheck
                size={22}
                className="text-yellow-700"
              />

              <h3 className="text-lg font-bold text-yellow-700">
                Verification
              </h3>
            </div>

            <p className="text-gray-700 leading-7">
              Submitted complaints may be verified by Panchayat staff before
              action is taken.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplaintGuidelines;