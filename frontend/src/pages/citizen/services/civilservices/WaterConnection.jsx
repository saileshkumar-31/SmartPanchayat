import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { submitApplication } from "../../../../lib/applications";

export default function WaterConnection() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    consumerNumber: "",
    name: "",
    location: "",
    propertyType: "",
    connectionType: "",
    description: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "file") {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.location) {
      alert("Please fill required fields");
      return;
    }

    try {
      const res = await submitApplication("Water Connection", "Civil Service", formData);
      alert(`Water Connection Request Submitted! Reference: ${res.data.reference_no}`);
      navigate("/applicationtracker");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-green-100 p-3 rounded-full text-xl">💧</div>
          <div>
            <h1 className="text-2xl font-bold text-green-700">
              Water Connection Request
            </h1>
            <p className="text-gray-500 text-sm">
              Apply for new water supply connection for your property.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Row 1 */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Consumer Number</label>
              <input
                type="text"
                name="consumerNumber"
                placeholder="Enter consumer number"
                value={formData.consumerNumber}
                onChange={handleChange}
                className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Full Name *</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Location *</label>
              <input
                type="text"
                name="location"
                placeholder="Street / Area / Landmark"
                value={formData.location}
                onChange={handleChange}
                className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Property Type</label>
              <select
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
                className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2"
              >
                <option value="">Select Type</option>
                <option>Residential</option>
                <option>Commercial</option>
                <option>Industrial</option>
              </select>
            </div>
          </div>

          {/* Row 3 (FIXED — both same width) */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Connection Type</label>
              <select
                name="connectionType"
                value={formData.connectionType}
                onChange={handleChange}
                className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2"
              >
                <option value="">Select Type</option>
                <option>New Connection</option>
                <option>Temporary Connection</option>
                <option>Upgrade Existing</option>
              </select>
            </div>

            {/* Empty placeholder to maintain layout */}
            <div></div>
          </div>

          {/* Description */}
          <div>
            <label className="text-sm font-medium">Description</label>
            <textarea
              name="description"
              placeholder="Provide additional details..."
              value={formData.description}
              onChange={handleChange}
              className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-3 h-28 focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>

          {/* Upload */}
          <div>
            <label className="text-sm font-medium">
              Upload Document (Optional)
            </label>

            <label className="mt-2 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center py-8 cursor-pointer hover:bg-gray-50">
              <input
                type="file"
                name="file"
                onChange={handleChange}
                className="hidden"
              />
              <p className="text-gray-500">
                Click to upload (PDF, JPG, PNG)
              </p>
              <p className="text-xs text-gray-400">Max size: 5MB</p>
            </label>
          </div>

          {/* Buttons */}
          <div className="flex justify-between items-center pt-4">
            <button
              type="button"
              onClick={() => navigate("/applicationtracker")}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
            >
              Track Application
            </button>

            <button
              type="submit"
              className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800"
            >
              Submit Request →
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
