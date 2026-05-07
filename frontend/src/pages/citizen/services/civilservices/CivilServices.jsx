import React, { useMemo, useState, useEffect } from "react";
import {
  Search,
  Droplets,
  Home,
  Trash2,
  Building2,
  Store,
  FileCheck,
  Landmark,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { api } from "../../../../lib/api";

// Civil Services page - Shows available civil services for citizens
const CivilServices = () => {
  const navigate = useNavigate();

  // State for search and services
  const [search, setSearch] = useState("");
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load civil services from API
  useEffect(() => {
    const loadServices = async () => {
      try {
        const response = await api.get("/civil-services");
        setServices(response.data || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching civil services:", error);
        setLoading(false);
      }
    };

    loadServices();
  }, []);

  // Map service categories to icons
  const iconMap = {
    "Utilities": Droplets,
    "Certificates": FileCheck,
    "Taxation": Home,
    "Sanitation": Trash2,
    "Water": Droplets,
    "Property": Building2,
    "General": Store,
    "default": Landmark,
  };

  // Map service categories to colors
  const colorMap = {
    "Utilities": { color: "text-blue-700", bg: "bg-blue-100" },
    "Certificates": { color: "text-green-700", bg: "bg-green-100" },
    "Taxation": { color: "text-orange-700", bg: "bg-orange-100" },
    "Sanitation": { color: "text-green-700", bg: "bg-green-100" },
    "Water": { color: "text-blue-700", bg: "bg-blue-100" },
    "Property": { color: "text-purple-700", bg: "bg-purple-100" },
    "General": { color: "text-gray-700", bg: "bg-gray-100" },
    "default": { color: "text-indigo-700", bg: "bg-indigo-100" },
  };

  // Filter services based on search input
  const filteredServices = useMemo(() => {
    // If no search, return all services
    if (!search) return services;
    
    // Convert search to lowercase for case-insensitive matching
    const searchQuery = search.toLowerCase();
    
    // Filter services that match search in title, description, or category
    return services.filter(
      (service) =>
        service.title.toLowerCase().includes(searchQuery) ||
        service.description.toLowerCase().includes(searchQuery) ||
        service.category.toLowerCase().includes(searchQuery)
    );
  }, [services, search]);

  // Show loading spinner while data is being fetched
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-green-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading civil services...</p>
        </div>
      </div>
    );
  }

  // Main component layout
  return (
    <div className="flex min-h-screen bg-[#f5f7fb]">
      {/* Sidebar navigation */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h2 className="text-xl font-bold text-[#13284c] mb-4">Civil Services</h2>
          <div className="space-y-2">
            <button
              onClick={() => navigate("/services")}
              className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-700"
            >
              ← Back to Services
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-[#13284c] mb-4">Civil Services</h1>
            <p className="text-gray-600 mb-6">
              Access various civil services provided by the Panchayat. Apply for certificates, request utilities, and more.
            </p>

            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          {filteredServices.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No services found</h3>
              <p className="text-gray-500">Try adjusting your search terms</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service, index) => {
                const Icon = iconMap[service.category] || iconMap.default;
                const colors = colorMap[service.category] || colorMap.default;

                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => navigate(`/services/civil/${service.service_id}`)}
                  >
                    <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-4`}>
                      <Icon className={`w-6 h-6 ${colors.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-[#13284c] mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {service.description}
                    </p>
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Category:</span>
                        <span className="font-medium text-gray-700">{service.category}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Processing:</span>
                        <span className="font-medium text-gray-700">{service.process_time}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Fee:</span>
                        <span className="font-medium text-green-700">
                          {service.fee === 0 ? "Free" : `₹${service.fee}`}
                        </span>
                      </div>
                    </div>
                    <button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                      Apply Now
                      <ArrowRight size={16} />
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CivilServices;
