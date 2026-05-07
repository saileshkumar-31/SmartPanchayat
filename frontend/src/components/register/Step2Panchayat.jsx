import React, { useState } from "react";
import {
  Building2,
  ChevronDown,
  MapPin,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Step2Panchayat = () => {
  const navigate = useNavigate();

  const states = ["Tamil Nadu", "Kerala", "Karnataka"];

  const districts = {
    "Tamil Nadu": ["Tiruvallur", "Chennai", "Kanchipuram"],
    Kerala: ["Palakkad", "Thrissur"],
    Karnataka: ["Bengaluru Urban", "Mysuru"],
  };

  const taluks = {
    Tiruvallur: ["Ponneri", "Avadi", "Gummidipoondi"],
    Chennai: ["Egmore", "T Nagar"],
    Kanchipuram: ["Sriperumbudur", "Tambaram"],
    Palakkad: ["Ottapalam"],
    Thrissur: ["Kodungallur"],
    "Bengaluru Urban": ["Yelahanka"],
    Mysuru: ["Nanjangud"],
  };

  const panchayats = {
    Ponneri: ["Nallur Panchayat", "Minjur Panchayat"],
    Avadi: ["Paruthipattu Panchayat"],
    Gummidipoondi: ["Kavarapettai Panchayat"],
    Egmore: ["Egmore Zone"],
    "T Nagar": ["T Nagar Zone"],
    Sriperumbudur: ["Mannur Panchayat"],
    Tambaram: ["Perungalathur Panchayat"],
    Ottapalam: ["Shoranur Panchayat"],
    Kodungallur: ["Mathilakam Panchayat"],
    Yelahanka: ["Jakkur Panchayat"],
    Nanjangud: ["Hullahalli Panchayat"],
  };

  const villages = {
    "Nallur Panchayat": ["Nallur Village", "West Nallur"],
    "Minjur Panchayat": ["Minjur Village"],
    "Paruthipattu Panchayat": ["Paruthipattu"],
    "Kavarapettai Panchayat": ["Kavarapettai"],
    "Egmore Zone": ["Egmore"],
    "T Nagar Zone": ["T Nagar"],
    "Mannur Panchayat": ["Mannur"],
    "Perungalathur Panchayat": ["Perungalathur"],
    "Shoranur Panchayat": ["Shoranur"],
    "Mathilakam Panchayat": ["Mathilakam"],
    "Jakkur Panchayat": ["Jakkur"],
    "Hullahalli Panchayat": ["Hullahalli"],
  };

  const [form, setForm] = useState({
    ...{
      state: "",
      district: "",
      taluk: "",
      panchayat: "",
      ward: "",
      village: "",
      houseNo: "",
      pinCode: "",
    },
    ...JSON.parse(sessionStorage.getItem("registration_panchayat") || "{}"),
  });

  const handleChange = (key, value) => {
    if (key === "state") {
      setForm({
        state: value,
        district: "",
        taluk: "",
        panchayat: "",
        ward: "",
        village: "",
        houseNo: "",
        pinCode: "",
      });
      return;
    }

    if (key === "district") {
      setForm({
        ...form,
        district: value,
        taluk: "",
        panchayat: "",
        village: "",
      });
      return;
    }

    if (key === "taluk") {
      setForm({
        ...form,
        taluk: value,
        panchayat: "",
        village: "",
      });
      return;
    }

    if (key === "panchayat") {
      setForm({
        ...form,
        panchayat: value,
        village: "",
      });
      return;
    }

    setForm({ ...form, [key]: value });
  };

  const handleNext = () => {
    if (!form.state || !form.district || !form.taluk || !form.panchayat) {
      alert("Please complete the required panchayat details.");
      return;
    }
    sessionStorage.setItem("registration_panchayat", JSON.stringify(form));
    navigate("/citizen/register/verification");
  };

  return (
    <>
      {/* TITLE */}
      <div className="flex gap-3 mb-6 sm:mb-8 lg:mb-10">
        <Building2 size={24} className="text-green-700 mt-1 sm:w-7 sm:h-7" />

        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-bold text-[#13284c] leading-tight lg:leading-none">
            Panchayat Details
          </h2>

          <p className="text-sm sm:text-base lg:text-xl text-gray-500 mt-2">
            Please provide your address and panchayat information
          </p>
        </div>
      </div>

      {/* FORM */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">

        {/* STATE */}
        <div>
          <label className="font-semibold text-gray-700 text-sm sm:text-base">
            State *
          </label>

          <div className="relative mt-3">
            <select
              value={form.state}
              onChange={(e) => handleChange("state", e.target.value)}
              className="w-full h-12 sm:h-14 border rounded-xl px-4 appearance-none outline-none text-sm sm:text-base"
            >
              <option value="">Select State</option>
              {states.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>

            <ChevronDown
              size={18}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            />
          </div>
        </div>

        {/* DISTRICT */}
        <div>
          <label className="font-semibold text-gray-700 text-sm sm:text-base">
            District *
          </label>

          <div className="relative mt-3">
            <select
              value={form.district}
              onChange={(e) => handleChange("district", e.target.value)}
              className="w-full h-12 sm:h-14 border rounded-xl px-4 appearance-none outline-none text-sm sm:text-base"
            >
              <option value="">Select District</option>

              {(districts[form.state] || []).map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>

            <ChevronDown
              size={18}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            />
          </div>
        </div>

        {/* TALUK */}
        <div>
          <label className="font-semibold text-gray-700 text-sm sm:text-base">
            Taluk / Block *
          </label>

          <div className="relative mt-3">
            <select
              value={form.taluk}
              onChange={(e) => handleChange("taluk", e.target.value)}
              className="w-full h-12 sm:h-14 border rounded-xl px-4 appearance-none outline-none text-sm sm:text-base"
            >
              <option value="">Select Taluk</option>

              {(taluks[form.district] || []).map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>

            <ChevronDown
              size={18}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            />
          </div>
        </div>

        {/* PANCHAYAT */}
        <div>
          <label className="font-semibold text-gray-700 text-sm sm:text-base">
            Panchayat *
          </label>

          <div className="relative mt-3">
            <select
              value={form.panchayat}
              onChange={(e) => handleChange("panchayat", e.target.value)}
              className="w-full h-12 sm:h-14 border rounded-xl px-4 appearance-none outline-none text-sm sm:text-base"
            >
              <option value="">Select Panchayat</option>

              {(panchayats[form.taluk] || []).map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>

            <ChevronDown
              size={18}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            />
          </div>
        </div>

        {/* WARD */}
        <div>
          <label className="font-semibold text-gray-700 text-sm sm:text-base">
            Ward Number *
          </label>

          <input
            type="text"
            placeholder="Enter Ward Number"
            value={form.ward}
            onChange={(e) => handleChange("ward", e.target.value)}
            className="w-full h-12 sm:h-14 mt-3 border rounded-xl px-4 outline-none text-sm sm:text-base"
          />
        </div>

        {/* VILLAGE */}
        <div>
          <label className="font-semibold text-gray-700 text-sm sm:text-base">
            Village / Street *
          </label>

          <div className="relative mt-3">
            <select
              value={form.village}
              onChange={(e) => handleChange("village", e.target.value)}
              className="w-full h-12 sm:h-14 border rounded-xl px-4 appearance-none outline-none text-sm sm:text-base"
            >
              <option value="">Select Village</option>

              {(villages[form.panchayat] || []).map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>

            <ChevronDown
              size={18}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            />
          </div>
        </div>
      </div>

      {/* SECOND ROW */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mt-5 sm:mt-6">
        <div>
          <label className="font-semibold text-gray-700 text-sm sm:text-base">
            House / Door Number *
          </label>

          <input
            type="text"
            placeholder="Enter House Number"
            value={form.houseNo}
            onChange={(e) => handleChange("houseNo", e.target.value)}
            className="w-full h-12 sm:h-14 mt-3 border rounded-xl px-4 outline-none text-sm sm:text-base"
          />
        </div>

        <div>
          <label className="font-semibold text-gray-700 text-sm sm:text-base">
            Pin Code *
          </label>

          <input
            type="text"
            placeholder="Enter Pin Code"
            value={form.pinCode}
            onChange={(e) => handleChange("pinCode", e.target.value)}
            className="w-full h-12 sm:h-14 mt-3 border rounded-xl px-4 outline-none text-sm sm:text-base"
          />
        </div>
      </div>

      {/* SUMMARY CARD */}
      <div className="mt-6 sm:mt-8 bg-green-50 border border-green-200 rounded-2xl px-4 sm:px-6 py-5">
        <div className="flex items-center gap-3">
          <MapPin size={22} className="text-green-700" />

          <p className="font-semibold text-[#13284c] text-base sm:text-lg">
            Selected Panchayat Details
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mt-5 text-sm text-gray-700">
          <div>Panchayat: {form.panchayat || "-"}</div>
          <div>District: {form.district || "-"}</div>
          <div>State: {form.state || "-"}</div>
        </div>
      </div>

      {/* BUTTONS */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:justify-between mt-8 sm:mt-10">
        <button
          type="button"
          onClick={() => navigate("/citizen/register/personal")}
          className="h-12 sm:h-14 px-6 sm:px-7 border border-green-700 text-green-700 rounded-xl flex items-center justify-center gap-2 font-semibold text-sm sm:text-base"
        >
          <ArrowLeft size={18} />
          Back to Personal Details
        </button>

        <button
          type="button"
          onClick={handleNext}
          className="h-12 sm:h-14 px-6 sm:px-8 bg-green-700 hover:bg-green-800 text-white rounded-xl flex items-center justify-center gap-3 font-semibold text-sm sm:text-base"
        >
          Next: Verification
          <ArrowRight size={18} />
        </button>
      </div>
    </>
  );
};

export default Step2Panchayat;
