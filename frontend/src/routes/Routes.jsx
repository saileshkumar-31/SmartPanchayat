import { createBrowserRouter } from "react-router-dom";

import App from "../layout/App.jsx";
import InnerLayout from "../layout/InnerLayout.jsx";

import CitizenLogin from "../pages/auth/CitizenLogin.jsx";
import CitizenRegister from "../pages/auth/CitizenRegister.jsx";

import AdminLogin from "../pages/auth/AdminLogin.jsx";
import ForgotPassword from "../pages/auth/ForgotPassword.jsx";

import Step1Personal from "../components/register/Step1Personal.jsx";
import Step2Panchayat from "../components/register/Step2Panchayat.jsx";
import Step3Verification from "../components/register/Step3Verification.jsx";
import Step4Success from "../components/register/Step4Success.jsx";
import AboutUs from "../pages/public/AboutUs.jsx";
import Services from "../pages/citizen/services/Services.jsx";
import Schemes from "../pages/public/Schemes.jsx";
import Certificates from "../pages/citizen/services/certificate/Certificates.jsx";
import IncomeCertificate from "../pages/citizen/services/certificate/IncomeCertificate.jsx";

import JobOpportunities from "../pages/citizen/services/JobOpportunities.jsx";

import Meetings from "../pages/citizen/services/meetings/Meetings.jsx";
import ContactUs from "../pages/public/ContactUs.jsx";
import CivilServices from "../pages/citizen/services/civilservices/CivilServices.jsx";

import CommunityCertificate from "../pages/citizen/services/certificate/Communitycertificate.jsx";
import NativityCertificate from "../pages/citizen/services/certificate/Navtivitycertificate.jsx";
import ResidenceCertificate from "../pages/citizen/services/certificate/Residencecertificate.jsx";
import FirstGraduateCertificate from "../pages/citizen/services/certificate/Firstgraduatecertificate.jsx";
import Birthcertificate from "../pages/citizen/services/certificate/Birthcertificate.jsx"
import DeathCertificate from "../pages/citizen/services/certificate/Deathcertificate.jsx";
import MarriageCertificate from "../pages/citizen/services/certificate/Marriageceretificate.jsx";
import ApplicationTracker from "../pages/citizen/services/ApplicationTracker.jsx";
import Complaints from "../pages/citizen/Complaints/Complaints.jsx";
import Streetlight from "../pages/citizen/Complaints/Streetlight.jsx";
import Transparency from "../pages/citizen/services/Transparency.jsx";
import WaterSupply from "../pages/citizen/Complaints/WaterSupply.jsx";
import Garbage from "../pages/citizen/Complaints/Garbage.jsx";
import RoadDamage from "../pages/citizen/Complaints/RoadDamage.jsx";
import PublicSafety from "../pages/citizen/Complaints/PublicSafety.jsx";
import OtherComplaints from "../pages/citizen/Complaints/OtherComplaints.jsx";
import ComplaintGuidelines from "../pages/citizen/Complaints/ComplaintGuidelines.jsx";
import MyComplaints from "../pages/citizen/Complaints/MyComplaints.jsx";
import WaterConnection from "../pages/citizen/services/civilservices/WaterConnection.jsx";
import PropertyTax from "../pages/citizen/services/civilservices/PropertyTax.jsx";
import WasteCollection from "../pages/citizen/services/civilservices/WasteCollection.jsx";
import BuildingPermission from "../pages/citizen/services/civilservices/BuildingPermission.jsx";
import TradeLicense from "../pages/citizen/services/civilservices/TradeLicense.jsx";
import NoObjection from "../pages/citizen/services/civilservices/NoObjection.jsx";



const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/",
    element: <InnerLayout />,
    children: [
      {
        path: "citizen",
        element: <CitizenLogin />,
      },

      {
        path: "citizen/register",
        element: <CitizenRegister />,
        children: [
          {
            index: true,
            element: <Step1Personal />,
          },
          {
            path: "personal",
            element: <Step1Personal />,
          },
          {
            path: "panchayat",
            element: <Step2Panchayat />,
          },
          {
            path: "verification",
            element: <Step3Verification />,
          },
          
        ],
      },
      {
            path: "success",
            element: <Step4Success />,
          },

      {
        path: "adminLogin",
        element: <AdminLogin />,
      },
      {
        path: "forgotpassword",
        element: <ForgotPassword />,
      },
      {
        path: "aboutus",
        element: <AboutUs />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "certificates",
        element: <Certificates />,
      },
      {
        path: "incomecertificate",
        element: <IncomeCertificate />,
      },
      {
        path: "communitycertificate",
        element: <CommunityCertificate />,
      },
      {
        path: "nativitycertificate",
        element: <NativityCertificate />,
      },
      {
        path: "residencecertificate",
        element: <ResidenceCertificate />,
      },
      {
        path: "firstgraduatecertificate",
        element: <FirstGraduateCertificate />,
      },
      {
        path: "birthcertificate",
        element: <Birthcertificate />,
      },
      {
        path: "deathcertificate",
        element: <DeathCertificate />,
      },
      {
        path: "marriagecertificate",
        element: <MarriageCertificate />,
      },
      {
        path: "applicationtracker",
        element: <ApplicationTracker />,
      },
      {
        path: "Jobs",
        element: <JobOpportunities />,
      },
      {
        path: "complaints",
        element: <Complaints />,
      },
      {
        path: "complaints/streetlight",
        element: <Streetlight />,
      },
      {
        path: "complaints/water-supply",
        element: <WaterSupply />,
      },
      {
        path: "complaints/garbage",
        element: <Garbage />,
      },
      {
        path: "complaints/road-damage",
        element: <RoadDamage />,
      },
      {
        path: "complaints/public-safety",
        element: <PublicSafety />,
      },
      {
        path: "complaints/other",
        element: <OtherComplaints />,
      },
      {
        path: "complaints/guidelines",
        element: <ComplaintGuidelines />,
      },
      {
        path: "complaints/my-complaints",
        element: <MyComplaints />,
      },
      {
        path: "Meetings",
        element: <Meetings/>,
      },
      {
        path: "civilservices",
        element: <CivilServices />,
      },
      {
        path: "waterconnection",
        element: <WaterConnection />,
      },
      {
        path: "propertytax",
        element: <PropertyTax />,
      },
      {
        path: "wastecollection",
        element: <WasteCollection />,
      },
      {
        path: "buildingpermission",
        element: <BuildingPermission />,
      },
      {
        path: "tradelicense",
        element: <TradeLicense />,
      },
      {
        path: "NoObjectionCertificate",
        element: <NoObjection />,
      },
      {
        path: "transparency",
        element: <Transparency />,
      },
      {
        path: "schemes",
        element: <Schemes />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },

    ],
  },
]);

export default Routes;