import { useEffect, useState } from "react";
import Layout from "./Layout";

function Therapists() {
 const [therapists, setTherapists] = useState([
  {
    id: 1,
    firstName: "Carmina",
    lastName: "Mbatsane",
    phone: "082 123 4567",
    profileImage: "https://via.placeholder.com/150",
    clientsManaged: 25,
    consultationsCompleted: 120,
    treatmentsPerformed: 95,
    followUps: 35,
    todaySessions: 6,
    upcomingAppointments: 12,
    status: "Available",
    notes:
      "Senior skincare therapist specialising in acne and pigmentation treatment.",
    specialSkills:
      "Skin Analysis, Chemical Peels, Facial Therapy",
    trainingHistory:
      "Advanced Skin Therapy Certification",
  },

  {
    id: 2,
    firstName: "Jeanne",
    lastName: "Loji",
    phone: "083 456 7890",
    profileImage: "https://via.placeholder.com/150",
    clientsManaged: 18,
    consultationsCompleted: 80,
    treatmentsPerformed: 65,
    followUps: 20,
    todaySessions: 4,
    upcomingAppointments: 8,
    status: "Busy",
    notes:
      "Specialist in anti-aging treatments and facial rejuvenation.",
    specialSkills:
      "Microneedling, Skin Rejuvenation",
    trainingHistory:
      "Dermatology Support Training",
  },
]); 

  const load = () => {
    fetch("http://localhost:8080/api/therapists")
      .then((res) => res.json())
      .then((data) => setTherapists(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    load();
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:8080/api/therapists/${id}`, {
      method: "DELETE",
    }).then(() => load());
  };

  return (
    <Layout>
      <h1 style={styles.heading}>Therapists Management</h1>

      <div style={styles.cardsContainer}>
        {therapists.map((t) => (
          <div key={t.id} style={styles.card}>
            {/* Therapist Profile */}
            <div style={styles.section}>
              <h2 style={styles.sectionTitle}>
                Therapist Profile
              </h2>

              <div style={styles.profile}>
                <img
                  src={
                    t.profileImage ||
                    "https://via.placeholder.com/150?text=Therapist"
                  }
                  alt="Therapist"
                  style={styles.profileImage}
                />

                <h3>
                  {t.firstName} {t.lastName}
                </h3>

                <p>
                  📞 {t.phone || "Phone Number Not Added"}
                </p>
              </div>
            </div>

            {/* Responsibilities */}
            <div style={styles.section}>
              <h2 style={styles.sectionTitle}>
                Responsibilities
              </h2>

              <ul style={styles.list}>
                <li>Create Client Profiles</li>
                <li>Update Skin Profiles</li>
                <li>Upload Consultation Notes</li>
                <li>Upload Before Images</li>
                <li>Upload After Images</li>
                <li>Track Skin Progress</li>
                <li>Manage Product Recommendations</li>
                <li>Maintain Consultation History</li>
                <li>Generate Client Reports</li>
              </ul>
            </div>

            {/* Performance Dashboard */}
            <div style={styles.section}>
              <h2 style={styles.sectionTitle}>
                Performance Dashboard
              </h2>

              <div style={styles.statsGrid}>
                <div style={styles.statBox}>
                  <h3>{t.clientsManaged || 0}</h3>
                  <p>Clients Managed</p>
                </div>

                <div style={styles.statBox}>
                  <h3>{t.consultationsCompleted || 0}</h3>
                  <p>Consultations</p>
                </div>

                <div style={styles.statBox}>
                  <h3>{t.treatmentsPerformed || 0}</h3>
                  <p>Treatments</p>
                </div>

                <div style={styles.statBox}>
                  <h3>{t.followUps || 0}</h3>
                  <p>Follow Ups</p>
                </div>
              </div>
            </div>

            {/* Schedule */}
            <div style={styles.section}>
              <h2 style={styles.sectionTitle}>
                Schedule Management
              </h2>

              <ul style={styles.list}>
                <li>
                  Today's Sessions: {t.todaySessions || 0}
                </li>

                <li>
                  Upcoming Appointments:{" "}
                  {t.upcomingAppointments || 0}
                </li>

                <li>
                  Status: {t.status || "Available"}
                </li>

                <li>Calendar Enabled</li>

                <li>Booking Management Enabled</li>
              </ul>
            </div>

            {/* Therapist Notes */}
            <div style={styles.section}>
              <h2 style={styles.sectionTitle}>
                Therapist Notes
              </h2>

              <p>
                {t.notes ||
                  "No therapist notes recorded yet."}
              </p>

              <br />

              <p>
                <strong>Special Skills:</strong>{" "}
                {t.specialSkills ||
                  "Skin Analysis & Facial Therapy"}
              </p>

              <p>
                <strong>Training History:</strong>{" "}
                {t.trainingHistory ||
                  "No training history recorded"}
              </p>
            </div>

            {/* Actions */}
            <div style={styles.actions}>
              <button style={styles.editBtn}>
                Edit Therapist
              </button>

              <button
                style={styles.deleteBtn}
                onClick={() => handleDelete(t.id)}
              >
                Delete Therapist
              </button>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

const styles = {
  heading: {
    color: "#ff6b35",
    marginBottom: "20px",
    textShadow: "2px 2px 6px rgba(244,162,97,0.4)",
  },

  cardsContainer: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(550px, 1fr))",
    gap: "25px",
  },

  card: {
    background: "#ffffff",
    borderRadius: "20px",
    overflow: "hidden",
    border: "2px solid #f4c2c2",
    boxShadow:
      "0 8px 25px rgba(188,143,143,0.25)",
  },

  section: {
    padding: "20px",
    borderBottom: "1px solid #f4c2c2",
  },

  sectionTitle: {
    color: "#ff6b35",
    marginBottom: "15px",
  },

  profile: {
    textAlign: "center",
  },

  profileImage: {
    width: "140px",
    height: "140px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "4px solid #ff6b35",
  },

  list: {
    paddingLeft: "20px",
    color: "#555",
    lineHeight: "1.8",
  },

  statsGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "12px",
  },

  statBox: {
    background: "#fff5ef",
    border: "1px solid #f4c2c2",
    borderRadius: "12px",
    padding: "15px",
    textAlign: "center",
  },

  actions: {
    padding: "20px",
    display: "flex",
    gap: "10px",
  },

  editBtn: {
    flex: 1,
    background: "#ffb703",
    color: "#fff",
    border: "none",
    padding: "12px",
    borderRadius: "10px",
    cursor: "pointer",
  },

  deleteBtn: {
    flex: 1,
    background: "#ff6b35",
    color: "#fff",
    border: "none",
    padding: "12px",
    borderRadius: "10px",
    cursor: "pointer",
  },
};

export default Therapists;