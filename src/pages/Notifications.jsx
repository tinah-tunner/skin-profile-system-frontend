import React, { useEffect, useState } from "react";

function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadNotifications = () => {
    fetch("https://skin-profile-system-backendfinal.onrender.com/api/notifications")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to load notifications");
        }
        return res.json();
      })
      .then((data) => {
        setNotifications(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    loadNotifications();

    const interval = setInterval(() => {
      loadNotifications();
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Notifications</h1>

      <div style={styles.summary}>
        <div style={styles.summaryCard}>
          <h2>{notifications.length}</h2>
          <p>Total Notifications</p>
        </div>

        <div style={styles.summaryCard}>
          <h2>
            {notifications.filter((n) => !n.readStatus).length}
          </h2>
          <p>Unread Notifications</p>
        </div>

        <div style={styles.summaryCard}>
          <h2>
            {notifications.filter((n) => n.type === "Booking").length}
          </h2>
          <p>Bookings</p>
        </div>

        <div style={styles.summaryCard}>
          <h2>
            {notifications.filter((n) => n.type === "Client").length}
          </h2>
          <p>Clients</p>
        </div>
      </div>

      <div style={styles.notificationPanel}>
        <h2 style={{ marginBottom: "15px" }}>Activity Feed</h2>

        {loading ? (
          <p>Loading notifications...</p>
        ) : notifications.length === 0 ? (
          <p>No notifications available.</p>
        ) : (
          notifications.map((notification) => (
            <div
              key={notification.id}
              style={styles.notificationCard}
            >
              <div style={{ flex: 1 }}>
                <h4 style={styles.type}>
                  {notification.type}
                </h4>

                <p style={styles.message}>
                  {notification.message}
                </p>

                <small style={styles.date}>
                  {notification.createdAt
                    ? new Date(
                        notification.createdAt
                      ).toLocaleString()
                    : ""}
                </small>
              </div>

              {!notification.readStatus && (
                <span style={styles.badge}>
                  NEW
                </span>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "30px",
    background: "#fffaf7",
    minHeight: "100vh",
  },

  heading: {
    color: "#ff6b35",
    marginBottom: "20px",
    fontSize: "30px",
    fontWeight: "bold",
  },

  summary: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
    marginBottom: "30px",
  },

  summaryCard: {
    background: "#fff",
    padding: "20px",
    borderRadius: "18px",
    textAlign: "center",
    border: "2px solid #f4c2c2",
    boxShadow: "0 8px 20px rgba(255,107,53,0.1)",
  },

  notificationPanel: {
    background: "#fff",
    padding: "20px",
    borderRadius: "18px",
    border: "2px solid #f4c2c2",
  },

  notificationCard: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "8px 12px",
    marginBottom: "8px",
    borderRadius: "8px",
    background: "#fff5ef",
    borderLeft: "4px solid #ff6b35",
  },

  type: {
    color: "#ff6b35",
    margin: "0 0 4px 0",
    fontSize: "15px",
    fontWeight: "600",
  },

  message: {
    margin: "0",
    fontSize: "13px",
    color: "#444",
  },

  date: {
    display: "block",
    marginTop: "4px",
    fontSize: "11px",
    color: "#888",
  },

  badge: {
    background: "#ff6b35",
    color: "#fff",
    padding: "4px 8px",
    borderRadius: "12px",
    fontSize: "10px",
    fontWeight: "bold",
    marginLeft: "10px",
  },
};

export default Notifications;