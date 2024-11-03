// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import EmployeeListPage from "./components/EmployeeListPage";
import EditEmployeePage from "./components/EditEmployeePage"; 
import AddEmployeePage from "./components/AddEmployeePage"; // Assuming you have this component
import EmployeeLoginPage from "./components/EmployeeLoginPage";
import TaskManagementPage from "./components/TaskManagementPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employee-list" element={<EmployeeListPage />} />
        <Route path="/edit-employee/:id" element={<EditEmployeePage />}/> 
        <Route path="/add-employee" element={<AddEmployeePage />} />
        <Route path="/employee-login" element={<EmployeeLoginPage />} />
        <Route path="/task-management" element={<TaskManagementPage />} />
        {/* Add other routes as necessary */}
      </Routes>
    </Router>
  );
}

export default App;
