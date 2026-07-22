import { apiFetch } from "./api";

// ==========================
// GET CLIENT PHOTOS
// ==========================
export async function getClientPhotos(clientId) {
  return await apiFetch(`/clients/${clientId}/photos`);
}

// ==========================
// UPLOAD PHOTO
// ==========================
export async function uploadClientPhoto(
  clientId,
  file,
  photoType
) {
  const formData = new FormData();

  formData.append("file", file);
  formData.append("photoType", photoType);

  return await apiFetch(`/clients/${clientId}/photos`, {
    method: "POST",
    body: formData,
    isFormData: true,
  });
}

// ==========================
// DELETE PHOTO
// ==========================
export async function deletePhoto(photoId) {
  return await apiFetch(`/photos/${photoId}`, {
    method: "DELETE",
  });
}