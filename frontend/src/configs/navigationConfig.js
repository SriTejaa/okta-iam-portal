import {
  LayoutDashboard,
  User,
  KeyRound,
  History,
  ClipboardCheck,
  Users,
  Group,
  AppWindow,
  FileSearch,
  FileText,
} from "lucide-react";
import { ROLES } from "./roles";

export const navigationItems = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
    roles: [
      ROLES.USER,
      ROLES.MANAGER,
      ROLES.ADMIN,
      ROLES.AUDITOR,
      ROLES.SUPER_ADMIN,
    ],
  },

  {
    label: "Profile",
    path: "/profile",
    icon: User,
    roles: [
      ROLES.USER,
      ROLES.MANAGER,
      ROLES.ADMIN,
      ROLES.AUDITOR,
      ROLES.SUPER_ADMIN,
    ],
  },

  {
    label: "My Access Requests",
    path: "/my-access-requests",
    icon: KeyRound,
    roles: [
      ROLES.USER,
      ROLES.MANAGER,
      ROLES.ADMIN,
      ROLES.SUPER_ADMIN,
    ],
  },

  {
    label: "My Request History",
    path: "/my-request-history",
    icon: History,
    roles: [
      ROLES.USER,
      ROLES.MANAGER,
      ROLES.ADMIN,
      ROLES.SUPER_ADMIN,
    ],
  },

  {
    label: "Approvals",
    path: "/approvals",
    icon: ClipboardCheck,
    roles: [
      ROLES.MANAGER,
      ROLES.SUPER_ADMIN,
    ],
  },

  {
    label: "Users",
    path: "/users",
    icon: Users,
    roles: [
      ROLES.ADMIN,
      ROLES.SUPER_ADMIN,
    ],
  },

  {
    label: "Groups",
    path: "/groups",
    icon: Group,
    roles: [
      ROLES.ADMIN,
      ROLES.SUPER_ADMIN,
    ],
  },

  {
    label: "Applications",
    path: "/applications",
    icon: AppWindow,
    roles: [
      ROLES.ADMIN,
      ROLES.SUPER_ADMIN,
    ],
  },

  {
    label: "Audit Logs",
    path: "/audit-logs",
    icon: FileSearch,
    roles: [
      ROLES.AUDITOR,
      ROLES.SUPER_ADMIN,
    ],
  },

  {
    label: "Reports",
    path: "/reports",
    icon: FileText,
    roles: [
      ROLES.AUDITOR,
      ROLES.SUPER_ADMIN,
    ],
  },
];