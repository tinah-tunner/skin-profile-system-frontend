import { Routes, Route, Navigate } from "react-router-dom";

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

import Clients from "./pages/Clients";
import ClientProfile from "./pages/ClientProfile";
import AddClient from "./pages/AddClient";

import Therapists from "./components/Therapists";
import Booking from "./components/Booking";
import AddConsultation from "./components/AddConsultation";
import AddTherapist from "./components/AddTherapist";

export default function App() {
  return (
    <Routes>

      {/* Redirect root to Login */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Home */}
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Layout>
              <Home />
            </Layout>
          </ProtectedRoute>
        }
      />

      {/* Dashboard */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Layout>
              <Dashboard />
            </Layout>
          </ProtectedRoute>
        }
      />

      {/* Admin */}
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

      {/* Therapist */}
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

      {/* Client */}
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
          <ProtectedRoute>
            <Layout>
              <Clients />
            </Layout>
          </ProtectedRoute>
        }
      />

      {/* Client Profile */}
      <Route
        path="/client/:id"
        element={
          <ProtectedRoute>
            <Layout>
              <ClientProfile />
            </Layout>
          </ProtectedRoute>
        }
      />

      {/* Add Client */}
      <Route
        path="/add-client"
        element={
          <ProtectedRoute>
            <Layout>
              <AddClient />
            </Layout>
          </ProtectedRoute>
        }
      />

      {/* Therapists */}
      <Route
        path="/therapists"
        element={
          <ProtectedRoute>
            <Layout>
              <Therapists />
            </Layout>
          </ProtectedRoute>
        }
      />

      {/* Booking */}
      <Route
        path="/booking"
        element={
          <ProtectedRoute>
            <Layout>
              <Booking />
            </Layout>
          </ProtectedRoute>
        }
      />

      {/* Calendar */}
      <Route
        path="/calendar"
        element={
          <ProtectedRoute>
            <Layout>
              <Calendar />
            </Layout>
          </ProtectedRoute>
        }
      />

      {/* Products */}
      <Route
        path="/products"
        element={
          <ProtectedRoute>
            <Layout>
              <Products />
            </Layout>
          </ProtectedRoute>
        }
      />

      {/* Notifications */}
      <Route
        path="/notifications"
        element={
          <ProtectedRoute>
            <Layout>
              <Notifications />
            </Layout>
          </ProtectedRoute>
        }
      />

      {/* Add Consultation */}
      <Route
        path="/add-consultation"
        element={
          <ProtectedRoute>
            <Layout>
              <AddConsultation />
            </Layout>
          </ProtectedRoute>
        }
      />

      {/* Add Therapist */}
      <Route
        path="/add-therapist"
        element={
          <ProtectedRoute>
            <Layout>
              <AddTherapist />
            </Layout>
          </ProtectedRoute>
        }
      />

      {/* Unauthorized */}
      <Route
        path="/unauthorized"
        element={
          <h1 style={{ textAlign: "center", marginTop: "100px" }}>
            🚫 Unauthorized Access
          </h1>
        }
      />

      {/* Catch All */}
      <Route path="*" element={<Navigate to="/login" replace />} />

    </Routes>
  );
}