// components/TaskManagementPage.js
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function TaskManagementPage() {
  const location = useLocation();
  const { employee } = location.state || {};

  const [tasks, setTasks] = useState(employee?.tasks || []);

  useEffect(() => {
    if (employee) {
      const updatedEmployees = JSON.parse(localStorage.getItem("employees")).map((emp) =>
        emp.id === employee.id ? { ...emp, tasks: tasks } : emp
      );
      localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    }
  }, [tasks, employee]);

  const handleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://img.freepik.com/premium-vector/project-management_104589-39.jpg)',
          filter: 'brightness(0.4)', 
        }}
      ></div>
      <h2 className="z-10 text-3xl font-semibold mb-4 text-yellow-400">Task Dashboard</h2>
      <div className="z-10 flex justify-center items-center text-yellow-500 px-4">
        <div className="bg-gray-600 rounded-lg w-full max-w-md p-6">
          <div>
            <h3 className="font-semibold">Welcome, {employee.name}!</h3>
            <p>Your Employee ID: {employee.id}</p>
            <h4 className="mt-4">Your Tasks:</h4>
            {tasks.length > 0 ? (
              <ul className="space-y-2">
                {tasks.map((task, index) => (
                  <li key={index} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => handleTaskCompletion(index)}
                      className="mr-2"
                    />
                    <span className={`flex-1 ${task.completed ? ' text-gray-400' : ''}`}>
                      {task.title} - {task.deadline}
                    </span>
                    <span
                      className={`ml-2 font-semibold ${task.completed ? 'text-green-600' : 'text-purple-600'}`}
                    >
                      {task.completed ? "Completed" : "Incomplete"}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No tasks assigned.</p>
            )}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full bg-gray-600 text-center p-5 text-white font-bold">
        @2024Management App
      </div>
    </div>
  );
}

export default TaskManagementPage;
