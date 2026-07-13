import { useEffect, useState } from "react";
import { apiFetch } from "../services/api";

function ClientDashboard() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadClients() {
      try {
        const data = await apiFetch("/clients");
        setClients(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Failed to load clients:", error);
      } finally {
        setLoading(false);
      }
    }

    loadClients();
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h1>Registered Clients</h1>

      <p style={{ color: "#666", marginBottom: "25px" }}>
        Total Clients: <strong>{clients.length}</strong>
      </p>

      {loading ? (
        <h3>Loading clients...</h3>
      ) : clients.length === 0 ? (
        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "12px",
            textAlign: "center",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}
        >
          No registered clients found.
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "20px",
          }}
        >
          {clients.map((client) => (
            <div
              key={client.id}
              style={{
                background: "#fff",
                borderRadius: "15px",
                padding: "20px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                borderLeft: "5px solid #D4A373",
              }}
            >
              <h3 style={{ marginBottom: "10px", color: "#D4A373" }}>
                {client.fullName}
              </h3>

              <p>
                <strong>Email:</strong> {client.email}
              </p>

              <p>
                <strong>Role:</strong> {client.role}
              </p>

              <p>
                <strong>ID:</strong> {client.id}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ClientDashboard;