// types/auth.ts
export interface RegisterResponse {
    message: string;
    error: boolean;
    user: {
      id: string;
      name: string;
      email?: string;
      role: "user" | "admin";
      token: string;
    };
  }

  export interface RegisterPayload {
    name:string,
    email:string,
    password:string,
    phone:string,
    gender:"ذكر" | "أنثى",
    age:number,
    province:string,
    city:string
  }

  export  interface LoginPayload {
    phone:string,
    password:string
  }
  