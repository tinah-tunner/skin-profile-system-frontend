import { useEffect, useState } from "react";
import { getClients } from "../services/clientService";
import ClientCard from "./ClientCard";

export default function Clients() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadClients();
  }, []);

  async function loadClients() {
    try {
      const data = await getClients();
      setClients(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <h2>Loading clients...</h2>;

  return (
    <div style={{ padding: "30px" }}>
      <h1>Clients</h1>

      {clients.length === 0 ? (
        <p>No clients found.</p>
      ) : (
        clients.map((client) => (
          <ClientCard
            key={client.id}
            client={client}
          />
        ))
      )}
    </div>
  );
}