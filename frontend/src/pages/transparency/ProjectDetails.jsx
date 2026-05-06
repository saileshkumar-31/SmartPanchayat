import { useParams } from "react-router-dom";
import Sidebar from "../../components/transparency/Sidebar";

const ProjectDetails = () => {
  const { id } = useParams();

  return (
    <div className="flex min-h-screen bg-[#f5f7fb]">
      <Sidebar />

      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-2">
          Project Details
        </h1>

        <p className="text-gray-500 mb-6">
          Project ID: {id}
        </p>

        <div className="bg-white rounded-2xl border p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">
            Project Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <p className="text-gray-500 text-sm">Project Name</p>
              <h3 className="font-semibold">Village Road Construction</h3>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Budget</p>
              <h3 className="font-semibold">₹ 12,50,000</h3>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Status</p>
              <h3 className="font-semibold text-green-700">
                Ongoing
              </h3>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Completion</p>
              <h3 className="font-semibold">68%</h3>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl border p-6">
          <h2 className="text-xl font-semibold mb-4">
            Project Timeline
          </h2>

          <p className="text-gray-500">
            Timeline data comes here
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;