import { useEffect, useState } from "react";
import Layout from "./Layout";

function Therapists() {
  const [therapists, setTherapists] = useState([]);

  const load = () => {
    fetch("http://localhost:8080/api/therapists")
      .then((res) => res.json())
      .then((data) => setTherapists(data));
  };

  useEffect(() => {
    load();
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:8080/api/therapists/${id}`, {
      method: "DELETE",
    }).then(() => load());
  };

  return (
    <Layout>
      <h1 style={{ color: "#e63946" }}>Therapists</h1>

      <div style={styles.container}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Specialization</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {therapists.map((t) => (
              <tr key={t.id}>
                <td>{t.id}</td>
                <td>{t.firstName} {t.lastName}</td>
                <td>{t.email}</td>
                <td>{t.phone}</td>
                <td>{t.specialization}</td>
                <td>
                  <button onClick={() => handleDelete(t.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

const styles = {
  container: {
    marginTop: "20px",
    background: "white",
    padding: "15px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
};

export default Therapists;