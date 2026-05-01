import { useState } from "react";
import {
  Road,
  MapPin,
  FileText,
  Upload,
  Send,
} from "lucide-react";

const RoadDamage = () => {
  const [formData, setFormData] = useState({
    roadName: "",
    location: "",
    roadType: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    alert("Road damage complaint submitted successfully.");
  };

  return (
    <section className="min-h-screen bg-[#f6f8f6] px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-gray-100 shadow-sm p-6 lg:p-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center">
            <Road
              size={26}
              className="text-orange-700"
            />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-green-800">
              Road Damage Complaint
            </h1>

            <p className="text-gray-500 mt-1">
              Report potholes, broken roads, unsafe pathways, or drainage damage.
            </p>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Road Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Road Name
            </label>

            <input
              type="text"
              name="roadName"
              value={formData.roadName}
              onChange={handleChange}
              placeholder="Enter road name"
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

          {/* Road Type */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Road Type
            </label>

            <select
              name="roadType"
              value={formData.roadType}
              onChange={handleChange}
              className="w-full h-12 px-4 rounded-lg border border-gray-200 outline-none focus:border-green-700 bg-white"
            >
              <option value="">Select Type</option>
              <option>Main Road</option>
              <option>Street Road</option>
              <option>Village Road</option>
              <option>Highway Link</option>
              <option>Other</option>
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
              <option>Pothole</option>
              <option>Broken Surface</option>
              <option>Water Logging</option>
              <option>Cracked Road</option>
              <option>Unsafe Pathway</option>
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

export default RoadDamage;