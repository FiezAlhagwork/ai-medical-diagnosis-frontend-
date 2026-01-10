/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosInstance from "../utils/axiosinstance";


export const api = {
    get: async <T>(url: string, params?: any): Promise<T> => {
      const res = await axiosInstance.get<T>(url, { params });
      return res.data;
    },
  
    post: async <T>(url: string, body: any): Promise<T> => {
      const res = await axiosInstance.post<T>(url, body);
      return res.data;
    },
  
    put: async <T>(url: string, body: any): Promise<T> => {
      const res = await axiosInstance.put<T>(url, body);
      return res.data;
    },
  
    delete: async <T>(url: string): Promise<T> => {
      const res = await axiosInstance.delete<T>(url);
      return res.data;
    },
  
  
  };
  