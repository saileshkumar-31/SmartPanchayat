import { api, getCurrentUser } from "./api";

export async function submitComplaint(category, formData) {
  const user = getCurrentUser();
  return api.post("/complaints", {
    category,
    subject: formData.subject || formData.issueType || `${category} Complaint`,
    description: formData.description || "",
    location: formData.location || "",
    priority: formData.priority || "Medium",
    citizen_id: user?.user_id,
    details: Object.fromEntries(
      Object.entries(formData).filter(([, value]) => !(value instanceof File))
    ),
  });
}
