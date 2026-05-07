import { api, getCurrentUser } from "./api";

export async function submitApplication(serviceName, serviceType, formData) {
  const user = getCurrentUser();
  const details = Object.fromEntries(
    Object.entries(formData).filter(([, value]) => !(value instanceof File))
  );

  return api.post("/applications", {
    service_name: serviceName,
    service_type: serviceType,
    applicant_name: formData.name || formData.fullName || user?.user_name,
    mobile: formData.mobile || user?.user_mobile,
    email: formData.email || user?.user_email,
    location: formData.location || formData.address,
    details,
  });
}
