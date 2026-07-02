import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Calendar from "./pages/Calendar";
import Products from "./pages/Products";
import Notifications from "./pages/Notifications";
import Login from "./pages/Login";
import Register from "./pages/Register";

import AdminDashboard from "./pages/AdminDashboard";
import TherapistDashboard from "./pages/TherapistDashboard";
import ClientDashboard from "./pages/ClientDashboard";

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

        {/* General Dashboard */}
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />

        {/* Protected Dashboards */}

        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={["ADMIN"]}>
              <Layout>
                <AdminDashboard />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/therapist"
          element={
            <ProtectedRoute allowedRoles={["THERAPIST"]}>
              <Layout>
                <TherapistDashboard />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/client"
          element={
            <ProtectedRoute allowedRoles={["CLIENT"]}>
              <Layout>
                <ClientDashboard />
              </Layout>
            </ProtectedRoute>
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