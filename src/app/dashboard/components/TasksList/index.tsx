"use client";
import TaskCard from "../TaskCard";
import { useContext, useEffect } from "react";
import { UserContext } from "@/context/UserContext";
import { AnimatePresence, motion } from "framer-motion";
import { TaskContext } from "@/context/TaskContext";

const TasksList = (): JSX.Element => {
  const { token } = useContext(UserContext);
  const { tasks, fetchTasks } = useContext(TaskContext);

  useEffect(() => {
    if (token) {
      fetchTasks();
    }
  }, [token]);

  return (
    <div className="flex flex-wrap">
      <AnimatePresence>
        {tasks?.map((task: any, index: number) => (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{
              delay: index * 0.2,
            }}
            key={task.id}
            className="w-full md:w-[230px] md:min-h-[250px] m-1"
          >
            <TaskCard task={task} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default TasksList;
