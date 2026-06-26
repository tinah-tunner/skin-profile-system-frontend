import { useEffect, useState } from "react";
import Layout from "./Layout";

function Clients() {
  const [clients, setClients] = useState([]);
  const [editingClient, setEditingClient] = useState(null);
  const [search, setSearch] = useState("");

  const [newClient, setNewClient] = useState({
  firstName: "",
  lastName: "",
  age: "",
  phone: "",
  email: "",
  firstConsultationDate: "",
  skinType: "",
  allergies: "",
  medicalNotes: "",
  beforeImage: "",
  afterImage: "",
});

  const loadClients = () => {
    fetch("http://localhost:8080/api/clients")
      .then((res) => res.json())
      .then((data) => setClients(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    loadClients();
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:8080/api/clients/${id}`, {
      method: "DELETE",
    }).then(() => loadClients());
  };

  const handleEdit = (client) => {
    setEditingClient(client);
  };

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

  const handleAddClient = () => {
    fetch("http://localhost:8080/api/clients", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newClient),
    })
      .then(() => {
        loadClients();
        setNewClient({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          skinType: "",
          beforeImage: "",
          afterImage: "",
        });
      })
      .catch((err) => console.error(err));
  };

  const handleImage = (e, field) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setNewClient({
        ...newClient,
        [field]: reader.result,
      });
    };

    reader.readAsDataURL(file);
  };

  const filteredClients = clients.filter((client) =>
    `${client.firstName} ${client.lastName}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <Layout>
      <h1
        style={{
          color: "#ff7b00",
          marginBottom: "20px",
        }}
      >
        Client Skin Profiles
      </h1>

      {/* ADD CLIENT FORM */}

      <div style={styles.formCard}>
        <h2 style={{ color: "#ff7b00" }}>Add New Client</h2>

        <div style={styles.formGrid}>
          <input
            placeholder="First Name"
            value={newClient.firstName}
            onChange={(e) =>
              setNewClient({
                ...newClient,
                firstName: e.target.value,
              })
            }
          />

          <input
            placeholder="Last Name"
            value={newClient.lastName}
            onChange={(e) =>
              setNewClient({
                ...newClient,
                lastName: e.target.value,
              })
            }
          />
          <input
  placeholder="Age"
  value={newClient.age}
  onChange={(e) =>
    setNewClient({
      ...newClient,
      age: e.target.value,
    })
  }
/>

<input
  type="date"
  value={newClient.firstConsultationDate}
  onChange={(e) =>
    setNewClient({
      ...newClient,
      firstConsultationDate: e.target.value,
    })
  }
/>

<input
  placeholder="Allergies"
  value={newClient.allergies}
  onChange={(e) =>
    setNewClient({
      ...newClient,
      allergies: e.target.value,
    })
  }
/>

<textarea
  placeholder="Medical Notes"
  value={newClient.medicalNotes}
  onChange={(e) =>
    setNewClient({
      ...newClient,
      medicalNotes: e.target.value,
    })
  }
/>

          <input
            placeholder="Email"
            value={newClient.email}
            onChange={(e) =>
              setNewClient({
                ...newClient,
                email: e.target.value,
              })
            }
          />

          <input
            placeholder="Phone"
            value={newClient.phone}
            onChange={(e) =>
              setNewClient({
                ...newClient,
                phone: e.target.value,
              })
            }
          />

          <input
            placeholder="Skin Type"
            value={newClient.skinType}
            onChange={(e) =>
              setNewClient({
                ...newClient,
                skinType: e.target.value,
              })
            }
          />
        </div>

        <h3 style={{ color: "#ff7b00" }}>Before Treatment Image</h3>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleImage(e, "beforeImage")}
        />

        {newClient.beforeImage && (
          <img
            src={newClient.beforeImage}
            alt="Before"
            style={styles.preview}
          />
        )}

        <h3 style={{ color: "#ff7b00" }}>After Treatment Image</h3>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleImage(e, "afterImage")}
        />

        {newClient.afterImage && (
          <img
            src={newClient.afterImage}
            alt="After"
            style={styles.preview}
          />
        )}

        <button style={styles.saveBtn} onClick={handleAddClient}>
          Add Client
        </button>
      </div>

      <input
        type="text"
        placeholder="Search Client..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={styles.search}
      />

      {editingClient && (
        <div style={styles.modal}>
          <h3>Edit Client</h3>

          <input
            value={editingClient.firstName}
            onChange={(e) =>
              setEditingClient({
                ...editingClient,
                firstName: e.target.value,
              })
            }
          />

          <input
            value={editingClient.lastName}
            onChange={(e) =>
              setEditingClient({
                ...editingClient,
                lastName: e.target.value,
              })
            }
          />

          <input
            value={editingClient.email}
            onChange={(e) =>
              setEditingClient({
                ...editingClient,
                email: e.target.value,
              })
            }
          />

          <input
            value={editingClient.phone}
            onChange={(e) =>
              setEditingClient({
                ...editingClient,
                phone: e.target.value,
              })
            }
          />

          <input
            value={editingClient.skinType}
            onChange={(e) =>
              setEditingClient({
                ...editingClient,
                skinType: e.target.value,
              })
            }
          />

          <button style={styles.saveBtn} onClick={handleUpdate}>
            Save Changes
          </button>

          <button
            style={styles.cancelBtn}
            onClick={() => setEditingClient(null)}
          >
            Cancel
          </button>
        </div>
      )}

      <div style={styles.container}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th>Client</th>
              <th>Contact</th>
              <th>Skin Type</th>
              <th>Before</th>
              <th>After</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredClients.map((client) => (
              <tr key={client.id}>
                <td>
                  {client.firstName} {client.lastName}
                </td>

                <td>
                  {client.email}
                  <br />
                  {client.phone}
                </td>

                <td>{client.skinType}</td>

                <td>
                  {client.beforeImage && (
                    <img
                      src={client.beforeImage}
                      alt="before"
                      style={styles.smallImage}
                    />
                  )}
                </td>

                <td>
                  {client.afterImage && (
                    <img
                      src={client.afterImage}
                      alt="after"
                      style={styles.smallImage}
                    />
                  )}
                </td>

                <td>
                  <button
                    style={styles.editBtn}
                    onClick={() => handleEdit(client)}
                  >
                    Edit
                  </button>

                  <button
                    style={styles.deleteBtn}
                    onClick={() => handleDelete(client.id)}
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
    background: "#ffffff",
    padding: "20px",
    borderRadius: "18px",
    border: "2px solid #ffd6b0",
    boxShadow: "0 8px 25px rgba(255,123,0,0.2)",
    overflowX: "auto",
  },

  formCard: {
    background: "#fffaf5",
    padding: "20px",
    borderRadius: "18px",
    border: "2px solid #ffd6b0",
    marginBottom: "20px",
  },

  formGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "10px",
    marginBottom: "15px",
  },

  preview: {
    width: "180px",
    height: "180px",
    objectFit: "cover",
    borderRadius: "12px",
    marginTop: "10px",
    marginBottom: "10px",
  },

  smallImage: {
    width: "80px",
    height: "80px",
    objectFit: "cover",
    borderRadius: "10px",
  },

  search: {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    marginBottom: "20px",
    border: "2px solid #ffd6b0",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
  },

  modal: {
    position: "fixed",
    top: "15%",
    left: "35%",
    width: "350px",
    background: "#fff",
    padding: "25px",
    borderRadius: "18px",
    border: "2px solid #ffb38a",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    zIndex: 999,
  },

  editBtn: {
    background: "#ff7b00",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "8px",
    cursor: "pointer",
    marginRight: "10px",
  },

  deleteBtn: {
    background: "#e63946",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "8px",
    cursor: "pointer",
  },

  saveBtn: {
    background: "#ff7b00",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "15px",
  },

  cancelBtn: {
    background: "#999",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default Clients;