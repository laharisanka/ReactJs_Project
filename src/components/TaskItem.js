import React from "react";

const TaskItem = ({ task, onEdit, onDelete }) => {
  return (
    <div>
      <h3>{task.title}</h3>
      <p>Category: {task.category}</p>
      <p>Due Date: {task.dueDate}</p>
      <p>Tags: {task.tags.join(", ")}</p>
      <button onClick={() => onEdit(task.id)}>Edit</button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
