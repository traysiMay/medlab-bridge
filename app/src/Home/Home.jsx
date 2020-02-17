import React, { useEffect, useRef } from "react";
import { WhiteButton } from "../_styles/basic";

export const Home = ({ history }) => {
  const canvas = useRef();
  const clicked = useRef(false);
  const width = window.innerWidth;
  const height = window.innerHeight;

  useEffect(() => {
    const c = canvas.current;
    const ctx = c.getContext("2d");
    const centerX = c.width / 2;
    const centerY = c.height / 4;

    c.addEventListener("click", () => (clicked.current = true));
    c.addEventListener("touchstart", () => (clicked.current = true));

    const drawCircle = (x, y, o1, o2) => {
      ctx.beginPath();
      ctx.arc(x, y, Math.floor(Math.random() * 100), 0, 2 * Math.PI, false);
      ctx.fillStyle = "red";
      ctx.globalAlpha = o1;
      ctx.fill();
      ctx.lineWidth = 5;
      ctx.strokeStyle = "white";
      ctx.globalAlpha = o2;
      ctx.stroke();
    };

    let counter = 0;
    let req;
    const animate = () => {
      req = requestAnimationFrame(animate);
      counter++;
      const o1 = Math.random();
      const o2 = Math.random();
      if (counter < 1000 && !clicked.current) {
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

    return () => cancelAnimationFrame(req);
  }, []);
  return (
    <div>
      <WhiteButton
        onClick={() => history.push("/ch2")}
        style={{ fontSize: "1.3rem" }}
      >
        CHAPTER 2
      </WhiteButton>
      <canvas ref={canvas} width={width} height={height}></canvas>
    </div>
  );
};
