import React, { useEffect, useRef } from "react";

export const Home = () => {
  const canvas = useRef();
  const width = window.innerWidth;
  const height = window.innerHeight;

  useEffect(() => {
    const c = canvas.current;
    const ctx = c.getContext("2d");
    const centerX = c.width / 2;
    const centerY = c.height / 2;
    const radius = 70;

    const drawCircle = (x, y, o1, o2) => {
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
      ctx.fillStyle = "red";
      ctx.globalAlpha = o1;
      ctx.fill();
      ctx.lineWidth = 5;
      ctx.strokeStyle = "white";
      ctx.globalAlpha = o2;
      ctx.stroke();
    };

    let counter = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      counter++;
      const o1 = Math.random();
      const o2 = Math.random();
      if (counter < 100) {
        drawCircle(centerX, centerY, o1, o2);
      } else {
        c.style.position = "absolute";
        c.style.top = 0;
        c.style.zIndex = -1;
        document.querySelector("body").style.background = "none";
        const x = Math.floor(Math.random() * c.width);
        const y = Math.floor(Math.random() * c.height);
        drawCircle(x, y, o1, o2);
      }
    };

    animate();
  }, []);
  return <canvas ref={canvas} width={width} height={height}></canvas>;
};
