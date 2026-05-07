import { useState } from "react";
import {
  ShieldAlert,
  MapPin,
  FileText,
  Upload,
  Send,
} from "lucide-react";
import { submitComplaint } from "../../../lib/complaints";

const PublicSafety = () => {
  const [formData, setFormData] = useState({
    issueName: "",
    location: "",
    dangerLevel: "",
    issueType: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await submitComplaint("Public Safety", formData);
      alert(`Public safety complaint submitted. Reference: ${res.data.reference_no}`);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <section className="min-h-screen bg-[#f6f8f6] px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-gray-100 shadow-sm p-6 lg:p-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center">
            <ShieldAlert
              size={26}
              className="text-red-700"
            />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-green-800">
              Public Safety Complaint
            </h1>

            <p className="text-gray-500 mt-1">
              Report dangerous areas, exposed wires, broken structures, or urgent civic risks.
            </p>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Issue Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Issue Name
            </label>

            <input
              type="text"
              name="issueName"
              value={formData.issueName}
              onChange={handleChange}
              placeholder="Enter issue title"
              className="w-full h-12 px-4 rounded-lg border border-gray-200 outline-none focus:border-green-700"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Location
            </label>

            <div className="relative">
              <MapPin
                size={18}
                className="absolute left-4 top-4 text-gray-400"
              />

              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Street / Area / Landmark"
                className="w-full h-12 pl-11 pr-4 rounded-lg border border-gray-200 outline-none focus:border-green-700"
              />
            </div>
          </div>

          {/* Danger Level */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Danger Level
            </label>

            <select
              name="dangerLevel"
              value={formData.dangerLevel}
              onChange={handleChange}
              className="w-full h-12 px-4 rounded-lg border border-gray-200 outline-none focus:border-green-700 bg-white"
            >
              <option value="">Select Level</option>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
              <option>Critical</option>
            </select>
          </div>

          {/* Issue Type */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Issue Type
            </label>

            <select
              name="issueType"
              value={formData.issueType}
              onChange={handleChange}
              className="w-full h-12 px-4 rounded-lg border border-gray-200 outline-none focus:border-green-700 bg-white"
            >
              <option value="">Select Issue</option>
              <option>Open Drain</option>
              <option>Exposed Wire</option>
              <option>Broken Structure</option>
              <option>Fallen Tree</option>
              <option>Animal Threat</option>
              <option>Other</option>
            </select>
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Description
            </label>

            <div className="relative">
              <FileText
                size={18}
                className="absolute left-4 top-4 text-gray-400"
              />

              <textarea
                rows="5"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe the issue clearly..."
                className="w-full pl-11 pr-4 py-3 rounded-lg border border-gray-200 outline-none focus:border-green-700 resize-none"
              />
            </div>
          </div>

          {/* Upload */}
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Upload Photo (Optional)
            </label>

            <label className="border border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:border-green-700 transition">
              <Upload
                size={24}
                className="text-gray-400 mb-3"
              />

              <span className="text-gray-600 font-medium">
                Click to upload image
              </span>

              <span className="text-sm text-gray-400 mt-1">
                JPG, PNG up to 5MB
              </span>

              <input
                type="file"
                name="image"
                onChange={handleChange}
                className="hidden"
              />
            </label>
          </div>

          {/* Submit */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="h-12 px-8 rounded-lg bg-green-800 text-white font-semibold hover:bg-green-900 transition flex items-center gap-2"
            >
              Submit Complaint
              <Send size={18} />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default PublicSafety;
