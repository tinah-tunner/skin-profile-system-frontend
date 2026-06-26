import { useState } from "react";

export default function AddConsultation() {
  const [form, setForm] = useState({
    treatment: "",
    notes: "",
    products: "",
    nextVisit: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);

    alert("Consultation Saved");
  };

  return (
    <div className="profile-card">
      <h2>Add Consultation</h2>

      <form className="consultation-form" onSubmit={handleSubmit}>
        <input
          name="treatment"
          placeholder="Treatment Performed"
          onChange={handleChange}
        />

        <textarea
          name="notes"
          placeholder="Therapist Notes"
          onChange={handleChange}
        />

        <textarea
          name="products"
          placeholder="Products Used"
          onChange={handleChange}
        />

        <input
          type="date"
          name="nextVisit"
          onChange={handleChange}
        />

        <button type="submit">
          Save Consultation
        </button>
      </form>
    </div>
  );
}