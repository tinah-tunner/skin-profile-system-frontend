import React from "react";

export default function ClientInformation({ client }) {
  return (
    <div style={styles.card}>
      <h2 style={styles.title}>Client Information</h2>

      <div style={styles.grid}>
        <Info label="First Name" value={client.firstName} />
        <Info label="Last Name" value={client.lastName} />
        <Info label="Email" value={client.email} />
        <Info label="Phone" value={client.phoneNumber} />
        <Info label="Gender" value={client.gender} />
        <Info label="Date of Birth" value={client.dateOfBirth} />
        <Info label="Skin Type" value={client.skinType} />
        <Info label="Skin Concern" value={client.skinConcern} />
        <Info label="Allergies" value={client.allergies} />
        <Info label="Medication" value={client.currentMedication} />
        <Info label="Medical Conditions" value={client.medicalConditions} />
        <Info label="Therapist Notes" value={client.therapistNotes} />
      </div>
    </div>
  );
}

function Info({ label, value }) {
  return (
    <div style={styles.info}>
      <strong>{label}</strong>
      <p>{value || "Not Recorded"}</p>
    </div>
  );
}

const styles = {
  card: {
    background: "#fff",
    padding: 25,
    borderRadius: 20,
    marginTop: 25,
    border: "2px solid #ffe3d7",
  },

  title: {
    color: "#ff6b35",
    marginBottom: 20,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
    gap: 20,
  },

  info: {
    background: "#fff8f4",
    padding: 15,
    borderRadius: 12,
  },
};