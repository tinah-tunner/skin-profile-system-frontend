import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { uploadImage } from "../services/imageService";
import {
  uploadClientPhotos,
  getClient,
} from "../services/clientService";

function ClientProfile() {
  const { id } = useParams();
  const navigate = useNavigate();

  const beforeInputRef = useRef(null);
  const afterInputRef = useRef(null);

  const [client, setClient] = useState(null);
  const [photos, setPhotos] = useState([]);
const [photoType, setPhotoType] = useState("BEFORE");
const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);

  const loadClient = () => {
    fetch(`https://skin-profile-system-backendfinal.onrender.com/api/clients/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load client");
        return res.json();
      })
      .then((data) => setClient(data))
      .catch(console.error)
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadClient();
  }, [id]);

  const loadPhotos = async () => {
  try {
    const data = await getClientPhotos(id);
    setPhotos(data);
  } catch (err) {
    console.error(err);
  }
};

useEffect(() => {
  loadClient();
  loadPhotos();
}, [id]);

  const calculateAge = (dob) => {
    if (!dob) return "N/A";

    const birth = new Date(dob);
    const today = new Date();

    let age = today.getFullYear() - birth.getFullYear();

    if (
      today.getMonth() < birth.getMonth() ||
      (today.getMonth() === birth.getMonth() &&
        today.getDate() < birth.getDate())
    ) {
      age--;
    }

    return age;
  };

  const uploadPhotos = async () => {
  const before = beforeInputRef.current.files[0];
  const after = afterInputRef.current.files[0];

  if (!before && !after) {
    alert("Please choose at least one photo.");
    return;
  }

  try {
    setUploading(true);

    await uploadClientPhotos(id, before, after);

    const updated = await getClient(id);

    setClient(updated);

    beforeInputRef.current.value = "";
    afterInputRef.current.value = "";

    alert("Photos uploaded successfully!");

  } catch (err) {
    console.error(err);
    alert("Upload failed.");
  } finally {
    setUploading(false);
  }
};

      const response = await fetch(
        `https://skin-profile-system-backendfinal.onrender.com/api/clients/${id}/images`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            beforeImage,
            afterImage,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to save images");
      }

      const updatedClient = await response.json();

      setClient(updatedClient);

      beforeInputRef.current.value = "";
      afterInputRef.current.value = "";

      alert("Images uploaded successfully.");

    } catch (err) {
      console.error(err);
      alert("Failed to upload images.");
    } finally {
      setUploading(false);
    }
  };

  if (loading) return <h2>Loading Client Profile...</h2>;

  return (
    <div style={{ padding: "30px", background: "#f8f9fc", minHeight: "100vh" }}>

      <div
        style={{
          background: "#fff",
          borderRadius: "20px",
          padding: "30px",
          display: "flex",
          gap: "25px",
          marginBottom: "25px",
          boxShadow: "0 8px 20px rgba(0,0,0,.08)",
        }}
      >
        <div>

          <h1 style={{ color: "#ff6b35" }}>
            {client.firstName} {client.lastName}
          </h1>

          <p><strong>Age:</strong> {calculateAge(client.dateOfBirth)}</p>
          <p><strong>Skin Type:</strong> {client.skinType}</p>

        </div>
      </div>

      <div className="profile-card">
        <h2>📷 Progress Photos</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          <div>
            <h3>Before</h3>

            {client.beforeImage ? (
              <img
                src={client.beforeImage}
                alt=""
                style={{
                  width: "100%",
                  borderRadius: "12px",
                }}
              />
            ) : (
              <p>No Before Image</p>
            )}

            <input
              type="file"
              ref={beforeInputRef}
              accept="image/*"
            />
          </div>

          <div>
            <h3>After</h3>

            {client.afterImage ? (
              <img
                src={client.afterImage}
                alt=""
                style={{
                  width: "100%",
                  borderRadius: "12px",
                }}
              />
            ) : (
              <p>No After Image</p>
            )}

            <input
              type="file"
              ref={afterInputRef}
              accept="image/*"
            />
          </div>
        </div>

        <button
          className="orange-btn"
          style={{ marginTop: "20px" }}
          onClick={uploadPhotos}
          disabled={uploading}
        >
          {uploading ? "Uploading..." : "📷 Upload Progress Photos"}
        </button>
      </div>

      <div
        style={{
          marginTop: "30px",
        }}
      >
        <button
          className="orange-btn"
          onClick={() => navigate("/clients")}
        >
          ← Back to Clients
        </button>
      </div>

    </div>
  );
}

export default ClientProfile;