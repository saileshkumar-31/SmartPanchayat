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
        complaintsSubtitle:
          "Raise civic complaints online and track resolution status easily.",
        raiseComplaint: "Raise a Complaint",
        submitComplaint: "Submit Complaint",
        complaintTracker: "Complaint Tracker",
        trackerSubtitle:
          "Search complaint status using your unique complaint ID.",
        complaintStatus: "Complaint Status",
        lastUpdated: "Last Updated",
        complaintGuidelines: "Complaint Guidelines",
        guidelinesDescription:
          "Provide accurate details and location for faster resolution.",
        enterComplaintId: "Enter Complaint ID (Ex: CMP2026001)",
        inProgress: "In Progress",
        today: "Today",

        // COMPLAINT CATEGORY TITLES/DESCS (remaining from audit)
        streetLight: "Street Light",
        streetLightDesc:
          "Street light is not working in the area",
        waterSupply: "Water Supply",
        waterSupplyDesc:
          "Low water supply / irregular water supply",
        garbage: "Garbage",
        garbageDesc:
          "Garbage not collected regularly",
        roadDamage: "Road Damage",
        roadDamageDesc:
          "Road is damaged and needs repair",
        publicSafety: "Public Safety",
        publicSafetyDesc:
          "Public safety issue needs urgent attention",
        otherComplaint: "Other Complaint",
        otherComplaintDesc:
          "Other civic complaint",
        readGuidelines: "Read Guidelines",

        // trackerDescription + id
        trackerDescription:
          "Search complaint status using your unique complaint ID.",
        id: "ID",

        // COMMON
        search: "Search",
        viewAll: "View All",
        track: "Track",

        // MEETINGS PAGE
        meetings_title: "Meetings & Participation",
        meetings_subtitle:
          "Manage meetings, requests and public participation",

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

        // MESSAGES (remaining from audit)
        loading: "Loading...",
        submitting: "Submitting...",
        success_request: "Request submitted successfully",
        error_request: "Failed to submit request",

        "Enter valid mobile number": "Enter valid mobile number",
        "Fill required fields": "Fill required fields",
        "Meeting request submitted.": "Meeting request submitted.",
        "No user selected.": "No user selected.",
        "Password must be at least 6 characters":
          "Password must be at least 6 characters",
        "Password reset successfully": "Password reset successfully",
        "Passwords do not match.": "Passwords do not match.",
        "Please complete all required personal details.":
          "Please complete all required personal details.",
        "Please complete the required panchayat details.":
          "Please complete the required panchayat details.",
        "Please enter title, date, and location.":
          "Please enter title, date, and location.",
        "Please fill all required fields.":
          "Please fill all required fields.",
        "Please fill required fields": "Please fill required fields",
        "This account does not have admin access.":
          "This account does not have admin access.",

        // transparency (top-level labels)
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

        // previously used keys in components
        download: "Download",
        viewDetails: "View Details",
        governmentBenefits: "Government Benefits",
        welfare: "Welfare",
        schemesIntro:
          "Explore public welfare schemes available for citizens. Apply easily and track your eligibility through Smart Panchayat.",
        contactIntro:
          "We are here to help you. Reach out to us for any queries, suggestions, complaints, or support regarding Panchayat services.",
        getInTouch: "Get In Touch",
        officeAddress: "Office Address",
        phoneNumber: "Phone Number",
        emailAddress: "Email Address",
        officeHours: "Office Hours",
        sendUsMessage: "Send Us a Message",
        yourName: "Your Name",
        enterYourName: "Enter your name",
        enterYourEmail: "Enter your email",
        subject: "Subject",
        enterSubject: "Enter subject",
        message: "Message",
        typeYourMessage: "Type your message...",
        sendMessage: "Send Message",
        contactMessageSent: "Message submitted successfully",
        loginRequired: "Please login to continue",
        appSubmitted: "Application submitted successfully",
        adminAccessRequired: "Admin access required",

        // transparency.* dotted keys
        transparency: {
          amount: "Amount",
          budget: "Budget",
          centralFunds: "Central Funds",
          contractor: "Contractor",
          date: "Date",
          funds: "Funds",
          fundsDetails: "Funds Details",
          fundsSubtitle: "Project-wise Panchayat fund details.",
          ongoingProjects: "Ongoing Projects",
          ongoingSubtitle:
            "Real-time status of ongoing Panchayat projects.",
          progress: "Progress",
          projectDetails: "Project Details",
          projectName: "Project Name",
          publicFunds: "Public Funds",
          remarks: "Remarks",
          scheme: "Scheme",
          source: "Source",
          spent: "Spent",
          stateFunds: "State Funds",
          status: "Status",
          totalFunds: "Total Funds",
        },

        // transparency.<field> (dotted keys used by UI)
        "transparency.amount": "Amount",
        "transparency.budget": "Budget",
        "transparency.centralFunds": "Central Funds",
        "transparency.contractor": "Contractor",
        "transparency.date": "Date",
        "transparency.funds": "Funds",
        "transparency.fundsDetails": "Funds Details",
        "transparency.fundsSubtitle": "Project-wise Panchayat fund details.",
        "transparency.ongoingProjects": "Ongoing Projects",
        "transparency.ongoingSubtitle":
          "Real-time status of ongoing Panchayat projects.",
        "transparency.progress": "Progress",
        "transparency.projectDetails": "Project Details",
        "transparency.projectName": "Project Name",
        "transparency.publicFunds": "Public Funds",
        "transparency.remarks": "Remarks",
        "transparency.scheme": "Scheme",
        "transparency.source": "Source",
        "transparency.spent": "Spent",
        "transparency.stateFunds": "State Funds",
        "transparency.status": "Status",
        "transparency.totalFunds": "Total Funds",

        // Any other texts currently in UI but not in audit:
        submitComplaint: "Submit Complaint",
        submit_request: "Submit Request",
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
        complaintsSubtitle:
          "புகார்களை ஆன்லைனில் பதிவு செய்து நிலையை கண்காணிக்கவும்.",
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

        // COMPLAINT CATEGORY TITLES/DESCS (remaining from audit)
        streetLight: "தெரு விளக்கு",
        streetLightDesc: "இந்த பகுதியில் தெரு விளக்குகள் வேலை செய்யவில்லை",
        waterSupply: "நீர் விநியோகம்",
        waterSupplyDesc: "குறைந்த நீர் / ஒழுங்கற்ற நீர் விநியோகம்",
        garbage: "குப்பை",
        garbageDesc: "குப்பை முறையாக சேகரிக்கப்படவில்லை",
        roadDamage: "சாலை சேதம்",
        roadDamageDesc: "சாலை சேதமடைந்து உள்ளது; பழுது தேவை",
        publicSafety: "பொது பாதுகாப்பு",
        publicSafetyDesc: "பொது பாதுகாப்பு தொடர்பான பிரச்சினை அவசரம்",
        otherComplaint: "மற்ற புகார்",
        otherComplaintDesc: "மற்ற குடிமை புகார்",
        readGuidelines: "வழிகாட்டுதல்களை படிக்கவும்",

        trackerDescription:
          "உங்கள் தனித்துவமான புகார் ஐடியைப் பயன்படுத்தி புகார் நிலையை தேடவும்.",
        id: "ஐடி",

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

        "Enter valid mobile number": "சரியான மொபைல் எண்ணை உள்ளிடவும்",
        "Fill required fields": "தேவையான புலங்களை நிரப்பவும்",
        "Meeting request submitted.": "சந்திப்பு கோரிக்கை வெற்றிகரமாக சமர்ப்பிக்கப்பட்டது.",
        "No user selected.": "எந்த பயனரும் தேர்ந்தெடுக்கப்படவில்லை.",
        "Password must be at least 6 characters": "கடவுச்சொல் குறைந்தது 6 எழுத்துகள் இருக்க வேண்டும்",
        "Password reset successfully": "கடவுச்சொல் வெற்றிகரமாக மாற்றப்பட்டது",
        "Passwords do not match.": "கடவுச்சொற்கள் பொருந்தவில்லை.",
        "Please complete all required personal details.":
          "தேவையான அனைத்து தனிப்பட்ட விவரங்களையும் பூர்த்தி செய்யவும்.",
        "Please complete the required panchayat details.":
          "தேவையான பஞ்சாயத்து விவரங்களை பூர்த்தி செய்யவும்.",
        "Please enter title, date, and location.":
          "தலைப்பு, தேதி, இடம் ஆகியவற்றை உள்ளிடவும்.",
        "Please fill all required fields.":
          "அனைத்து தேவையான புலங்களையும் நிரப்பவும்.",
        "Please fill required fields": "தேவையான புலங்களை நிரப்பவும்",
        "This account does not have admin access.":
          "இந்த கணக்கிற்கு நிர்வாக அணுகல் இல்லை.",

        // transparency labels
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
        viewDetails: "விவரங்களை காண்க",

        governmentBenefits: "அரசு நலன்கள்",
        welfare: "நலத்திட்டங்கள்",
        schemesIntro:
          "குடிமக்களுக்கு கிடைக்கும் பொது நலத்திட்டங்களை பார்வையிடுங்கள். எளிதாக விண்ணப்பித்து தகுதியை கண்காணிக்கவும்.",
        contactIntro:
          "பஞ்சாயத்து சேவைகள் தொடர்பான கேள்விகள், பரிந்துரைகள், புகார்கள் அல்லது உதவிக்கு எங்களை தொடர்பு கொள்ளுங்கள்.",
        getInTouch: "தொடர்பில் இருங்கள்",
        officeAddress: "அலுவலக முகவரி",
        phoneNumber: "தொலைபேசி எண்",
        emailAddress: "மின்னஞ்சல் முகவரி",
        officeHours: "அலுவலக நேரம்",
        sendUsMessage: "எங்களுக்கு செய்தி அனுப்புங்கள்",
        yourName: "உங்கள் பெயர்",
        enterYourName: "உங்கள் பெயரை உள்ளிடவும்",
        enterYourEmail: "உங்கள் மின்னஞ்சலை உள்ளிடவும்",
        subject: "பொருள்",
        enterSubject: "பொருளை உள்ளிடவும்",
        message: "செய்தி",
        typeYourMessage: "உங்கள் செய்தியை எழுதவும்...",
        sendMessage: "செய்தி அனுப்பு",
        contactMessageSent: "செய்தி வெற்றிகரமாக சமர்ப்பிக்கப்பட்டது",

        loginRequired: "தொடர உள்நுழையவும்",
        appSubmitted: "விண்ணப்பம் வெற்றிகரமாக சமர்ப்பிக்கப்பட்டது",
        adminAccessRequired: "நிர்வாக அணுகல் தேவை",

        // transparency.* dotted keys
        transparency: {
          amount: "தொகை",
          budget: "பட்ஜெட்",
          centralFunds: "மத்திய நிதி",
          contractor: "ஒப்பந்ததாரர்",
          date: "தேதி",
          funds: "நிதிகள்",
          fundsDetails: "நிதி விவரங்கள்",
          fundsSubtitle: "திட்ட வாரியாக பஞ்சாயத்து நிதி விவரம்.",
          ongoingProjects: "நடைபெறும் திட்டங்கள்",
          ongoingSubtitle: "நடைபெறும் பஞ்சாயத்து திட்டங்களின் நிலை நேரடியாக.",
          progress: "முன்னேற்றம்",
          projectDetails: "திட்டத்தின் விவரங்கள்",
          projectName: "திட்டத்தின் பெயர்",
          publicFunds: "பொது நிதி",
          remarks: "கருத்துகள்",
          scheme: "திட்டம்",
          source: "மூலம்",
          spent: "செலவிடப்பட்டது",
          stateFunds: "மாநில பங்கு",
          status: "நிலை",
          totalFunds: "மொத்த நிதி",
        },

        // transparency.<field> (dotted keys used by UI)
        "transparency.amount": "தொகை",
        "transparency.budget": "பட்ஜெட்",
        "transparency.centralFunds": "மத்திய நிதி",
        "transparency.contractor": "ஒப்பந்ததாரர்",
        "transparency.date": "தேதி",
        "transparency.funds": "நிதிகள்",
        "transparency.fundsDetails": "நிதி விவரங்கள்",
        "transparency.fundsSubtitle": "திட்ட வாரியாக பஞ்சாயத்து நிதி விவரம்.",
        "transparency.ongoingProjects": "நடைபெறும் திட்டங்கள்",
        "transparency.ongoingSubtitle": "நடைபெறும் பஞ்சாயத்து திட்டங்களின் நிலை நேரடியாக.",
        "transparency.progress": "முன்னேற்றம்",
        "transparency.projectDetails": "திட்டத்தின் விவரங்கள்",
        "transparency.projectName": "திட்டத்தின் பெயர்",
        "transparency.publicFunds": "பொது நிதி",
        "transparency.remarks": "கருத்துகள்",
        "transparency.scheme": "திட்டம்",
        "transparency.source": "மூலம்",
        "transparency.spent": "செலவிடப்பட்டது",
        "transparency.stateFunds": "மாநில பங்கு",
        "transparency.status": "நிலை",
        "transparency.totalFunds": "மொத்த நிதி",
      },
    },
  },

  lng: localStorage.getItem("lang") || "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
