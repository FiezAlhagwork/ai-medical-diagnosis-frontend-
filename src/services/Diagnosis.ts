import type { SymptomsType } from "../schema";
import type { DiagnosisAllResponse, DiagnosisResponse } from "../types/Diagnosis";
import { api } from "./api";

export const createDiagnosis = (data: SymptomsType) => {
  return api.post<DiagnosisResponse>("/api/diagnosis", data);
};

export const getDiagnosisByID = (id: string) => {
  return api.get<DiagnosisResponse>(`/api/diagnosis/${id}`);
};

export const getAllDiagnosis = () => {
  return api.get<DiagnosisAllResponse>(`/api/diagnosis`);
};
