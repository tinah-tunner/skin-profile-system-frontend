function BookingCard({ booking, onDelete, onStatusChange, onClick }) {
  return (
    <div style={styles.card} onClick={onClick}>
      <div style={styles.top}>
        <h3 style={styles.title}>{booking.clientName}</h3>

        <span style={{ ...styles.status, background: getColor(booking.status) }}>
          {booking.status}
        </span>
      </div>

      <p><b>Therapist:</b> {booking.therapistName}</p>
      <p><b>Date:</b> {booking.date}</p>
      <p><b>Time:</b> {booking.time}</p>

      <div style={styles.actions}>
        <button
          style={styles.confirm}
          onClick={(e) => {
            e.stopPropagation();
            onStatusChange(booking.id, "CONFIRMED");
          }}
        >
          Confirm
        </button>

        <button
          style={styles.complete}
          onClick={(e) => {
            e.stopPropagation();
            onStatusChange(booking.id, "COMPLETED");
          }}
        >
          Complete
        </button>

        <button
          style={styles.delete}
          onClick={(e) => {
            e.stopPropagation();
            onDelete(booking.id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

function getColor(status) {
  switch (status) {
    case "CONFIRMED":
      return "#ff7a18";
    case "COMPLETED":
      return "#e65c00";
    default:
      return "#ffb37a";
  }
}

const styles = {
  card: {
    background: "white",
    borderRadius: "14px",
    padding: "15px",
    marginBottom: "15px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
    borderLeft: "6px solid #ff7a18",
    cursor: "pointer",
  },

  top: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    margin: 0,
    color: "#ff7a18",
  },

  status: {
    padding: "4px 10px",
    borderRadius: "20px",
    color: "white",
    fontSize: "12px",
    fontWeight: "bold",
  },

  actions: {
    marginTop: "10px",
    display: "flex",
    gap: "8px",
  },

  confirm: {
    background: "#ff7a18",
    border: "none",
    color: "white",
    padding: "6px 10px",
    borderRadius: "8px",
  },

  complete: {
    background: "#e65c00",
    border: "none",
    color: "white",
    padding: "6px 10px",
  },

  delete: {
    background: "#333",
    border: "none",
    color: "white",
    padding: "6px 10px",
  },
};

export default BookingCard;