
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ClientProfile() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [client, setClient] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://skin-profile-system-backendfinal.onrender.com/api/clients/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load client");
        return res.json();
      })
      .then((data) => setClient(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  const calculateAge = (dob) => {
    if (!dob) return "N/A";

    const birth = new Date(dob);
    const today = new Date();

    let age = today.getFullYear() - birth.getFullYear();

    const month = today.getMonth() - birth.getMonth();

    if (
      month < 0 ||
      (month === 0 && today.getDate() < birth.getDate())
    ) {
      age--;
    }

    return age;
  };

  if (loading) return <h2>Loading Client Profile...</h2>;

  if (!client) return <h2>Client not found.</h2>;

  return (
    <div
      style={{
        padding: "30px",
        background: "#f8f9fc",
        minHeight: "100vh",
      }}
    >
      {/* HEADER */}

      <div
        style={{
          background: "#fff",
          borderRadius: "20px",
          padding: "30px",
          display: "flex",
          alignItems: "center",
          gap: "25px",
          boxShadow: "0 8px 20px rgba(0,0,0,.08)",
          marginBottom: "25px",
        }}
      >
        <img
          src={
            client.profileImage ||
            "https://via.placeholder.com/140?text=Client"
          }
          alt="Client"
          style={{
            width: "140px",
            height: "140px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "5px solid #ff6b00",
          }}
        />

        <div>
          <h1 style={{ color: "#ff6b00" }}>
            {client.firstName} {client.lastName}
          </h1>

          <p>
            <strong>Status:</strong> Active Client
          </p>

          <p>
            <strong>Age:</strong> {calculateAge(client.dateOfBirth)}
          </p>

          <p>
            <strong>Skin Type:</strong> {client.skinType || "N/A"}
          </p>
        </div>
      </div>

      {/* PERSONAL INFORMATION */}

      <div className="profile-card">
        <h2>👤 Personal Information</h2>

        <p><strong>Name:</strong> {client.firstName} {client.lastName}</p>
        <p><strong>Email:</strong> {client.email}</p>
        <p><strong>Phone:</strong> {client.phoneNumber}</p>
        <p><strong>Gender:</strong> {client.gender}</p>
        <p><strong>Date of Birth:</strong> {client.dateOfBirth}</p>
        <p><strong>Address:</strong> {client.address}</p>
      </div>

      {/* SKIN */}

      <div className="profile-card">
        <h2>✨ Skin Assessment</h2>

        <p><strong>Skin Type:</strong> {client.skinType}</p>
        <p><strong>Skin Concern:</strong> {client.skinConcern}</p>
      </div>

      {/* MEDICAL */}

      <div className="profile-card">
        <h2>🏥 Medical Information</h2>

        <p><strong>Allergies:</strong> {client.allergies || "None"}</p>

        <p>
          <strong>Medication:</strong>{" "}
          {client.currentMedication || "None"}
        </p>

        <p>
          <strong>Medical Conditions:</strong>{" "}
          {client.medicalConditions || "None"}
        </p>
      </div>

      {/* PHOTOS */}

      <div className="profile-card">
        <h2>📷 Progress Photos</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          <div>
            <h3>Before</h3>

            {client.beforeImage ? (
              <img
                src={client.beforeImage}
                alt="Before"
                style={{
                  width: "100%",
                  borderRadius: "12px",
                }}
              />
            ) : (
              <p>No Before Image</p>
            )}
          </div>

          <div>
            <h3>After</h3>

            {client.afterImage ? (
              <img
                src={client.afterImage}
                alt="After"
                style={{
                  width: "100%",
                  borderRadius: "12px",
                }}
              />
            ) : (
              <p>No After Image</p>
            )}
          </div>
        </div>
      </div>

      {/* APPOINTMENTS */}

      <div className="profile-card">
        <h2>📅 Upcoming Appointments</h2>

        <p>No appointments scheduled.</p>
      </div>

      {/* NOTIFICATIONS */}

      <div className="profile-card">
        <h2>🔔 Notifications</h2>

        <p>No notifications available.</p>
      </div>

      {/* NOTES */}

      <div className="profile-card">
        <h2>📝 Therapist Notes</h2>

        <p>
          {client.therapistNotes || "No therapist notes available."}
        </p>
      </div>

      {/* ACTIONS */}

      <div
        style={{
          display: "flex",
          gap: "15px",
          marginTop: "30px",
          flexWrap: "wrap",
        }}
      >
        <button
          className="orange-btn"
          onClick={() => navigate("/clients")}
        >
          ← Back to Clients
        </button>

        <button className="orange-btn">
          ✏ Edit Client
        </button>

        <button className="orange-btn">
          📅 Book Appointment
        </button>

        <button className="orange-btn">
          📷 Upload Progress Photos
        </button>
      </div>
    </div>
  );
}

export default ClientProfile;