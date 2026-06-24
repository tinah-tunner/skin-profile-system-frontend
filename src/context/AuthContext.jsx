import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(
    localStorage.getItem("token") || null
  );

  const [userRole, setUserRole] = useState(
    localStorage.getItem("role") || null
  );

  const login = (jwtToken, role) => {
    localStorage.setItem("token", jwtToken);
    localStorage.setItem("role", role);

    setToken(jwtToken);
    setUserRole(role);
  };

  const logout = () => {
    localStorage.removeItem("token");
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
}