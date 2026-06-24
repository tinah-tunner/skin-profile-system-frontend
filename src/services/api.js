const BASE_URL = "http://localhost:8080/api";

export const api = {
  // USERS
  getUsers: () => fetch(`${BASE_URL}/auth/users`).then(res => res.json()),

  approveUser: (id) =>
    fetch(`${BASE_URL}/users/${id}/approve`, {
      method: "PUT",
    }),

  // BOOKINGS
  getBookings: () =>
    fetch(`${BASE_URL}/bookings`).then(res => res.json()),

  updateBookingStatus: (id, status) =>
    fetch(`${BASE_URL}/bookings/${id}?status=${status}`, {
      method: "PUT",
    }),

  // NOTIFICATIONS
  getNotifications: () =>
    fetch(`${BASE_URL}/notifications/ADMIN`).then(res => res.json()),
};