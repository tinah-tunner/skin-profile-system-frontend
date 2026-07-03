import { apiFetch } from "./api";

export async function getDashboardStats() {
  return await apiFetch("/dashboard");
}