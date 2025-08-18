import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import WaxMuseumLogo from "./WaxMuseumLogo";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { name: "Ticket", path: "/ticket" },
    { name: "History", path: "/history" },
    { name: "Guide Score", path: "/guide-score" },
  ];

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="w-64 h-screen flex flex-col bg-gradient-to-b from-blue-800 via-blue-900 to-blue-950 text-white shadow-lg">
      {/* Logo Section */}
      <div className="flex items-center justify-center py-6 border-b border-white/20">
        <WaxMuseumLogo />
      </div>

      {/* Menu Items */}
      <nav className="flex-1 px-4 py-6 space-y-3">
        {menuItems.map((item) => (
          <Button
            key={item.path}
            onClick={() => navigate(item.path)}
            variant="ghost"
            className={`w-full justify-start text-left h-12 rounded-xl font-medium transition-all ${
              location.pathname === item.path
                ? "bg-blue-600 text-white shadow-md"
                : "text-gray-200 hover:bg-blue-700 hover:text-white"
            }`}
          >
            {item.name}
          </Button>
        ))}
      </nav>

      {/* Logout Button */}
      <div className="p-4 border-t border-white/20">
        <Button
          onClick={handleLogout}
          className="w-full h-12 rounded-xl font-semibold bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 shadow-md"
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
