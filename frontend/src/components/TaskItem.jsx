import React from "react";

export default function TaskItem({ task }) {
  return (
    <li
      className={`p-3 border-b last:border-none flex justify-between items-center ${
        task.completed ? "bg-green-100" : ""
      }`}
    >
      <span className={task.completed ? "line-through text-gray-500" : ""}>
        {task.title}
      </span>
      <button className="text-blue-600 hover:underline">
        {task.completed ? "Undo" : "Complete"}
      </button>
    </li>
  );
}
