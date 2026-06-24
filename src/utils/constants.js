import { createContext, useState } from "react";
import {
  getToken,
  saveToken,
  removeToken,
} from "../utils/tokenUtils";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(getToken());
  const [userRole, setUserRole] = useState(
    localStorage.getItem("role")
  );

  const login = (jwtToken, role) => {
    saveToken(jwtToken);
    localStorage.setItem("role", role);

    setToken(jwtToken);
    setUserRole(role);
  };

  const logout = () => {
    removeToken();
    localStorage.removeItem("role");

    setToken(null);
    setUserRole(null);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        userRole,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};