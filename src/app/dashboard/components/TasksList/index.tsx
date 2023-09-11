"use client";
import api from "@/services";
import TaskCard from "../TaskCard";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/context/UserContext";
import { motion } from "framer-motion";

const TasksList = (): JSX.Element => {
  const { token } = useContext(UserContext);
  const [list, setList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await api.get("/task", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = res.data;
      setList(data.tasks);
    }
    if (token) {
      fetchData();
    }
  }, [token]);

  return (
    <div className="flex flex-wrap">
      {list?.map((task: any, index) => (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          key={task.id}
        >
          <TaskCard title={task.title} createdAt={task.createdAt} />
        </motion.div>
      ))}
    </div>
  );
};

export default TasksList;
