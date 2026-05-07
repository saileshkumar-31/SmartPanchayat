import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { submitApplication } from "../../../../lib/applications";

export default function WasteCollection() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    location: "",
    wasteType: "",
    pickupDate: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.mobile || !formData.location) {
      alert("Please fill required fields");
      return;
    }

    try {
      const res = await submitApplication("Waste Collection", "Civil Service", formData);
      alert(`Waste Collection Request Submitted! Reference: ${res.data.reference_no}`);
      navigate("/applicationtracker");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="px-4 py-10">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-green-100 p-3 rounded-full text-xl">🗑️</div>
          <div>
            <h1 className="text-2xl font-bold text-green-700">
              Waste Collection Request
            </h1>
            <p className="text-gray-500 text-sm">
              Request doorstep waste pickup service.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Row 1 */}
          <div className="grid md:grid-cols-2 gap-4">
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

            <div>
              <label className="text-sm font-medium">Mobile Number *</label>
              <input
                type="tel"
                name="mobile"
                placeholder="Enter mobile number"
                value={formData.mobile}
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
                className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Waste Type</label>
              <select
                name="wasteType"
                value={formData.wasteType}
                onChange={handleChange}
                className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2"
              >
                <option value="">Select Type</option>
                <option>Household Waste</option>
                <option>Garden Waste</option>
                <option>Construction Waste</option>
                <option>E-Waste</option>
              </select>
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Pickup Date</label>
              <input
                type="date"
                name="pickupDate"
                value={formData.pickupDate}
                onChange={handleChange}
                className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2"
              />
            </div>

            {/* empty for alignment */}
            <div></div>
          </div>

          {/* Description */}
          <div>
            <label className="text-sm font-medium">Description</label>
            <textarea
              name="description"
              placeholder="Additional details..."
              value={formData.description}
              onChange={handleChange}
              className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-3 h-28 focus:ring-2 focus:ring-green-500 outline-none"
            />
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
