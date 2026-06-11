import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import ProtectedRoute from "./ProtectedRoute";
import LoginCallbackPage from "../pages/LoginCallbackPage";
import HomePage from "../pages/HomePage";
import AppLayout from "../components/layout/AppLayout";

import DashboardPage from "../pages/DashboardPage";
import MyAccessRequestsPage from "../pages/MyAccessRequestsPage";
import MyRequestHistoryPage from "../pages/MyRequestHistoryPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/login/callback"
          element={<LoginCallbackPage />}
        />
        <Route
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        >
          <Route
            path="/dashboard"
            element={<DashboardPage />}
          />

          <Route
            path="/profile"
            element={<ProfilePage />}
          />

          <Route
            path="/my-access-requests"
            element={<MyAccessRequestsPage />}
          />

          <Route
            path="/my-request-history"
            element={<MyRequestHistoryPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;