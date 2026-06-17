import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";

type AdminSidebarItemProps = {
  to: string;
  icon: ReactNode;
  label: string;
  collapsed?: boolean;
  onClick?: () => void;
};

const baseItemClasses =
  "flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-colors duration-200";

const AdminSidebarItem = ({
  to,
  icon,
  label,
  collapsed = false,
  onClick,
}: AdminSidebarItemProps) => {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        [
          baseItemClasses,
          isActive
            ? "bg-primary text-white"
            : "text-slate-600 hover:bg-slate-100",
        ].join(" ")
      }
    >
      <span  className="flex items-center justify-center w-8 h-8 rounded-lg  bg-slate-100 text-slate-600">
        {icon}
      </span>
      {!collapsed && <span className="truncate">{label}</span>}
    </NavLink>
  );
};

export default AdminSidebarItem;


