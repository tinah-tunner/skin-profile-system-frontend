import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ConsultationHistory() {
  const navigate = useNavigate();
  const [consultations, setConsultations] = useState([]);

  useEffect(() => {
    const savedConsultations =
      JSON.parse(localStorage.getItem("consultations")) || [];

    setConsultations(savedConsultations);
  }, []);

  return (
    <div className="profile-card">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h2>Consultation History</h2>

        <button onClick={() => navigate("/add-consultation")}>
          + New Consultation
        </button>
      </div>

      {consultations.length === 0 ? (
        <p>No consultations have been saved.</p>
      ) : (
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr>
              <th>Treatment</th>
              <th>Products</th>
              <th>Next Visit</th>
              <th>Notes</th>
            </tr>
          </thead>

          <tbody>
            {consultations.map((consultation, index) => (
              <tr key={index}>
                <td>{consultation.treatment}</td>
                <td>{consultation.products}</td>
                <td>{consultation.nextVisit}</td>
                <td>{consultation.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ConsultationHistory;