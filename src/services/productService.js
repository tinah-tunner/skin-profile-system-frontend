const BASE_URL = "http://localhost:8080/api";

export const getProducts = () => {
  return fetch(`${BASE_URL}/products`)
    .then((res) => res.json());
};