import { useState } from "react";

export default function AddNotification() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Notification Sent");
    setMessage("");
  };

  return (
    <div className="form-card">
      <h2>Send Notification</h2>

      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Type notification..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button type="submit">
          Send Notification
        </button>
      </form>
    </div>
  );
}