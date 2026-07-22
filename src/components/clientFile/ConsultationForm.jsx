import { useEffect, useState } from "react";

export default function ConsultationForm({
  consultation,
  clientId,
  onSave,
  onClose,
}) {
  const [form, setForm] = useState({
    consultationDate: "",
    therapistId: "",
    skinConcern: "",
    treatmentType: "",
    notes: "",
    productRecommendations: "",
    imageUrl: "",
  });

  useEffect(() => {
    if (consultation) {
      setForm(consultation);
    }
  }, [consultation]);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function submit(e) {
    e.preventDefault();

    onSave({
      ...form,
      clientId,
    });
  }

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2>
          {consultation
            ? "Edit Consultation"
            : "New Consultation"}
        </h2>

        <form onSubmit={submit}>

          <input
    style={styles.input}
    type="date"
    name="consultationDate"
    value={form.consultationDate}
    onChange={handleChange}
/>

<input
    style={styles.input}
    name="therapistId"
    value={form.therapistId}
    onChange={handleChange}
/>

<input
    style={styles.input}
    name="skinConcern"
    value={form.skinConcern}
    onChange={handleChange}
/>

<input
    style={styles.input}
    name="treatmentType"
    value={form.treatmentType}
    onChange={handleChange}
/>

<textarea
    style={styles.textarea}
    name="notes"
    value={form.notes}
    onChange={handleChange}
/>

<textarea
    style={styles.textarea}
    name="productRecommendations"
    value={form.productRecommendations}
    onChange={handleChange}
/>

<input
    style={styles.input}
    name="imageUrl"
    value={form.imageUrl}
    onChange={handleChange}
/>

          <div style={styles.buttons}>
            <button
              type="button"
              onClick={onClose}
            >
              Cancel
            </button>

            <button type="submit">
              Save
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,.4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  modal: {
    background: "#fff",
    width: 650,
    padding: 30,
    borderRadius: 20,
  },

  buttons: {
    display: "flex",
    justifyContent: "flex-end",
    gap: 15,
    marginTop: 20,
  },
};