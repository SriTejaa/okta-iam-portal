import { Navigate } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";
import { getGroups } from "../utils/jwtUtils";

function RoleProtectedRoute({
  children,
  allowedRoles,
}) {
  const { authState } = useOktaAuth();

  const groups =
    authState?.accessToken?.accessToken
      ? getGroups(authState.accessToken.accessToken)
      : [];

  const hasAccess = allowedRoles.some(
    (role) => groups.includes(role)
  );

  if (!hasAccess) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}

export default RoleProtectedRoute;