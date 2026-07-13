import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddConsultation() {
  const navigate = useNavigate();

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

    const consultations =
      JSON.parse(localStorage.getItem("consultations")) || [];

    consultations.push(form);

    localStorage.setItem(
      "consultations",
      JSON.stringify(consultations)
    );

    navigate("/consultations");
  };

  return (
    <div className="profile-card">
      <h2>Add Consultation</h2>

      <form className="consultation-form" onSubmit={handleSubmit}>
        <input
          name="treatment"
          placeholder="Treatment Performed"
          value={form.treatment}
          onChange={handleChange}
          required
        />

        <textarea
          name="notes"
          placeholder="Consultation Notes"
          value={form.notes}
          onChange={handleChange}
          required
        />

        <textarea
          name="products"
          placeholder="Products Used"
          value={form.products}
          onChange={handleChange}
        />

        <input
          type="date"
          name="nextVisit"
          value={form.nextVisit}
          onChange={handleChange}
        />

        <button type="submit">
          Save Consultation
        </button>
      </form>
    </div>
  );
}