"use client";
import api from "@/services";
import { useRouter } from "next/navigation";
import { ReactNode, createContext, useContext, useState } from "react";
import { UserContext } from "./UserContext";

export const TaskContext = createContext<any>(undefined);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const { token, logout } = useContext(UserContext);
  const [tasks, setTasks] = useState(null);

  const fetchTasks = async (): Promise<void> => {
    try {
      const res = await api.get("/task", {
        headers: { Authorization: `bearer ${token}` },
      });
      const data = res.data;
      setTasks(data.tasks);
    } catch (error: any) {
      logout();
    }
  };

  const createTask = async (data: any) => {
    await api.post("/task", data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchTasks();
  };

  return (
    <TaskContext.Provider value={{ tasks, fetchTasks, createTask }}>
      {children}
    </TaskContext.Provider>
  );
};
