import ConsultationCard from "./ConsultationCard";

export default function ConsultationHistory({
  consultations,
  expandedConsultation,
  setExpandedConsultation,
  setEditingConsultation,
  setShowConsultationForm,
  handleDeleteConsultation,
}) {
  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <h2>Consultation History</h2>

        <button
          style={styles.add}
          onClick={() => {
            setEditingConsultation(null);
            setShowConsultationForm(true);
          }}
        >
          + New Consultation
        </button>
      </div>

      {consultations.length === 0 ? (
        <p>No consultations found.</p>
      ) : (
        consultations.map((consultation) => (
          <ConsultationCard
            key={consultation.id}
            consultation={consultation}
            expanded={
              expandedConsultation === consultation.id
            }
            onToggle={() =>
              setExpandedConsultation(
                expandedConsultation === consultation.id
                  ? null
                  : consultation.id
              )
            }
            onEdit={() => {
              setEditingConsultation(consultation);
              setShowConsultationForm(true);
            }}
            onDelete={() =>
              handleDeleteConsultation(
                consultation.id
              )
            }
          />
        ))
      )}
    </div>
  );
}

const styles = {
  card: {
    marginTop: 30,
    background: "#fff",
    padding: 25,
    borderRadius: 20,
    border: "2px solid #ffe3d7",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  add: {
    background: "#ff6b35",
    color: "#fff",
    border: "none",
    padding: "12px 20px",
    borderRadius: 10,
    cursor: "pointer",
    fontWeight: "bold",
  },
};