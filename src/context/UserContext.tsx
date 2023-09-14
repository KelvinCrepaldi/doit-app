"use client";
import { ILoginRequest } from "@/interfaces/login.interfaces";
import { ISinupRequest } from "@/interfaces/signup.interfaces";
import api from "@/services";
import { useRouter } from "next/navigation";
import { ReactNode, createContext, useEffect, useState } from "react";

export interface UserContextType {
  user: string | null;
  token: string | null;
  login: (body: { email: string; password: string }) => void;
  logout: () => void;
}

export const UserContext = createContext<any>(undefined);

interface IUser {
  name: string;
  email: string;
}

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getToken = localStorage.getItem("@doit:token");
    const getUser = localStorage.getItem("@doit:user");
    if (getToken) {
      const tokenParse = JSON.parse(getToken);
      setToken(tokenParse);
    }
    if (getUser) {
      const userParse = JSON.parse(getUser);
      setUser(userParse);
    }
  }, []);

  const login = async (body: ILoginRequest) => {
    try {
      setLoading(true);
      setError(null);

      const res = await api.post("/auth/login/", body);
      const data = res.data;

      if (res.statusText === "OK") {
        setUser(data.user);
        setToken(data.token);

        const localUser = JSON.stringify(data.user);
        const localToken = JSON.stringify(data.token);

        localStorage.setItem("@doit:user", localUser);
        localStorage.setItem("@doit:token", localToken);
      }
    } catch (error: any) {
      console.log(error);
      setError(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    router.push("/");
    localStorage.removeItem("@doit:token");
    localStorage.removeItem("@doit:user");
    setToken("");
    setUser(null);
  };

  return (
    <UserContext.Provider
      value={{ user, token, login, logout, loading, error }}
    >
      {children}
    </UserContext.Provider>
  );
};
