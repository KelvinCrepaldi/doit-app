"use client";
import { Button, Input } from "@/components";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import taskSchema from "./schema";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/context/UserContext";
import api from "@/services";
import { TaskContext } from "@/context/TaskContext";

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
  const { createTask } = useContext(TaskContext);

  const taskSubmit = (data: TaskType) => {
    createTask(data);
  };
  return (
    <form
      onSubmit={handleSubmit(taskSubmit)}
      className="w-full flex items-start"
    >
      <Input
        control={control}
        error={errors.title?.message}
        label="Criar nova atividade..."
        name="title"
        suppressHydrationWarning
      />
      <div className="mt-4 md:mt-5">
        <Button customStyle="secondary" type="submit">
          Adicionar
        </Button>
      </div>
    </form>
  );
};

export default TaskCreate;
