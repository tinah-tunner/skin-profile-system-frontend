function TherapistNotes({ formData, handleChange }) {
  return (
    <div className="form-card">
      <h2>📝 Therapist Notes</h2>

      <textarea
        name="therapistNotes"
        placeholder="Consultation notes..."
        rows="8"
        value={formData.therapistNotes}
        onChange={handleChange}
      />
    </div>
  );
}

export default TherapistNotes;