import React, { useState } from "react";

function Notifications() {
  const [notifications] = useState([
    {
      id: 1,
      type: "Client",
      message:
        "New client profile created for Sarah Johnson.",
      time: "2 minutes ago",
    },

    {
      id: 2,
      type: "Consultation",
      message:
        "Consultation notes added for Client #102.",
      time: "10 minutes ago",
    },

    {
      id: 3,
      type: "Images",
      message:
        "Before and After images uploaded successfully.",
      time: "30 minutes ago",
    },

    {
      id: 4,
      type: "Product",
      message:
        "Power Powder product information updated.",
      time: "1 hour ago",
    },

    {
      id: 5,
      type: "Follow-Up",
      message:
        "Client follow-up consultation is due tomorrow.",
      time: "2 hours ago",
    },

    {
      id: 6,
      type: "Appointment",
      message:
        "New appointment booked for Friday.",
      time: "3 hours ago",
    },

    {
      id: 7,
      type: "Therapist",
      message:
        "Therapist profile updated successfully.",
      time: "Yesterday",
    },

    {
      id: 8,
      type: "System",
      message:
        "System backup completed successfully.",
      time: "Yesterday",
    },
  ]);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>
        Notifications 🔔
      </h1>

      <div style={styles.summary}>
        <div style={styles.summaryCard}>
          <h2>{notifications.length}</h2>
          <p>Total Notifications</p>
        </div>

        <div style={styles.summaryCard}>
          <h2>24</h2>
          <p>Today's Activities</p>
        </div>

        <div style={styles.summaryCard}>
          <h2>5</h2>
          <p>Pending Follow-Ups</p>
        </div>

        <div style={styles.summaryCard}>
          <h2>3</h2>
          <p>System Alerts</p>
        </div>
      </div>

      <div style={styles.notificationPanel}>
        <h2>Activity Feed</h2>

        {notifications.map((notification) => (
          <div
            key={notification.id}
            style={styles.notificationCard}
          >
            <div>
              <h4>{notification.type}</h4>

              <p>{notification.message}</p>
            </div>

            <span style={styles.time}>
              {notification.time}
            </span>
          </div>
        ))}
      </div>

      <div style={styles.permissions}>
        <h2>Notification Coverage</h2>

        <ul>
          <li>✓ New Client Registrations</li>
          <li>✓ Client Profile Updates</li>
          <li>✓ Consultation Notes Added</li>
          <li>✓ Before Image Uploads</li>
          <li>✓ After Image Uploads</li>
          <li>✓ Product Updates</li>
          <li>✓ Appointment Scheduling</li>
          <li>✓ Therapist Activities</li>
          <li>✓ Follow-Up Reminders</li>
          <li>✓ System Alerts</li>
          <li>✓ User Account Changes</li>
          <li>✓ Security Notifications</li>
        </ul>
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
  },

  summary: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
    marginBottom: "30px",
  },

  summaryCard: {
    background: "#fff",
    padding: "20px",
    borderRadius: "18px",
    textAlign: "center",
    border: "2px solid #f4c2c2",
    boxShadow:
      "0 8px 20px rgba(255,107,53,0.1)",
  },

  notificationPanel: {
    background: "#fff",
    padding: "20px",
    borderRadius: "18px",
    border: "2px solid #f4c2c2",
    marginBottom: "30px",
  },

  notificationCard: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px",
    marginBottom: "10px",
    borderRadius: "12px",
    background: "#fff5ef",
  },

  time: {
    color: "#777",
    fontSize: "14px",
  },

  permissions: {
    background: "#fff",
    padding: "20px",
    borderRadius: "18px",
    border: "2px solid #f4c2c2",
  },
};

export default Notifications;