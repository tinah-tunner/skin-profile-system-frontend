// src/components/clientFile/ClientHeader.jsx

import defaultAvatar from "../../assets/default-avatar.png";

export default function ClientHeader({ client }) {
  return (
    <div style={styles.header}>
      <img
        src={client.profileImage || defaultAvatar}
        alt={`${client.firstName} ${client.lastName}`}
        style={styles.image}
      />

      <div>
        <h1 style={styles.name}>
          {client.firstName} {client.lastName}
        </h1>

        <p>
          <strong>Client ID:</strong> {client.id}
        </p>

        <p>
          <strong>Email:</strong> {client.email || "Not Recorded"}
        </p>

        <p>
          <strong>Phone:</strong> {client.phoneNumber || "Not Recorded"}
        </p>

        <p>
          <strong>Skin Type:</strong> {client.skinType || "Not Recorded"}
        </p>
      </div>
    </div>
  );
}

const styles = {
  header: {
    display: "flex",
    gap: 30,
    alignItems: "center",
    background: "#fff",
    padding: 25,
    borderRadius: 20,
    border: "2px solid #ffe3d7",
    marginBottom: 25,
    boxShadow: "0 8px 18px rgba(255,107,53,.08)",
  },

  image: {
    width: 150,
    height: 150,
    borderRadius: "50%",
    objectFit: "cover",
    border: "4px solid #ff6b35",
  },

  name: {
    color: "#ff6b35",
    marginBottom: 15,
  },
};