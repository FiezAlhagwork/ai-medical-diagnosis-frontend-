import { Navigate, Outlet } from "react-router-dom";

type Role = "admin" | "user";

const ProtectedRoute = ({ role }: { role?: Role }) => {
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("role") as Role | null;

  // 1️ غير مسجل دخول
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // 2️ مسجل دخول بس الدور غير معروف (حالة أمان)
  if (!userRole) {
    return <Navigate to="/login" replace />;
  }

  // 3️ Route مخصص لدور معيّن
  if (role && userRole !== role) {
    // admin حاول يدخل user page أو العكس
    return userRole === "admin"
      ? <Navigate to="/admin" replace />
      : <Navigate to="/profile" replace />;
  }

  // 4️ كل شي تمام
  return <Outlet />;
};

export default ProtectedRoute;
