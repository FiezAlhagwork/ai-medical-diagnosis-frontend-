/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import type { User } from "../types/auth";
import { getUserById } from "../services/auth";



type AuthContextType = {
    user: User | null
    isAuthenticated: boolean;
    loading: boolean;
    login: (userData: User | null) => void
    logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const initAuth = async () => {
            const token = localStorage.getItem("token");
            const userId = localStorage.getItem("userId");

            if (!token || !userId) {
                setLoading(false);
                return;
            }

            try {
                const res = await getUserById(userId);
                console.log(res);

                setUser(res.user);
            } catch (error) {
                localStorage.removeItem("token");
                localStorage.removeItem("userId");
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        initAuth();
    }, []);
    return (
        <AuthContext.Provider value={{
            user,
            isAuthenticated: !!user,
            loading,
            login: (userData: User | null) => setUser(userData),
            logout: () => {
                setUser(null);
                localStorage.removeItem("token");
            },
        }} >
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within AuthProvider");
    }
    return context;
};

