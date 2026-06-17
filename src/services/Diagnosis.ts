import type { SymptomsType } from "../schema";
import type { DiagnosisAllResponse, DiagnosisResponseById } from "../types/Diagnosis";
import { api } from "./api";

export const createDiagnosis = (data: SymptomsType) => {
  return api.post<DiagnosisResponseById>("/api/diagnosis", data);
};

export const getDiagnosisByID = (id: string) => {
  return api.get<DiagnosisResponseById>(`/api/diagnosis/${id}`);
};

export const getAllDiagnosis = () => {
  return api.get<DiagnosisAllResponse>(`/api/diagnosis`);
};
