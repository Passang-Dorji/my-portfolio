import React from "react";

const UniverseBackground = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-br from-purple-900 via-indigo-900 to-black opacity-75"></div>
      <div className="absolute inset-0 stars"></div>
      <div className="absolute inset-0">
        <div className="shooting-star"></div>
        <div className="shooting-star delay-1"></div>
        <div className="shooting-star delay-2"></div>
      </div>
    </div>
  );
};

export default UniverseBackground;
