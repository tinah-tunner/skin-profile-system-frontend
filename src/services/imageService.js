import axios from "axios";
import { BASE_URL } from "./api";

export async function uploadImage(file) {
  const token = localStorage.getItem("token");

  const formData = new FormData();
  formData.append("file", file);

  const response = await axios.post(
    `${BASE_URL}/images/upload`,
    formData,
    {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data.imageUrl;
}