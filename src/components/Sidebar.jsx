import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import {
  FiHome,
  FiUsers,
  FiCalendar,
  FiShoppingBag,
  FiBell,
  FiSettings,
  FiLogOut,
  FiClipboard,
} from "react-icons/fi";

function Sidebar({ sidebarOpen }) {
  const { user, logout } = useAuth();
  const location = useLocation();

  const role = user?.role;

  const isActive = (path) => location.pathname === path;

  return (
    <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
      <div className="brand">
        <h1>BA KENE</h1>
        <span>SKIN CARE THAT SHOWS UP!</span>
      </div>

      <nav className="sidebar-links">

        <Link
          to="/dashboard"
          className={isActive("/dashboard") ? "active" : ""}
        >
          <FiHome />
          Dashboard
        </Link>

        {(role === "ADMIN" || role === "THERAPIST") && (
          <Link
            to="/clients"
            className={isActive("/clients") ? "active" : ""}
          >
            <FiUsers />
            Clients
          </Link>
        )}

        {role === "ADMIN" && (
          <Link
            to="/therapists"
            className={isActive("/therapists") ? "active" : ""}
          >
            <FiUsers />
            Therapists
          </Link>
        )}

        <Link
          to="/booking"
          className={isActive("/booking") ? "active" : ""}
        >
          <FiClipboard />
          Bookings
        </Link>

        {(role === "ADMIN" || role === "THERAPIST") && (
          <Link
            to="/calendar"
            className={isActive("/calendar") ? "active" : ""}
          >
            <FiCalendar />
            Calendar
          </Link>
        )}

        <Link
          to="/products"
          className={isActive("/products") ? "active" : ""}
        >
          <FiShoppingBag />
          Products
        </Link>

        {(role === "ADMIN" || role === "THERAPIST") && (
          <Link
            to="/notifications"
            className={isActive("/notifications") ? "active" : ""}
          >
            <FiBell />
            Notifications
          </Link>
        )}

        {role === "ADMIN" && (
          <Link
            to="/admin"
            className={isActive("/admin") ? "active" : ""}
          >
            <FiSettings />
            Admin
          </Link>
        )}
      </nav>

      <button className="logout-btn" onClick={logout}>
        <FiLogOut />
        Logout
      </button>
    </aside>
  );
}

export default Sidebar;