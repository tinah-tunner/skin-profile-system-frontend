import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

function Home() {
  return <h1>Home Page Works</h1>;
}

function Dashboard() {
  return <h1>Dashboard Works</h1>;
}

function Clients() {
  return <h1>Clients Page Works</h1>;
}

function Therapists() {
  return <h1>Therapists Page Works</h1>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />

        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />

        <Route
          path="/clients"
          element={
            <Layout>
              <Clients />
            </Layout>
          }
        />

        <Route
          path="/therapists"
          element={
            <Layout>
              <Therapists />
            </Layout>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}