import { uploadImage } from "../../services/imageService";
import { useState } from "react";
import PersonalInformation from "./PersonalInformation";
import ContactInformation from "./ContactInformation";
import SkinAssessment from "./SkinAssessment";
import MedicalInformation from "./MedicalInformation";
import TherapistNotes from "./TherapistNotes";
import UploadImages from "./UploadImages"; // NEW

import { createClient } from "../../services/clientService";
import { useNavigate } from "react-router-dom";

function ClientForm() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);

 const [formData, setFormData] = useState({
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  dateOfBirth: "",
  gender: "",

  address: "",
  emergencyContact: "",

  // IMPORTANT
  skinType: null,

  // Backend expects a Set<SkinConcern>
  skinConcerns: [],

  allergies: "",
  currentMedication: "",
  medicalConditions: "",

  therapistNotes: "",

  beforeImage: null,
  afterImage: null,
});
const handleChange = (e) => {
  const { name, value, files } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: files
      ? files[0]
      : name === "skinConcerns"
      ? value
      : value,
  }));
};
  const nextStep = () => {
    if (step < 6) setStep(step + 1);
  };

  const previousStep = () => {
    if (step > 1) setStep(step - 1);
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    let beforeImageUrl = "";
    let afterImageUrl = "";

    // Upload before image
    if (formData.beforeImage) {
      beforeImageUrl = await uploadImage(formData.beforeImage);
    }

    // Upload after image
    if (formData.afterImage) {
      afterImageUrl = await uploadImage(formData.afterImage);
    }

  const clientData = {
  ...formData,

  // Never send ""
  skinType: formData.skinType || null,

  // Backend expects Set<SkinConcern>
  skinConcerns:
    formData.skinConcerns.length > 0
      ? formData.skinConcerns
      : [],

  beforeImage: beforeImageUrl,
  afterImage: afterImageUrl,
};
    const savedClient = await createClient(clientData);

    alert("Client saved successfully!");

    navigate(`/client/${savedClient.id}`);

  } catch (err) {
    console.error(err);
    alert(err.message || "Failed to save client.");
  }
};
  return (
    <form onSubmit={handleSubmit}>

      <div className="step-header">
        <h2>Step {step} of 6</h2>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${(step / 6) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="slide-form">

        {step === 1 && (
          <PersonalInformation
            formData={formData}
            handleChange={handleChange}
          />
        )}

        {step === 2 && (
          <ContactInformation
            formData={formData}
            handleChange={handleChange}
          />
        )}

        {step === 3 && (
          <SkinAssessment
            formData={formData}
            handleChange={handleChange}
          />
        )}

        {step === 4 && (
          <MedicalInformation
            formData={formData}
            handleChange={handleChange}
          />
        )}

        {step === 5 && (
          <TherapistNotes
            formData={formData}
            handleChange={handleChange}
          />
        )}

        {step === 6 && (
          <UploadImages
            formData={formData}
            handleChange={handleChange}
          />
        )}

      </div>

      <div className="step-buttons">

        {step > 1 && (
          <button
            type="button"
            className="orange-btn"
            onClick={previousStep}
          >
            ← Previous
          </button>
        )}

        {step < 6 ? (
          <button
            type="button"
            className="orange-btn"
            onClick={nextStep}
          >
            Next →
          </button>
        ) : (
          <button
            type="submit"
            className="orange-btn"
          >
            Save Client
          </button>
        )}

      </div>

    </form>
  );
}

export default ClientForm;