import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/Layout";

import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import ClientDashboard from "./pages/ClientDashboard";

import Clients from "./pages/Clients";
import ClientFile from "./pages/ClientFile";
import AddClient from "./pages/AddClient";

import ConsultationHistory from "./pages/ConsultationHistory";
import Products from "./pages/Products";
import Notifications from "./pages/Notifications";

import Login from "./pages/Login";
import Register from "./pages/Register";

import Booking from "./components/Booking";
import AddConsultation from "./components/AddConsultation";

export default function App() {
  return (
    <Routes>

      {/* Default page */}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />

      {/* Public */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Dashboard */}
      <Route
        path="/dashboard"
        element={
          <Layout>
            <Dashboard />
          </Layout>
        }
      />

      {/* Admin */}
      <Route
        path="/admin"
        element={
          <Layout>
            <AdminDashboard />
          </Layout>
        }
      />

      {/* Client Dashboard */}
      <Route
        path="/client"
        element={
          <Layout>
            <ClientDashboard />
          </Layout>
        }
      />

      {/* View Clients */}
      <Route
        path="/clients"
        element={
          <Layout>
            <Clients />
          </Layout>
        }
      />

      {/* Individual Client File */}
      <Route
        path="/clients/:id"
        element={
          <Layout>
            <ClientFile />
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

      {/* Consultation History */}
      <Route
        path="/consultations"
        element={
          <Layout>
            <ConsultationHistory />
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

      {/* Booking */}
      <Route
        path="/booking"
        element={
          <Layout>
            <Booking />
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

      {/* Unknown routes */}
      <Route path="*" element={<Navigate to="/dashboard" replace />} />

    </Routes>
  );
}
