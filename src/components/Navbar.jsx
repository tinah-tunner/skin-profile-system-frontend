import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Dashboard</Link>
      <Link to="/clients">Clients</Link>
      <Link to="/calendar">Calendar</Link>
      <Link to="/booking">Booking</Link>
      <Link to="/admin">Admin</Link>
      <Link to="/notifications">Notifications</Link>
    </nav>
  );
}

export default Navbar;