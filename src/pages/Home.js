import React, { useState, useEffect } from "react";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";
import { fetchTasks, createTask, updateTask, deleteTask } from "../api/tasks";

const Home = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const loadTasks = async () => {
      const fetchedTasks = await fetchTasks();
      setTasks(fetchedTasks);
    };
    loadTasks();
  }, []);

  const handleCreateTask = async (task) => {
    const newTask = await createTask(task);
    setTasks([...tasks, newTask]);
  };

  const handleEditTask = async (id, updatedTask) => {
    const editedTask = await updateTask(id, updatedTask);
    setTasks(tasks.map((task) => (task.id === id ? editedTask : task)));
  };

  const handleDeleteTask = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <TaskForm onSubmit={handleCreateTask} />
      <TaskList
        tasks={tasks}
        onEdit={handleEditTask}
        onDelete={handleDeleteTask}
      />
    </div>
  );
};

export default Home;
