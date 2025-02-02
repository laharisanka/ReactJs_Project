// src/context/TasksContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import { fetchTasks, createTask, updateTask, deleteTask } from "../api/tasks";

const TasksContext = createContext();

export const useTasks = () => {
  return useContext(TasksContext);
};

export const TasksProvider = ({ children }) => {
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
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const editTask = async (id, updatedTask) => {
    const updatedTaskData = await updateTask(id, updatedTask);
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? updatedTaskData : task))
    );
  };

  const removeTask = async (id) => {
    await deleteTask(id);
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <TasksContext.Provider value={{ tasks, addTask, editTask, removeTask }}>
      {children}
    </TasksContext.Provider>
  );
};
