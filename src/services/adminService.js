const BASE_URL = "http://localhost:8080/api";


// ================= USERS =================
export const loadUsers = async () => {
  const res = await fetch(`${BASE_URL}/auth/users`);
  return res.json();
};

export const approveUser = async (id) => {
  const res = await fetch(`${BASE_URL}/users/${id}/approve`, {
    method: "PUT",
  });
  return res.json();
};


// ================= BOOKINGS =================
export const loadBookings = async () => {
  const res = await fetch(`${BASE_URL}/bookings`);
  return res.json();
};

export const updateBookingStatus = async (id, status) => {
  await fetch(`${BASE_URL}/bookings/${id}?status=${status}`, {
    method: "PUT",
  });
};


// ================= NOTIFICATIONS =================
export const loadNotifications = async () => {
  const res = await fetch(`${BASE_URL}/notifications/ADMIN`);
  return res.json();
};