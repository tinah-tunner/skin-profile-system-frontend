import React from "react";

function Admin() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Admin Dashboard</h1>
      <p>Welcome Admin 👨‍💼</p>

      <div style={{ marginTop: "20px" }}>
        <h3>System Overview</h3>
        <ul>
          <li>Total Users: 0</li>
          <li>Active Bookings: 0</li>
          <li>Revenue: R0</li>
        </ul>
      </div>
    </div>
  );
}

export default Admin;