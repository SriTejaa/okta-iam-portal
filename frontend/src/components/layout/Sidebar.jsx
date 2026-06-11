import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  User,
  KeyRound,
  History,
} from "lucide-react";

const menuItems = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Profile",
    path: "/profile",
    icon: User,
  },
  {
    label: "My Access Requests",
    path: "/my-access-requests",
    icon: KeyRound,
  },
  {
    label: "My Request History",
    path: "/my-request-history",
    icon: History,
  },
];

function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-slate-200 min-h-[calc(100vh-64px)]">
      <div className="p-6">
        <h2 className="text-lg font-bold text-slate-800">
          IAM Portal
        </h2>
      </div>

      <nav className="px-4 space-y-2">
      {menuItems.map((item) => {
        const Icon = item.icon;

        return (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg ${
                isActive
                  ? "bg-slate-900 text-white"
                  : "hover:bg-slate-100"
              }`
            }
          >
            <Icon size={18} />
            <span>{item.label}</span>
          </NavLink>
        );
      })}
      </nav>
    </aside>
  );
}

export default Sidebar;