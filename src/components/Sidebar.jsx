import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/logo.jpeg";

import {
  FiHome,
  FiUsers,
  FiShoppingBag,
  FiBell,
  FiLogOut,
  FiClipboard,
} from "react-icons/fi";

function Sidebar({ sidebarOpen }) {
  const { logout } = useAuth();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
      <div className="brand">
        <img
          src={logo}
          alt="Bakene Logo"
          className="sidebar-logo"
        />

        <p>Skin Profile System</p>
      </div>

      <nav className="sidebar-links">
        <Link
          to="/dashboard"
          className={isActive("/dashboard") ? "active" : ""}
        >
          <FiHome />
          Dashboard
        </Link>

        <Link
          to="/clients"
          className={isActive("/clients") ? "active" : ""}
        >
          <FiUsers />
          Clients
        </Link>

        <Link
          to="/booking"
          className={isActive("/booking") ? "active" : ""}
        >
          <FiClipboard />
          Booking
        </Link>

        <Link
          to="/add-consultation"
          className={isActive("/add-consultation") ? "active" : ""}
        >
          <FiClipboard />
          Add Consultation
        </Link>

    
        <Link
          to="/products"
          className={isActive("/products") ? "active" : ""}
        >
          <FiShoppingBag />
          Products
        </Link>

        <Link
          to="/notifications"
          className={isActive("/notifications") ? "active" : ""}
        >
          <FiBell />
          Notifications
        </Link>
      </nav>

      <button className="logout-btn" onClick={logout}>
        <FiLogOut />
        Logout
      </button>
    </aside>
  );
}

export default Sidebar;