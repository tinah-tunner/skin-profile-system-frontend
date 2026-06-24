import { useEffect, useState } from "react";
import Layout from "./Layout";
import { useNavigate } from "react-router-dom";

function AddConsultation() {
  const navigate = useNavigate();

  const [clients, setClients] = useState([]);
  const [therapists, setTherapists] = useState([]);
  const [file, setFile] = useState(null);

  const [form, setForm] = useState({
    clientId: "",
    therapistId: "",
    skinConcern: "",
    treatmentType: "",
    notes: "",
    productRecommendations: "",
    consultationDate: "",
  });

  // LOAD DATA
  useEffect(() => {
    fetch("http://localhost:8080/api/clients")
      .then((res) => res.json())
      .then(setClients);

    fetch("http://localhost:8080/api/therapists")
      .then((res) => res.json())
      .then(setTherapists);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    let imageUrl = "";

    // 1. UPLOAD IMAGE
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      const uploadRes = await fetch("http://localhost:8080/api/files/upload", {
        method: "POST",
        body: formData,
      });

      imageUrl = await uploadRes.text();
    }

    // 2. SAVE CONSULTATION
    const payload = {
      ...form,
      imageUrl,
    };

    fetch("http://localhost:8080/api/consultations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then(() => {
        alert("Consultation saved!");
        navigate("/clients");
      });
  };

  return (
    <Layout>
      <h1 style={{ color: "#ff7a18" }}>New Consultation</h1>

      <form onSubmit={handleSubmit} style={styles.form}>

        {/* CLIENT */}
        <select name="clientId" onChange={handleChange} required style={styles.input}>
          <option value="">Select Client</option>
          {clients.map((c) => (
            <option key={c.id} value={c.id}>
              {c.firstName} {c.lastName}
            </option>
          ))}
        </select>

        {/* THERAPIST */}
        <select name="therapistId" onChange={handleChange} required style={styles.input}>
          <option value="">Select Therapist</option>
          {therapists.map((t) => (
            <option key={t.id} value={t.id}>
              {t.firstName} {t.lastName}
            </option>
          ))}
        </select>

        <input
          name="skinConcern"
          placeholder="Skin Concern"
          onChange={handleChange}
          style={styles.input}
        />

        <input
          name="treatmentType"
          placeholder="Treatment Type"
          onChange={handleChange}
          style={styles.input}
        />

        <textarea
          name="notes"
          placeholder="Consultation Notes"
          onChange={handleChange}
          style={styles.textarea}
        />

        <textarea
          name="productRecommendations"
          placeholder="Product Recommendations"
          onChange={handleChange}
          style={styles.textarea}
        />

        {/* IMAGE UPLOAD */}
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          style={styles.input}
        />

        <input
          type="date"
          name="consultationDate"
          onChange={handleChange}
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Save Consultation
        </button>
      </form>
    </Layout>
  );
}

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    maxWidth: "500px",
    marginTop: "20px",
  },

  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    outline: "none",
  },

  textarea: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    minHeight: "80px",
  },

  button: {
    background: "#ff7a18",
    color: "white",
    padding: "12px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default AddConsultation;