function MedicalInformation({ formData, handleChange }) {
  return (
    <div className="form-card">

      <h2>⚕ Medical Information</h2>

      <textarea
        name="allergies"
        placeholder="Allergies"
        value={formData.allergies}
        onChange={handleChange}
      />

      <textarea
        name="currentMedication"
        placeholder="Current Medication"
        value={formData.currentMedication}
        onChange={handleChange}
      />

      <textarea
        name="medicalConditions"
        placeholder="Medical Conditions"
        value={formData.medicalConditions}
        onChange={handleChange}
      />

    </div>
  );
}

export default MedicalInformation;