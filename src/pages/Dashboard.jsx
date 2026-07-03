import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDashboardStats } from "../services/dashboardService";

function Dashboard() {
  const navigate = useNavigate();

  const [stats, setStats] = useState({
    totalClients: 0,
    totalTherapists: 0,
    totalBookings: 0,
    totalProducts: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDashboard() {
      try {
        const data = await getDashboardStats();
        setStats(data);
      } catch (error) {
        console.error("Failed to load dashboard", error);
      } finally {
        setLoading(false);
      }
    }

    loadDashboard();
  }, []);

  const cards = [
    {
      title: "Clients",
      value: stats.totalClients,
      icon: "👥",
      route: "/clients",
    },
    {
      title: "Therapists",
      value: stats.totalTherapists,
      icon: "💆",
      route: "/therapists",
    },
    {
      title: "Bookings",
      value: stats.totalBookings,
      icon: "📅",
      route: "/booking",
    },
    {
      title: "Products",
      value: stats.totalProducts,
      icon: "🧴",
      route: "/products",
    },
  ];

  if (loading) {
    return <h2>Loading dashboard...</h2>;
  }

 return (
  <>
    <h1 className="nav-title">Dashboard</h1>

    <div className="dashboard-grid">
      {cards.map((card) => (
        <div
          key={card.title}
          className="stat-card"
          onClick={() => navigate(card.route)}
        >
          <div className="stat-icon">{card.icon}</div>

          <div className="stat-title">{card.title}</div>

          <div className="stat-number">{card.value}</div>
        </div>
      ))}
    </div>

    <div className="dashboard-bottom">

      <div className="panel">
        <h3>Upcoming Appointments</h3>

        <p>No appointments today.</p>
      </div>

      <div className="panel">

        <h3>Quick Actions</h3>

        <button
          className="quick-btn"
          onClick={() => navigate("/add-client")}
        >
          + Add Client
        </button>

        <button
          className="quick-btn"
          onClick={() => navigate("/booking")}
        >
          Book Appointment
        </button>

        <button
          className="quick-btn"
          onClick={() => navigate("/products")}
        >
          View Products
        </button>

      </div>

    </div>
  </>
);
}
export default Dashboard;