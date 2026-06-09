import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import ProtectedRoute from "./ProtectedRoute";
import LoginCallbackPage from "../pages/LoginCallbackPage";
import HomePage from "../pages/HomePage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
        path="/profile"
        element={
            <ProtectedRoute>
            <ProfilePage />
            </ProtectedRoute>
        }
        />
        <Route
          path="/login/callback"
          element={<LoginCallbackPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;