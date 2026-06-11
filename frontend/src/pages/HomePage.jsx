import { Navigate } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";

function HomePage() {
  const { authState } = useOktaAuth();

  if (!authState) {
    return <div>Loading...</div>;
  }

  return authState.isAuthenticated
    ? <Navigate to="/dashboard" replace />
    : <Navigate to="/login" replace />;
}

export default HomePage;