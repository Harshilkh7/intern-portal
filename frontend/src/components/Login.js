import React from "react";

const Login = ({ onLogin }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white p-8 rounded-2xl shadow-md w-80 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Intern Portal</h1>
        <input
          type="text"
          placeholder="Enter your name"
          className="border p-2 rounded w-full mb-4"
          id="username"
        />
        <button
          onClick={() => {
            const name = document.getElementById("username").value;
            if (name) onLogin(name);
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
