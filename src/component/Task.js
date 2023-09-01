import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTask, editTask } from "../store";

const Task = ({ task }) => {
  const { id, description, isDone } = task;
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [newDescription, setNewDescription] = useState(description);

  const handleToggle = () => {
    dispatch(toggleTask({ id }));
  };

  const handleEdit = () => {
    if (newDescription.trim()) {
      dispatch(editTask({ id, description: newDescription }));
      setEditMode(false);
    }
  };

  return (
    <div>
      {editMode ? (
        <>
          <input
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
        </>
      ) : (
        <>
          <span>{description}</span>
          <button onClick={handleToggle}>{isDone ? "Undo" : "Done"}</button>
          <button onClick={() => setEditMode(true)}>Edit</button>
        </>
      )}
    </div>
  );
};

export default Task;
