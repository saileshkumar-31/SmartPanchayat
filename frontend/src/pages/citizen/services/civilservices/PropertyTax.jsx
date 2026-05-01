import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PropertyTax() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    propertyId: "",
    ownerName: "",
    location: "",
    propertyType: "",
    area: "",
    taxAmount: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // simple calculation
  const calculateTax = () => {
    if (!formData.area) return;

    const rate = 5; // dummy rate
    const tax = formData.area * rate;

    setFormData({ ...formData, taxAmount: tax });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.propertyId || !formData.ownerName) {
      alert("Fill required fields");
      return;
    }

    alert("Payment Successful!");
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-green-100 p-3 rounded-full text-xl">🏠</div>
          <div>
            <h1 className="text-2xl font-bold text-green-700">
              Property Tax Payment
            </h1>
            <p className="text-gray-500 text-sm">
              View and pay your property tax online.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Row 1 */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Property ID *</label>
              <input
                type="text"
                name="propertyId"
                placeholder="Enter property ID"
                value={formData.propertyId}
                onChange={handleChange}
                className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Owner Name *</label>
              <input
                type="text"
                name="ownerName"
                placeholder="Enter owner name"
                value={formData.ownerName}
                onChange={handleChange}
                className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Location</label>
              <input
                type="text"
                name="location"
                placeholder="Street / Area"
                value={formData.location}
                onChange={handleChange}
                className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2"
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

          {/* Row 3 */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Area (sq.ft)</label>
              <input
                type="number"
                name="area"
                placeholder="Enter area"
                value={formData.area}
                onChange={handleChange}
                className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Tax Amount</label>
              <input
                type="text"
                name="taxAmount"
                value={formData.taxAmount}
                readOnly
                className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2 bg-gray-100"
              />
            </div>
          </div>

          {/* Calculate Button */}
          <div>
            <button
              type="button"
              onClick={calculateTax}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Calculate Tax
            </button>
          </div>

          {/* Buttons */}
          <div className="flex justify-between items-center pt-4">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
            >
              Back
            </button>

            <button
              type="submit"
              className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800"
            >
              Pay Tax →
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}