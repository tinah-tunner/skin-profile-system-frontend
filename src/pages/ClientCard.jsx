import { useNavigate } from "react-router-dom";

function ClientCard({ client }) {
  const navigate = useNavigate();

  return (
    <div
      style={styles.card}
      onClick={() => navigate(`/client/${client.id}`)}
    >
      {/* Profile Section */}

      <div style={styles.profileSection}>
        <img
          src={
            client.profileImage ||
            "https://via.placeholder.com/120?text=Client"
          }
          alt="Client"
          style={styles.image}
        />

        <div>
          <h2 style={styles.name}>
            {client.firstName} {client.lastName}
          </h2>

          <p>
            <strong>Age:</strong>{" "}
            {client.age || "Not Recorded"}
          </p>

          <p>
            <strong>Phone:</strong>{" "}
            {client.phone || "Not Recorded"}
          </p>
        </div>
      </div>

      {/* Skin Information */}

      <div style={styles.section}>
        <h3>Skin Information</h3>

        <p>
          <strong>Skin Type:</strong>{" "}
          {client.skinType || "Not Set"}
        </p>

        <p>
          <strong>Primary Concern:</strong>{" "}
          {client.concern || "Not Recorded"}
        </p>

        <p>
          <strong>Allergies:</strong>{" "}
          {client.allergies || "None Recorded"}
        </p>
      </div>

      {/* Consultation */}

      <div style={styles.section}>
        <h3>Consultation</h3>

        <p>
          <strong>First Consultation:</strong>{" "}
          {client.firstConsultationDate ||
            "Not Recorded"}
        </p>

        <div style={styles.cardsContainer}>
  {filteredClients.map((client) => (
    <div key={client.id} style={styles.clientCard}>
      <img
        src={
          client.beforeImage ||
          "https://via.placeholder.com/150"
        }
        alt="Client"
        style={styles.clientImage}
      />

      <h2>
        {client.firstName} {client.lastName}
      </h2>

      <p>
        <strong>Age:</strong> {client.age}
      </p>

      <p>
        <strong>Email:</strong> {client.email}
      </p>

      <p>
        <strong>Phone:</strong> {client.phone}
      </p>

      <p>
        <strong>First Consultation:</strong>{" "}
        {client.firstConsultationDate}
      </p>

      <p>
        <strong>Skin Type:</strong>{" "}
        {client.skinType}
      </p>

      <p>
        <strong>Allergies:</strong>{" "}
        {client.allergies || "None"}
      </p>

      <p>
        <strong>Medical Notes:</strong>{" "}
        {client.medicalNotes || "None"}
      </p>

      <div style={styles.buttonRow}>
        <button
          style={styles.editBtn}
          onClick={() => handleEdit(client)}
        >
          Edit
        </button>

        <button
          style={styles.deleteBtn}
          onClick={() =>
            handleDelete(client.id)
          }
        >
          Delete
        </button>
      </div>
    </div>
  ))}
</div>

        <p>
          <strong>Last Visit:</strong>{" "}
          {client.lastVisit || "Not Recorded"}
        </p>
      </div>

      {/* Progress */}

      <div style={styles.section}>
        <h3>Progress Tracking</h3>

        <p>
          <strong>Before Images:</strong>{" "}
          {client.beforeImages || 0}
        </p>

        <p>
          <strong>After Images:</strong>{" "}
          {client.afterImages || 0}
        </p>

        <p>
          <strong>Status:</strong>{" "}
          {client.progressStatus || "In Progress"}
        </p>
      </div>

      <button
        style={styles.button}
        onClick={(e) => {
          e.stopPropagation();
          navigate(`/client/${client.id}`);
        }}
      >
        View Full Profile
      </button>
    </div>
  );
}

const styles = {
  card: {
    background: "#fff",
    border: "2px solid #f4c2c2",
    borderRadius: "20px",
    padding: "20px",
    cursor: "pointer",
    boxShadow: "0 8px 20px rgba(255,107,53,0.12)",
    transition: "0.3s",
    marginBottom: "20px",
  },

  profileSection: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    marginBottom: "20px",
  },

  image: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "4px solid #ff6b35",
  },

  name: {
    color: "#ff6b35",
    marginBottom: "10px",
  },

  section: {
    marginBottom: "15px",
    padding: "12px",
    background: "#fff5ef",
    borderRadius: "12px",
  },

  button: {
    width: "100%",
    background: "#ff6b35",
    color: "white",
    border: "none",
    padding: "12px",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default ClientCard;