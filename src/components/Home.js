// components/Home.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal"; // Import the Modal component

function Home() {
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);
  
  const handleAdminClick = () => {
    setModalOpen(true); // Open the modal
  };
  
  const handleEmployeeClick = () => {
    navigate("/employee-login");
  };
  
  const handlePasswordSubmit = () => {
    setModalOpen(false); // Close the modal
    navigate("/employee-list"); // Redirect to Employee List page
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://universalbackground.com/wordpress/wp-content/uploads/2016/07/shutterstock_270307373.jpg)', // Set the path to your background image
          filter: 'brightness(0.5)', // Decrease the brightness (0 is black, 1 is original)
        }}
      ></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 text-white text-center">
          Welcome to the Employee Management App
        </h1>
        <div className="flex flex-col space-y-4 w-full max-w-xs">
          <button
            onClick={handleAdminClick}
            className="w-full px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Admin
          </button>
          <button
            onClick={handleEmployeeClick}
            className="w-full px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Employee
          </button>
        </div>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          onSubmit={handlePasswordSubmit}
        />
      </div>
      <div className="absolute bottom-0 w-full bg-gray-600 text-center p-5 text-white font-bold">
        @2024Management App
      </div>
    </div>
  );
}

export default Home;
