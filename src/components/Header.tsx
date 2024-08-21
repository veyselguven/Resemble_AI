import React from "react";

export const Header: React.FC = () => {
  return (
    <div className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center ">
        <div className="font-bold text-xl">Resembele AI</div>
        <nav>
          <ul className="flex space-x-6">
            <li>Home</li>
            <li>Voice</li>
            <li>About</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

// will come back for logo
