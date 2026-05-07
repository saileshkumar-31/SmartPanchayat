import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FileText,
  AlertTriangle,
  Calendar,
  CheckCircle,
  ArrowRight,
  User,
  Home,
  MessageSquare,
  Clock,
  TrendingUp,
  Activity,
  Award,
  Users,
  Bell,
  Search,
} from "lucide-react";

import CitizenLayout from "../../components/citizen/CitizenLayout";
import { api, getCurrentUser } from "../../lib/api";

// Citizen Dashboard - Main dashboard for logged-in citizens
export default function CitizenDashboard() {
  const navigate = useNavigate();
  
  // Basic state management
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Dashboard statistics
  const [summary, setSummary] = useState({
    applications: 0,
    complaints: 0,
    meetings: 0,
    resolvedApplications: 0,
    pendingApplications: 0,
    totalSchemes: 0,
    upcomingMeetings: 0,
    recentActivities: 0,
  });
  
  // Recent data for the dashboard
  const [recentApplications, setRecentApplications] = useState([]);
  const [recentComplaints, setRecentComplaints] = useState([]);
  const [upcomingMeetings, setUpcomingMeetings] = useState([]);
  const [availableSchemes, setAvailableSchemes] = useState([]);
  const [notifications, setNotifications] = useState([]);

  // Load dashboard data when component mounts
useEffect(() => {
    const loadDashboardData = async () => {
      try {
        // Show loading state
        setLoading(true);
        
        // Get current user from session
        const currentUser = getCurrentUser();
        setUser(currentUser);

        // If no user, stop loading
        if (!currentUser) {
          setLoading(false);
          return;
        }

        // Get applications data
        const applicationsResponse = await api.get("/applications");
        const applications = applicationsResponse.data.data || [];
        
        // Get complaints for this user
        const complaintsResponse = await api.get("/complaints?citizen_id=" + currentUser.user_id);
        const complaints = complaintsResponse.data.data || [];
        
        // Get meetings data
        const meetingsResponse = await api.get("/meetings");
        const meetings = meetingsResponse.data.data || [];
        
        // Get schemes data
        const schemesResponse = await api.get("/schemes");
        const schemes = schemesResponse.data.data || [];

        // Process the applications data
        const recentApps = applications.slice(0, 3);
        const resolvedApps = applications.filter(app => 
          app.status === "Approved" || app.status === "Completed"
        );
        const pendingApps = applications.filter(app => 
          app.status === "Submitted" || app.status === "Pending"
        );

        // Process complaints data
        const recentComplaintsList = complaints.slice(0, 3);

        // Process meetings data
        const upcomingMeetingsList = meetings.filter(meeting => 
          meeting.status === "Upcoming" || 
          new Date(meeting.date) >= new Date()
        ).slice(0, 3);

        // Process schemes data
        const activeSchemes = schemes.filter(scheme => scheme.status === "Active").slice(0, 4);

        // Update summary statistics
        setSummary({
          applications: applications.length,
          complaints: complaints.length,
          meetings: meetings.length,
          resolvedApplications: resolvedApps.length,
          pendingApplications: pendingApps.length,
          totalSchemes: schemes.length,
          upcomingMeetings: upcomingMeetingsList.length,
          recentActivities: recentApps.length + recentComplaintsList.length,
        });

        // Update state for dashboard components
        setRecentApplications(recentApps);
        setRecentComplaints(recentComplaintsList);
        setUpcomingMeetings(upcomingMeetingsList);
        setAvailableSchemes(activeSchemes);

        // Generate notifications based on data
        const notifications = [];
        if (pendingApps.length > 0) {
          notifications.push({
            title: "Pending Applications",
            description: `You have ${pendingApps.length} pending application(s)`,
            type: "info",
            icon: <Clock size={16} />
          });
        }
        if (upcomingMeetingsList.length > 0) {
          notifications.push({
            title: "Upcoming Meetings",
            description: `${upcomingMeetingsList.length} meeting(s) scheduled`,
            type: "success",
            icon: <Calendar size={16} />
          });
        }
        if (complaints.some(c => c.status === "Pending")) {
          const pendingComplaints = complaints.filter(c => c.status === "Pending").length;
          notifications.push({
            title: "Pending Complaints",
            description: `${pendingComplaints} complaint(s) awaiting resolution`,
            type: "warning",
            icon: <AlertTriangle size={16} />
          });
        }
        setNotifications(notifications);

      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadDashboardData();
  }, []);

  // Dashboard statistics cards
  const stats = [
    {
      title: "Total Applications",
      value: summary.applications,
      icon: <FileText size={24} />,
      color: "from-blue-600 to-cyan-500",
      action: () => navigate("/applicationtracker"),
    },
    {
      title: "Pending Applications",
      value: summary.pendingApplications,
      icon: <Clock size={24} />,
      color: "from-amber-500 to-orange-500",
      action: () => navigate("/applicationtracker"),
    },
    {
      title: "My Complaints",
      value: summary.complaints,
      icon: <AlertTriangle size={24} />,
      color: "from-red-500 to-pink-500",
      action: () => navigate("/complaints/my-complaints"),
    },
    {
      title: "Resolved Items",
      value: summary.resolvedApplications,
      icon: <CheckCircle size={24} />,
      color: "from-green-600 to-emerald-500",
      action: () => navigate("/applicationtracker"),
    },
    {
      title: "Available Schemes",
      value: summary.totalSchemes,
      icon: <Award size={24} />,
      color: "from-purple-600 to-indigo-500",
      action: () => navigate("/schemes"),
    },
    {
      title: "Upcoming Meetings",
      value: summary.upcomingMeetings,
      icon: <Calendar size={24} />,
      color: "from-teal-500 to-cyan-500",
      action: () => navigate("/Meetings"),
    },
  ];

  const [quickActions, setQuickActions] = useState([]);
  const [loadingQuickActions, setLoadingQuickActions] = useState(true);

  useEffect(() => {
    const fetchQuickActions = async () => {
      // Static fallback quick actions
      const staticQuickActions = [
        {
          title: "Apply for Certificate",
          description: "Apply for various certificates",
          icon: <FileText size={20} />,
          color: "bg-blue-100 text-blue-700",
          action: () => navigate("/certificates"),
        },
        {
          title: "File Complaint",
          description: "Report issues in your area",
          icon: <AlertTriangle size={20} />,
          color: "bg-red-100 text-red-700",
          action: () => navigate("/complaints"),
        },
        {
          title: "View Schemes",
          description: "Browse available schemes",
          icon: <Award size={20} />,
          color: "bg-purple-100 text-purple-700",
          action: () => navigate("/schemes"),
        },
        {
          title: "Track Application",
          description: "Check application status",
          icon: <Search size={20} />,
          color: "bg-green-100 text-green-700",
          action: () => navigate("/applicationtracker"),
        },
        {
          title: "Attend Meeting",
          description: "Join public meetings",
          icon: <Calendar size={20} />,
          color: "bg-amber-100 text-amber-700",
          action: () => navigate("/Meetings"),
        },
        {
          title: "Contact Support",
          description: "Get help and support",
          icon: <MessageSquare size={20} />,
          color: "bg-teal-100 text-teal-700",
          action: () => navigate("/contact"),
        },
      ];

      try {
        const res = await api.get("/quick-actions");
        if (res.data && res.data.length > 0) {
          // Map icon strings to Lucide icons
          const iconMap = {
            "FileText": <FileText size={20} />,
            "AlertTriangle": <AlertTriangle size={20} />,
            "Award": <Award size={20} />,
            "Search": <Search size={20} />,
            "Calendar": <Calendar size={20} />,
            "MessageSquare": <MessageSquare size={20} />,
          };

          setQuickActions(res.data.map(action => ({
            title: action.title,
            description: action.description,
            icon: iconMap[action.icon] || <FileText size={20} />,
            color: action.color,
            action: () => navigate(action.route),
          })));
        } else {
          setQuickActions(staticQuickActions);
        }
      } catch (error) {
        console.error("Error fetching quick actions:", error);
        setQuickActions(staticQuickActions);
      } finally {
        setLoadingQuickActions(false);
      }
    };

    fetchQuickActions();
  }, [navigate]);

  const [recentActivities, setRecentActivities] = useState([]);

  useEffect(() => {
    if (user) {
      // Fetch recent applications
      api.get("/applications")
        .then((res) => {
          const applications = res.data.data || [];
          const recentApps = applications.slice(0, 2).map(app => ({
            title: "Application Submitted",
            description: `${app.service_name || 'Certificate'} application - ${app.status}`,
            time: new Date(app.created_at).toLocaleDateString(),
          }));
          
          // Fetch recent complaints
          api.get("/complaints?citizen_id=" + user.user_id)
            .then((complaintRes) => {
              const complaints = complaintRes.data.data || [];
              const recentComplaints = complaints.slice(0, 2).map(complaint => ({
                title: "Complaint Registered",
                description: `${complaint.subject} - ${complaint.status}`,
                time: new Date(complaint.created_at).toLocaleDateString(),
              }));
              
              // Combine and sort by date
              const allActivities = [...recentApps, ...recentComplaints]
                .sort((a, b) => new Date(b.time) - new Date(a.time))
                .slice(0, 3);
              
              setRecentActivities(allActivities);
            })
            .catch((err) => console.error("Error fetching complaints:", err));
        })
        .catch((err) => console.error("Error fetching applications:", err));
    }
  }, [user]);

  if (loading) {
    return (
      <CitizenLayout>
        <div className="flex items-center justify-center min-h-96">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-green-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Loading your dashboard...</p>
          </div>
        </div>
      </CitizenLayout>
    );
  }

  return (
    <CitizenLayout>
      {/* Header */}
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6 mb-10">
        <div>
          <p className="text-green-700 font-semibold mb-2">
            Welcome back, {user?.user_name || "Citizen"}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#13284c]">
            Citizen Dashboard
          </h1>
          <p className="text-gray-500 mt-4 text-lg max-w-2xl">
            Manage your applications, track complaints, and access Panchayat services.
          </p>
        </div>

        {/* User Card */}
        <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm min-w-[280px]">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-full bg-green-100 text-green-700 flex items-center justify-center">
              <User size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#13284c]">
                {user?.user_name || "Citizen"}
              </h3>
              <p className="text-gray-500 text-sm">
                {user?.user_mobile || "Mobile"}
              </p>
            </div>
          </div>
          <div className="text-sm text-gray-600">
            <p>{user?.user_panchayat || "Smart Panchayat"}</p>
          </div>
        </div>
      </div>

      {/* Notifications */}
      {notifications.length > 0 && (
        <div className="mb-8">
          <div className="grid gap-4">
            {notifications.map((notification, index) => (
              <div
                key={index}
                className={`p-4 rounded-xl border ${
                  notification.type === 'success' ? 'bg-green-50 border-green-200 text-green-800' :
                  notification.type === 'warning' ? 'bg-amber-50 border-amber-200 text-amber-800' :
                  'bg-blue-50 border-blue-200 text-blue-800'
                }`}
              >
                <div className="flex items-center gap-3">
                  {notification.icon}
                  <div>
                    <h3 className="font-semibold">{notification.title}</h3>
                    <p className="text-sm opacity-90">{notification.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Stats */}
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 lg:grid-cols-6 gap-6 mb-10">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition cursor-pointer"
            onClick={item.action}
          >
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${item.color} text-white flex items-center justify-center mb-5`}>
              {item.icon}
            </div>
            <p className="text-gray-500 text-sm">
              {item.title}
            </p>
            <h2 className="text-4xl font-bold text-[#13284c] mt-2">
              {item.value}
            </h2>
          </div>
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid xl:grid-cols-3 gap-8">

        {/* Left */}
        <div className="xl:col-span-2 space-y-8">

          {/* Recent Applications */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-[#13284c]">
                Recent Applications
              </h2>
              <button 
                className="text-green-700 font-semibold flex items-center gap-2 hover:gap-3 transition-all"
                onClick={() => navigate("/applicationtracker")}
              >
                View All
                <ArrowRight size={18} />
              </button>
            </div>
            <div className="space-y-4">
              {recentApplications.length > 0 ? (
                recentApplications.map((application, index) => (
                  <div key={index} className="flex items-start gap-4 pb-4 border-b border-gray-100 last:border-0">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <FileText size={20} className="text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-[#13284c] mb-1">
                        {application.service_name || "Certificate Application"}
                      </h3>
                      <p className="text-gray-500 text-sm mb-1">
                        Reference: {application.reference_no}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          application.status === "Approved" ? "bg-green-100 text-green-700" :
                          application.status === "Pending" ? "bg-amber-100 text-amber-700" :
                          "bg-gray-100 text-gray-700"
                        }`}>
                          {application.status}
                        </span>
                        <p className="text-gray-400 text-xs">
                          {new Date(application.created_at).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <FileText size={48} className="text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">No recent applications</p>
                  <button 
                    className="mt-4 text-green-700 font-semibold hover:text-green-800"
                    onClick={() => navigate("/certificates")}
                  >
                    Apply Now
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Recent Complaints */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-[#13284c]">
                Recent Complaints
              </h2>
              <button 
                className="text-green-700 font-semibold flex items-center gap-2 hover:gap-3 transition-all"
                onClick={() => navigate("/complaints/my-complaints")}
              >
                View All
                <ArrowRight size={18} />
              </button>
            </div>
            <div className="space-y-4">
              {recentComplaints.length > 0 ? (
                recentComplaints.map((complaint, index) => (
                  <div key={index} className="flex items-start gap-4 pb-4 border-b border-gray-100 last:border-0">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                      <AlertTriangle size={20} className="text-red-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-[#13284c] mb-1">
                        {complaint.subject}
                      </h3>
                      <p className="text-gray-500 text-sm mb-1">
                        {complaint.category} • {complaint.location}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          complaint.status === "Resolved" ? "bg-green-100 text-green-700" :
                          complaint.status === "In Progress" ? "bg-blue-100 text-blue-700" :
                          "bg-amber-100 text-amber-700"
                        }`}>
                          {complaint.status}
                        </span>
                        <p className="text-gray-400 text-xs">
                          {new Date(complaint.created_at).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <AlertTriangle size={48} className="text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">No recent complaints</p>
                  <button 
                    className="mt-4 text-green-700 font-semibold hover:text-green-800"
                    onClick={() => navigate("/complaints")}
                  >
                    File Complaint
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-[#13284c]">
                Quick Actions
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {quickActions.map((action, index) => (
                <div
                  key={index}
                  className="border border-gray-100 rounded-2xl p-5 hover:shadow-md transition cursor-pointer"
                  onClick={action.action}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-xl ${action.color} flex items-center justify-center flex-shrink-0`}>
                      {action.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#13284c] mb-1">
                        {action.title}
                      </h3>
                      <p className="text-gray-500 text-sm">
                        {action.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="space-y-8">
          {/* Upcoming Meetings */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-[#13284c]">
                Upcoming Meetings
              </h2>
              <Calendar size={20} className="text-green-700" />
            </div>
            <div className="space-y-4">
              {upcomingMeetings.length > 0 ? (
                upcomingMeetings.map((meeting, index) => (
                  <div key={index} className="border border-gray-100 rounded-xl p-4">
                    <h3 className="font-semibold text-[#13284c] mb-2">
                      {meeting.title}
                    </h3>
                    <div className="space-y-1 text-sm text-gray-600">
                      <p>{new Date(meeting.date).toLocaleDateString()} at {meeting.time}</p>
                      <p>📍 {meeting.venue}</p>
                      <p>👥 {meeting.attendees || 0} attendees</p>
                    </div>
                    <span className={`inline-block mt-2 text-xs px-2 py-1 rounded-full ${
                      meeting.is_public ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"
                    }`}>
                      {meeting.is_public ? "Public" : "Private"}
                    </span>
                  </div>
                ))
              ) : (
                <div className="text-center py-6">
                  <Calendar size={32} className="text-gray-300 mx-auto mb-3" />
                  <p className="text-gray-500 text-sm">No upcoming meetings</p>
                </div>
              )}
            </div>
            <button 
              className="w-full mt-4 text-green-700 font-semibold hover:text-green-800"
              onClick={() => navigate("/Meetings")}
            >
              View All Meetings
            </button>
          </div>

          {/* Available Schemes */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-[#13284c]">
                Available Schemes
              </h2>
              <Award size={20} className="text-green-700" />
            </div>
            <div className="space-y-3">
              {availableSchemes.length > 0 ? (
                availableSchemes.map((scheme, index) => (
                  <div key={index} className="border border-gray-100 rounded-xl p-4 hover:shadow-md transition cursor-pointer">
                    <h3 className="font-semibold text-[#13284c] mb-1">
                      {scheme.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {scheme.department}
                    </p>
                    <p className="text-green-700 font-semibold text-sm">
                      💰 {scheme.amount}
                    </p>
                  </div>
                ))
              ) : (
                <div className="text-center py-6">
                  <Award size={32} className="text-gray-300 mx-auto mb-3" />
                  <p className="text-gray-500 text-sm">No schemes available</p>
                </div>
              )}
            </div>
            <button 
              className="w-full mt-4 text-green-700 font-semibold hover:text-green-800"
              onClick={() => navigate("/schemes")}
            >
              View All Schemes
            </button>
          </div>

          {/* Help & Support */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-[#13284c] mb-6">
              Help & Support
            </h2>
            <div className="space-y-4">
              <button className="w-full text-left border border-gray-100 rounded-xl p-4 hover:bg-gray-50 transition">
                <div className="flex items-center gap-3">
                  <MessageSquare size={20} className="text-green-700" />
                  <span className="font-medium text-[#13284c]">Contact Support</span>
                </div>
              </button>
              <button className="w-full text-left border border-gray-100 rounded-xl p-4 hover:bg-gray-50 transition">
                <div className="flex items-center gap-3">
                  <FileText size={20} className="text-green-700" />
                  <span className="font-medium text-[#13284c]">User Guide</span>
                </div>
              </button>
              <button className="w-full text-left border border-gray-100 rounded-xl p-4 hover:bg-gray-50 transition">
                <div className="flex items-center gap-3">
                  <AlertTriangle size={20} className="text-green-700" />
                  <span className="font-medium text-[#13284c]">Report Issue</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </CitizenLayout>
  );
}
