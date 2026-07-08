import logo from "../assets/logo.jpeg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/api";
import { useAuth } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { login: authLogin } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      alert("Please enter your email and password.");
      return;
    }

    try {
      setLoading(true);

      const user = await login(email, password);

      if (
        (user.role === "ADMIN" || user.role === "THERAPIST") &&
        user.email &&
        !user.email.toLowerCase().endsWith("@bakene.co.za")
      ) {
        alert(
          "Admin and Therapist accounts must use a @bakene.co.za email address."
        );
        return;
      }

      // Save user in AuthContext
      authLogin(user);

      // Always go to the main dashboard
      navigate("/dashboard", { replace: true });

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
        background:
          "linear-gradient(135deg,#FFF5EF 0%,#FFFDFB 50%,#FFF5EF 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "430px",
          background: "#fff",
          padding: "40px",
          borderRadius: "24px",
          border: "2px solid #D98C6A",
          boxShadow:
            "0 18px 40px rgba(255,107,0,.18), 0 0 30px rgba(217,140,106,.15)",
          textAlign: "center",
        }}
      >
        <img
          src={logo}
          alt="Bakene Logo"
          style={{
            width: "220px",
            height: "auto",
            display: "block",
            margin: "0 auto 25px",
            objectFit: "contain",
          }}
        />

        <h1
          style={{
            color: "#FF6B00",
            marginBottom: "8px",
            fontWeight: "700",
          }}
        >
          Skin Profile System
        </h1>

        <p
          style={{
            color: "#8C5A44",
            marginBottom: "30px",
            fontSize: "16px",
          }}
        >
          Welcome Back 👋
        </p>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email Address"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "15px",
              marginBottom: "18px",
              borderRadius: "14px",
              border: "2px solid #D98C6A",
              background: "#FFFDFB",
              fontSize: "16px",
              boxSizing: "border-box",
              outline: "none",
            }}
          />

          <input
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "15px",
              marginBottom: "25px",
              borderRadius: "14px",
              border: "2px solid #D98C6A",
              background: "#FFFDFB",
              fontSize: "16px",
              boxSizing: "border-box",
              outline: "none",
            }}
          />

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "15px",
              background: loading
                ? "#D8A78A"
                : "linear-gradient(135deg,#FF6B00,#FF8C1A)",
              color: "#fff",
              border: "2px solid #D98C6A",
              borderRadius: "14px",
              fontSize: "17px",
              fontWeight: "700",
              cursor: loading ? "not-allowed" : "pointer",
              boxShadow: "0 12px 28px rgba(255,107,0,.35)",
            }}
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>

        <div
          style={{
            marginTop: "28px",
            paddingTop: "20px",
            borderTop: "1px solid #F2D1BF",
          }}
        >
          <p
            style={{
              color: "#777",
              marginBottom: "10px",
            }}
          >
            Don't have an account?
          </p>

          <button
            onClick={() => navigate("/register")}
            style={{
              background: "transparent",
              color: "#FF6B00",
              border: "2px solid #D98C6A",
              borderRadius: "14px",
              padding: "12px 22px",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;