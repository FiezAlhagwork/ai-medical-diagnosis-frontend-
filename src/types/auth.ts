

export type User = {
  _id: string
  name: string,
  phone: string,
  email: string,
  province: string,
  city: string,
  age: string,
  role: "user" | "admin"
  createdAt?: string
  updatedAt?: string
}
export interface RegisterResponse {
  message: string;
  error: boolean;
  user: User,
  token: string
}

export interface RegisterPayload {
  name: string,
  email: string,
  password: string,
  phone: string,
  gender: "ذكر" | "أنثى",
  age: number,
  province: string,
  city: string
}

export interface LoginPayload {
  phone: string,
  password: string
}
