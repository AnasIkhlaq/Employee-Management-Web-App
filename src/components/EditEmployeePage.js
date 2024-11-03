// components/EditEmployeePage.js
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditEmployeePage() {
  const [editedEmployee, setEditedEmployee] = useState({ tasks: [] });
  const { id } = useParams(); // Get the employee ID from the URL
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
    const employeeToEdit = storedEmployees.find((employee) => employee.id === id);

    if (employeeToEdit) {
      setEditedEmployee({ ...employeeToEdit, tasks: employeeToEdit.tasks || [] });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedEmployee({ ...editedEmployee, [name]: value });
  };

  const handleAddTaskField = () => {
    setEditedEmployee((prevEmployee) => ({
      ...prevEmployee,
      tasks: [...(prevEmployee.tasks || []), { title: "", deadline: "", completed: false }],
    }));
  };

  const handleTaskChange = (index, event) => {
    const { name, value } = event.target;
    const updatedTasks = [...editedEmployee.tasks];
    updatedTasks[index] = { ...updatedTasks[index], [name]: value };
    setEditedEmployee({ ...editedEmployee, tasks: updatedTasks });
  };

  const handleRemoveTask = (index) => {
    const updatedTasks = editedEmployee.tasks.filter((_, i) => i !== index);
    setEditedEmployee({ ...editedEmployee, tasks: updatedTasks });
  };

  const handleUpdateEmployee = (event) => {
    event.preventDefault();
    const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
    const updatedEmployees = storedEmployees.map((employee) =>
      employee.id === editedEmployee.id ? editedEmployee : employee
    );
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    alert("Employee updated successfully!");
    navigate("/employee-list");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-400">
      <div className="w-full max-w-md bg-gray-600 text-center rounded-lg shadow-lg p-5 mt-5">
        <h2 className="text-2xl font-semibold text-white">Edit Employee</h2>
      </div>
      <div className="mt-4 w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <form onSubmit={handleUpdateEmployee} className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">ID</label>
          <input
            type="text"
            name="id"
            value={editedEmployee.id}
            onChange={handleChange}
            className="block w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <label className="block text-gray-700 font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={editedEmployee.name}
            onChange={handleChange}
            className="block w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <label className="block text-gray-700 font-medium mb-1">Role</label>
          <input
            type="text"
            name="role"
            value={editedEmployee.role}
            onChange={handleChange}
            className="block w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <label className="block text-gray-700 font-medium mb-1">Department</label>
          <input
            type="text"
            name="department"
            value={editedEmployee.department}
            onChange={handleChange}
            className="block w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <label className="block text-gray-700 font-medium mb-1">Salary</label>
          <input
            type="number"
            name="salary"
            value={editedEmployee.salary}
            onChange={handleChange}
            className="block w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <h4 className="font-semibold mt-4 mb-2 text-gray-700">Tasks</h4>
          {editedEmployee.tasks.map((task, index) => (
            <div key={index} className="mb-2">
              <input
                type="text"
                name="title"
                placeholder="Task Title"
                value={task.title}
                onChange={(e) => handleTaskChange(index, e)}
                className="block w-full p-2 mb-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="date"
                name="deadline"
                value={task.deadline}
                onChange={(e) => handleTaskChange(index, e)}
                className="block w-full p-2 mb-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {!task.completed && (
                <button
                  type="button"
                  onClick={() => handleRemoveTask(index)}
                  className="mt-2 px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all"
                >
                  Remove Task
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddTaskField}
            className="mb-4 w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-all"
          >
            Add Task
          </button>

          <div className="flex space-x-2">
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all"
            >
              Update Employee
            </button>
            <button
              type="button"
              onClick={() => navigate("/employee-list")}
              className="w-full px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
      <div className=" bottom-0 w-full bg-gray-600 text-center p-5 text-white font-bold mt-5">
        @2024Management App
      </div>
    </div>
  );
}

export default EditEmployeePage;
