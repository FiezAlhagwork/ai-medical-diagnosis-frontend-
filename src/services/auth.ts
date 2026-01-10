import { api } from "./api";

import type {
  LoginPayload,
  RegisterPayload,
  RegisterResponse,
} from "../types/auth";

export const registerUser = (data: RegisterPayload) => {
  return api.post<RegisterResponse>("/api/auth/register", data);
};

export const loginUser = (data: LoginPayload) => {
  return api.post<RegisterResponse>("api/auth/login", data);
};
