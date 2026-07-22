// src/components/clientFile/UploadPhoto.jsx

import { useState } from "react";

export default function UploadPhoto({
  onUpload,
}) {
  const [preview, setPreview] =
    useState(null);

  function handleFile(e) {
    const file = e.target.files[0];

    if (!file) return;

    const url = URL.createObjectURL(file);

    setPreview(url);

    onUpload(url);
  }

  return (
    <div style={styles.card}>
      <h2>Add Treatment Photo</h2>

      <input
        type="file"
        accept="image/*"
        onChange={handleFile}
      />

      {preview && (
        <img
          src={preview}
          alt=""
          style={styles.preview}
        />
      )}
    </div>
  );
}

const styles = {
  card: {
    background: "#fff",
    padding: 20,
    borderRadius: 20,
    marginTop: 25,
    border: "2px solid #ffe3d7",
  },

  preview: {
    width: 300,
    marginTop: 20,
    borderRadius: 15,
  },
};