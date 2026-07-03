import { apiFetch } from "./api";

export const createClient = (client) =>
  apiFetch("/clients", {
    method: "POST",
    body: JSON.stringify(client),
  });

export const getClients = () =>
  apiFetch("/clients");

export const getClient = (id) =>
  apiFetch(`/clients/${id}`);

export const deleteClient = (id) =>
  apiFetch(`/clients/${id}`, {
    method: "DELETE",
  });