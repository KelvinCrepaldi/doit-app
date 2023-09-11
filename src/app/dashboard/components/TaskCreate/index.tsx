"use client";
import { Button, Input } from "@/components";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import taskSchema from "./schema";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/context/UserContext";
import api from "@/services";

interface TaskType {
  title: string;
}

const TaskCreate = (): JSX.Element => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<TaskType>({
    resolver: yupResolver(taskSchema),
    defaultValues: { title: "" },
  });
  const [date, setDate] = useState<string>("");
  const { token } = useContext(UserContext);

  useEffect(() => {
    setDate(new Date().toLocaleString());
  }, []);

  const taskSubmit = async (data: TaskType) => {
    const sendData = {
      title: data.title,
      message: "",
    };
    if (token) {
      await api.post("/task", sendData, {
        headers: { Authorization: `Bearer ${token}` },
      });
    }
  };
  return (
    <form
      onSubmit={handleSubmit(taskSubmit)}
      className="w-full flex items-start"
    >
      <Input
        control={control}
        error={errors.title?.message}
        label={date || "//"}
        name="title"
        suppressHydrationWarning
      />
      <div className="mt-6">
        <Button customStyle="secondary" type="submit">
          Adicionar
        </Button>
      </div>
    </form>
  );
};

export default TaskCreate;
