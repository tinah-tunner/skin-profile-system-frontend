const BASE_URL = "https://skin-profile-system-backendfinal.onrender.com";

export const getProducts = () => {
  return fetch(`${BASE_URL}/products`)
    .then((res) => res.json());
};