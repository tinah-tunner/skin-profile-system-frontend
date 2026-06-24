import { useEffect, useState } from "react";
import Layout from "./Layout";
import BookingCard from "./BookingCard";
import BookingCalendar from "./BookingCalendar";

function Booking() {
  const [bookings, setBookings] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedBooking, setSelectedBooking] = useState(null);

  const [form, setForm] = useState({
    clientName: "",
    therapistName: "",
    date: "",
    time: "",
    status: "PENDING",
  });

  // =========================
  // LOAD BOOKINGS (BACKEND)
  // =========================
  useEffect(() => {
    fetch("http://localhost:8080/api/bookings")
      .then((res) => res.json())
      .then((data) => setBookings(data))
      .catch((err) => console.error("Error loading bookings:", err));
  }, []);

  // =========================
  // FORM INPUT
  // =========================
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // =========================
  // CREATE BOOKING (BACKEND)
  // =========================
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((newBooking) => {
        setBookings([...bookings, newBooking]);

        setForm({
          clientName: "",
          therapistName: "",
          date: "",
          time: "",
          status: "PENDING",
        });
      })
      .catch((err) => console.error("Error creating booking:", err));
  };

  // =========================
  // DELETE BOOKING (BACKEND)
  // =========================
  const handleDelete = (id) => {
    fetch(`http://localhost:8080/api/bookings/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setBookings(bookings.filter((b) => b.id !== id));
        setSelectedBooking(null);
      })
      .catch((err) => console.error("Error deleting booking:", err));
  };

  // =========================
  // UPDATE STATUS (BACKEND)
  // =========================
  const handleStatusChange = (id, status) => {
    fetch(
      `http://localhost:8080/api/bookings/${id}/status?status=${status}`,
      {
        method: "PUT",
      }
    )
      .then(() => {
        setBookings(
          bookings.map((b) =>
            b.id === id ? { ...b, status } : b
          )
        );
      })
      .catch((err) => console.error("Error updating status:", err));
  };

  // =========================
  // FILTER BY DATE (CALENDAR)
  // =========================
  const filteredBookings = selectedDate
    ? bookings.filter((b) => b.date === selectedDate)
    : bookings;

  return (
    <Layout>
      <h1 style={{ color: "#ff7a18" }}>Bookings</h1>

      {/* ================= FORM ================= */}
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          name="clientName"
          placeholder="Client Name"
          value={form.clientName}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          name="therapistName"
          placeholder="Therapist Name"
          value={form.therapistName}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          type="time"
          name="time"
          value={form.time}
          onChange={handleChange}
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Create Booking
        </button>
      </form>

      {/* ================= CALENDAR ================= */}
      <BookingCalendar
        bookings={bookings}
        onSelectDate={(date) => setSelectedDate(date)}
      />

      {/* ================= CARDS ================= */}
      <div style={{ marginTop: "20px" }}>
        {filteredBookings.map((b) => (
          <BookingCard
            key={b.id}
            booking={b}
            onDelete={handleDelete}
            onStatusChange={handleStatusChange}
            onClick={() => setSelectedBooking(b)}
          />
        ))}
      </div>

      {/* ================= DETAILS PANEL ================= */}
      {selectedBooking && (
        <div
          style={styles.overlay}
          onClick={() => setSelectedBooking(null)}
        >
          <div
            style={styles.panel}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 style={{ color: "#ff7a18" }}>
              Booking Details
            </h2>

            <p><b>Client:</b> {selectedBooking.clientName}</p>
            <p><b>Therapist:</b> {selectedBooking.therapistName}</p>
            <p><b>Date:</b> {selectedBooking.date}</p>
            <p><b>Time:</b> {selectedBooking.time}</p>
            <p><b>Status:</b> {selectedBooking.status}</p>

            <button
              onClick={() => setSelectedBooking(null)}
              style={styles.close}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
}

// ================= STYLES =================
const styles = {
  form: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "10px",
    background: "white",
    padding: "15px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },

  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ddd",
  },

  button: {
    gridColumn: "span 2",
    background: "#ff7a18",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "8px",
    cursor: "pointer",
  },

  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.4)",
    display: "flex",
    justifyContent: "flex-end",
  },

  panel: {
    width: "350px",
    background: "white",
    padding: "20px",
    borderLeft: "6px solid #ff7a18",
  },

  close: {
    marginTop: "20px",
    background: "#333",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "8px",
  },
};

export default Booking;