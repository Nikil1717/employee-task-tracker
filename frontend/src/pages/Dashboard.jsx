import React from "react";
import Header from "../components/Header";
import TaskList from "../components/TaskList";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-6xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Employee Task Tracker</h1>
        <TaskList />
      </main>
    </div>
  );
}
