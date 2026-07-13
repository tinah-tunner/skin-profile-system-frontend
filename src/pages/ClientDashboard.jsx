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
    <div
      style={{
        padding: "30px",
        background: "#fffaf7",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          color: "#ff6b35",
          marginBottom: "10px",
        }}
      >
        Registered Clients
      </h1>

      <p
        style={{
          color: "#666",
          marginBottom: "30px",
        }}
      >
        Total Clients: <strong>{clients.length}</strong>
      </p>

      {loading ? (
        <h3>Loading clients...</h3>
      ) : clients.length === 0 ? (
        <div
          style={{
            background: "#fff",
            padding: "25px",
            borderRadius: "15px",
            textAlign: "center",
            border: "2px solid #f4c2c2",
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
                borderRadius: "18px",
                padding: "20px",
                border: "2px solid #f4c2c2",
                boxShadow: "0 8px 20px rgba(255,107,53,0.08)",
              }}
            >
              <h2
                style={{
                  color: "#ff6b35",
                  marginBottom: "15px",
                }}
              >
                {client.firstName} {client.lastName}
              </h2>

              <p>
                <strong>Client Number:</strong>{" "}
                {client.clientNumber || "N/A"}
              </p>

              <p>
                <strong>Email:</strong>{" "}
                {client.email || "N/A"}
              </p>

              <p>
                <strong>Phone:</strong>{" "}
                {client.phoneNumber || "N/A"}
              </p>

              <p>
                <strong>Gender:</strong>{" "}
                {client.gender || "N/A"}
              </p>

              <p>
                <strong>Skin Type:</strong>{" "}
                {client.skinType || "N/A"}
              </p>

              <p>
                <strong>Skin Concerns:</strong>{" "}
                {Array.isArray(client.skinConcerns) &&
                client.skinConcerns.length > 0
                  ? client.skinConcerns
                      .map((concern) =>
                        concern.replace(/_/g, " ")
                      )
                      .join(", ")
                  : "None"}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ClientDashboard;