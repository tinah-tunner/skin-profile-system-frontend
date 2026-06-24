import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

function Dashboard() {
  const navigate = useNavigate();

  // ONLY ONE cards array (clean + correct)
  const cards = [
    { title: "Clients", icon: "👥", route: "/clients", color: "#ff7a18" },
    { title: "Therapists", icon: "💆", route: "/therapists", color: "#e63946" },
    { title: "Bookings", icon: "📅", route: "/booking", color: "#f77f00" },
    { title: "Products", icon: "🧴", route: "/products", color: "#d62828" },
  ];

  return (
    <Layout>
      <h1 style={{ color: "#ff7a18" }}>Dashboard</h1>
      <p>Click a section to manage it</p>

      <div style={styles.grid}>
        {cards.map((card) => (
          <div
            key={card.title}
            onClick={() => navigate(card.route)}
            style={{
              ...styles.card,
              borderLeft: `6px solid ${card.color}`,
            }}
          >
            <h2>
              {card.icon} {card.title}
            </h2>
            <p style={styles.text}>Open</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "15px",
    marginTop: "20px",
  },

  card: {
    background: "white",
    borderRadius: "12px",
    padding: "20px",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    transition: "0.2s",
  },

  text: {
    color: "#666",
  },
};

export default Dashboard;