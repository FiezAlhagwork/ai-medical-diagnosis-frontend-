import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const UserMenu = () => {
    const { user, logout } = useAuth();
    const [open, setOpen] = useState(false);
    const navigate = useNavigate()
    return (
        <div className="relative">
            {/* Trigger */}
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-gray-100 transition"
            >
                <FaUserCircle size={26} className="text-primary" />
                <span className="text-sm font-medium text-gray-700">
                    {user?.name}
                </span>
            </button>

            {/* Dropdown */}
            {open && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden z-50">
                    <Link
                        to="/profile"
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setOpen(false)}
                    >
                        الملف الشخصي
                    </Link>

                    <Link
                        to="/symptoms"
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setOpen(false)}
                    >
                        انشاء تشخيص
                    </Link>

                    <button
                        onClick={() => {
                            logout();
                            setOpen(false);
                            navigate("/login")
                        }}
                        className="w-full text-right px-4 py-3 text-sm text-red-600 hover:bg-red-50"
                    >
                        تسجيل الخروج
                    </button>
                </div>
            )}
        </div>
    );
};

export default UserMenu;
