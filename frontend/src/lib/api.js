// Determine the API base URL based on environment
const API_BASE_URL = import.meta.env.DEV ? "/api" : (import.meta.env.VITE_API_URL || "http://localhost:8010/api");

// Main API request function - handles all HTTP requests to the backend
export async function apiRequest(path, options = {}) {
  // Get authentication token from localStorage
  const token = localStorage.getItem("smartpanchayat_token");
  
  // Make the HTTP request with proper headers
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      // Add authorization header if token exists
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      // Allow custom headers to be passed in
      ...(options.headers || {}),
    },
    ...options,
    // Stringify body if it exists
    body: options.body ? JSON.stringify(options.body) : undefined,
  });

  // Parse the response JSON
  const payload = await response.json().catch(() => ({}));

  // Handle error responses
  if (!response.ok) {
    throw new Error(payload.message || "Request failed");
  }

  // Return the successful response
  return payload;
}

// Convenience methods for different HTTP methods
export const api = {
  get: (path) => apiRequest(path),
  post: (path, body) => apiRequest(path, { method: "POST", body }),
  put: (path, body) => apiRequest(path, { method: "PUT", body }),
  patch: (path, body) => apiRequest(path, { method: "PATCH", body }),
  delete: (path) => apiRequest(path, { method: "DELETE" }),
};

// Get the current logged-in user from localStorage
export function getCurrentUser() {
  try {
    return JSON.parse(localStorage.getItem("smartpanchayat_user"));
  } catch {
    // If parsing fails, return null
    return null;
  }
}

// Save user data to localStorage
export function setCurrentUser(user) {
  localStorage.setItem("smartpanchayat_user", JSON.stringify(user));
}

// Set up the authentication session with user data and token
export function setAuthSession(user, token) {
  setCurrentUser(user);
  if (token) localStorage.setItem("smartpanchayat_token", token);
}

// Clear the authentication session (logout)
export function clearAuthSession() {
  localStorage.removeItem("smartpanchayat_user");
  localStorage.removeItem("smartpanchayat_token");
}
