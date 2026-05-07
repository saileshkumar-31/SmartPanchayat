// React Router setup for the Smart Panchayat application
import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";

// Layout components
import App from "../layout/App.jsx";
import InnerLayout from "../layout/InnerLayout.jsx";

// Helper function to wrap lazy loaded components with Suspense
const withSuspense = (Element) => (
  <Suspense fallback={<div style={{ padding: 16 }}>Loading...</div>}>
    {Element}
  </Suspense>
);

// Lazy loaded components for better performance
const CitizenLogin = lazy(() => import("../pages/auth/CitizenLogin.jsx"));
const CitizenDashboard = lazy(() => import("../pages/citizen/CitizenDashboard.jsx"));
const Meetings = lazy(() => import("../pages/citizen/services/meetings/Meetings.jsx"));
const Complaints = lazy(() => import("../pages/citizen/Complaints/Complaints.jsx"));
const Transparency = lazy(() => import("../pages/transparency/TransparencyDashboard.jsx"));
const AdminDashboard = lazy(() => import("../pages/admin/AdminDashboard.jsx"));

// Regular imports for smaller components
import CitizenRegister from "../pages/auth/CitizenRegister.jsx";
import AdminLogin from "../pages/auth/AdminLogin.jsx";
import ForgotPassword from "../pages/auth/ForgotPassword.jsx";

// Registration step components
import Step1Personal from "../components/register/Step1Personal.jsx";
import Step2Panchayat from "../components/register/Step2Panchayat.jsx";
import Step3Verification from "../components/register/Step3Verification.jsx";
import Step4Success from "../components/register/Step4Success.jsx";

// Public pages
import AboutUs from "../pages/public/AboutUs.jsx";
import Services from "../pages/citizen/services/Services.jsx";
import Schemes from "../pages/public/Schemes.jsx";
import ContactUs from "../pages/public/ContactUs.jsx";

// Certificate pages
import Certificates from "../pages/citizen/services/certificate/Certificates.jsx";
import IncomeCertificate from "../pages/citizen/services/certificate/IncomeCertificate.jsx";

import JobOpportunities from "../pages/citizen/services/JobOpportunities.jsx";
import CivilServices from "../pages/citizen/services/civilservices/CivilServices.jsx";

import CommunityCertificate from "../pages/citizen/services/certificate/Communitycertificate.jsx";
import NativityCertificate from "../pages/citizen/services/certificate/Navtivitycertificate.jsx";
import ResidenceCertificate from "../pages/citizen/services/certificate/Residencecertificate.jsx";
import FirstGraduateCertificate from "../pages/citizen/services/certificate/Firstgraduatecertificate.jsx";
import Birthcertificate from "../pages/citizen/services/certificate/Birthcertificate.jsx";
import DeathCertificate from "../pages/citizen/services/certificate/Deathcertificate.jsx";
import MarriageCertificate from "../pages/citizen/services/certificate/Marriageceretificate.jsx";
import ApplicationTracker from "../pages/citizen/services/ApplicationTracker.jsx";
import Streetlight from "../pages/citizen/Complaints/Streetlight.jsx";
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
import Funds from "../pages/transparency/Funds.jsx";
import Reports from "../pages/transparency/Reports.jsx";
import Ongoing from "../pages/transparency/Ongoing.jsx";
import Completed from "../pages/transparency/Completed.jsx";
import Expenses from "../pages/transparency/Expenses.jsx";
import Tenders from "../pages/transparency/Tenders.jsx";
import FundsOverview from "../components/transparency/FundsOverview.jsx";
import OngoingProjects from "../components/transparency/OngoingProjects.jsx";
import CompletedProjects from "../components/transparency/CompletedProjects.jsx";
import ProjectDetails from "../pages/transparency/ProjectDetails.jsx";
import RecentUpdates from "../pages/transparency/RecentUpdates.jsx";
import UpdateDetails from "../pages/transparency/UpdateDetails.jsx";
import CompletedProjectDetails from "../pages/transparency/CompletedProjectDetails.jsx";
import TenderDetails from "../pages/transparency/TenderDetails.jsx";
import HousingScheme from "../pages/public/schemes/HousingSchemes.jsx";
import FarmerWelfare from "../pages/public/schemes/FarmerWelfare.jsx";
import EducationSupport from "../pages/public/schemes/EducationSupport.jsx";
import HealthInsurance from "../pages/public/schemes/HealthInsurance.jsx";
import EmploymentScheme from "../pages/public/schemes/EmploymentScheme.jsx";
import PensionScheme from "../pages/public/schemes/PensionScheme.jsx";
import ApplicationsManagement from "../pages/admin/ApplicationsManagement.jsx";
import ComplaintsManagement from "../pages/admin/ComplaintsManagement.jsx";
import UsersManagement from "../pages/admin/users/UsersManagement.jsx";
import CertificateManagement from "../pages/admin/CertificatesManagement.jsx"
import MeetingsManagement from "../pages/admin/meetings/MeetingsManagement.jsx";
import ReportsAnalytics from "../pages/admin/ReportsAnalytics.jsx";
import SchemesManagement from "../pages/admin/SchemesManagement.jsx";
import Settings from "../pages/admin/Settings.jsx";
import TransparencyManagement from "../pages/admin/TransparencyManagement.jsx";
import BudgetManagement from "../pages/admin/transparency/budget/BudgetManagement.jsx";
import CompletedProjectsManagement from "../pages/admin/transparency/completes/CompletedProjectsManagement.jsx";
import ExpensesManagement from "../pages/admin/transparency/expenses/ExpensesManagement.jsx";
import RecentUpdatesManagement from "../pages/admin/transparency/recentupdates/RecentUpdatesManagement.jsx";
import TenderManagement from "../pages/admin/transparency/tender/TenderManagement.jsx";
import BudgetEdit from "../pages/admin/transparency/budget/BudgetEdit.jsx";
import AddBudget from "../pages/admin/transparency/budget/AddBudget.jsx";
import OngoingProjectsManagement from "../pages/admin/transparency/ongoing/OngoingProjectsManagement.jsx";
import AddOngoingProject from "../pages/admin/transparency/ongoing/AddOngoingProject.jsx";
import EditOngoingProject from "../pages/admin/transparency/ongoing/EditOngoingProject.jsx";
import EditTender from "../pages/admin/transparency/tender/EditTender.jsx";
import CreateTender from "../pages/admin/transparency/tender/CreateTender.jsx";
import AddExpenses from "../pages/admin/transparency/expenses/AddExpenses.jsx";
import EditExpense from "../pages/admin/transparency/expenses/EditExpenses.jsx";
import AddRecentUpdates from "../pages/admin/transparency/recentupdates/AddRecentUpdates.jsx";
import EditRecentUpdate from "../pages/admin/transparency/recentupdates/EditRecentUpdates.jsx";
import MeetingsDashboard from "../pages/admin/meetings/MeetingsManagement.jsx";
import MeetingRequests from "../pages/admin/meetings/MeetingsRequest.jsx";
import MeetingSchedule from "../pages/admin/meetings/MeetingsScheduled.jsx";
import AddMeeting from "../pages/admin/meetings/Addmeeting.jsx";
import EditMeeting from "../pages/admin/meetings/Editmeeting.jsx";
import TransparencyReports from "../pages/admin/reports/TransparencyReports.jsx";
import AddTransparencyReport from "../pages/admin/reports/AddTransparencyReport.jsx";
import EditTransparencyReport from "../pages/admin/reports/EditTransparencyReport.jsx";
import AddUsers from "../pages/admin/users/AddUsers.jsx";
import EditUser from "../pages/admin/users/EditUser.jsx";
import MeetingCalendarView from "../pages/admin/meetings/MeetingCalendar.jsx";



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
        element: withSuspense(<CitizenLogin />),
      },
      {
        path: "citizen/dashboard",
        element: withSuspense(<CitizenDashboard />),
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
        element: withSuspense(<Complaints />),
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
        path: "complaints/complaint-guidelines",
        element: <ComplaintGuidelines />,
      },
      {
        path: "complaints/my-complaints",
        element: <MyComplaints />,
      },
      {
        path: "Meetings",
        element: withSuspense(<Meetings />),
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
        path: "transparency/funds",
        element: <FundsOverview />,
      },
      {
        path: "transparency/reports",
        element: <Reports />,
      },
      {
        path: "transparency/ongoing-projects",
        element: <OngoingProjects />,
      },
      {
        path: "transparency/ongoing-projects/project-details",
        element: <ProjectDetails />,
      },

      {
        path: "transparency/completed-projects",
        element: <CompletedProjects />,
      },
      {
        path: "transparency/expenses",
        element: <Expenses />,
      },
      {
        path: "transparency/tenders",
        element: <Tenders />,
      },
      {
        path: "transparency/tenders-details",
        element: <TenderDetails/>,
      },
      {
        path: "transparency/recent-updates",
        element: <RecentUpdates />,
      },
      {
        path: "transparency/update-details",
        element: <UpdateDetails />,
      },
      {
        path: "/transparency/completed-project-details",
        element: <CompletedProjectDetails />,
      },

      {
        path: "schemes",
        element: <Schemes />,
      },
      {
        path: "schemes/housing-scheme",
        element: <HousingScheme />,
      },
      {
        path: "schemes/farmer-welfare",
        element: <FarmerWelfare />,
      },
      {
        path: "schemes/education-support",
        element: <EducationSupport />,
      },
      {
        path: "schemes/health-insurance",
        element: <HealthInsurance />,
      },
      {
        path: "schemes/employment-scheme",
        element: <EmploymentScheme />,
      },
      {
        path: "schemes/pension-scheme",
        element: <PensionScheme />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "admin/dashboard",
        element: withSuspense(<AdminDashboard />),
      },
      {
        path: "transparency",
        element: withSuspense(<Transparency />),
      },
      {
        path: "admin/complaints-management",
        element: <ComplaintsManagement />,
      },
      {
        path: "admin/users-management",
        element: <UsersManagement />,
      },
      {
        path: "admin/users-add",
        element: <AddUsers/>,
      },
      {
        path: "admin/users-edit",
        element: <EditUser/>,
      },
      {
        path: "admin/certificate-management",
        element: <CertificateManagement />,
      },
      {
        path: "admin/reports-analytics",
        element: <ReportsAnalytics />,
      },
      {
        path: "admin/schemes-management",
        element: <SchemesManagement/>,
      },
      {
        path: "admin/settings",
        element: <Settings />,
      },
      {
        path: "admin/transparency-management",
        element: <TransparencyManagement />,
      },
      {
        path: "admin/transparency/budget-management",
        element: <BudgetManagement />,
      },
      {
        path: "admin/transparency/budget-edit",
        element: <BudgetEdit />,
      },
      {
        path: "admin/transparency/budget-create",
        element: <AddBudget />,
      },
      {
        path: "admin/transparency/completedprojects-management",
        element: <CompletedProjectsManagement />,
      },
      {
        path: "admin/transparency/ongoingprojects-management",
        element: <OngoingProjectsManagement />,
      },
      {
        path: "admin/transparency/ongoingprojects-create",
        element: <AddOngoingProject />,
      },
      {
        path: "admin/transparency/ongoingprojects-edit",
        element: <EditOngoingProject />,
      },
      {
        path: "admin/transparency/expenses-management",
        element: <ExpensesManagement />,
      },
      {
        path: "admin/transparency/expenses-create",
        element: <AddExpenses />,
      },
      {
        path: "admin/transparency/expenses-edit",
        element: <EditExpense />,
      },
      {
        path: "admin/transparency/recentupdates-management",
        element: <RecentUpdatesManagement />,
      },
      {
        path: "admin/transparency/recentupdates-create",
        element: <AddRecentUpdates />,
      },
      {
        path: "admin/transparency/recentupdates-edit",
        element: <EditRecentUpdate />,
      },
      {
        path: "admin/transparency/reports",
        element: <TransparencyReports />,
      },
      {
        path: "admin/transparency/reports-add",
        element: <AddTransparencyReport />,
      },
      {
        path: "admin/transparency/reports-edit",
        element: <EditTransparencyReport />,
      },
      {
        path: "admin/transparency/tender-management",
        element: <TenderManagement />,
      },
      {
        path: "admin/transparency/tender-edit",
        element: <EditTender />,
      },
      {
        path: "admin/transparency/tender-create",
        element: <CreateTender />,
      },
      {
        path: "admin/meetings",
        element: <MeetingsDashboard />,
      },
      {
        path: "admin/meetings-requests",
        element: <MeetingRequests />,
      },
      {
        path: "admin/meetings-schedule",
        element: <MeetingSchedule />,
      },
      {
        path: "admin/meetings-add",
        element: <AddMeeting />,
      },
      {
        path: "admin/meetings-edit",
        element: <EditMeeting />,
      },
      {
        path: "admin/meetings-calendarview",
        element: <MeetingCalendarView />,
      },




    ],
  },
]);

export default Routes;
