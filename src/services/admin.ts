import type { DashboardState, SpecialtyStatsResponse } from "../types";
import { api } from "./api";


export const getMockDashboardStats = () => {
    return api.get<DashboardState>("/api/dashboard/overview")
}
export const getBySpecialty = () => {
    return api.get<SpecialtyStatsResponse>("/api/dashboard/stats/specialties")
}