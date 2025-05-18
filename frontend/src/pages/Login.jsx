import React from "react";

export default function Login() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <input
          type="text"
          placeholder="Username"
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
