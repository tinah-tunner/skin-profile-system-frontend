import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

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

import ClientProfile from "./pages/ClientProfile";

import AddClient from "./components/AddClient";
import AddConsultation from "./components/AddConsultation";
import AddTherapist from "./components/AddTherapist";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Home */}
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />

        {/* Clients */}
        <Route
          path="/clients"
          element={
            <Layout>
              <Clients />
            </Layout>
          }
        />

        {/* Therapists */}
        <Route
          path="/therapists"
          element={
            <Layout>
              <Therapists />
            </Layout>
          }
        />

        {/* Booking */}
        <Route
          path="/booking"
          element={
            <Layout>
              <Booking />
            </Layout>
          }
        />

        {/* Calendar */}
        <Route
          path="/calendar"
          element={
            <Layout>
              <Calendar />
            </Layout>
          }
        />

        {/* Products */}
        <Route
          path="/products"
          element={
            <Layout>
              <Products />
            </Layout>
          }
        />

        {/* Notifications */}
        <Route
          path="/notifications"
          element={
            <Layout>
              <Notifications />
            </Layout>
          }
        />

        {/* Admin */}
        <Route
          path="/admin"
          element={
            <Layout>
              <Admin />
            </Layout>
          }
        />

        {/* Client Profile */}
        <Route
          path="/client/:id"
          element={
            <Layout>
              <ClientProfile />
            </Layout>
          }
        />

        {/* Add Client */}
        <Route
          path="/add-client"
          element={
            <Layout>
              <AddClient />
            </Layout>
          }
        />

        {/* Add Consultation */}
        <Route
          path="/add-consultation"
          element={
            <Layout>
              <AddConsultation />
            </Layout>
          }
        />

        {/* Add Therapist */}
        <Route
          path="/add-therapist"
          element={
            <Layout>
              <AddTherapist />
            </Layout>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}