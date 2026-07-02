import { useState } from "react";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();
  const [showMenu, setShowMenu] = useState(false);

  const initials = user?.email
    ? user.email.substring(0, 2).toUpperCase()
    : "BK";

  return (
    <header className="navbar">
      {/* Left Side */}
      <div className="nav-left">
        <button className="menu-btn">☰</button>

        <div>
          <h2 className="nav-title">Dashboard</h2>
          <p className="nav-subtitle">
            Welcome, {user?.email || "Guest"}
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="nav-right">

        {/* Notification */}
        <button className="icon-btn">
          🔔
        </button>

        {/* Profile */}
        <div
          className="profile"
          onClick={() => setShowMenu(!showMenu)}
        >
          <div className="avatar">
            {initials}
          </div>

          <div className="profile-info">
            <strong>{user?.role}</strong>
            <small>{user?.email}</small>
          </div>

          <span>▼</span>
        </div>

        {showMenu && (
          <div className="profile-menu">

            <button>
              👤 My Profile
            </button>

            <button>
              ⚙ Settings
            </button>

            <button
              onClick={logout}
              className="logout-option"
            >
              🚪 Logout
            </button>

          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;