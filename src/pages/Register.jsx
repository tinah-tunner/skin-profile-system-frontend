import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../services/api";

function Register() {

  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {

    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {

      setLoading(true);

      await register({
        fullName,
        email,
        password,
        role: "CLIENT"
      });

      alert("Registration successful!");

      navigate("/login");

    } catch (error) {

      alert("Registration failed.");

    } finally {

      setLoading(false);

    }

  };

  return (

<div
style={{
minHeight:"100vh",
display:"flex",
justifyContent:"center",
alignItems:"center",
background:"#FFF8F3",
padding:"20px"
}}
>

<div
style={{
background:"#fff",
padding:"40px",
borderRadius:"20px",
maxWidth:"450px",
width:"100%",
boxShadow:"0 8px 25px rgba(0,0,0,.1)"
}}
>

<div style={{textAlign:"center"}}>

<img
src="/logo.png"
alt="Logo"
style={{width:"120px"}}
/>

<h1 style={{color:"#D4A373"}}>
Create Account
</h1>

<p style={{color:"#777"}}>
Register as a Client
</p>

</div>

<form onSubmit={handleRegister}>

<input
type="text"
placeholder="Full Name"
value={fullName}
onChange={(e)=>setFullName(e.target.value)}
required
style={inputStyle}
/>

<input
type="email"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
required
style={inputStyle}
/>

<div style={{position:"relative"}}>

<input
type={showPassword ? "text":"password"}
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
required
style={inputStyle}
/>

<button
type="button"
onClick={()=>setShowPassword(!showPassword)}
style={eyeButton}
>

{showPassword ? "🙈":"👁"}

</button>

</div>

<div style={{position:"relative"}}>

<input
type={showConfirmPassword ? "text":"password"}
placeholder="Confirm Password"
value={confirmPassword}
onChange={(e)=>setConfirmPassword(e.target.value)}
required
style={inputStyle}
/>

<button
type="button"
onClick={()=>setShowConfirmPassword(!showConfirmPassword)}
style={eyeButton}
>

{showConfirmPassword ? "🙈":"👁"}

</button>

</div>

<button
type="submit"
style={registerButton}
disabled={loading}
>

{loading ? "Creating Account..." : "Register"}

</button>

</form>

<p
style={{
marginTop:"20px",
textAlign:"center"
}}
>

Already have an account?

</p>

<div style={{textAlign:"center"}}>

<button
onClick={()=>navigate("/login")}
style={{
background:"none",
border:"none",
color:"#F4A261",
fontWeight:"bold",
cursor:"pointer"
}}
>

Log In

</button>

</div>

</div>

</div>

  );

}

const inputStyle={
width:"100%",
padding:"14px",
marginBottom:"18px",
borderRadius:"10px",
border:"1px solid #ddd",
fontSize:"16px"
};

const registerButton={
width:"100%",
padding:"15px",
background:"#D4A373",
color:"#fff",
fontSize:"17px",
border:"none",
borderRadius:"10px",
cursor:"pointer"
};

const eyeButton={
position:"absolute",
right:"15px",
top:"12px",
background:"none",
border:"none",
cursor:"pointer",
fontSize:"18px"
};

export default Register;