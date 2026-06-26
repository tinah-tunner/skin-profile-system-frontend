import { useState } from "react";

export default function AddClient() {
  const [client, setClient] = useState({
    fullName: "",
    email: "",
    phone: "",
    skinType: "",
    concerns: "",
  });

  const handleChange = (e) => {
    setClient({
      ...client,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(client);
    alert("Client Added Successfully");
  };

  return (
    <div className="form-card">
      <h2>Add Client</h2>

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
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
        />

        <select name="skinType" onChange={handleChange}>
          <option>Skin Type</option>
          <option>Dry</option>
          <option>Oily</option>
          <option>Combination</option>
          <option>Sensitive</option>
        </select>

        <textarea
          name="concerns"
          placeholder="Skin Concerns"
          onChange={handleChange}
        />

        <button type="submit">Save Client</button>
      </form>
    </div>
  );
}