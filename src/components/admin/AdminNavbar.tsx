import { FaUserShield } from "react-icons/fa";
import { FiLogOut, FiMenu } from "react-icons/fi";
import { useAuth } from "../../context/AuthContext";

type AdminNavbarProps = {
  onToggleSidebar: () => void;
};

const AdminNavbar = ({ onToggleSidebar }: AdminNavbarProps) => {
  const { user } = useAuth()
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="flex items-center justify-between px-4 py-3 lg:px-6">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleSidebar}
            className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 lg:hidden"
            aria-label="Toggle sidebar"
          >
            <FiMenu size={20} />
          </button>
          <div className="hidden lg:flex flex-col">
            <span className="text-sm font-semibold text-slate-800">
              لوحة التحكم
            </span>
            <span className="text-xs text-slate-400">
              إدارة الأطباء والمستخدمين
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            className="hidden sm:inline-flex items-center gap-2 text-xs font-medium text-slate-500 hover:text-slate-800"
          >
            <FiLogOut size={16} />
            <span>تسجيل الخروج</span>
          </button>

          <div className="flex items-center gap-2">
            <div className="text-end">
              <p className="text-xs font-semibold text-slate-800">
                {user?.name}
              </p>
              <p className="text-[11px] text-slate-400">Administrator</p>
            </div>
            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 text-primary">
              <FaUserShield size={18} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminNavbar;


