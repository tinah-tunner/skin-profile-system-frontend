import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

import ConsultationHistory from "./pages/ConsultationHistory";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Notifications from "./pages/Notifications";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";
import ClientDashboard from "./pages/ClientDashboard";
import Clients from "./pages/Clients";
import ClientProfile from "./pages/ClientProfile";
import AddClient from "./pages/AddClient";

import Booking from "./components/Booking";
import AddConsultation from "./components/AddConsultation";

export default function App() {
  return (
    <Routes>
      {/* Redirect root */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Public */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

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

      {/* Admin Dashboard */}
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

      {/* Consultation History */}
      <Route
        path="/consultations"
        element={
          <ProtectedRoute>
            <Layout>
              <ConsultationHistory />
            </Layout>
          </ProtectedRoute>
        }
      />

      {/* Client's own dashboard */}
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

      {/* View Clients (Sidebar) */}
      <Route
        path="/ClientDashboard"
        element={
          <ProtectedRoute>
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

      {/* Unauthorized */}
      <Route
        path="/unauthorized"
        element={
          <h1 style={{ textAlign: "center", marginTop: "100px" }}>
            🚫 Unauthorized Access
          </h1>
        }
      />

      {/* Catch all */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}