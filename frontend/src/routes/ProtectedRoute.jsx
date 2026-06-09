import { Navigate } from "react-router-dom";
import{useOktaAuth} from "@okta/okta-react"

function ProtectedRoute({ children }) {
    const { authState } = useOktaAuth();

  if (!authState) {
    return <div>Loading...</div>;
  }

  if (!authState.isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;