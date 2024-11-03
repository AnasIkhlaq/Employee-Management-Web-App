// components/EmployeeListPage.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header"; // Import the Header component

function EmployeeListPage() {
  const [employees, setEmployees] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
    setEmployees(storedEmployees);
  }, []);

  const handleDeleteEmployee = (index) => {
    const updatedEmployees = employees.filter((_, i) => i !== index);
    setEmployees(updatedEmployees);
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  };

  const handleEditEmployee = (employee) => {
    navigate(`/edit-employee/${employee.id}`); // Navigate to the Edit Employee page
  };

  const handleAddEmployee = () => {
    navigate("/add-employee");
  };

  const handleHome = () => {
    navigate("/");
  };

  const handleLogin = () => {
    navigate("/employee-login");
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // Toggle the menu visibility
  };

  return (
    <div className="relative bg-white shadow-md rounded-lg h-screen flex flex-col">
      <Header
        onHome={handleHome}
        onAddEmployee={handleAddEmployee}
        onLogin={handleLogin}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      />

      <div className="mt-5 flex-grow overflow-auto p-4">
        <h2 className="text-2xl font-semibold mb-4">Employee List</h2>
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">ID</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Role</th>
              <th className="border border-gray-300 px-4 py-2">Department</th>
              <th className="border border-gray-300 px-4 py-2">Salary</th>
              <th className="border border-gray-300 px-4 py-2">Tasks</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={index} className="text-center">
                <td className="border border-gray-300 px-4 py-2">{employee.id}</td>
                <td className="border border-gray-300 px-4 py-2">{employee.name}</td>
                <td className="border border-gray-300 px-4 py-2">{employee.role}</td>
                <td className="border border-gray-300 px-4 py-2">{employee.department}</td>
                <td className="border border-gray-300 px-4 py-2">${employee.salary}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {employee.tasks && employee.tasks.length > 0 ? (
                    <ul className="list-disc list-inside">
                      {employee.tasks.map((task, taskIndex) => (
                        <li key={taskIndex}>
                          {task.title} - {task.deadline}{" "}
                          <span
                            className={
                              task.completed
                                ? "text-green-600 font-semibold"
                                : "text-red-600 font-semibold"
                            }
                          >
                            {task.completed ? "Completed" : "Incomplete"}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>No tasks assigned</p>
                  )}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    onClick={() => handleEditEmployee(employee)}
                    className="mr-2 px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteEmployee(index)}
                    className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="absolute bottom-0 w-full bg-gray-600 text-center p-5 text-white font-bold">
        @2024 Management App
      </div>
    </div>
  );
}

export default EmployeeListPage;
