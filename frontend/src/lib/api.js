const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8010/api";

export async function apiRequest(path, options = {}) {
  const token = localStorage.getItem("smartpanchayat_token");
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers || {}),
    },
    ...options,
    body: options.body ? JSON.stringify(options.body) : undefined,
  });

  const payload = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(payload.message || "Request failed");
  }

  return payload;
}

export const api = {
  get: (path) => apiRequest(path),
  post: (path, body) => apiRequest(path, { method: "POST", body }),
  put: (path, body) => apiRequest(path, { method: "PUT", body }),
  patch: (path, body) => apiRequest(path, { method: "PATCH", body }),
  delete: (path) => apiRequest(path, { method: "DELETE" }),
};

export function getCurrentUser() {
  try {
    return JSON.parse(localStorage.getItem("smartpanchayat_user"));
  } catch {
    return null;
  }
}

export function setCurrentUser(user) {
  localStorage.setItem("smartpanchayat_user", JSON.stringify(user));
}

export function setAuthSession(user, token) {
  setCurrentUser(user);
  if (token) localStorage.setItem("smartpanchayat_token", token);
}

export function clearAuthSession() {
  localStorage.removeItem("smartpanchayat_user");
  localStorage.removeItem("smartpanchayat_token");
}
