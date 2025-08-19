import React from "react";

const WaxMuseumLogo = () => {
  return (
    <div className="flex items-center justify-center p-4">
      <img
        src="/logo.png" // since it's inside public/
        alt="Wax Museum Logo"
        className="w-32 h-auto object-contain"
      />
    </div>
  );
};

export default WaxMuseumLogo;
