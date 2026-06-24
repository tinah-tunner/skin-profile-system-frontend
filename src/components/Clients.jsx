import { useEffect, useState } from "react";
import Layout from "./Layout";

function Clients() {
  const [clients, setClients] = useState([]);
  const [editingClient, setEditingClient] = useState(null);

  // LOAD CLIENTS
  const loadClients = () => {
    fetch("http://localhost:8080/api/clients")
      .then((res) => res.json())
      .then((data) => setClients(data));
  };

  useEffect(() => {
    loadClients();
  }, []);

  // DELETE CLIENT
  const handleDelete = (id) => {
    fetch(`http://localhost:8080/api/clients/${id}`, {
      method: "DELETE",
    }).then(() => loadClients());
  };

  // EDIT CLIENT (OPEN FORM)
  const handleEdit = (client) => {
    setEditingClient(client);
  };

  // UPDATE CLIENT
  const handleUpdate = () => {
    fetch(`http://localhost:8080/api/clients/${editingClient.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editingClient),
    }).then(() => {
      setEditingClient(null);
      loadClients();
    });
  };

  return (
    <Layout>
      <h1 style={{ color: "#e63946" }}>Clients</h1>

      {/* EDIT FORM */}
      {editingClient && (
        <div style={styles.modal}>
          <h3>Edit Client</h3>

          <input
            value={editingClient.firstName}
            onChange={(e) =>
              setEditingClient({ ...editingClient, firstName: e.target.value })
            }
            placeholder="First Name"
          />

          <input
            value={editingClient.lastName}
            onChange={(e) =>
              setEditingClient({ ...editingClient, lastName: e.target.value })
            }
            placeholder="Last Name"
          />

          <input
            value={editingClient.email}
            onChange={(e) =>
              setEditingClient({ ...editingClient, email: e.target.value })
            }
            placeholder="Email"
          />

          <input
            value={editingClient.phone}
            onChange={(e) =>
              setEditingClient({ ...editingClient, phone: e.target.value })
            }
            placeholder="Phone"
          />

          <input
            value={editingClient.skinType}
            onChange={(e) =>
              setEditingClient({ ...editingClient, skinType: e.target.value })
            }
            placeholder="Skin Type"
          />

          <button onClick={handleUpdate}>Save</button>
          <button onClick={() => setEditingClient(null)}>Cancel</button>
        </div>
      )}

      {/* TABLE */}
      <div style={styles.container}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Skin Type</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {clients.map((client) => (
              <tr key={client.id}>
                <td>{client.id}</td>
                <td>
                  {client.firstName} {client.lastName}
                </td>
                <td>{client.email}</td>
                <td>{client.phone}</td>
                <td>{client.skinType}</td>

                <td>
                  <button onClick={() => handleEdit(client)}>
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(client.id)}
                    style={{ marginLeft: "10px", color: "red" }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

const styles = {
  container: {
    marginTop: "20px",
    background: "white",
    padding: "15px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
  },

  modal: {
    position: "fixed",
    top: "20%",
    left: "30%",
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 0 20px rgba(0,0,0,0.3)",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "300px",
  },
};

export default Clients;