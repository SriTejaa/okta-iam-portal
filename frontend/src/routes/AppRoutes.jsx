import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoleProtectedRoute from "./RoleProtectedRoute";
import { ROLES} from "../configs/roles"

import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import ProtectedRoute from "./ProtectedRoute";
import LoginCallbackPage from "../pages/LoginCallbackPage";
import HomePage from "../pages/HomePage";
import AppLayout from "../components/layout/AppLayout";

import DashboardPage from "../pages/DashboardPage";
import MyAccessRequestsPage from "../pages/MyAccessRequestsPage";
import MyRequestHistoryPage from "../pages/MyRequestHistoryPage";
import ApprovalsPage from "../pages/ApprovalsPage";
import UsersPage from "../pages/UsersPage";
import GroupsPage from "../pages/GroupsPage";
import ApplicationsPage from "../pages/ApplicationsPage";
import AuditLogsPage from "../pages/AuditLogsPage";
import ReportsPage from "../pages/ReportsPage";

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

        <Route
          path="/approvals"
          element={
            <RoleProtectedRoute
              allowedRoles={[
                ROLES.MANAGER,
                ROLES.SUPER_ADMIN,
              ]}
            >
              <ApprovalsPage />
            </RoleProtectedRoute>
          }
        />

        <Route
          path="/users"
          element={
            <RoleProtectedRoute
              allowedRoles={[
                ROLES.ADMIN,
                ROLES.SUPER_ADMIN,
              ]}
            >
              <UsersPage />
            </RoleProtectedRoute>
          }
        />

        <Route
          path="/groups"
          element={
            <RoleProtectedRoute
              allowedRoles={[
                ROLES.ADMIN,
                ROLES.SUPER_ADMIN,
              ]}
            >
              <GroupsPage />
            </RoleProtectedRoute>
          }
        />

        <Route
          path="/applications"
          element={
            <RoleProtectedRoute
              allowedRoles={[
                ROLES.ADMIN,
                ROLES.SUPER_ADMIN,
              ]}
            >
              <ApplicationsPage />
            </RoleProtectedRoute>
          }
        />

        <Route
          path="/audit-logs"
          element={
            <RoleProtectedRoute
              allowedRoles={[
                ROLES.AUDITOR,
                ROLES.SUPER_ADMIN,
              ]}
            >
              <AuditLogsPage />
            </RoleProtectedRoute>
          }
        />

        <Route
          path="/reports"
          element={
            <RoleProtectedRoute
              allowedRoles={[
                ROLES.AUDITOR,
                ROLES.SUPER_ADMIN,
              ]}
            >
              <ReportsPage />
            </RoleProtectedRoute>
          }
        />
      </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;