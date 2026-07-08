import { apiFetch } from "./api";

// ===============================
// CREATE CLIENT
// ===============================
export async function createClient(client) {
  return await apiFetch("/clients", {
    method: "POST",
    body: JSON.stringify(client),
  });
}

// ===============================
// GET ALL CLIENTS
// ===============================
export async function getClients() {
  return await apiFetch("/clients");
}

// ===============================
// GET CLIENT BY ID
// ===============================
export async function getClient(id) {
  return await apiFetch(`/clients/${id}`);
}

// ===============================
// DELETE CLIENT
// ===============================
export async function deleteClient(id) {
  return await apiFetch(`/clients/${id}`, {
    method: "DELETE",
  });
}