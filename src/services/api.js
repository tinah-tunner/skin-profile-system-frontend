export const BASE_URL = "https://skin-profile-system-backendfinal.onrender.com/api";

// =========================
// LOGIN
// =========================
export async function login(email, password) {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error("Invalid email or password");
  }

  return await response.json();
}

// =========================
// REGISTER
// =========================
export async function register(userData) {
  const response = await fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw new Error(await response.text());
  }

  return await response.json();
}

// =========================
// AUTHENTICATED REQUESTS
// =========================
export async function apiFetch(endpoint, options = {}) {
  const token = localStorage.getItem("token");

  const headers = {
    ...(token && {
      Authorization: `Bearer ${token}`,
    }),
    ...options.headers,
  };

  // Don't set Content-Type when uploading files
  if (!options.isFormData) {
    headers["Content-Type"] = "application/json";
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    throw new Error(await response.text());
  }

  return await response.json();
}