import { useState } from "react";

export default function AddTherapist() {
  const [therapist, setTherapist] = useState({
    fullName: "",
    email: "",
    specialty: "",
    experience: "",
  });

  const handleChange = (e) => {
    setTherapist({
      ...therapist,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(therapist);
    alert("Therapist Added");
  };

  return (
    <div className="form-card">
      <h2>Add Therapist</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="fullName"
          placeholder="Full Name"
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          name="specialty"
          placeholder="Specialty"
          onChange={handleChange}
        />

        <input
          name="experience"
          placeholder="Years Experience"
          onChange={handleChange}
        />

        <button type="submit">Save Therapist</button>
      </form>
    </div>
  );
}