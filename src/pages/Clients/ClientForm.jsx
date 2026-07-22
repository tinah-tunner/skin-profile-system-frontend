import { useState } from "react";
import { useNavigate } from "react-router-dom";

import PersonalInformation from "./PersonalInformation";
import ContactInformation from "./ContactInformation";
import SkinAssessment from "./SkinAssessment";
import MedicalInformation from "./MedicalInformation";
import TherapistNotes from "./TherapistNotes";
import UploadImages from "./UploadImages";

import {
  createClient,
  uploadClientImages,
} from "../../services/clientService";

function ClientForm() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    dateOfBirth: "",
    gender: null,

    address: "",
    emergencyContact: "",

    skinType: null,
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

    setFormData((prev) => {
      // Handle image uploads
      if (files) {
        return {
          ...prev,
          [name]: files[0],
        };
      }

      // Handle Skin Concerns
      if (name === "skinConcerns") {
        return {
          ...prev,
          skinConcerns: value ? [value] : [],
        };
      }

      // Convert empty values to null
      if (["gender", "skinType", "dateOfBirth"].includes(name)) {
        return {
          ...prev,
          [name]: value === "" ? null : value,
        };
      }

      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const nextStep = () => {
    if (step < 6) {
      setStep(step + 1);
    }
  };

  const previousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const clientData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,

        dateOfBirth: formData.dateOfBirth,
        gender: formData.gender,

        address: formData.address,
        emergencyContact: formData.emergencyContact,

        skinType: formData.skinType,
        skinConcerns: formData.skinConcerns,

        allergies: formData.allergies,
        currentMedication: formData.currentMedication,
        medicalConditions: formData.medicalConditions,

        therapistNotes: formData.therapistNotes,
      };

      console.log("Submitting Client:");
      console.log(clientData);

      // Save client
      const savedClient = await createClient(clientData);

      // Upload images (only if selected)
      if (formData.beforeImage || formData.afterImage) {
        await uploadClientImages(
          savedClient.id,
          formData.beforeImage,
          formData.afterImage
        );
      }

      alert("Client saved successfully!");

      navigate(`/clients/${savedClient.id}`);
    } catch (error) {
      console.error(error);
      alert("Failed to save client.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="step-header">
        <h2>Step {step} of 6</h2>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${(step / 6) * 100}%`,
            }}
          />
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