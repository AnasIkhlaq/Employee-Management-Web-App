// components/AddEmployeePage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddEmployeePage() {
  const [id, setId] = useState(""); 
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [department, setDepartment] = useState("");
  const [salary, setSalary] = useState("");
  const [tasks, setTasks] = useState([{ title: "", deadline: "", completed: false }]);
  const navigate = useNavigate();

  const handleAddTask = () => {
    setTasks([...tasks, { title: "", deadline: "", completed: false }]);
  };

  const handleTaskChange = (index, event) => {
    const newTasks = tasks.slice();
    newTasks[index][event.target.name] = event.target.value;
    setTasks(newTasks);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const filteredTasks = tasks.filter(task => task.title && task.deadline);
    const newEmployee = { id, name, role, department, salary, tasks: filteredTasks };

    const existingEmployees = JSON.parse(localStorage.getItem("employees")) || [];
    localStorage.setItem("employees", JSON.stringify([...existingEmployees, newEmployee]));

    alert("Employee added successfully!");
    navigate("/employee-list");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-400">
      <div className="w-full max-w-md bg-gray-600 text-center rounded-lg shadow-lg p-5 mt-5">
        <h2 className="text-2xl font-semibold text-white">Add New Employee</h2>
      </div>
      <div className="mt-4 w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Employee ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="block w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="block w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="text"
            placeholder="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="block w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="text"
            placeholder="Department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="block w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="number"
            placeholder="Salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            className="block w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <h3 className="text-lg font-semibold mb-2">Tasks</h3>
          {tasks.map((task, index) => (
            <div key={index} className="mb-4">
              <input
                type="text"
                name="title"
                placeholder="Task Title"
                value={task.title}
                onChange={(e) => handleTaskChange(index, e)}
                className="block w-full p-2 mb-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="date"
                name="deadline"
                value={task.deadline}
                onChange={(e) => handleTaskChange(index, e)}
                className="block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddTask}
            className="w-full mb-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-all"
          >
            Add Task
          </button>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all"
          >
            Save Employee
          </button>
        </form>
      </div>
      <div className=" bottom-0 w-full bg-gray-600 text-center p-5 text-white font-bold mt-5">
        @2024Management App
      </div>
    </div>
  );
}

export default AddEmployeePage;
