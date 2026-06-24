import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function ProtectedRoute({ children, allowedRoles = [] }) {
  const { token, userRole } = useAuth();

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (
    allowedRoles.length > 0 &&
    !allowedRoles.includes(userRole)
  ) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;