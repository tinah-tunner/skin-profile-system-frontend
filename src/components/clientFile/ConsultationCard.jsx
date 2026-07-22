import React from "react";

export default function ConsultationCard({
  consultation,
  expanded,
  onToggle,
  onEdit,
  onDelete,
}) {
  return (
    <div style={styles.card}>
      <div style={styles.header} onClick={onToggle}>
        <h3>{consultation.consultationDate}</h3>

        <span style={{ fontSize: 25 }}>
          {expanded ? "−" : "+"}
        </span>
      </div>

      {expanded && (
        <div style={styles.body}>
          <p>
            <strong>Skin Concern:</strong>{" "}
            {consultation.skinConcern}
          </p>

          <p>
            <strong>Treatment:</strong>{" "}
            {consultation.treatmentType}
          </p>

          <p>
            <strong>Notes:</strong>{" "}
            {consultation.notes}
          </p>

          <p>
            <strong>Products Recommended:</strong>{" "}
            {consultation.productRecommendations}
          </p>

          {consultation.imageUrl && (
            <img
              src={consultation.imageUrl}
              alt="Consultation"
              style={styles.image}
            />
          )}

          <div style={styles.buttons}>
            <button
              style={styles.edit}
              onClick={onEdit}
            >
              Edit
            </button>

            <button
              style={styles.delete}
              onClick={onDelete}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  card: {
    background: "#fff",
    borderRadius: 18,
    padding: 20,
    marginBottom: 20,
    border: "2px solid #ffe3d7",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    cursor: "pointer",
    color: "#ff6b35",
  },

  body: {
    marginTop: 20,
  },

  image: {
    width: "100%",
    marginTop: 15,
    borderRadius: 12,
  },

  buttons: {
    display: "flex",
    gap: 15,
    marginTop: 20,
  },

  edit: {
    background: "#ff9f1c",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: 8,
    cursor: "pointer",
  },

  delete: {
    background: "#e63946",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: 8,
    cursor: "pointer",
  },
};