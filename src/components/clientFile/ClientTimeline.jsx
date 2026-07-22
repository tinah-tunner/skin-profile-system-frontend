// src/components/clientFile/ClientTimeline.jsx

export default function ClientTimeline({ consultations }) {
  const sorted = [...consultations].sort(
    (a, b) =>
      new Date(b.consultationDate) -
      new Date(a.consultationDate)
  );

  return (
    <div style={styles.card}>
      <h2 style={styles.title}>Client Timeline</h2>

      {sorted.length === 0 ? (
        <p>No activity yet.</p>
      ) : (
        sorted.map((consultation) => (
          <div
            key={consultation.id}
            style={styles.item}
          >
            <div style={styles.circle}></div>

            <div>
              <h3>
                {consultation.consultationDate}
              </h3>

              <p>
                Treatment: {consultation.treatmentType}
              </p>

              <p>
                Skin Concern: {consultation.skinConcern}
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

const styles = {
  card: {
    background: "#fff",
    marginTop: 30,
    padding: 25,
    borderRadius: 20,
    border: "2px solid #ffe3d7",
  },

  title: {
    color: "#ff6b35",
    marginBottom: 20,
  },

  item: {
    display: "flex",
    gap: 20,
    marginBottom: 25,
  },

  circle: {
    width: 18,
    height: 18,
    borderRadius: "50%",
    background: "#ff6b35",
    marginTop: 6,
  },
};