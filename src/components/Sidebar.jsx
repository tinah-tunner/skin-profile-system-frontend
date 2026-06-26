import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <h1>BA KENE</h1>
        <p>SKIN CARE</p>
        <span>Glow with Confidence</span>
      </div>

      <nav className="sidebar-links">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/clients">Clients</Link>
        <Link to="/therapists">Therapists</Link>
        <Link to="/booking">Booking</Link>
        <Link to="/calendar">Calendar</Link>
        <Link to="/products">Products</Link>
        <Link to="/notifications">Notifications</Link>
        <Link to="/admin">Admin</Link>
      </nav>
    </aside>
  );
}

export default Sidebar;