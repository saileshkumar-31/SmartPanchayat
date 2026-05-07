const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "prisma", ".env") });
const { PrismaClient } = require("@prisma/client");

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 8010;
const JWT_SECRET = process.env.JWT_SECRET || "smartpanchayat-dev-secret-change-before-deploy";
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "7d";
const corsOrigins = (process.env.CORS_ORIGIN || "http://localhost:5173,http://127.0.0.1:5173")
  .split(",")
  .map((origin) => origin.trim());

app.disable("x-powered-by");
app.use((req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("Referrer-Policy", "same-origin");
  next();
});
app.use(cors({
  origin(origin, callback) {
    if (!origin || corsOrigins.includes(origin)) return callback(null, true);
    return callback(new Error("Not allowed by CORS"));
  },
}));
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
  category: body.category || "General",
  period: body.period,
  file_url: body.file_url,
  status: body.status,
  summary: body.summary || body.description,
}), { created_at: "desc" }, { adminOnly: true });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Keeps some local runners from treating the process as finished immediately.
setInterval(() => {}, 1 << 30);
