"use client";
import api from "@/services";
import { useRouter } from "next/navigation";
import { ReactNode, createContext, useContext, useState } from "react";
import { UserContext } from "./UserContext";
import { ISinupRequest } from "@/interfaces/signup.interfaces";

export const SignupContext = createContext<any>(undefined);

export const SignupProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>();

  const signup = async (body: ISinupRequest) => {
    try {
      setLoading(true);
      setError(null);

      const res = await api.post("/auth/signup/", body);
      const data = res.data;

      if (res.status === 200) {
        router.push("/login");
      }
    } catch (error: any) {
      console.log(error);
      setError(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SignupContext.Provider value={{ signup, loading, error }}>
      {children}
    </SignupContext.Provider>
  );
};
