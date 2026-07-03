const concerns = [
  "ACNE",
  "HYPERPIGMENTATION",
  "DARK_SPOTS",
  "FINE_LINES",
  "WRINKLES",
  "ROSACEA",
  "ECZEMA",
  "PSORIASIS",
  "SUN_DAMAGE",
  "UNEVEN_TONE",
  "LARGE_PORES",
  "BLACKHEADS",
  "WHITEHEADS",
  "DEHYDRATION",
  "DULL_SKIN",
  "SCARRING",
];

function SkinAssessment({ formData, handleChange }) {
  return (
    <div className="form-card">

      <h2>🌿 Skin Assessment</h2>

      <select
        name="skinType"
        value={formData.skinType}
        onChange={handleChange}
      >
        <option value="">Select Skin Type</option>
        <option value="NORMAL">Normal</option>
        <option value="DRY">Dry</option>
        <option value="OILY">Oily</option>
        <option value="COMBINATION">Combination</option>
        <option value="SENSITIVE">Sensitive</option>
        <option value="DEHYDRATED">Dehydrated</option>
      </select>

      <select
        name="skinConcern"
        value={formData.skinConcern}
        onChange={handleChange}
      >
        <option value="">Select Skin Concern</option>

        {concerns.map((concern) => (
          <option key={concern} value={concern}>
            {concern.replaceAll("_", " ")}
          </option>
        ))}
      </select>

    </div>
  );
}

export default SkinAssessment;