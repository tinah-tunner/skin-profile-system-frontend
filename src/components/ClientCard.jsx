function ClientCard({ title, value, icon }) {
  return (
    <div style={styles.card}>
      <div style={styles.icon}>{icon}</div>
      <h3 style={styles.title}>{title}</h3>
      <h2 style={styles.value}>{value}</h2>
    </div>
  );
}

const styles = {
  card: {
    background: "white",
    borderRadius: "12px",
    padding: "20px",
    width: "200px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    borderLeft: "6px solid #ff7a18",
    margin: "10px",
  },

  icon: {
    fontSize: "24px",
  },

  title: {
    margin: "10px 0 5px",
    color: "#333",
  },

  value: {
    color: "#e63946",
    fontSize: "28px",
    margin: 0,
  },
};

export default ClientCard;