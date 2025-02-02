// src/api/tasks.js
export const fetchTasks = async () => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  return tasks;
};

export const createTask = async (task) => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  task.id = new Date().getTime().toString();
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  return task;
};

export const updateTask = async (id, updatedTask) => {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.map((task) => (task.id === id ? updatedTask : task));
  localStorage.setItem("tasks", JSON.stringify(tasks));
  return updatedTask;
};

export const deleteTask = async (id) => {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter((task) => task.id !== id);
  localStorage.setItem("tasks", JSON.stringify(tasks));
};
