// components/Modal.js
import React, { useState } from "react";

const Modal = ({ isOpen, onClose, onSubmit }) => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === "admin") {
      onSubmit(); // Proceed if password is correct
    } else {
      alert("Incorrect password. Please try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-lg font-semibold mb-4">Enter Admin Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="relative mb-4">
            <input
              type={showPassword ? "text" : "password"} // Toggle input type
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="block w-full p-2 border border-gray-300 rounded"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)} // Toggle showPassword state
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500"
            >
              {showPassword ? "Hide" : "Show"} {/* Button text changes based on state */}
            </button>
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={onClose}
            className="ml-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
