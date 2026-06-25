import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Calendar from "./pages/Calendar";
import Products from "./pages/Products";
import Notifications from "./pages/Notifications";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Clients from "./components/Clients";
import Therapists from "./components/Therapists";
import Booking from "./components/Booking";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/clients" element={<Clients />} />

        <Route path="/therapists" element={<Therapists />} />

        <Route path="/booking" element={<Booking />} />

        <Route path="/calendar" element={<Calendar />} />

        <Route path="/products" element={<Products />} />

        <Route path="/notifications" element={<Notifications />} />

        <Route path="/admin" element={<Admin />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}