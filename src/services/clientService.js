import api from "./api";

export const getClients = () => {
    return api.get("/clients");
};