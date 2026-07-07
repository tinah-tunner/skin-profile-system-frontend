import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ClientProfile() {
  const { id } = useParams();
  const [client, setClient] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://skin-profile-system-backendfinal.onrender.com/api/clients/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to load client");
        }
        return res.json();
      })
      .then((data) => {
        setClient(data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <h2>Loading client profile...</h2>;
  }

  if (!client) {
    return <h2>Client not found.</h2>;
  }

  return (
    <div className="profile-container">

      <div className="profile-header">
        <h1>Client Profile</h1>
        <span>Client ID: {client.id}</span>
      </div>

      <button onClick={() => navigate(`/client/${client.id}`)}>
  View Profile
</button>

      <div className="profile-card">
        <h2>Personal Information</h2>

        <p><strong>Name:</strong> {client.firstName} {client.lastName}</p>
        <p><strong>Email:</strong> {client.email}</p>
        <p><strong>Phone:</strong> {client.phone}</p>
        <p><strong>Age:</strong> {client.age}</p>
      </div>

      <div className="profile-card">
        <h2>Skin Analysis</h2>

        <p><strong>Skin Type:</strong> {client.skinType}</p>
        <p><strong>Allergies:</strong> {client.allergies}</p>
        <p><strong>Medical Notes:</strong> {client.medicalNotes}</p>
      </div>

      <div className="profile-card">
        <h2>Treatment Notes</h2>

        <p>{client.medicalNotes || "No treatment notes available."}</p>
      </div>

      <div className="profile-card">
        <h2>Before / After Photos</h2>

        <div className="photo-grid">

          <div className="photo-box">
            {client.beforeImage ? (
              <img
                src={client.beforeImage}
                alt="Before"
                style={{ width: "100%", borderRadius: "10px" }}
              />
            ) : (
              "No Before Photo"
            )}
          </div>

          <div className="photo-box">
            {client.afterImage ? (
              <img
                src={client.afterImage}
                alt="After"
                style={{ width: "100%", borderRadius: "10px" }}
              />
            ) : (
              "No After Photo"
            )}
          </div>

        </div>
      </div>

    </div>
  );
}

export default ClientProfile;