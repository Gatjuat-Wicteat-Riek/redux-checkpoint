import React from "react";
import { useSelector } from "react-redux";
import Task from "./component/Task";

const ListTask = () => {
  const tasks = useSelector((state) => state);

  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTask;
