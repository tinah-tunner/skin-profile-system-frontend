
  import { useState } from "react";
import PersonalInformation from "./PersonalInformation";
import ContactInformation from "./ContactInformation";
import SkinAssessment from "./SkinAssessment";
import MedicalInformation from "./MedicalInformation";
import TherapistNotes from "./TherapistNotes";
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

    skinType: "",
    skinConcern: "",

    allergies: "",
    currentMedication: "",
    medicalConditions: "",

    therapistNotes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const nextStep = () => {
    if (step < 5) setStep(step + 1);
  };

  const previousStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createClient(formData);
      alert("Client saved successfully.");
      navigate("/clients");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>

      <div className="step-header">
        <h2>Step {step} of 5</h2>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${(step / 5) * 100}%` }}
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

        {step < 5 ? (
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