import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/">Dashboard</Link>
      <Link to="/clients">Clients</Link>
      <Link to="/booking">Booking</Link>
      <Link to="/calendar">Calendar</Link>
      <Link to="/notifications">Notifications</Link>
      <Link to="/products">Products</Link>
      <Link to="/admin">Admin</Link>
    </div>
  );
}

export default Sidebar;