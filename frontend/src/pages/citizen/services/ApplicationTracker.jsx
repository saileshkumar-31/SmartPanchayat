import  { useState } from "react";
import {
  Search,
  BadgeCheck,
  Clock3,
  FileText,
  ExternalLink,
  ArrowRight,
  Phone,
  CircleDashed,
} from "lucide-react";
import { Link } from "react-router-dom";
import { api } from "../../../lib/api";

const ApplicationTracker = () => {
  const [referenceNo, setReferenceNo] = useState("");
  const [searched, setSearched] = useState(false);
  const [application, setApplication] = useState(null);

  const handleTrack = async () => {
    if (!referenceNo.trim()) return;
    try {
      const res = await api.get(`/applications/reference/${referenceNo.trim()}`);
      setApplication(res.data);
      setSearched(true);
    } catch (error) {
      setApplication(null);
      setSearched(true);
      alert(error.message);
    }
  };

  const openOfficialTracker = () => {
    window.open("https://www.tnesevai.tn.gov.in/", "_blank");
  };

  return (
    <section className="min-h-screen bg-[#f6f8f6] px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-4">
          Home <span className="mx-2">›</span>
          Services <span className="mx-2">›</span>
          Application Tracker
        </div>

        {/* Hero */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 mb-8">
          <div className="grid lg:grid-cols-[1fr_300px] gap-8 items-center">
            <div>
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-5">
                <BadgeCheck size={28} className="text-green-700" />
              </div>

              <h1 className="text-4xl font-bold text-green-800 mb-3">
                Application Tracker
              </h1>

              <p className="text-gray-600 text-lg leading-8 max-w-3xl">
                Track certificate and citizen service applications using your
                application reference number.
              </p>
            </div>

            <div className="bg-[#f6faf6] rounded-xl border border-gray-100 p-6 h-full flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-3">
                <Clock3 className="text-green-700" size={20} />
                <span className="font-semibold text-gray-800">
                  Status Updates
                </span>
              </div>

              <p className="text-2xl font-bold text-green-800">
                Real-Time
              </p>

              <p className="text-sm text-gray-500 mt-2 leading-6">
                Track progress instantly when available.
              </p>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-green-800 mb-6">
            Enter Application Reference Number
          </h2>

          <div className="grid md:grid-cols-[1fr_180px] gap-4">
            <div className="relative">
              <Search
                size={18}
                className="absolute left-4 top-4 text-gray-400"
              />

              <input
                type="text"
                placeholder="Example: TNE12345678"
                value={referenceNo}
                onChange={(e) => setReferenceNo(e.target.value)}
                className="w-full h-12 pl-11 pr-4 rounded-lg border border-gray-200 outline-none focus:border-green-700"
              />
            </div>

            <button
              onClick={handleTrack}
              className="h-12 rounded-lg bg-green-800 text-white font-semibold hover:bg-green-900 transition"
            >
              Track Now
            </button>
          </div>

          <p className="text-sm text-gray-500 mt-4">
            Use the acknowledgment number received during application.
          </p>
        </div>

        {/* Results */}
        {searched && application && (
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 mb-8">
            <h3 className="text-2xl font-bold text-green-800 mb-6">
              Application Status
            </h3>

            <div className="grid md:grid-cols-3 gap-5 mb-8">
              <div className="border border-gray-100 rounded-xl p-5">
                <p className="text-sm text-gray-500 mb-2">
                  Reference Number
                </p>
                <p className="font-bold text-gray-800 break-all">
                  {application.reference_no}
                </p>
              </div>

              <div className="border border-gray-100 rounded-xl p-5">
                <p className="text-sm text-gray-500 mb-2">
                  Application Type
                </p>
                <p className="font-bold text-gray-800">
                  {application.service_name}
                </p>
              </div>

              <div className="border border-gray-100 rounded-xl p-5">
                <p className="text-sm text-gray-500 mb-2">
                  Current Status
                </p>
                <p className="font-bold text-blue-700">
                  {application.status}
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-5">
              <div className="flex gap-4 items-start">
                <BadgeCheck
                  className="text-green-700 mt-1 shrink-0"
                  size={20}
                />

                <div>
                  <p className="font-semibold text-gray-800">
                    Application Submitted
                  </p>

                  <p className="text-sm text-gray-500">
                    Request successfully received.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <CircleDashed
                  className="text-blue-700 mt-1 shrink-0"
                  size={20}
                />

                <div>
                  <p className="font-semibold text-gray-800">
                    Verification in Progress
                  </p>

                  <p className="text-sm text-gray-500">
                    Documents are being reviewed.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <FileText
                  className="text-gray-300 mt-1 shrink-0"
                  size={20}
                />

                <div>
                  <p className="font-semibold text-gray-400">
                    Certificate Ready
                  </p>

                  <p className="text-sm text-gray-400">
                    Pending approval completion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Official Tracker */}
        <div className="mb-8">
          <button
            onClick={openOfficialTracker}
            className="w-full bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-left hover:shadow-md transition"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
              <div>
                <ExternalLink
                  className="text-green-700 mb-3"
                  size={24}
                />

                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Official Tracker Portal
                </h3>

                <p className="text-gray-500 text-sm leading-7">
                  Continue tracking through the official government portal.
                </p>
              </div>

              <span className="text-green-700 font-semibold flex items-center gap-2">
                Open Portal
                <ArrowRight size={16} />
              </span>
            </div>
          </button>
        </div>

        {/* Help */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-green-800 text-white flex items-center justify-center shrink-0">
              <Phone size={22} />
            </div>

            <div>
              <h4 className="text-xl font-bold text-green-800">
                Need Help?
              </h4>

              <p className="text-gray-600">
                Contact Panchayat helpdesk for assistance.
              </p>
            </div>
          </div>

          <Link
            to="/contact"
            className="h-11 px-6 rounded-lg bg-green-800 text-white font-semibold hover:bg-green-900 transition inline-flex items-center justify-center whitespace-nowrap"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ApplicationTracker;
