import { useState, useEffect } from "react";
import { fetchTasks, createTask, updateTask, deleteTask } from "../api/tasks";

const useTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const loadTasks = async () => {
      const fetchedTasks = await fetchTasks();
      setTasks(fetchedTasks);
    };
    loadTasks();
  }, []);

  const addTask = async (task) => {
    const newTask = await createTask(task);
    setTasks([...tasks, newTask]);
  };

  const editTask = async (id, updatedTask) => {
    const editedTask = await updateTask(id, updatedTask);
    setTasks(tasks.map((task) => (task.id === id ? editedTask : task)));
  };

  const removeTask = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return {
    tasks,
    addTask,
    editTask,
    removeTask,
  };
};

export default useTasks;
