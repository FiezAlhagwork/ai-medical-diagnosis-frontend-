import { Outlet } from "react-router-dom";
import { useState } from "react";
import AdminNavbar from "../../components/admin/AdminNavbar";
import AdminSidebar from "../../components/admin/AdminSidebar";

const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  const handleToggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="h-screen flex flex-col bg-slate-50 overflow-hidden">
      <AdminNavbar onToggleSidebar={handleToggleSidebar} />

      <div className="flex flex-1 min-h-0">
        <AdminSidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />

        <main className="flex-1 min-h-0 overflow-y-auto px-4 py-4 lg:px-6 lg:py-6">
          <div className="mx-auto max-w-6xl">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;