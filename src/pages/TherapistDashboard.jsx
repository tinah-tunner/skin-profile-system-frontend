import { useNavigate } from "react-router-dom";
import {
  FiUserPlus,
  FiUsers,
  FiCalendar,
  FiClipboard,
} from "react-icons/fi";

function TherapistDashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">

      <div className="dashboard-header">
        <div>
          <h1>Therapist Dashboard</h1>
          <p>Welcome back! Manage your clients and consultations.</p>
        </div>

        <button
          className="orange-btn"
          onClick={() => navigate("/add-client")}
        >
          <FiUserPlus /> Add Client
        </button>
      </div>

      <div className="dashboard-cards">

        <div className="dashboard-card">
          <FiUsers className="card-icon" />
          <h3>Clients</h3>
          <p>View and manage all registered clients.</p>

          <button
            className="orange-btn"
            onClick={() => navigate("/clients")}
          >
            View Clients
          </button>
        </div>

        <div className="dashboard-card">
          <FiCalendar className="card-icon" />
          <h3>Bookings</h3>
          <p>Schedule and manage appointments.</p>

          <button
            className="orange-btn"
            onClick={() => navigate("/booking")}
          >
            Open Booking
          </button>
        </div>

        <div className="dashboard-card">
          <FiClipboard className="card-icon" />
          <h3>Consultations</h3>
          <p>Create and manage consultations.</p>

          <button
            className="orange-btn"
            onClick={() => navigate("/add-consultation")}
          >
            New Consultation
          </button>
        </div>

      </div>

    </div>
  );
}

export default TherapistDashboard;