import React from "react";

function Admin() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>
        Admin Dashboard
      </h1>

      <p style={styles.welcome}>
        Welcome Administrator 👨‍💼
      </p>

      <div style={styles.grid}>
        {/* SYSTEM OVERVIEW */}

        <div style={styles.card}>
          <h2>System Overview</h2>

          <ul>
            <li>Total Users: 25</li>
            <li>Total Therapists: 5</li>
            <li>Total Clients: 120</li>
            <li>Active Consultations: 42</li>
            <li>Revenue: R45 000</li>
          </ul>
        </div>

        {/* USER MANAGEMENT */}

        <div style={styles.card}>
          <h2>User Management</h2>

          <ul>
            <li>Create Users</li>
            <li>Edit Users</li>
            <li>Delete Users</li>
            <li>Deactivate Accounts</li>
            <li>Reset Passwords</li>
            <li>Assign Roles</li>
          </ul>
        </div>

        {/* PERMISSIONS */}

        <div style={styles.card}>
          <h2>Permissions & Roles</h2>

          <ul>
            <li>Administrator Access</li>
            <li>Therapist Access</li>
            <li>Client Access</li>
            <li>Role Assignment</li>
            <li>Permission Control</li>
          </ul>
        </div>

        {/* CLIENT DATA */}

        <div style={styles.card}>
          <h2>Client Data Access</h2>

          <ul>
            <li>View All Clients</li>
            <li>Edit Client Profiles</li>
            <li>View Skin Journey</li>
            <li>View Consultation History</li>
            <li>Access Before/After Images</li>
          </ul>
        </div>

        {/* THERAPISTS */}

        <div style={styles.card}>
          <h2>Therapist Management</h2>

          <ul>
            <li>View Therapists</li>
            <li>Add Therapists</li>
            <li>Edit Therapists</li>
            <li>Track Performance</li>
            <li>View Schedules</li>
          </ul>
        </div>

        {/* CONSULTATIONS */}

        <div style={styles.card}>
          <h2>Consultation Management</h2>

          <ul>
            <li>View Consultations</li>
            <li>Treatment History</li>
            <li>Recommendations</li>
            <li>Follow-Up Tracking</li>
            <li>Visit Timeline</li>
          </ul>
        </div>

        {/* IMAGES */}

        <div style={styles.card}>
          <h2>Image Tracking System</h2>

          <ul>
            <li>Before Images</li>
            <li>After Images</li>
            <li>Image Comparison</li>
            <li>Timeline Navigation</li>
            <li>Progress Monitoring</li>
          </ul>
        </div>

        {/* PRODUCTS */}

        <div style={styles.card}>
          <h2>Product Tracking</h2>

          <ul>
            <li>Products Used</li>
            <li>Current Routines</li>
            <li>Skin Reactions</li>
            <li>Product Recommendations</li>
          </ul>
        </div>

        {/* REPORTS */}

        <div style={styles.card}>
          <h2>Reports & Analytics</h2>

          <ul>
            <li>Client Growth</li>
            <li>Therapist Performance</li>
            <li>Treatment Statistics</li>
            <li>Monthly Reports</li>
            <li>Revenue Reports</li>
          </ul>
        </div>

        {/* SECURITY */}

        <div style={styles.card}>
          <h2>Security & Audit Logs</h2>

          <ul>
            <li>User Activity Logs</li>
            <li>Login History</li>
            <li>System Changes</li>
            <li>Access Monitoring</li>
            <li>Audit Reports</li>
          </ul>
        </div>

        {/* SETTINGS */}

        <div style={styles.card}>
          <h2>System Settings</h2>

          <ul>
            <li>System Configuration</li>
            <li>Notification Settings</li>
            <li>Database Settings</li>
            <li>Backup Management</li>
            <li>Maintenance Controls</li>
          </ul>
        </div>
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
    marginBottom: "10px",
  },

  welcome: {
    fontSize: "18px",
    marginBottom: "25px",
    color: "#555",
  },

  grid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "20px",
  },

  card: {
    background: "#fff",
    borderRadius: "18px",
    padding: "20px",
    border: "2px solid #f4c2c2",
    boxShadow:
      "0 8px 25px rgba(255,107,53,0.12)",
  },
};

export default Admin;