
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/logo.jpeg";

function Navbar() {
  const { user, logout } = useAuth();
  const [showMenu, setShowMenu] = useState(false);

  const initials = user?.fullName
    ? user.fullName
        .split(" ")
        .map((n) => n[0])
        .join("")
        .substring(0, 2)
        .toUpperCase()
    : "BK";

  return (
    <header className="navbar">
      <div className="nav-left">

        <button className="menu-btn">☰</button>

        <img
          src={logo}
          alt="Bakene"
          className="navbar-logo"
        />

        
      </div>

      <div className="nav-right">

        <button className="icon-btn">🔔</button>

        <div
          className="profile"
          onClick={() => setShowMenu(!showMenu)}
        >
          <div className="avatar">
            {initials}
          </div>

          <div className="profile-info">
            <strong>{user?.role || "User"}</strong>
            <small>{user?.email}</small>
          </div>

          <span>▼</span>
        </div>

        {showMenu && (
          <div className="profile-menu">

            <button>👤 My Profile</button>

            <button>⚙ Settings</button>

            <button
              className="logout-option"
              onClick={logout}
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