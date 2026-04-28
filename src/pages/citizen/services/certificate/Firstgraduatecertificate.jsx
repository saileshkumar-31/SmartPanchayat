
import {
  GraduationCap,
  UserCheck,
  Clock3,
  Files,
  ExternalLink,
  Search,
  Phone,
  ArrowRight,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const FirstGraduateCertificate = () => {
  const openOfficialPortal = () => {
    window.open("https://www.tnesevai.tn.gov.in/", "_blank");
  };
  const navigate = useNavigate();

  const documents = [
    "Aadhaar Card",
    "Ration Card / Family Card",
    "Parent Aadhaar Cards",
    "Transfer Certificate / Bonafide Certificate",
    "Latest Educational Marksheet",
    "Family Declaration stating no graduate in family",
    "Passport Size Photograph",
    "Income Certificate (if requested)",
  ];

  const eligibility = [
    "Applicant should be the first graduate in the family as per applicable rules.",
    "Family educational details may be subject to verification.",
    "Submitted documents should support the declaration.",
  ];

  return (
    <section className="min-h-screen bg-[#f6f8f6] px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-4">
          Home <span className="mx-2">›</span>
          Certificates <span className="mx-2">›</span>
          First Graduate Certificate
        </div>

        {/* Hero */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-5">
                <GraduationCap
                  size={28}
                  className="text-indigo-700"
                />
              </div>

              <h1 className="text-4xl font-bold text-green-800 mb-3">
                First Graduate Certificate
              </h1>

              <p className="text-gray-600 text-lg leading-8 max-w-3xl">
                First Graduate Certificate is commonly used to claim tuition fee
                concessions, reservation benefits, scholarships, and educational
                support schemes for eligible students.
              </p>
            </div>

            <div className="bg-[#f6faf6] rounded-xl border border-gray-100 p-6 min-w-[280px]">
              <div className="flex items-center gap-3 mb-4">
                <Clock3 className="text-green-700" size={20} />
                <span className="font-semibold text-gray-800">
                  Estimated Processing Time
                </span>
              </div>

              <p className="text-2xl font-bold text-green-800">
                7 - 21 Days
              </p>

              <p className="text-sm text-gray-500 mt-2">
                Depends on verification and authority approval.
              </p>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Documents */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
            <div className="flex items-center gap-3 mb-6">
              <Files className="text-green-700" size={22} />
              <h2 className="text-2xl font-bold text-green-800">
                Recommended Documents
              </h2>
            </div>

            <div className="space-y-4">
              {documents.map((doc, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 border border-gray-100 rounded-lg px-4 py-3"
                >
                  <div className="w-2 h-2 rounded-full bg-green-700"></div>
                  <span className="text-gray-700">{doc}</span>
                </div>
              ))}
            </div>

            <p className="text-sm text-gray-500 mt-5">
              Exact requirements may vary by institution, district, or issuing authority.
            </p>
          </div>

          {/* Eligibility */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
            <div className="flex items-center gap-3 mb-6">
              <UserCheck className="text-green-700" size={22} />
              <h2 className="text-2xl font-bold text-green-800">
                Eligibility
              </h2>
            </div>

            <div className="space-y-4">
              {eligibility.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-3 border border-gray-100 rounded-lg px-4 py-3"
                >
                  <span className="text-green-700 font-bold">
                    {index + 1}.
                  </span>

                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <button
            onClick={openOfficialPortal}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-left hover:shadow-md transition"
          >
            <ExternalLink
              className="text-green-700 mb-4"
              size={24}
            />

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Apply on Official Portal
            </h3>

            <p className="text-gray-500 text-sm leading-7 mb-4">
              Continue application through authorized government portal.
            </p>

            <span className="text-green-700 font-semibold flex items-center gap-2">
              Open Portal
              <ArrowRight size={16} />
            </span>
          </button>

          <button 
          onClick={() =>
              navigate("/applicationtracker")
            }
          className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-left hover:shadow-md transition">
            <Search
              className="text-green-700 mb-4"
              size={24}
            />

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Track Application
            </h3>

            <p className="text-gray-500 text-sm leading-7 mb-4">
              Check status using application reference number.
            </p>

            <span className="text-green-700 font-semibold flex items-center gap-2">
              Track Now
              <ArrowRight size={16} />
            </span>
          </button>
        </div>

        {/* Help */}
        <div className="mt-8 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col lg:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-green-800 text-white flex items-center justify-center">
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
            className="h-11 px-6 rounded-lg bg-green-800 text-white font-semibold hover:bg-green-900 transition inline-flex items-center justify-center"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FirstGraduateCertificate;