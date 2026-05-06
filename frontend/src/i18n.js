import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
resources: {
en: {
translation: {
// NAV
home: "Home",
about: "About Us",
services: "Services",
complaints: "Complaints",
contact: "Contact Us",
schemes: "Schemes",
downloads: "Downloads",


    // COMPLAINTS
    complaintsTitle: "Complaints & Grievances",
    complaintsSubtitle: "Raise civic complaints online and track resolution status easily.",
    raiseComplaint: "Raise a Complaint",
    submitComplaint: "Submit Complaint",
    complaintTracker: "Complaint Tracker",
    trackerSubtitle: "Search complaint status using your unique complaint ID.",
    complaintStatus: "Complaint Status",
    lastUpdated: "Last Updated",
    complaintGuidelines: "Complaint Guidelines",
    guidelinesDescription: "Provide accurate details and location for faster resolution.",
    enterComplaintId: "Enter Complaint ID (Ex: CMP2026001)",
    inProgress: "In Progress",
    today: "Today",

    // COMMON
    search: "Search",
    viewAll: "View All",
    track: "Track",

    // MEETINGS PAGE
    meetings_title: "Meetings & Participation",
    meetings_subtitle: "Manage meetings, requests and public participation",

    // TABS
    scheduled: "Scheduled",
    calendar: "Calendar",
    request: "Request",
    notices: "Notices",
    summary: "Summary",

    // STATS
    upcoming: "Upcoming",
    this_month: "This Month",
    joinable: "Joinable",
    requested: "Requested",

    // TABLE
    title: "Title",
    date: "Date",
    date_time: "Date & Time",
    venue: "Venue",
    type: "Type",
    status: "Status",
    action: "Action",

    // STATUS
    pending: "Pending",
    approved: "Approved",
    rejected: "Rejected",
    upcoming_status: "Upcoming",

    // BUTTONS
    view: "View",
    view_details: "View Details",
    join: "Join",
    submit: "Submit",
    cancel: "Cancel",
    submit_request: "Submit Request",

    // REQUEST FORM
    request_meeting: "Request Public Meeting",
    meeting_title: "Meeting Title",
    description: "Description",
    preferred_date: "Preferred Date",
    preferred_time: "Preferred Time",
    preferred_venue: "Preferred Venue",
    meeting_title_placeholder: "Enter meeting title",
    description_placeholder: "Explain purpose of meeting",
    venue_placeholder: "Enter venue (e.g., Panchayat Office Hall)",

    // EMPTY STATES
    no_meetings: "No scheduled meetings available",
    no_requests: "No meeting requests found",
    no_notices: "No notices available",
    no_summary: "No meeting summary available",

    // MESSAGES
    loading: "Loading...",
    submitting: "Submitting...",
    success_request: "Request submitted successfully",
    error_request: "Failed to submit request",

    //transparency
    transparency_title: "Transparency Dashboard",
    subtitle: "Real-time overview of Panchayat funds and projects.",

    dashboard: "Dashboard",
    funds: "Funds",
    ongoing: "Ongoing",
    completed: "Completed",
    expenses: "Expenses",
    tenders: "Tenders",
    reports: "Reports",

    totalFunds: "Total Funds",
    fundsUtilized: "Funds Utilized",
    ongoingProjects: "Ongoing Projects",
    completedProjects: "Completed Projects",

    fundOverview: "Fund Overview",
    topProjects: "Top Ongoing Projects",
    expenseBreakdown: "Expense Breakdown",
    recentUpdates: "Recent Updates",

    projectName: "Project Name",
    budget: "Budget",
    progress: "Progress",
    contractor: "Contractor",
    startDate: "Start Date",
    endDate: "End Date",

    download: "Download",
    viewDetails: "View Details"
  },
},

ta: {
  translation: {
    // NAV
    home: "முகப்பு",
    about: "எங்களை பற்றி",
    services: "சேவைகள்",
    complaints: "புகார்கள்",
    contact: "தொடர்பு கொள்ள",
    schemes: "திட்டங்கள்",
    downloads: "பதிவிறக்கங்கள்",

    // COMPLAINTS
    complaintsTitle: "புகார்கள் மற்றும் குறைகள்",
    complaintsSubtitle: "புகார்களை ஆன்லைனில் பதிவு செய்து நிலையை கண்காணிக்கவும்.",
    raiseComplaint: "புகார் அளிக்கவும்",
    submitComplaint: "புகார் சமர்ப்பிக்கவும்",
    complaintTracker: "புகார் கண்காணிப்பு",
    trackerSubtitle: "உங்கள் புகார் எண்ணை பயன்படுத்தி நிலையை பார்க்கவும்.",
    complaintStatus: "புகார் நிலை",
    lastUpdated: "கடைசியாக புதுப்பிக்கப்பட்டது",
    complaintGuidelines: "வழிகாட்டுதல்கள்",
    guidelinesDescription: "விரைவான தீர்விற்காக சரியான விவரங்களை வழங்கவும்.",
    enterComplaintId: "புகார் எண் உள்ளிடவும்",
    inProgress: "நடப்பில் உள்ளது",
    today: "இன்று",

    // COMMON
    search: "தேடல்",
    viewAll: "அனைத்தையும் காண்க",
    track: "கண்காணிக்க",

    // MEETINGS PAGE
    meetings_title: "சந்திப்புகள் & பங்கேற்பு",
    meetings_subtitle: "சந்திப்புகள் மற்றும் கோரிக்கைகளை நிர்வகிக்கவும்",

    // TABS
    scheduled: "திட்டமிடப்பட்டது",
    calendar: "காலண்டர்",
    request: "கோரிக்கை",
    notices: "அறிவிப்புகள்",
    summary: "சுருக்கம்",

    // STATS
    upcoming: "வரவிருக்கும்",
    this_month: "இந்த மாதம்",
    joinable: "சேர முடியும்",
    requested: "கோரப்பட்டது",

    // TABLE
    title: "தலைப்பு",
    date: "தேதி",
    date_time: "தேதி & நேரம்",
    venue: "இடம்",
    type: "வகை",
    status: "நிலை",
    action: "செயல்",

    // STATUS
    pending: "நிலுவையில்",
    approved: "அங்கீகரிக்கப்பட்டது",
    rejected: "நிராகரிக்கப்பட்டது",
    upcoming_status: "வரவிருக்கும்",

    // BUTTONS
    view: "பார்க்க",
    view_details: "விவரங்களை பார்க்க",
    join: "சேர",
    submit: "சமர்ப்பிக்க",
    cancel: "ரத்து",
    submit_request: "கோரிக்கையை சமர்ப்பிக்க",

    // REQUEST FORM
    request_meeting: "பொது சந்திப்பு கோரிக்கை",
    meeting_title: "சந்திப்பு தலைப்பு",
    description: "விளக்கம்",
    preferred_date: "விரும்பிய தேதி",
    preferred_time: "விரும்பிய நேரம்",
    preferred_venue: "விரும்பிய இடம்",
    meeting_title_placeholder: "சந்திப்பு தலைப்பை உள்ளிடவும்",
    description_placeholder: "சந்திப்பின் நோக்கத்தை விளக்கவும்",
    venue_placeholder: "இடத்தை உள்ளிடவும்",

    // EMPTY STATES
    no_meetings: "சந்திப்புகள் இல்லை",
    no_requests: "கோரிக்கைகள் இல்லை",
    no_notices: "அறிவிப்புகள் இல்லை",
    no_summary: "சுருக்கம் இல்லை",

    // MESSAGES
    loading: "ஏற்றுகிறது...",
    submitting: "சமர்ப்பிக்கப்படுகிறது...",
    success_request: "கோரிக்கை வெற்றிகரமாக சமர்ப்பிக்கப்பட்டது",
    error_request: "கோரிக்கை தோல்வியடைந்தது",

    //transparency
    transparency_title: "வெளிப்படைத் தன்மை டாஷ்போர்டு",
    subtitle: "பஞ்சாயத்து நிதி மற்றும் திட்டங்களின் நேரடி தகவல்கள்.",

    dashboard: "டாஷ்போர்டு",
    funds: "நிதிகள்",
    ongoing: "நடைபெறும் திட்டங்கள்",
    completed: "முடிந்த திட்டங்கள்",
    expenses: "செலவுகள்",
    tenders: "டெண்டர்கள்",
    reports: "அறிக்கைகள்",

    totalFunds: "மொத்த நிதி",
    fundsUtilized: "பயன்படுத்தப்பட்ட நிதி",
    ongoingProjects: "நடைபெறும் திட்டங்கள்",
    completedProjects: "முடிந்த திட்டங்கள்",

    fundOverview: "நிதி கண்ணோட்டம்",
    topProjects: "முக்கிய திட்டங்கள்",
    expenseBreakdown: "செலவுக் கணக்கு",
    recentUpdates: "சமீபத்திய புதுப்பிப்புகள்",

    projectName: "திட்டத்தின் பெயர்",
    budget: "பட்ஜெட்",
    progress: "முன்னேற்றம்",
    contractor: "ஒப்பந்ததாரர்",
    startDate: "தொடக்க தேதி",
    endDate: "முடிவு தேதி",

    download: "பதிவிறக்கு",
    viewDetails: "விவரங்களை காண்க"
  },
},


},

lng: localStorage.getItem("lang") || "en",
fallbackLng: "en",

interpolation: {
escapeValue: false,
},
});

export default i18n;
