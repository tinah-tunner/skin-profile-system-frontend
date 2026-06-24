import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div>
      <h2>Skin Profile System</h2>

      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/dashboard">Dashboard</Link> |{" "}
        <Link to="/clients">Clients</Link> |{" "}
        <Link to="/therapists">Therapists</Link>
      </nav>

      <hr />

      {children}
    </div>
  );
}