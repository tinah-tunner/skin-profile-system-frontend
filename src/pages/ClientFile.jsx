import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { apiFetch } from "../services/api";

import ClientHeader from "../components/clientFile/ClientHeader";
import ClientInformation from "../components/clientFile/ClientInformation";
import ConsultationHistory from "../components/clientFile/ConsultationHistory";
import ConsultationForm from "../components/clientFile/ConsultationForm";
import ClientTimeline from "../components/clientFile/ClientTimeline";
import ClientTabs from "../components/clientFile/ClientTabs";


export default function ClientFile() {
  const { id } = useParams();

  const [client, setClient] = useState(null);
  const [consultations, setConsultations] = useState([]);

  const [loading, setLoading] = useState(true);

  const [editingConsultation, setEditingConsultation] = useState(null);

  const [showConsultationForm, setShowConsultationForm] = useState(false);

  const [expandedConsultation, setExpandedConsultation] = useState(null);

  const [activeTab, setActiveTab] = useState("Profile");

  useEffect(() => {
    loadData();
  }, [id]);

  async function loadData() {
    try {
      const c = await apiFetch(`/clients/${id}`);

      const h = await apiFetch(
        `/consultations/client/${id}`
      );

      setClient(c);

      setConsultations(
        Array.isArray(h) ? h : []
      );
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }


  async function handleSaveConsultation(data) {
  try {

    if (data.id) {

      await apiFetch(`/consultations/${data.id}`, {
        method: "PUT",
        body: JSON.stringify(data),
      });

    } else {

      await apiFetch("/consultations", {
        method: "POST",
        body: JSON.stringify(data),
      });

    }

    setShowConsultationForm(false);
    setEditingConsultation(null);

    await loadData();

  } catch (error) {
    console.error(error);
    alert("Failed to save consultation.");
  }
}


  async function handleDeleteConsultation(id) {

  const confirmed = window.confirm(
    "Delete this consultation?"
  );

  if (!confirmed) return;

  try {

    await apiFetch(`/consultations/${id}`, {
      method: "DELETE",
    });

    await loadData();

  } catch (error) {
    console.error(error);
    alert("Unable to delete consultation.");
  }
}

  if (loading) return <h2>Loading...</h2>;

  if (!client) return <h2>Client not found.</h2>;

 return (
  <div
    style={{
      padding: "30px",
      background: "#fffaf7",
      minHeight: "100vh",
    }}
  >
    <ClientHeader client={client} />

    <ClientTabs
      activeTab={activeTab}
      setActiveTab={setActiveTab}
    />

    {activeTab === "Profile" && (
      <ClientInformation client={client} />
    )}

    {activeTab === "Consultations" && (
      <ConsultationHistory
        consultations={consultations}
        expandedConsultation={expandedConsultation}
        setExpandedConsultation={setExpandedConsultation}
        setEditingConsultation={setEditingConsultation}
        setShowConsultationForm={setShowConsultationForm}
        handleDeleteConsultation={handleDeleteConsultation}
      />
    )}

    {activeTab === "Progress" && (
      <ClientTimeline consultations={consultations} />
    )}

    {activeTab === "Photos" && (
      <div
        style={{
          background: "#fff",
          borderRadius: 20,
          padding: 30,
          marginTop: 25,
          textAlign: "center",
          border: "2px solid #ffe3d7",
        }}
      >
        <h2 style={{ color: "#ff6b35" }}>
          Photo Gallery
        </h2>

        <p>
          Before & After photos will appear here.
        </p>
      </div>
    )}

    {showConsultationForm && (
      <ConsultationForm
        consultation={editingConsultation}
        clientId={client.id}
        onSave={handleSaveConsultation}
        onClose={() => {
          setShowConsultationForm(false);
          setEditingConsultation(null);
        }}
      />
    )}
  </div>
);
}