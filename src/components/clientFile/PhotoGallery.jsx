// src/components/clientFile/PhotoGallery.jsx

import { useState } from "react";

export default function PhotoGallery({ consultations }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = consultations
    .filter((c) => c.imageUrl)
    .map((c) => ({
      id: c.id,
      date: c.consultationDate,
      treatment: c.treatmentType,
      image: c.imageUrl,
    }));

  return (
    <>
      <div style={styles.container}>
        <h2 style={styles.title}>Treatment Photos</h2>

        {images.length === 0 ? (
          <p>No treatment photos available.</p>
        ) : (
          <div style={styles.grid}>
            {images.map((img) => (
              <div key={img.id}>
                <img
                  src={img.image}
                  alt="Treatment"
                  style={styles.image}
                  onClick={() =>
                    setSelectedImage(img.image)
                  }
                />

                <h4>{img.date}</h4>

                <small>{img.treatment}</small>
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedImage && (
        <div
          style={styles.overlay}
          onClick={() =>
            setSelectedImage(null)
          }
        >
          <img
            src={selectedImage}
            alt=""
            style={styles.fullImage}
          />
        </div>
      )}
    </>
  );
}

const styles = {
  container: {
    background: "#fff",
    padding: 25,
    borderRadius: 20,
    border: "2px solid #ffe3d7",
    marginTop: 20,
  },

  title: {
    color: "#ff6b35",
    marginBottom: 20,
  },

  grid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(220px,1fr))",
    gap: 20,
  },

  image: {
    width: "100%",
    height: 220,
    objectFit: "cover",
    borderRadius: 15,
    cursor: "pointer",
  },

  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,.85)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
  },

  fullImage: {
    maxWidth: "90%",
    maxHeight: "90%",
    borderRadius: 15,
  },
};