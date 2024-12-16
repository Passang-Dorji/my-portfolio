"use client";
import { useRef, useEffect, useState } from "react";
import Toolbar from "./toolbar";

const InfiniteCanvas = () => {
  const canvasRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const [isPanning, setIsPanning] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const drawHexagon = (ctx, x, y, size) => {
      const sideLength = size;
      const angle = (Math.PI / 180) * 60;

      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const xOffset = x + sideLength * Math.cos(angle * i);
        const yOffset = y + sideLength * Math.sin(angle * i);
        ctx.lineTo(xOffset, yOffset);
      }
      ctx.closePath();
      ctx.strokeStyle = "white";
      ctx.stroke();

      // Add shadow
      ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
      ctx.shadowBlur = 10;
      ctx.shadowOffsetX = 10;
      ctx.shadowOffsetY = 5;

      ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
      ctx.fill();
      ctx.shadowColor = "transparent"; // Reset shadow for other drawings
    };

    const draw = () => {
      ctx.save();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.translate(translateX, translateY);
      ctx.scale(scale, scale);

      // Example drawing: Infinite hexagons on the right side
      const hexSize = 50; // Size of each hexagon
      const spacing = hexSize * 1.5;
      const width = canvas.width;
      const height = canvas.height;

      // Starting point for the grid
      const startX = Math.max(width / 2, -translateX / scale);
      const startY = Math.floor(-translateY / scale / spacing) * spacing;

      for (
        let x = startX;
        x < width / scale - translateX / scale;
        x += spacing
      ) {
        for (
          let y = startY;
          y < height / scale - translateY / scale;
          y += spacing
        ) {
          drawHexagon(ctx, x, y, hexSize);
        }
      }

      // Draw additional items (if any)
      items.forEach((item) => {
        if (item.type === "rectangle") {
          ctx.fillStyle = "blue";
          ctx.fillRect(item.x, item.y, 100, 50);
        } else if (item.type === "circle") {
          ctx.fillStyle = "red";
          ctx.beginPath();
          ctx.arc(item.x, item.y, 50, 0, 2 * Math.PI);
          ctx.fill();
        }
      });

      ctx.restore();
    };

    draw();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      draw();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [scale, translateX, translateY, items]);

  const handleWheel = (event) => {
    event.preventDefault();
    const zoomIntensity = 0.1;
    const mouseX = event.clientX - canvasRef.current.offsetLeft;
    const mouseY = event.clientY - canvasRef.current.offsetTop;
    const zoomFactor = 1 + event.deltaY * -zoomIntensity;

    const newScale = Math.min(Math.max(0.5, scale * zoomFactor), 5); // Limit zoom scale

    setTranslateX(translateX - (mouseX / scale) * (newScale - scale));
    setTranslateY(translateY - (mouseY / scale) * (newScale - scale));
    setScale(newScale);
  };

  const handleMouseDown = (event) => {
    setIsPanning(true);
    setStartX(event.clientX - translateX);
    setStartY(event.clientY - translateY);
  };

  const handleMouseMove = (event) => {
    if (!isPanning) return;
    setTranslateX(event.clientX - startX);
    setTranslateY(event.clientY - startY);
  };

  const handleMouseUp = () => {
    setIsPanning(false);
  };

  const handleMouseLeave = () => {
    setIsPanning(false);
  };

  const addItem = (type) => {
    const newItem = {
      type,
      x: (canvasRef.current.width / 2 - translateX) / scale,
      y: (canvasRef.current.height / 2 - translateY) / scale,
    };
    setItems([...items, newItem]);
  };

  return (
    <div className="bg-gradient-to-b from-black to-gray-900">
      <Toolbar addItem={addItem} />
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <canvas
          ref={canvasRef}
          onWheel={handleWheel}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          style={{ width: "100%", height: "100%", display: "block" }}
        />
        <div className="text-center fixed bottom-0 left-4 right-4 z-10 bg-gradient-to-b from-gray-800 to-black p-2 rounded shadow text-white">
          Zoom: {(scale * 100).toFixed(0)}%
        </div>
      </div>
    </div>
  );
};

export default InfiniteCanvas;
