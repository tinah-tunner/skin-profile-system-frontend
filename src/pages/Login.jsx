import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/api";
import { useAuth } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { login: authLogin } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const user = await login(email, password);

      // Extra protection for Admin & Therapist
      if (
        (user.role === "ADMIN" || user.role === "THERAPIST") &&
        !user.email.toLowerCase().endsWith("@bakene.co.za")
      ) {
        alert(
          "Admin and Therapist accounts must use a @bakene.co.za email address."
        );
        return;
      }
authLogin(user);

      switch (user.role) {
        case "ADMIN":
          navigate("/admin");
          break;

        case "THERAPIST":
          navigate("/therapist");
          break;

        case "CLIENT":
          navigate("/client");
          break;

        default:
          alert("Unknown user role.");
      }
    } catch (err) {
      alert(err.message || "Login failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#FFF8F3",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          background: "#FFFFFF",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
          textAlign: "center",
        }}
      >
        <img
          src="/assets/logo.jpeg"
          alt="Bakene Logo"
          style={{
            width: "120px",
            marginBottom: "20px",
          }}
        />

        <h1
          style={{
            color: "#D4A373",
            marginBottom: "5px",
          }}
        >
          Skin Profile System
        </h1>

        <p
          style={{
            color: "#666",
            marginBottom: "30px",
          }}
        >
          Welcome Back
        </p>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "14px",
              marginBottom: "15px",
              borderRadius: "10px",
              border: "1px solid #ddd",
              fontSize: "16px",
            }}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "14px",
              marginBottom: "25px",
              borderRadius: "10px",
              border: "1px solid #ddd",
              fontSize: "16px",
            }}
          />

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "15px",
              background: "#D4A373",
              color: "white",
              border: "none",
              borderRadius: "10px",
              fontSize: "17px",
              cursor: "pointer",
            }}
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>

        <p style={{ marginTop: "25px", color: "#666" }}>
          Don't have an account?
        </p>

        <button
          onClick={() => navigate("/register")}
          style={{
            background: "transparent",
            border: "none",
            color: "#F4A261",
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Register Here
        </button>
      </div>
    </div>
  );
}

export default Login;