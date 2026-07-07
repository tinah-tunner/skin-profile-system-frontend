import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { getDashboardStats } from "../services/dashboardService";

function Dashboard() {
  const navigate = useNavigate();

  const [stats, setStats] = useState({
    totalClients: 0,
    totalTherapists: 0,
    totalBookings: 0,
    totalProducts: 0,
    totalNotifications: 0,
    totalReports: 0,
  });

  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const { logout } = useAuth();

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
      title: "Therapists",
      value: stats.totalTherapists,
      icon: "💆",
      route: "/therapists",
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
          <h3>Quick Actions</h3>

          <button
            className="quick-btn"
            onClick={() => navigate("/add-client")}
          >
            + Add Client
          </button>

          <button
            className="quick-btn"
            onClick={() => navigate("/clients")}
          >
            View Clients
          </button>

          <button
            className="quick-btn"
            onClick={() => navigate("/booking")}
          >
            Book Appointment
          </button>

          <button
            className="quick-btn"
            onClick={() => navigate("/therapists")}
          >
            Therapists
          </button>

          <button
            className="quick-btn"
            onClick={() => navigate("/products")}
          >
            Products
          </button>

          <button
            className="quick-btn"
            onClick={() => navigate("/calendar")}
          >
            Calendar
          </button>

          <button
            className="quick-btn"
            onClick={() => navigate("/notifications")}
          >
            Notifications
          </button>
        </div>

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