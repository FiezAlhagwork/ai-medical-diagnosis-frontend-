import type { DoctorResponse, DoctorResponseById, GetDoctorsParams } from "../types/Doctor";
import { api } from "./api";


export const getDoctors = ({ specialty, city, province }: GetDoctorsParams) => {
    return api.get<DoctorResponse>("/api/doctor/search", { specialty, city, province })
}


export const getDoctorById = (id: string | undefined) => {
    return api.get<DoctorResponseById>(`/api/doctor/${id}`)
}
