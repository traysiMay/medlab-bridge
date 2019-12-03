import React, { useEffect, useRef } from "react";

export const Loading = () => {
  const canvas = useRef();
  useEffect(() => {
    const c = canvas.current;
    const ctx = c.getContext("2d");

    const drawSmile = alpha => {
      ctx.beginPath();
      ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
      ctx.moveTo(110, 75);
      ctx.arc(75, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
      ctx.moveTo(65, 65);
      ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
      ctx.moveTo(95, 65);
      ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
      ctx.strokeStyle = "#FFFFFF";
      ctx.globalAlpha = alpha;
      ctx.stroke();
    };

    let req;
    let counter = 0;
    const animate = () => {
      req = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, 150, 150);
      const wave = 0.5 * (1 + Math.sin(Math.PI * 2 * counter * 0.005));
      const alpha = wave;
      drawSmile(alpha);
      counter++;
    };
    animate();

    return () => cancelAnimationFrame(req);
  }, []);
  return (
    <canvas
      style={{ display: "block", margin: "auto" }}
      width="150"
      height="150"
      ref={canvas}
    ></canvas>
  );
};
