import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
        path="/profile"
        element={
            <ProtectedRoute>
            <ProfilePage />
            </ProtectedRoute>
        }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;