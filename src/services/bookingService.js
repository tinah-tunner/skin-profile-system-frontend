import api from "./api";

export const createBooking = (data) => {
    return api.post("/bookings", data);
};

export const getBookings = () => {
    return api.get("/bookings");
};

export const approveBooking = (id) => {
    return api.put(`/bookings/${id}/approve`);
};

export const rejectBooking = (id) => {
    return api.put(`/bookings/${id}/reject`);
};