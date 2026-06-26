import { useParams } from "react-router-dom";

function ClientProfile() {
  const { id } = useParams();

  return (
    <div className="profile-container">

      <div className="profile-header">
        <h1>Client Profile</h1>
        <span>Client ID: {id}</span>
      </div>

      <div className="profile-card">
        <h2>Personal Information</h2>

        <p><strong>Name:</strong> Sarah Johnson</p>
        <p><strong>Email:</strong> sarah@email.com</p>
        <p><strong>Phone:</strong> 0821234567</p>
      </div>

      <div className="profile-card">
        <h2>Skin Analysis</h2>

        <p><strong>Skin Type:</strong> Dry</p>
        <p><strong>Concerns:</strong> Hyperpigmentation</p>
        <p><strong>Allergies:</strong> None</p>
      </div>

      <div className="profile-card">
        <h2>Treatment Notes</h2>

        <p>
          Client responding well to treatment.
          Continue hydration therapy.
        </p>
      </div>

      <div className="profile-card">
        <h2>Before / After Photos</h2>

        <div className="photo-grid">
          <div className="photo-box">
            Before Photo
          </div>

          <div className="photo-box">
            After Photo
          </div>
        </div>
      </div>

    </div>
  );
}

export default ClientProfile;