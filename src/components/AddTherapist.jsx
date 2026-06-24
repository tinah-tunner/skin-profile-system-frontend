import { useState } from "react";
import Layout from "./Layout";
import { useNavigate } from "react-router-dom";

function AddTherapist() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    specialization: "",
    joinedDate: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/api/therapists", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then(() => {
        alert("Therapist added successfully!");
        navigate("/therapists");
      })
      .catch((err) => console.error(err));
  };

  return (
    <Layout>
      <h1 style={{ color: "#e63946" }}>Add Therapist</h1>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input name="firstName" placeholder="First Name" onChange={handleChange} />
        <input name="lastName" placeholder="Last Name" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="phone" placeholder="Phone" onChange={handleChange} />
        <input name="specialization" placeholder="Specialization" onChange={handleChange} />
        <input name="joinedDate" type="date" onChange={handleChange} />

        <button type="submit">Save Therapist</button>
      </form>
    </Layout>
  );
}

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    maxWidth: "400px",
    marginTop: "20px",
  },
};

export default AddTherapist;