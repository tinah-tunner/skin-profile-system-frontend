import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { getDashboardStats } from "../services/dashboardService";

function Dashboard() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const [stats, setStats] = useState({
    totalClients: 0,
    totalBookings: 0,
    totalProducts: 0,
    totalNotifications: 0,
    totalReports: 0,
    totalConsultations: 0,
  });

  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function loadDashboard() {
      try {
        const data = await getDashboardStats();

        setStats((prev) => ({
          ...prev,
          ...data,
        }));
      } catch (err) {
        console.error("Failed to load dashboard:", err);
      } finally {
        setLoading(false);
      }
    }

    loadDashboard();
  }, []);

  if (loading) {
    return <h2>Loading Dashboard...</h2>;
  }

  const cards = [
    {
      title: "Clients",
      value: stats.totalClients,
      icon: "👥",
      route: "/clients",
    },
    {
      title: "Appointments",
      value: stats.totalBookings,
      icon: "📅",
      route: "/booking",
    },
    {
      title: "Consultations",
      value: stats.totalConsultations,
      icon: "📝",
      route: "/add-consultation",
    },
    {
      title: "Products",
      value: stats.totalProducts,
      icon: "🧴",
      route: "/products",
    },
    {
      title: "Reports",
      value: stats.totalReports,
      icon: "📊",
      route: "/dashboard",
    },
    {
      title: "Notifications",
      value: stats.totalNotifications,
      icon: "🔔",
      route: "/notifications",
    },
  ];

  return (
    <>
      <div className="dashboard-header">
        <h1 className="nav-title">Dashboard</h1>

        <button
          className="dashboard-logout-btn"
          onClick={logout}
        >
          🚪 Logout
        </button>
      </div>

      <input
        type="text"
        placeholder="🔍 Search clients, appointments, products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="dashboard-search"
      />

      <div className="dashboard-grid">
        {cards.map((card) => (
          <div
            key={card.title}
            className="stat-card"
            onClick={() => navigate(card.route)}
            style={{ cursor: "pointer" }}
          >
            <div className="stat-icon">{card.icon}</div>

            <div className="stat-title">{card.title}</div>

            <div className="stat-number">{card.value}</div>
          </div>
        ))}
      </div>

      <div className="dashboard-bottom">
        <div className="panel">
          <h3>📅 Upcoming Appointments</h3>
          <p>No appointments scheduled.</p>
        </div>

        <div className="panel">
          <h3>👥 Recent Clients</h3>
          <p>No recent clients.</p>
        </div>

        <div className="panel">
          <h3>🔔 Recent Activity</h3>
          <p>Activity will appear here.</p>
        </div>
      </div>
    </>
  );
}

export default Dashboard;