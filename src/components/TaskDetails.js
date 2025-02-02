import React from "react";

const TaskDetails = ({ task }) => {
  return (
    <div>
      <h2>{task.title}</h2>
      <p>Category: {task.category}</p>
      <p>Due Date: {task.dueDate}</p>
      <p>Tags: {task.tags.join(", ")}</p>
      <p>Activity Log:</p>
      <ul>
        {task.activityLog.map((log, index) => (
          <li key={index}>{log}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskDetails;
