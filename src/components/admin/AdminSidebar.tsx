import { MdOutlineDashboardCustomize } from "react-icons/md";
import { RiStethoscopeLine } from "react-icons/ri";
import { FaUserPlus } from "react-icons/fa6";
import { HiOutlineUsers } from "react-icons/hi";
import AdminSidebarItem from "./AdminSidebarItem";
import { BsController } from "react-icons/bs";

type AdminSidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

const navItems = [
  {
    to: "/admin/dashboard",
    label: "لوحة التحكم ",
    icon: <BsController size={18} />,
  },
  {
    to: "/admin/manageDoctor",
    label: "إدارة الأطباء",
    icon: <RiStethoscopeLine size={18} />,
  },
  {
    to: "/admin/createDoctor",
    label: "إضافة طبيب",
    icon: <FaUserPlus size={18} />,
  },
  {
    to: "/admin/manageUser",
    label: "إدارة المستخدمين",
    icon: <HiOutlineUsers size={18} />,
  }
];

const AdminSidebar = ({ isOpen, onClose }: AdminSidebarProps) => {
  return (
    <>
      {/* Backdrop for mobile */}
      <div
        className={`fixed inset-0 z-30 bg-black/30 transition-opacity lg:hidden ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0  right-0 z-40 w-64 bg-white border-l border-slate-200 shadow-lg transform transition-transform duration-300 ease-in-out
        lg:static lg:translate-x-0 lg:shadow-none
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center gap-2 px-4 py-4 border-b border-slate-100 md:hidden">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-primary/10 text-primary">
            <MdOutlineDashboardCustomize size={20} />
          </span>
          <div className="  flex flex-col  ">
            <span className="text-sm font-semibold text-slate-800">
              لوحة تحكم الأدمن
            </span>
            <span className="text-xs text-slate-400">إدارة النظام</span>
          </div>
        </div>

        <nav className="px-3 py-4 space-y-1">
          {navItems.map((item) => (
            <AdminSidebarItem
              key={item.to}
              to={item.to}
              icon={item.icon}
              label={item.label}
              onClick={onClose}
            />
          ))}
        </nav>
      </aside>
    </>
  );
};

export default AdminSidebar;


