import React from "react";

const Hexagon = ({ size, index }) => {
  const hexagonStyle = {
    width: `${size}px`,
    height: `${size}px`,
    backgroundColor: "transparent",
    clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
    margin: "0px",
    border: "5px solid yellow",
    // boxSizing: "border-box",
    animation: "bounce 2s infinite",
    animationDelay: `${index * 0.1}s`,
  };

  return <div style={hexagonStyle} className="animate-bounce"></div>;
};

const HexagonGrid = () => {
  const hexSize = 100;

  const hexagons = [];
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      hexagons.push(
        <Hexagon
          key={`${i}-${j}`}
          size={hexSize}
          // color={i < 10 - i ? "yellow" : "red"}
          index={i * 10 + j}
        />,
      );
    }
  }

  return (
    <div
      className="bg-gradient-to-br from-yellow-500 to-red-500 animate-pulse"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        zIndex: -1,
      }}
    >
      {hexagons}
    </div>
  );
};

export default HexagonGrid;
