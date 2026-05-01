import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NOCRequest() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    applicantName: "",
    mobile: "",
    address: "",
    nocType: "",
    purpose: "",
    authority: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.applicantName || !formData.mobile || !formData.address) {
      alert("Please fill required fields");
      return;
    }

    console.log(formData);
    alert("NOC Request Submitted Successfully!");

    navigate("/applicationtracker");
  };

  return (
    <div className="px-4 py-10">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-green-100 p-3 rounded-full text-xl">📄</div>
          <div>
            <h1 className="text-2xl font-bold text-green-700">
              NOC (No Objection Certificate)
            </h1>
            <p className="text-gray-500 text-sm">
              Apply for official No Objection Certificate from authorities.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Row 1 */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Applicant Name *</label>
              <input
                type="text"
                name="applicantName"
                placeholder="Enter your name"
                value={formData.applicantName}
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
              <label className="text-sm font-medium">Address *</label>
              <input
                type="text"
                name="address"
                placeholder="Street / Area / Landmark"
                value={formData.address}
                onChange={handleChange}
                className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2"
              />
            </div>

            <div>
              <label className="text-sm font-medium">NOC Type</label>
              <select
                name="nocType"
                value={formData.nocType}
                onChange={handleChange}
                className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2"
              >
                <option value="">Select Type</option>
                <option>Building NOC</option>
                <option>Fire Safety NOC</option>
                <option>Land NOC</option>
                <option>Business NOC</option>
              </select>
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Purpose</label>
              <input
                type="text"
                name="purpose"
                placeholder="Reason for NOC"
                value={formData.purpose}
                onChange={handleChange}
                className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Issuing Authority</label>
              <input
                type="text"
                name="authority"
                placeholder="Department / Authority"
                value={formData.authority}
                onChange={handleChange}
                className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2"
              />
            </div>
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

          {/* Upload */}
          <div>
            <label className="text-sm font-medium">
              Upload Supporting Documents
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