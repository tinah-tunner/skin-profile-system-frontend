import { useNavigate } from "react-router-dom";

function ClientCard({ client }) {
  const navigate = useNavigate();

  return (
    <div
      style={styles.card}
      onClick={() => navigate(`/clients/${client.id}`)}
    >
      {/* Profile */}
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

          <p><strong>Age:</strong> {client.age || "Not Recorded"}</p>

          <p><strong>Phone:</strong> {client.phone || "Not Recorded"}</p>

          <p><strong>Email:</strong> {client.email || "Not Recorded"}</p>
        </div>
      </div>

      {/* Skin Information */}
      <div style={styles.section}>
        <h3>Skin Information</h3>

        <p><strong>Skin Type:</strong> {client.skinType || "Not Set"}</p>

        <p><strong>Primary Concern:</strong> {client.concern || "Not Recorded"}</p>

        <p><strong>Allergies:</strong> {client.allergies || "None Recorded"}</p>
      </div>

      {/* Consultation */}
      <div style={styles.section}>
        <h3>Consultation</h3>

        <p>
          <strong>First Consultation:</strong>{" "}
          {client.firstConsultationDate || "Not Recorded"}
        </p>

        <p>
          <strong>Last Visit:</strong>{" "}
          {client.lastVisit || "Not Recorded"}
        </p>
      </div>

      {/* Progress */}
      <div style={styles.section}>
        <h3>Progress Tracking</h3>

       {client.beforeImage && (
  <>
    <h4>Before</h4>

    <img
      src={client.beforeImage}
      alt="Before"
      style={{
        width: "180px",
        borderRadius: "10px",
      }}
    />
  </>
)}

{client.afterImage && (
  <>
    <h4>After</h4>

    <img
      src={client.afterImage}
      alt="After"
      style={{
        width: "180px",
        borderRadius: "10px",
      }}
    />
  </>
)}
        <p>
          <strong>Status:</strong>{" "}
          {client.progressStatus || "In Progress"}
        </p>
      </div>

      <button
        style={styles.button}
        onClick={(e) => {
          e.stopPropagation();
          navigate(`/clients/${client.id}`);
        }}
      >
        Open Client File
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
    marginBottom: "20px",
    cursor: "pointer",
    boxShadow: "0 8px 20px rgba(255,107,53,0.12)",
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
    color: "#fff",
    border: "none",
    padding: "12px",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default ClientCard;