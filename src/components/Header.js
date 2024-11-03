// components/Header.js
import React from "react";

const Header = ({ onHome, onAddEmployee, onLogin, isMenuOpen, toggleMenu }) => {
  return (
    <div className="flex justify-between items-center bg-gray-600 p-5 font-extrabold text-white">
      <p className="text-lg">Management App</p>
      <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none">
        {isMenuOpen ? "✖" : "☰"} {/* Using text-based icons for simplicity */}
      </button>
      <div className={`md:flex md:justify-end ${isMenuOpen ? "flex" : "hidden"} md:block`}>
        <div className={`md:flex md:space-x-2 ${isMenuOpen ? "flex-col space-y-2 md:flex-row md:space-y-0" : ""}`}>
          <button onClick={onHome} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Home
          </button>
          <button onClick={onAddEmployee} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Add Employee
          </button>
          <button onClick={onLogin} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Employee Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
