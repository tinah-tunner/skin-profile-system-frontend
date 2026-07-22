// src/components/clientFile/ClientTabs.jsx

export default function ClientTabs({ activeTab, setActiveTab }) {
  const tabs = [
    "Profile",
    "Consultations",
    "Photos",
    "Progress",
  ];

  return (
    <div style={styles.container}>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          style={{
            ...styles.button,
            background:
              activeTab === tab
                ? "#ff6b35"
                : "#ffffff",
            color:
              activeTab === tab
                ? "#fff"
                : "#ff6b35",
          }}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    gap: 15,
    margin: "30px 0",
    flexWrap: "wrap",
  },

  button: {
    padding: "12px 24px",
    borderRadius: 12,
    border: "2px solid #ff6b35",
    cursor: "pointer",
    fontWeight: "bold",
    transition: ".3s",
  },
};