import { NavLink } from "react-router-dom";
import { navigationItems } from "../../configs/navigationConfig";
import { useOktaAuth } from "@okta/okta-react";
import { getGroups } from "../../utils/jwtUtils";


function Sidebar() {
  const { authState } = useOktaAuth();

const userGroups =
  authState?.accessToken?.accessToken
    ? getGroups(authState.accessToken.accessToken)
    : [];
    const menuItems = navigationItems.filter(
  (item) =>
    item.roles.some((role) =>
      userGroups.includes(role)
    )
);
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