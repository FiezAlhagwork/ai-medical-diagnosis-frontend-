import type { DoctorResponse, GetDoctorsParams } from "../types/Doctor";
import { api } from "./api";


export const getDoctors = ({ specialty, city, province }: GetDoctorsParams) => {
    return api.get<DoctorResponse>("/api/doctor/search", { specialty, city, province })
}


