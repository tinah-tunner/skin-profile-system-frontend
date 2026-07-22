import { apiFetch } from "./api";

export async function uploadImage(file) {
  const formData = new FormData();
  formData.append("file", file);

  const response = await apiFetch("/images/upload", {
    method: "POST",
    body: formData,
    isFormData: true,
  });

  return response.imageUrl;
}