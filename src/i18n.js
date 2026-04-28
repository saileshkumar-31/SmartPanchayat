import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        home: "Home",
        about: "About Us",
        services: "Services",
        complaints: "Complaints",
        contact: "Contact Us",
        schemes: "Schemes",
downloads: "Downloads",
complaintsTitle: "Complaints & Grievances",
complaintsSubtitle: "Raise civic complaints online and track resolution status easily.",
raiseComplaint: "Raise a Complaint",
streetLight: "Street Light Issue",
streetLightDesc: "Report damaged or non-working street lights.",

waterSupply: "Water Supply Issue",
waterSupplyDesc: "Low pressure, leakage or no water supply complaints.",

garbage: "Garbage / Sanitation",
garbageDesc: "Waste collection delay or sanitation problems.",

roadDamage: "Road Damage",
roadDamageDesc: "Potholes, broken roads or unsafe pathways.",

publicSafety: "Public Safety",
publicSafetyDesc: "Dangerous locations or urgent civic risks.",

otherComplaint: "Other Complaint",
otherComplaintDesc: "Submit any other Panchayat-related grievance.",
submitComplaint: "Submit Complaint",
complaintTracker: "Complaint Tracker",
trackerSubtitle: "Search complaint status using your unique complaint ID.",
track: "Track",
viewAll: "View All",
readGuidelines: "Read Guidelines",
trackerDescription: "Search complaint status using your unique complaint ID.",
complaintStatus: "Complaint Status",
lastUpdated: "Last Updated",
guidelinesDescription: "Provide accurate details and location for faster resolution.",
viewAll: "View All",
track: "Track",
search: "Search",
enterComplaintId: "Enter Complaint ID (Ex: CMP2026001)",
inProgress: "In Progress",
today: "Today",
complaintGuidelines: "Complaint Guidelines",

      },
    },

    ta: {
      translation: {
        home: "முகப்பு",
        about: "எங்களை பற்றி",
        services: "சேவைகள்",
        complaints: "புகார்கள்",
        contact: "தொடர்பு கொள்ள",
        schemes: "திட்டங்கள்",
downloads: "பதிவிறக்கங்கள்",
complaintsTitle: "புகார்கள் மற்றும் குறைகள்",
complaintsSubtitle: "புகார்களை ஆன்லைனில் பதிவு செய்து நிலையை கண்காணிக்கவும்.",
raiseComplaint: "புகார் அளிக்கவும்",
streetLight: "தெரு விளக்கு பிரச்சனை",
streetLightDesc: "சேதமடைந்த அல்லது வேலை செய்யாத தெரு விளக்குகளை புகாரளிக்கவும்.",

waterSupply: "தண்ணீர் வழங்கல் பிரச்சனை",
waterSupplyDesc: "குறைந்த அழுத்தம், கசிவு அல்லது தண்ணீர் வராத பிரச்சனை.",

garbage: "குப்பை / சுகாதாரம்",
garbageDesc: "குப்பை அகற்ற தாமதம் அல்லது சுகாதார பிரச்சனைகள்.",

roadDamage: "சாலை சேதம்",
roadDamageDesc: "குழிகள், உடைந்த சாலை அல்லது பாதுகாப்பற்ற பாதைகள்.",

publicSafety: "பொது பாதுகாப்பு",
publicSafetyDesc: "ஆபத்தான இடங்கள் அல்லது அவசர குடிமை அபாயங்கள்.",

otherComplaint: "மற்ற புகார்",
otherComplaintDesc: "வேறு எந்த ஊராட்சி தொடர்பான புகாரையும் பதிவு செய்யவும்.",
submitComplaint: "புகார் அளிக்கவும்",
complaintTracker: "புகார் கண்காணிப்பு",
trackerSubtitle: "உங்கள் தனிப்பட்ட புகார் எண்ணை பயன்படுத்தி நிலையை பார்க்கவும்.",
track: "கண்காணிக்கவும்",
viewAll: "அனைத்தையும் காண்க",
readGuidelines: "வழிகாட்டுதலை படிக்கவும்",
trackerDescription: "உங்கள் தனிப்பட்ட புகார் எண்ணை பயன்படுத்தி நிலையை பார்க்கவும்.",
complaintStatus: "புகார் நிலை",
lastUpdated: "கடைசியாக புதுப்பிக்கப்பட்டது",
guidelinesDescription: "விரைவான தீர்விற்காக சரியான விவரங்களையும் இடத்தையும் வழங்கவும்.",
viewAll: "அனைத்தையும் காண்க",
track: "கண்காணிக்கவும்",
search: "Search",
enterComplaintId: "Enter Complaint ID (Ex: CMP2026001)",
inProgress: "In Progress",
today: "Today",
complaintGuidelines: "Complaint Guidelines",
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