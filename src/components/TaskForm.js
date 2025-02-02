import React, { useState } from "react";

const TaskForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [tags, setTags] = useState([]);
  const [files, setFiles] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, category, dueDate, tags, files });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
        required
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <input
        type="text"
        value={tags.join(", ")}
        onChange={(e) => setTags(e.target.value.split(","))}
        placeholder="Tags"
      />
      <input type="file" onChange={(e) => setFiles(e.target.files)} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default TaskForm;
