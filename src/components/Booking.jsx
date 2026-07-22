import { useEffect, useState } from "react";
import BookingCard from "./BookingCard";
import BookingCalendar from "./BookingCalendar";

function Booking() {
  const [bookings, setBookings] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");

  const [form, setForm] = useState({
    clientName: "",
    therapistName: "",
    date: "",
    time: "",
    status: "PENDING",
  });

  // Load bookings
  useEffect(() => {
    fetch("https://skin-profile-system-backendfinal.onrender.com/api/bookings")
      .then((res) => res.json())
      .then((data) => setBookings(data))
      .catch((err) => console.error("Error loading bookings:", err));
  }, []);

  // Handle input
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Create booking
  const handleSubmit = async (e) => {
    e.preventDefault();

    const bookingExists = bookings.some(
      (booking) =>
        booking.date === form.date &&
        booking.time === form.time
    );

    if (bookingExists) {
      alert("This time slot is already booked.");
      return;
    }

    try {
      const response = await fetch(
        "https://skin-profile-system-backendfinal.onrender.com/api/bookings",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const newBooking = await response.json();

      setBookings((prev) => [...prev, newBooking]);

      setForm({
        clientName: "",
        therapistName: "",
        date: "",
        time: "",
        status: "PENDING",
      });

      alert("Booking created successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to create booking.");
    }
  };

  // Delete booking
  const handleDelete = async (id) => {
    try {
      await fetch(
        `https://skin-profile-system-backendfinal.onrender.com/api/bookings/${id}`,
        {
          method: "DELETE",
        }
      );

      setBookings((prev) => prev.filter((b) => b.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  // Update status
  const handleStatusChange = async (id, status) => {
    try {
      await fetch(
        `https://skin-profile-system-backendfinal.onrender.com/api/bookings/${id}/status?status=${status}`,
        {
          method: "PUT",
        }
      );

      setBookings((prev) =>
        prev.map((b) =>
          b.id === id ? { ...b, status } : b
        )
      );
    } catch (err) {
      console.error(err);
    }
  };

  const filteredBookings = selectedDate
    ? bookings.filter((b) => b.date === selectedDate)
    : bookings;

  return (
    <>
      <h1 style={{ color: "#ff7a18", marginBottom: "20px" }}>
        Bookings
      </h1>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          name="clientName"
          placeholder="Client Name"
          value={form.clientName}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <input
          name="therapistName"
          placeholder="Therapist Name"
          value={form.therapistName}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <input
          type="time"
          name="time"
          value={form.time}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <button type="submit" style={styles.button}>
          Create Booking
        </button>
      </form>

      <BookingCalendar
        bookings={bookings}
        onSelectDate={setSelectedDate}
      />

      <div style={{ marginTop: "20px" }}>
        {filteredBookings.length === 0 ? (
          <p>No bookings found.</p>
        ) : (
          filteredBookings.map((booking) => (
            <BookingCard
              key={booking.id}
              booking={booking}
              onDelete={handleDelete}
              onStatusChange={handleStatusChange}
            />
          ))
        )}
      </div>
    </>
  );
}

const styles = {
  form: {
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    gap: "10px",
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,.1)",
  },

  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ddd",
  },

  button: {
    gridColumn: "span 2",
    background: "#ff7a18",
    color: "#fff",
    border: "none",
    padding: "12px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default Booking;