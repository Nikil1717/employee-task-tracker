import React from "react";

export default function Header() {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h2 className="text-xl font-semibold">Employee Task Tracker</h2>
      <nav>
        <button className="text-blue-600 hover:underline">Logout</button>
      </nav>
    </header>
  );
}
