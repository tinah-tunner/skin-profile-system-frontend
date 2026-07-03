function ContactInformation({ formData, handleChange }) {
  return (
    <div className="form-card">
      <h2>📞 Contact Information</h2>

      <div className="form-grid">

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
        />

        <input
          type="text"
          name="address"
          placeholder="Residential Address"
          value={formData.address}
          onChange={handleChange}
        />

        <input
          type="text"
          name="emergencyContact"
          placeholder="Emergency Contact"
          value={formData.emergencyContact}
          onChange={handleChange}
        />

      </div>
    </div>
  );
}

export default ContactInformation;