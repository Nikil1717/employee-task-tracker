import React from "react";
import TaskItem from "./TaskItem";

const dummyTasks = [
  { id: 1, title: "Finish project report", completed: false },
  { id: 2, title: "Update timesheet", completed: true },
  { id: 3, title: "Attend team meeting", completed: false },
];

export default function TaskList() {
  return (
    <div className="bg-white rounded shadow p-4">
      {dummyTasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        <ul>
          {dummyTasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </ul>
      )}
    </div>
  );
}
