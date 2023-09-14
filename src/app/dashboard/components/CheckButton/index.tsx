"use client";
import { Button } from "@/components";
import { TaskContext } from "@/context/TaskContext";
import { UserContext } from "@/context/UserContext";
import api from "@/services";
import { useContext } from "react";

const CheckButton = ({ id }: { id: string }): JSX.Element => {
  const { token } = useContext(UserContext);
  const { fetchTasks } = useContext(TaskContext);

  const handleCheck = async (): Promise<void> => {
    await api.post(
      `/task/${id}/check`,
      {},
      {
        headers: { Authorization: `bearer ${token}` },
      }
    );
    fetchTasks();
  };

  return (
    <Button customStyle="secondary" onClick={handleCheck}>
      Concluir
    </Button>
  );
};

export default CheckButton;
