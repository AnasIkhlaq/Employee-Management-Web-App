// components/EmployeeLoginPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function EmployeeLoginPage() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    
    // Check if the employee exists in localStorage
    const employee = employees.find(emp => emp.name === name && emp.id === id);
    
    if (employee) {
      // If found, navigate to the Task Management page
      navigate("/task-management", { state: { employee } });
    } else {
      setError("Invalid name or ID. Please try again.");
    }
  };

  return (
    <div className="relative flex justify-center items-center h-screen bg-gray-400 flex-col p-4">
      <div className="bg-gray-600 p-6 w-full max-w-sm shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-center">Employee Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="block w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            placeholder="Employee ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="block w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
      <div className="absolute bottom-0 w-full bg-gray-600 text-center p-5 text-white font-bold">
        @2024Management App
      </div>
    </div>
  );
}

export default EmployeeLoginPage;
