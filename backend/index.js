// Required dependencies for the Smart Panchayat backend
const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "prisma", ".env") });
const { PrismaClient } = require("@prisma/client");

// Initialize Express app and Prisma client
const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 8010;

// Function to seed the database with initial data
const seedDatabase = async () => {
  try {
    console.log("Starting database seeding...");
    
    // Default user credentials for testing
    const defaultCitizenEmail = "citizen1@example.com";
    const defaultCitizenMobile = "9000000001";
    const defaultCitizenPass = "citizen123";

    const defaultAdminEmail = "admin@example.com";
    const defaultAdminMobile = "9000000000";
    const defaultAdminPass = "admin123";

    // Create site settings if they don't exist
    const existingSettings = await prisma.siteSettings.findMany({ take: 1 });
    if (!existingSettings || existingSettings.length === 0) {
      console.log("Creating default site settings...");
      await prisma.siteSettings.create({
        data: {
          settings_id: "default",
          notifications: true,
          maintenanceMode: false,
          publicTransparency: true,
          tamilLanguage: true,
          citizenRegistration: true,
          autoApproval: false,
          restrictionMessage:
            "Smart Panchayat is temporarily restricted by the administrator.",
        },
      });
    }

    // Create or update default users (admin and citizen)
    console.log("Creating default users...");
    // Create default citizen user
    const citizen = await prisma.userRegistration.upsert({
      where: { user_email: defaultCitizenEmail },
      update: {},
      create: {
        user_name: "Citizen One",
        user_mobile: defaultCitizenMobile,
        user_email: defaultCitizenEmail,
        user_pass: await bcrypt.hash(defaultCitizenPass, 10),
        user_panchayat: "Smart Panchayat",
        user_role: "citizen",
        user_status: "Active",
        user_address: "Main Street, Panchayat",
        user_notes: "Seed user",
      },
    });

    // Create default admin user
    const admin = await prisma.userRegistration.upsert({
      where: { user_email: defaultAdminEmail },
      update: {},
      create: {
        user_name: "Admin",
        user_mobile: defaultAdminMobile,
        user_email: defaultAdminEmail,
        user_pass: await bcrypt.hash(defaultAdminPass, 10),
        user_panchayat: "Smart Panchayat",
        user_role: "admin",
        user_status: "Active",
        user_address: "Admin Office, Panchayat",
        user_notes: "Seed admin user",
      },
    });

    // Create sample complaints if none exist
    console.log("Creating sample complaints...");
    const complaintCount = await prisma.complaint.count();
    if (complaintCount === 0) {
      await prisma.complaint.createMany({
        data: [
          {
            reference_no: "CMP-0001",
            category: "Sanitation",
            subject: "Garbage not collected",
            description: "Garbage is not being collected for weeks.",
            location: "Ward 1",
            priority: "Medium",
            status: "Pending",
            details: { images: [], gps: null },
            citizen_id: citizen.user_id,
          },
          {
            reference_no: "CMP-0002",
            category: "Water Supply",
            subject: "Low water pressure",
            description: "Low water pressure in the locality.",
            location: "Ward 2",
            priority: "High",
            status: "Pending",
            details: { images: [], gps: null },
            citizen_id: citizen.user_id,
          },
        ],
      });
    }

    // Meeting + meeting requests
    const meetingCount = await prisma.meeting.count();
    if (meetingCount === 0) {
      await prisma.meeting.createMany({
        data: [
          {
            meeting_id: undefined,
            title: "Gram Sabha Meeting",
            description: "Monthly public meeting with citizens",
            date: new Date(),
            time: "10:00",
            venue: "Panchayat Hall",
            type: "Gram Sabha",
            agenda: "Project updates and citizen feedback",
            minutes: "Minutes will be published later",
            attendees: 50,
            status: "Upcoming",
            is_public: true,
          },
        ],
      });
    }

    const meetingReqCount = await prisma.meetingRequest.count();
    if (meetingReqCount === 0) {
      await prisma.meetingRequest.create({
        data: {
          title: "Request to attend meeting",
          description: "Citizen requesting permission to attend.",
          preferred_date: new Date(),
          location: "Ward 1",
          status: "Pending",
          citizen_id: citizen.user_id,
        },
      });
    }

    // Schemes - Force reseed to ensure all schemes are available
    await prisma.scheme.deleteMany();
    console.log("Creating sample schemes...");
    await prisma.scheme.createMany({
        data: [
          {
            scheme_id: undefined,
            title: "Housing Scheme",
            title_ta: "Housing Scheme (TA)",
            slug: "housing-scheme",
            category: "Housing",
            category_ta: "Housing (TA)",
            description: "Affordable housing support for eligible rural families.",
            description_ta: "Affordable housing support (TA)",
            eligibility: "Rural families with annual income below 3 lakhs",
            eligibility_ta: "Rural families eligibility (TA)",
            benefits: "Housing construction subsidy up to 2 lakhs",
            benefits_ta: "Housing benefits (TA)",
            department: "Housing Department",
            department_ta: "Housing Department (TA)",
            amount: "200000",
            status: "Active",
          },
          {
            scheme_id: undefined,
            title: "Farmer Welfare",
            title_ta: "Farmer Welfare (TA)",
            slug: "farmer-welfare",
            category: "Agriculture",
            category_ta: "Agriculture (TA)",
            description: "Subsidies, irrigation aid, and crop assistance programs.",
            description_ta: "Farmer assistance programs (TA)",
            eligibility: "Small and marginal farmers",
            eligibility_ta: "Farmers eligibility (TA)",
            benefits: "Irrigation subsidy and crop insurance",
            benefits_ta: "Farmer benefits (TA)",
            department: "Agriculture Department",
            department_ta: "Agriculture Department (TA)",
            amount: "75000",
            status: "Active",
          },
          {
            scheme_id: undefined,
            title: "Education Support",
            title_ta: "Education Support (TA)",
            slug: "education-support",
            category: "Education",
            category_ta: "Education (TA)",
            description: "Scholarships and financial help for students.",
            description_ta: "Student scholarships (TA)",
            eligibility: "Students from economically weaker sections",
            eligibility_ta: "Student eligibility (TA)",
            benefits: "Scholarship up to 25000 per year",
            benefits_ta: "Education benefits (TA)",
            department: "Education Department",
            department_ta: "Education Department (TA)",
            amount: "25000",
            status: "Active",
          },
          {
            scheme_id: undefined,
            title: "Health Insurance",
            title_ta: "Health Insurance (TA)",
            slug: "health-insurance",
            category: "Health",
            category_ta: "Health (TA)",
            description: "Medical coverage and emergency treatment benefits.",
            description_ta: "Medical coverage (TA)",
            eligibility: "All families below poverty line",
            eligibility_ta: "Family eligibility (TA)",
            benefits: "Health insurance coverage up to 5 lakhs",
            benefits_ta: "Health benefits (TA)",
            department: "Health Department",
            department_ta: "Health Department (TA)",
            amount: "500000",
            status: "Active",
          },
          {
            scheme_id: undefined,
            title: "Employment Scheme",
            title_ta: "Employment Scheme (TA)",
            slug: "employment-scheme",
            category: "Employment",
            category_ta: "Employment (TA)",
            description: "Local job opportunities and skill development programs.",
            description_ta: "Job opportunities (TA)",
            eligibility: "Unemployed youth in rural areas",
            eligibility_ta: "Youth eligibility (TA)",
            benefits: "Skill training and job placement",
            benefits_ta: "Employment benefits (TA)",
            department: "Labor Department",
            department_ta: "Labor Department (TA)",
            amount: "15000",
            status: "Active",
          },
          {
            scheme_id: undefined,
            title: "Pension Scheme",
            title_ta: "Pension Scheme (TA)",
            slug: "pension-scheme",
            category: "Social Welfare",
            category_ta: "Social Welfare (TA)",
            description: "Monthly pension support for senior citizens.",
            description_ta: "Senior citizen pension (TA)",
            eligibility: "Senior citizens above 60 years",
            eligibility_ta: "Senior eligibility (TA)",
            benefits: "Monthly pension of 2000 rupees",
            benefits_ta: "Pension benefits (TA)",
            department: "Social Welfare Department",
            department_ta: "Social Welfare Department (TA)",
            amount: "24000",
            status: "Active",
          },
        ],
      });

    // Applications + contact messages
    const appCount = await prisma.application.count();
    if (appCount === 0) {
      await prisma.application.createMany({
        data: [
          {
            application_id: undefined,
            reference_no: "APP-0001",
            service_type: "Certificate",
            service_name: "Income Certificate",
            applicant_name: citizen.user_name,
            mobile: citizen.user_mobile,
            email: citizen.user_email,
            location: "Ward 1",
            status: "Submitted",
            remarks: "Seed application",
            details: { purpose: "Need for subsidy" },
            citizen_id: citizen.user_id,
          },
        ],
      });
    }

    const contactCount = await prisma.contactMessage.count();
    if (contactCount === 0) {
      await prisma.contactMessage.createMany({
        data: [
          {
            message_id: undefined,
            name: citizen.user_name,
            email: citizen.user_email,
            subject: "Need transparency report",
            message: "Please share transparency details for ongoing projects.",
            status: "Unread",
          },
        ],
      });
    }

    // Transparency tables
    const tProjCount = await prisma.transparencyProject.count();
    if (tProjCount === 0) {
      await prisma.transparencyProject.createMany({
        data: [
          {
            project_id: undefined,
            title: "Road Improvement (Ward 2)",
            category: "Ongoing",
            budget: 1000000,
            spent: 250000,
            progress: 25,
            contractor: "ABC Constructions",
            location: "Ward 2",
            start_date: new Date(),
            end_date: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000),
            status: "Ongoing",
            description: "Improving road quality for better commute.",
          },
        ],
      });
    }

    const tExpCount = await prisma.transparencyExpense.count();
    if (tExpCount === 0) {
      await prisma.transparencyExpense.createMany({
        data: [
          {
            expense_id: undefined,
            title: "Material Purchase",
            category: "Road Works",
            amount: 250000,
            paid_to: "Materials Supplier",
            expense_date: new Date(),
            status: "Published",
            description: "Purchase of cement and aggregates.",
          },
        ],
      });
    }

    const tTenderCount = await prisma.transparencyTender.count();
    if (tTenderCount === 0) {
      await prisma.transparencyTender.createMany({
        data: [
          {
            tender_id: undefined,
            title: "Road Works Tender - Phase 1",
            department: "Panchayat Public Works",
            budget: 500000,
            deadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
            status: "Open",
            contractor: "TBD",
            description: "Tender for road improvement works.",
          },
        ],
      });
    }

    const tBudgetCount = await prisma.transparencyBudget.count();
    if (tBudgetCount === 0) {
      await prisma.transparencyBudget.createMany({
        data: [
          {
            budget_id: undefined,
            title: "Annual Development Budget",
            category: "General",
            allocated: 2000000,
            spent: 500000,
            year: "2026",
            status: "Active",
          },
        ],
      });
    }

    const tUpdateCount = await prisma.transparencyUpdate.count();
    if (tUpdateCount === 0) {
      await prisma.transparencyUpdate.createMany({
        data: [
          {
            update_id: undefined,
            title: "Project Update - Road Improvement",
            summary: "25% work completed.",
            details: "Work started and current progress is 25%. Next phase will begin soon.",
            status: "Published",
            published_at: new Date(),
          },
        ],
      });
    }

    const tReportCount = await prisma.transparencyReport.count();
    if (tReportCount === 0) {
      await prisma.transparencyReport.createMany({
        data: [
          {
            report_id: undefined,
            title: "Monthly Report - May 2026",
            category: "Financial",
            period: "May 2026",
            status: "Published",
            summary: "Monthly financial and project report.",
          },
        ],
      });
    }

    // Civil Services
    const civilServiceCount = await prisma.civilService.count();
    if (civilServiceCount === 0) {
      await prisma.civilService.createMany({
        data: [
          {
            title: "Water Connection Request",
            description: "Apply for a new domestic or commercial water connection.",
            category: "Utilities",
            process_time: "7-10 days",
            fee: 500,
            required_docs: "ID proof, Address proof, Property documents",
          },
          {
            title: "Birth Certificate Request",
            description: "Official birth certificate registration and issuance.",
            category: "Certificates",
            process_time: "3-5 days",
            fee: 100,
            required_docs: "Birth proof, Parent ID proof",
          },
          {
            title: "Death Certificate Request", 
            description: "Official death certificate registration and issuance.",
            category: "Certificates",
            process_time: "3-5 days",
            fee: 100,
            required_docs: "Death proof, Applicant ID proof",
          },
          {
            title: "Property Tax Information",
            description: "Get property tax details and payment information.",
            category: "Taxation",
            process_time: "1-2 days",
            fee: 0,
            required_docs: "Property documents, ID proof",
          },
          {
            title: "Waste Collection Request",
            description: "Request regular waste collection services.",
            category: "Sanitation",
            process_time: "2-3 days",
            fee: 200,
            required_docs: "Address proof, ID proof",
          },
        ],
      });
    }

    // Certificates
    const certificateCount = await prisma.certificate.count();
    if (certificateCount === 0) {
      await prisma.certificate.createMany({
        data: [
          {
            title: "Income Certificate",
            description: "Official income certificate for various purposes.",
            category: "Financial",
            process_time: "5-7 days",
            fee: 50,
            required_docs: "Income proof, Address proof, ID proof",
          },
          {
            title: "Community Certificate",
            description: "Certificate proving community membership.",
            category: "Social",
            process_time: "7-10 days", 
            fee: 100,
            required_docs: "Community proof, Address proof, ID proof",
          },
          {
            title: "Nativity Certificate",
            description: "Certificate proving nativity and residence.",
            category: "Residence",
            process_time: "5-7 days",
            fee: 75,
            required_docs: "Residence proof, Address proof, ID proof",
          },
          {
            title: "Residence Certificate",
            description: "Official certificate of residence.",
            category: "Residence", 
            process_time: "3-5 days",
            fee: 50,
            required_docs: "Address proof, ID proof, Utility bills",
          },
          {
            title: "First Graduate Certificate",
            description: "Certificate for first-time graduates.",
            category: "Education",
            process_time: "7-10 days",
            fee: 150,
            required_docs: "Degree certificate, Mark sheets, ID proof",
          },
          {
            title: "Marriage Certificate",
            description: "Official marriage registration certificate.",
            category: "Social",
            process_time: "5-7 days",
            fee: 200,
            required_docs: "Marriage proof, ID proof, Photos",
          },
        ],
      });
    }

    // Panchayat Stats
    const statsCount = await prisma.panchayatStats.count();
    if (statsCount === 0) {
      await prisma.panchayatStats.createMany({
        data: [
          { metric: "villages", value: "250+", label: "Villages" },
          { metric: "citizens", value: "12,450+", label: "Happy Citizens" },
          { metric: "applications", value: "8,200+", label: "Applications Processed" },
          { metric: "complaints", value: "1,150+", label: "Complaints Resolved" },
        ],
      });
    }

    // Panchayat Values
    const valuesCount = await prisma.panchayatValue.count();
    if (valuesCount === 0) {
      await prisma.panchayatValue.createMany({
        data: [
          {
            title: "Transparency",
            description: "Open and honest governance with clear communication",
            icon: "shield-check",
            order: 1,
          },
          {
            title: "Accountability",
            description: "Taking responsibility for actions and decisions",
            icon: "users",
            order: 2,
          },
          {
            title: "Efficiency",
            description: "Delivering services promptly and effectively",
            icon: "zap",
            order: 3,
          },
          {
            title: "Integrity",
            description: "Upholding ethical standards in all operations",
            icon: "heart",
            order: 4,
          },
        ],
      });
    }

    // Certificate Requirements and Eligibility
    const certReqCount = await prisma.certificateRequirement.count();
    if (certReqCount === 0) {
      const certificates = await prisma.certificate.findMany();
      
      // Income Certificate Requirements
      await prisma.certificateRequirement.createMany({
        data: [
          { certificate_id: certificates.find(c => c.title === "Income Certificate")?.certificate_id, document_type: "Aadhaar Card", order: 1 },
          { certificate_id: certificates.find(c => c.title === "Income Certificate")?.certificate_id, document_type: "Ration Card / Family Card", order: 2 },
          { certificate_id: certificates.find(c => c.title === "Income Certificate")?.certificate_id, document_type: "Address Proof", order: 3 },
          { certificate_id: certificates.find(c => c.title === "Income Certificate")?.certificate_id, document_type: "Income Proof", order: 4 },
          { certificate_id: certificates.find(c => c.title === "Income Certificate")?.certificate_id, document_type: "Passport Size Photograph", order: 5 },
        ]
      });

      // Birth Certificate Requirements
      await prisma.certificateRequirement.createMany({
        data: [
          { certificate_id: certificates.find(c => c.title === "Birth Certificate Request")?.certificate_id, document_type: "Hospital Birth Record / Birth Report", order: 1 },
          { certificate_id: certificates.find(c => c.title === "Birth Certificate Request")?.certificate_id, document_type: "Child Name Details (if naming completed)", order: 2 },
          { certificate_id: certificates.find(c => c.title === "Birth Certificate Request")?.certificate_id, document_type: "Parents Aadhaar Cards", order: 3 },
          { certificate_id: certificates.find(c => c.title === "Birth Certificate Request")?.certificate_id, document_type: "Address Proof", order: 4 },
          { certificate_id: certificates.find(c => c.title === "Birth Certificate Request")?.certificate_id, document_type: "Birth Registration Form", order: 5 },
        ]
      });

      // Death Certificate Requirements
      await prisma.certificateRequirement.createMany({
        data: [
          { certificate_id: certificates.find(c => c.title === "Death Certificate Request")?.certificate_id, document_type: "Hospital Death Report / Medical Certificate of Cause of Death", order: 1 },
          { certificate_id: certificates.find(c => c.title === "Death Certificate Request")?.certificate_id, document_type: "Deceased Person Aadhaar Card (if available)", order: 2 },
          { certificate_id: certificates.find(c => c.title === "Death Certificate Request")?.certificate_id, document_type: "Applicant Aadhaar Card", order: 3 },
          { certificate_id: certificates.find(c => c.title === "Death Certificate Request")?.certificate_id, document_type: "Address Proof", order: 4 },
          { certificate_id: certificates.find(c => c.title === "Death Certificate Request")?.certificate_id, document_type: "Delayed Registration Affidavit (if applicable)", order: 5 },
        ]
      });
    }

    // Certificate Eligibility
    const certEligCount = await prisma.certificateEligibility.count();
    if (certEligCount === 0) {
      const certificates = await prisma.certificate.findMany();
      
      await prisma.certificateEligibility.createMany({
        data: [
          // Income Certificate Eligibility
          { certificate_id: certificates.find(c => c.title === "Income Certificate")?.certificate_id, requirement: "Applicant should be a resident of the state.", order: 1 },
          { certificate_id: certificates.find(c => c.title === "Income Certificate")?.certificate_id, requirement: "Income details must be accurate and verifiable.", order: 2 },
          { certificate_id: certificates.find(c => c.title === "Income Certificate")?.certificate_id, requirement: "Required supporting documents must be submitted.", order: 3 },
          
          // Birth Certificate Eligibility
          { certificate_id: certificates.find(c => c.title === "Birth Certificate Request")?.certificate_id, requirement: "Birth should be registered as per applicable registration rules.", order: 1 },
          { certificate_id: certificates.find(c => c.title === "Birth Certificate Request")?.certificate_id, requirement: "Applicant should be parent / guardian / authorized person.", order: 2 },
          { certificate_id: certificates.find(c => c.title === "Birth Certificate Request")?.certificate_id, requirement: "Supporting records should match birth details submitted.", order: 3 },
          
          // Death Certificate Eligibility
          { certificate_id: certificates.find(c => c.title === "Death Certificate Request")?.certificate_id, requirement: "Death should be registered as per applicable registration rules.", order: 1 },
          { certificate_id: certificates.find(c => c.title === "Death Certificate Request")?.certificate_id, requirement: "Applicant should be family member, legal representative, or authorized person.", order: 2 },
          { certificate_id: certificates.find(c => c.title === "Death Certificate Request")?.certificate_id, requirement: "Submitted records should match official death details.", order: 3 },
        ]
      });
    }

    // Meeting Tabs
    const meetingTabCount = await prisma.meetingTab.count();
    if (meetingTabCount === 0) {
      await prisma.meetingTab.createMany({
        data: [
          { key: "scheduled", label_en: "Scheduled", label_ta: "திட்டமிடப்பட்டது", order: 1 },
          { key: "calendar", label_en: "Calendar", label_ta: "நாட்காட்டி", order: 2 },
          { key: "request", label_en: "Request", label_ta: "கோரிக்கை", order: 3 },
        ]
      });
    }

    // Quick Actions
    const quickActionCount = await prisma.quickAction.count();
    if (quickActionCount === 0) {
      await prisma.quickAction.createMany({
        data: [
          {
            title: "Apply for Certificate",
            description: "Apply for various certificates",
            icon: "FileText",
            route: "/certificates",
            color: "bg-blue-100 text-blue-700",
            order: 1,
          },
          {
            title: "File Complaint",
            description: "Report issues and grievances",
            icon: "AlertTriangle",
            route: "/complaints",
            color: "bg-red-100 text-red-700",
            order: 2,
          },
          {
            title: "View Schemes",
            description: "Browse government schemes",
            icon: "Award",
            route: "/schemes",
            color: "bg-purple-100 text-purple-700",
            order: 3,
          },
          {
            title: "Track Application",
            description: "Check application status",
            icon: "Search",
            route: "/applicationtracker",
            color: "bg-green-100 text-green-700",
            order: 4,
          },
          {
            title: "Attend Meeting",
            description: "Join public meetings",
            icon: "Calendar",
            route: "/Meetings",
            color: "bg-amber-100 text-amber-700",
            order: 5,
          },
          {
            title: "Contact Support",
            description: "Get help and support",
            icon: "MessageSquare",
            route: "/contact",
            color: "bg-teal-100 text-teal-700",
            order: 6,
          },
        ]
      });
    }

    // Service Categories
    const serviceCategoryCount = await prisma.serviceCategory.count();
    if (serviceCategoryCount === 0) {
      await prisma.serviceCategory.createMany({
        data: [
          {
            title: "Certificates",
            color: "text-green-700",
            background: "bg-green-100",
            icon: "FileCheck",
            route: "/certificates",
            order: 1,
          },
          {
            title: "Complaints & Grievances",
            color: "text-red-700",
            background: "bg-red-100",
            icon: "AlertTriangle",
            route: "/complaints",
            order: 2,
          },
          {
            title: "Civic Services",
            color: "text-blue-700",
            background: "bg-blue-100",
            icon: "Building2",
            route: "/civil-services",
            order: 3,
          },
          {
            title: "Meetings & Participation",
            color: "text-purple-700",
            background: "bg-purple-100",
            icon: "Calendar",
            route: "/Meetings",
            order: 4,
          },
          {
            title: "Transparency",
            color: "text-amber-700",
            background: "bg-amber-100",
            icon: "Eye",
            route: "/transparency",
            order: 5,
          },
        ]
      });
    }

    console.log("✅ Database seeded successfully");
  } catch (error) {
    console.error("❌ Error seeding database:", error);
  }
};

const JWT_SECRET = process.env.JWT_SECRET || "smartpanchayat-dev-secret-change-before-deploy";
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "7d";
const defaultCorsOrigins = [
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  "http://localhost:3000",
  "http://127.0.0.1:3000",
];

const corsOrigins = Array.from(
  new Set(
    [
      ...(process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(",") : []),
      ...defaultCorsOrigins,
    ]
      .map((origin) => origin.trim())
      .filter(Boolean)
  )
);

console.log("CORS Origins loaded:", corsOrigins);

app.disable("x-powered-by");
app.use((req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("Referrer-Policy", "same-origin");
  next();
});
app.use(cors({
  origin(origin, callback) {
    if (!origin) return callback(null, true);
    if (corsOrigins.includes(origin)) return callback(null, true);
    return callback(new Error("Not allowed by CORS"));
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

/* Ensure preflight (OPTIONS) always gets the CORS headers.
   Express 5 route matcher doesn't accept '*' as a path parameter. */
app.options(/.*/, cors());

app.use(express.json({ limit: "2mb" }));

const asyncHandler = (handler) => async (req, res, next) => {
  try {
    await handler(req, res, next);
  } catch (error) {
    console.error(error);
    if (error.code === "P2002") {
      const fields = Array.isArray(error.meta?.target)
        ? error.meta.target.join(", ")
        : "email or mobile";
      return res.status(409).json({
        message: `User already exists with this ${fields}`,
      });
    }
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

const parseDate = (value) => (value ? new Date(value) : undefined);
const toFloat = (value, fallback = 0) =>
  value === "" || value === undefined || value === null ? fallback : Number(value);
const toInt = (value, fallback = 0) =>
  value === "" || value === undefined || value === null ? fallback : Number.parseInt(value, 10);

const getSettings = () =>
  prisma.siteSettings.upsert({
    where: { settings_id: "default" },
    update: {},
    create: { settings_id: "default" },
  });

const userSelect = {
  user_id: true,
  user_name: true,
  user_mobile: true,
  user_email: true,
  user_panchayat: true,
  user_role: true,
  user_status: true,
  user_address: true,
  user_notes: true,
  created_at: true,
  updated_at: true,
};

const signToken = (user) =>
  jwt.sign(
    {
      user_id: user.user_id,
      user_role: user.user_role,
      user_email: user.user_email,
    },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN }
  );

const authenticate = asyncHandler(async (req, res, next) => {
  const token = req.headers.authorization?.replace("Bearer ", "");
  if (!token) return res.status(401).json({ message: "Login required" });

  try {
    const payload = jwt.verify(token, JWT_SECRET);
    const user = await prisma.userRegistration.findUnique({
      where: { user_id: payload.user_id },
      select: userSelect,
    });
    if (!user || user.user_status !== "Active") {
      return res.status(401).json({ message: "Invalid or inactive account" });
    }
    req.user = user;
    next();
  } catch {
    res.status(401).json({ message: "Invalid or expired token" });
  }
});

const requireAdmin = (req, res, next) => {
  if (req.user?.user_role?.toLowerCase() !== "admin") {
    return res.status(403).json({ message: "Admin access required" });
  }
  next();
};

app.get("/api/health", (req, res) => {
  res.json({ message: "SmartPanchayat API is running" });
});

app.get("/api/settings", asyncHandler(async (req, res) => {
  res.json({ data: await getSettings() });
}));

app.put("/api/settings", asyncHandler(async (req, res) => {
  const allowed = [
    "notifications",
    "maintenanceMode",
    "publicTransparency",
    "tamilLanguage",
    "citizenRegistration",
    "autoApproval",
    "restrictionMessage",
  ];
  const data = Object.fromEntries(
    Object.entries(req.body).filter(([key]) => allowed.includes(key))
  );

  const settings = await prisma.siteSettings.upsert({
    where: { settings_id: "default" },
    update: data,
    create: { settings_id: "default", ...data },
  });

  res.json({ message: "Settings updated", data: settings });
}));

app.post("/api/auth/register", asyncHandler(async (req, res) => {
  const settings = await getSettings();
  if (!settings.citizenRegistration) {
    return res.status(403).json({ message: "Citizen registration is disabled" });
  }

  const data = req.body;
  const hashedPassword = await bcrypt.hash(data.user_pass || data.password, 10);

  const newUser = await prisma.userRegistration.create({
    data: {
      user_name: data.user_name || data.name,
      user_mobile: data.user_mobile || data.mobile || data.phone,
      user_email: data.user_email || data.email,
      user_pass: hashedPassword,
      user_panchayat: data.user_panchayat || data.panchayat || "Not provided",
      user_role: data.user_role || "citizen",
      user_status: data.user_status || "Active",
      user_address: data.user_address || data.address,
      user_notes: data.user_notes || data.notes,
    },
    select: userSelect,
  });

  res.status(201).json({ message: "New user created", data: newUser });
}));

app.post("/api/auth/login", asyncHandler(async (req, res) => {
  const { email, mobile, password } = req.body;
  const user = await prisma.userRegistration.findFirst({
    where: {
      OR: [
        email ? { user_email: email } : undefined,
        mobile ? { user_mobile: mobile } : undefined,
      ].filter(Boolean),
    },
  });

  const passwordMatches =
    user &&
    ((await bcrypt.compare(password || "", user.user_pass).catch(() => false)) ||
      user.user_pass === password);

  if (!user || !passwordMatches) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  if (user.user_pass === password) {
    await prisma.userRegistration.update({
      where: { user_id: user.user_id },
      data: { user_pass: await bcrypt.hash(password, 10) },
    });
  }

  if (user.user_status !== "Active") {
    return res.status(403).json({ message: "Account is inactive" });
  }

  const { user_pass, ...safeUser } = user;
  res.json({ message: "Login successful", data: safeUser, token: signToken(user) });
}));

app.post("/api/auth/forgot-password", asyncHandler(async (req, res) => {
  const { email, mobile, password } = req.body;

  if (!password || password.length < 6) {
    return res.status(400).json({ message: "Password must be at least 6 characters" });
  }

  const user = await prisma.userRegistration.findFirst({
    where: {
      OR: [
        email ? { user_email: email } : undefined,
        mobile ? { user_mobile: mobile } : undefined,
      ].filter(Boolean),
    },
  });

  if (!user) {
    return res.status(404).json({ message: "No user found with these details" });
  }

  await prisma.userRegistration.update({
    where: { user_id: user.user_id },
    data: { user_pass: await bcrypt.hash(password, 10) },
  });

  res.json({ message: "Password reset successfully" });
}));

app.post("/api/auth/bootstrap-admin", asyncHandler(async (req, res) => {
  const existingAdmins = await prisma.userRegistration.count({
    where: { user_role: "admin" },
  });

  if (existingAdmins > 0) {
    return res.status(409).json({ message: "Admin already exists" });
  }

  if (!process.env.ADMIN_BOOTSTRAP_SECRET || req.body.secret !== process.env.ADMIN_BOOTSTRAP_SECRET) {
    return res.status(403).json({ message: "Invalid bootstrap secret" });
  }

  const admin = await prisma.userRegistration.create({
    data: {
      user_name: req.body.name,
      user_mobile: req.body.mobile,
      user_email: req.body.email,
      user_pass: await bcrypt.hash(req.body.password, 10),
      user_panchayat: req.body.panchayat || "Smart Panchayat",
      user_role: "admin",
      user_status: "Active",
    },
    select: userSelect,
  });

  res.status(201).json({
    message: "Admin created",
    data: admin,
    token: signToken(admin),
  });
}));

app.get("/api/users", authenticate, requireAdmin, asyncHandler(async (req, res) => {
  const users = await prisma.userRegistration.findMany({
    orderBy: { created_at: "desc" },
    select: userSelect,
  });
  res.json({ data: users });
}));

app.get("/api/users/:id", authenticate, requireAdmin, asyncHandler(async (req, res) => {
  const user = await prisma.userRegistration.findUnique({
    where: { user_id: req.params.id },
    select: userSelect,
  });
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json({ data: user });
}));

app.post("/api/users", authenticate, requireAdmin, asyncHandler(async (req, res) => {
  const password = req.body.user_pass || req.body.password || "password123";
  const user = await prisma.userRegistration.create({
    data: {
      user_name: req.body.user_name || req.body.name,
      user_mobile: req.body.user_mobile || req.body.phone,
      user_email: req.body.user_email || req.body.email,
      user_pass: await bcrypt.hash(password, 10),
      user_panchayat: req.body.user_panchayat || req.body.panchayat || "Not provided",
      user_role: req.body.user_role || req.body.role || "citizen",
      user_status: req.body.user_status || req.body.status || "Active",
      user_address: req.body.user_address || req.body.address,
      user_notes: req.body.user_notes || req.body.notes,
    },
    select: userSelect,
  });

  res.status(201).json({ message: "User created", data: user });
}));

app.put("/api/users/:id", authenticate, requireAdmin, asyncHandler(async (req, res) => {
  const data = {
    user_name: req.body.user_name || req.body.name,
    user_mobile: req.body.user_mobile || req.body.phone,
    user_email: req.body.user_email || req.body.email,
    user_panchayat: req.body.user_panchayat || req.body.panchayat,
    user_role: req.body.user_role || req.body.role,
    user_status: req.body.user_status || req.body.status,
    user_address: req.body.user_address || req.body.address,
    user_notes: req.body.user_notes || req.body.notes,
  };

  Object.keys(data).forEach((key) => data[key] === undefined && delete data[key]);
  if (req.body.password || req.body.user_pass) {
    data.user_pass = await bcrypt.hash(req.body.password || req.body.user_pass, 10);
  }

  const user = await prisma.userRegistration.update({
    where: { user_id: req.params.id },
    data,
    select: userSelect,
  });

  res.json({ message: "User updated", data: user });
}));

app.delete("/api/users/:id", authenticate, requireAdmin, asyncHandler(async (req, res) => {
  await prisma.userRegistration.delete({ where: { user_id: req.params.id } });
  res.json({ message: "User deleted" });
}));

app.patch("/api/users/:id/status", authenticate, requireAdmin, asyncHandler(async (req, res) => {
  const user = await prisma.userRegistration.update({
    where: { user_id: req.params.id },
    data: { user_status: req.body.status },
    select: userSelect,
  });
  res.json({ message: "User status updated", data: user });
}));

app.post("/api/complaints", authenticate, asyncHandler(async (req, res) => {
  const count = await prisma.complaint.count();
  const category = req.body.category || req.body.type || "Other";
  const subject = req.body.subject || req.body.issueType || `${category} Complaint`;
  const complaint = await prisma.complaint.create({
    data: {
      reference_no: `CMP-${String(count + 1001).padStart(4, "0")}`,
      category,
      subject,
      description: req.body.description || subject,
      location: req.body.location || "Not provided",
      priority: req.body.priority || "Medium",
      citizen_id: req.user.user_id,
      details: req.body.details || req.body,
    },
  });
  res.status(201).json({ message: "Complaint submitted", data: complaint });
}));

app.get("/api/complaints", asyncHandler(async (req, res) => {
  const where = req.query.citizen_id ? { citizen_id: req.query.citizen_id } : {};
  const complaints = await prisma.complaint.findMany({
    where,
    include: { citizen: { select: userSelect } },
    orderBy: { created_at: "desc" },
  });
  res.json({ data: complaints });
}));

app.patch("/api/complaints/:id", authenticate, requireAdmin, asyncHandler(async (req, res) => {
  const complaint = await prisma.complaint.update({
    where: { complaint_id: req.params.id },
    data: {
      status: req.body.status,
      priority: req.body.priority,
    },
  });
  res.json({ message: "Complaint updated", data: complaint });
}));

app.post("/api/contact", asyncHandler(async (req, res) => {
  const message = await prisma.contactMessage.create({
    data: {
      name: req.body.name,
      email: req.body.email,
      subject: req.body.subject,
      message: req.body.message,
    },
  });
  res.status(201).json({ message: "Message submitted", data: message });
}));

app.get("/api/contact", authenticate, requireAdmin, asyncHandler(async (req, res) => {
  const messages = await prisma.contactMessage.findMany({
    orderBy: { created_at: "desc" },
  });
  res.json({ data: messages });
}));

app.patch("/api/contact/:id", authenticate, requireAdmin, asyncHandler(async (req, res) => {
  const message = await prisma.contactMessage.update({
    where: { message_id: req.params.id },
    data: { status: req.body.status },
  });
  res.json({ message: "Message updated", data: message });
}));

app.post("/api/applications", authenticate, asyncHandler(async (req, res) => {
  const count = await prisma.application.count();
  const application = await prisma.application.create({
    data: {
      reference_no: `APP-${String(count + 1001).padStart(4, "0")}`,
      service_type: req.body.service_type || "General",
      service_name: req.body.service_name,
      applicant_name: req.body.applicant_name || req.body.name || req.user.user_name,
      mobile: req.body.mobile || req.user.user_mobile,
      email: req.body.email || req.user.user_email,
      location: req.body.location,
      citizen_id: req.user.user_id,
      details: req.body.details || req.body,
    },
  });
  res.status(201).json({ message: "Application submitted", data: application });
}));

app.get("/api/applications", authenticate, asyncHandler(async (req, res) => {
  const where =
    req.user.user_role?.toLowerCase() === "admin"
      ? {}
      : { citizen_id: req.user.user_id };

  const applications = await prisma.application.findMany({
    where,
    include: { citizen: { select: userSelect } },
    orderBy: { created_at: "desc" },
  });
  res.json({ data: applications });
}));

app.get("/api/applications/reference/:reference", authenticate, asyncHandler(async (req, res) => {
  const application = await prisma.application.findUnique({
    where: { reference_no: req.params.reference },
  });
  if (!application) return res.status(404).json({ message: "Application not found" });
  if (
    req.user.user_role?.toLowerCase() !== "admin" &&
    application.citizen_id !== req.user.user_id
  ) {
    return res.status(403).json({ message: "You cannot view this application" });
  }
  res.json({ data: application });
}));

app.patch("/api/applications/:id", authenticate, requireAdmin, asyncHandler(async (req, res) => {
  const application = await prisma.application.update({
    where: { application_id: req.params.id },
    data: {
      status: req.body.status,
      remarks: req.body.remarks,
    },
  });
  res.json({ message: "Application updated", data: application });
}));

app.get("/api/dashboard/summary", authenticate, requireAdmin, asyncHandler(async (req, res) => {
  const [
    users,
    complaints,
    pendingComplaints,
    applications,
    pendingApplications,
    meetings,
    contactMessages,
  ] = await Promise.all([
    prisma.userRegistration.count(),
    prisma.complaint.count(),
    prisma.complaint.count({ where: { status: "Pending" } }),
    prisma.application.count(),
    prisma.application.count({ where: { status: "Submitted" } }),
    prisma.meeting.count(),
    prisma.contactMessage.count({ where: { status: "Unread" } }),
  ]);

  res.json({
    data: {
      users,
      complaints,
      pendingComplaints,
      applications,
      pendingApplications,
      meetings,
      contactMessages,
    },
  });
}));

app.get("/api/transparency/summary", asyncHandler(async (req, res) => {
  const [budgets, expenses, projects, tenders, updates, reports] = await Promise.all([
    prisma.transparencyBudget.findMany(),
    prisma.transparencyExpense.findMany({ orderBy: { expense_date: "desc" } }),
    prisma.transparencyProject.findMany({ orderBy: { created_at: "desc" } }),
    prisma.transparencyTender.findMany({ orderBy: { created_at: "desc" } }),
    prisma.transparencyUpdate.findMany({ orderBy: { published_at: "desc" } }),
    prisma.transparencyReport.findMany({ orderBy: { created_at: "desc" } }),
  ]);

  const totalFunds = budgets.reduce((sum, item) => sum + item.allocated, 0);
  const fundsUtilized = budgets.reduce((sum, item) => sum + item.spent, 0);

  res.json({
    data: {
      totalFunds,
      fundsUtilized,
      ongoingProjects: projects.filter((item) => item.category === "Ongoing").length,
      completedProjects: projects.filter((item) => item.category === "Completed").length,
      budgets,
      expenses,
      projects,
      tenders,
      updates,
      reports,
    },
  });
}));

const crud = (base, model, mapData, orderBy = { created_at: "desc" }, options = {}) => {
  app.get(`/api/${base}`, asyncHandler(async (req, res) => {
    const data = await prisma[model].findMany({ orderBy });
    res.json({ data });
  }));

  app.get(`/api/${base}/:id`, asyncHandler(async (req, res) => {
    const data = await prisma[model].findUnique({ where: { [idField(model)]: req.params.id } });
    if (!data) return res.status(404).json({ message: "Record not found" });
    res.json({ data });
  }));

  const writeMiddleware = options.adminOnly
    ? [authenticate, requireAdmin]
    : options.authenticatedWrite
    ? [authenticate]
    : [];

  app.post(`/api/${base}`, ...writeMiddleware, asyncHandler(async (req, res) => {
    const data = await prisma[model].create({ data: mapData(req.body) });
    res.status(201).json({ message: "Record created", data });
  }));

  app.put(`/api/${base}/:id`, ...writeMiddleware, asyncHandler(async (req, res) => {
    const data = await prisma[model].update({
      where: { [idField(model)]: req.params.id },
      data: mapData(req.body),
    });
    res.json({ message: "Record updated", data });
  }));

  app.delete(`/api/${base}/:id`, ...writeMiddleware, asyncHandler(async (req, res) => {
    await prisma[model].delete({ where: { [idField(model)]: req.params.id } });
    res.json({ message: "Record deleted" });
  }));
};

const idField = (model) => ({
  meeting: "meeting_id",
  meetingRequest: "request_id",
  scheme: "scheme_id",
  transparencyProject: "project_id",
  transparencyExpense: "expense_id",
  transparencyTender: "tender_id",
  transparencyBudget: "budget_id",
  transparencyUpdate: "update_id",
  transparencyReport: "report_id",
  civilService: "service_id",
  certificate: "certificate_id",
  panchayatStats: "stats_id",
  panchayatValue: "value_id",
  certificateRequirement: "requirement_id",
  certificateEligibility: "eligibility_id",
  meetingTab: "tab_id",
  quickAction: "action_id",
  serviceCategory: "category_id",
}[model]);

crud("meetings", "meeting", (body) => ({
  title: body.title,
  description: body.description,
  date: parseDate(body.date) || new Date(),
  time: body.time,
  venue: body.venue || body.location || "Panchayat Office",
  type: body.type,
  agenda: body.agenda,
  minutes: body.minutes,
  attendees: toInt(body.attendees),
  status: body.status,
  is_public: body.is_public ?? true,
}), { created_at: "desc" }, { adminOnly: true });

crud("meeting-requests", "meetingRequest", (body) => ({
  title: body.title,
  description: body.description,
  preferred_date: parseDate(body.preferred_date || body.date),
  location: body.location,
  status: body.status,
  citizen_id: body.citizen_id,
}), { created_at: "desc" }, { authenticatedWrite: true });

crud("schemes", "scheme", (body) => ({
  title: body.title,
  title_ta: body.title_ta,
  slug: body.slug || body.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
  category: body.category || "General",
  category_ta: body.category_ta,
  description: body.description,
  description_ta: body.description_ta,
  eligibility: body.eligibility,
  eligibility_ta: body.eligibility_ta,
  benefits: body.benefits,
  benefits_ta: body.benefits_ta,
  department: body.department,
  department_ta: body.department_ta,
  amount: body.amount,
  status: body.status,
}), { created_at: "desc" }, { adminOnly: true });

crud("transparency/projects", "transparencyProject", (body) => ({
  title: body.title || body.name,
  category: body.category || body.type || "Ongoing",
  budget: toFloat(body.budget),
  spent: toFloat(body.spent),
  progress: toInt(body.progress),
  contractor: body.contractor,
  location: body.location,
  start_date: parseDate(body.start_date),
  end_date: parseDate(body.end_date),
  status: body.status,
  description: body.description,
}), { created_at: "desc" }, { adminOnly: true });

crud("transparency/expenses", "transparencyExpense", (body) => ({
  title: body.title,
  category: body.category || "General",
  amount: toFloat(body.amount),
  paid_to: body.paid_to || body.vendor,
  expense_date: parseDate(body.expense_date || body.date) || new Date(),
  status: body.status,
  description: body.description,
}), { created_at: "desc" }, { adminOnly: true });

crud("transparency/tenders", "transparencyTender", (body) => ({
  title: body.title,
  department: body.department,
  budget: toFloat(body.budget),
  deadline: parseDate(body.deadline),
  status: body.status,
  contractor: body.contractor,
  description: body.description,
}), { created_at: "desc" }, { adminOnly: true });

crud("transparency/budgets", "transparencyBudget", (body) => ({
  title: body.title,
  category: body.category || "General",
  allocated: toFloat(body.allocated || body.budget),
  spent: toFloat(body.spent),
  year: body.year,
  status: body.status,
}), { created_at: "desc" }, { adminOnly: true });

crud("transparency/updates", "transparencyUpdate", (body) => ({
  title: body.title,
  summary: body.summary || body.description,
  details: body.details,
  status: body.status,
  published_at: parseDate(body.published_at || body.date) || new Date(),
}), { created_at: "desc" }, { adminOnly: true });

crud("transparency/reports", "transparencyReport", (body) => ({
  title: body.title,
  category: body.category,
  period: body.period,
  file_url: body.file_url,
  status: body.status,
  summary: body.summary,
}), { created_at: "desc" }, { adminOnly: true });

crud("civil-services", "civilService", (body) => ({
  title: body.title,
  description: body.description,
  category: body.category,
  process_time: body.process_time,
  fee: toFloat(body.fee),
  required_docs: body.required_docs,
  status: body.status,
}), { created_at: "desc" }, { adminOnly: true });

crud("certificates", "certificate", (body) => ({
  title: body.title,
  description: body.description,
  category: body.category,
  process_time: body.process_time,
  fee: toFloat(body.fee),
  required_docs: body.required_docs,
  status: body.status,
}), { created_at: "desc" }, { adminOnly: true });

crud("panchayat-stats", "panchayatStats", (body) => ({
  metric: body.metric,
  value: body.value,
  label: body.label,
}), { updated_at: "desc" }, { adminOnly: true });

crud("panchayat-values", "panchayatValue", (body) => ({
  title: body.title,
  description: body.description,
  icon: body.icon,
  order: toInt(body.order),
}), { order: "asc" }, { adminOnly: true });

// Certificate Requirements CRUD (nested)
app.get("/api/certificates/:id/requirements", asyncHandler(async (req, res) => {
  const requirements = await prisma.certificateRequirement.findMany({
    where: { certificate_id: req.params.id },
    orderBy: { order: "asc" }
  });
  res.json({ data: requirements });
}));

app.post("/api/certificates/:id/requirements", authenticate, requireAdmin, asyncHandler(async (req, res) => {
  const requirement = await prisma.certificateRequirement.create({
    data: {
      certificate_id: req.params.id,
      document_type: req.body.document_type,
      is_required: req.body.is_required !== false,
      order: toInt(req.body.order) || 0
    }
  });
  res.status(201).json({ message: "Requirement created", data: requirement });
}));

// Certificate Eligibility CRUD (nested)
app.get("/api/certificates/:id/eligibility", asyncHandler(async (req, res) => {
  const eligibility = await prisma.certificateEligibility.findMany({
    where: { certificate_id: req.params.id },
    orderBy: { order: "asc" }
  });
  res.json({ data: eligibility });
}));

app.post("/api/certificates/:id/eligibility", authenticate, requireAdmin, asyncHandler(async (req, res) => {
  const eligibility = await prisma.certificateEligibility.create({
    data: {
      certificate_id: req.params.id,
      requirement: req.body.requirement,
      order: toInt(req.body.order) || 0
    }
  });
  res.status(201).json({ message: "Eligibility created", data: eligibility });
}));

// Meeting Tabs CRUD
crud("meeting-tabs", "meetingTab", (body) => ({
  key: body.key,
  label_en: body.label_en,
  label_ta: body.label_ta,
  order: toInt(body.order) || 0,
  is_active: body.is_active !== false,
}), { order: "asc" }, { adminOnly: true });

// Quick Actions CRUD
crud("quick-actions", "quickAction", (body) => ({
  title: body.title,
  description: body.description,
  icon: body.icon,
  route: body.route,
  color: body.color,
  order: toInt(body.order) || 0,
  is_active: body.is_active !== false,
}), { order: "asc" }, { adminOnly: true });

// Service Categories CRUD
crud("service-categories", "serviceCategory", (body) => ({
  title: body.title,
  color: body.color,
  background: body.background,
  icon: body.icon,
  route: body.route,
  order: toInt(body.order) || 0,
  is_active: body.is_active !== false,
}), { order: "asc" }, { adminOnly: true });

// Seed the database with initial data before starting the server
seedDatabase().finally(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

// Keeps some local runners from treating the process as finished immediately.
setInterval(() => {}, 1 << 30);
