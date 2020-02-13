import React from "react";
import { createCanvas } from "canvas";
import { useEffect } from "react";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const w = window.innerWidth;
const h = window.innerHeight * 0.8;
const bubbles = [];

for (let i = 1; i < 20; i++) {
  const obj = {
    xC: getRandomInt(50, w - 50),
    yC: getRandomInt(50, h - 50),
    radius: 0,
    id: i,
    color: "red",
    rate: Math.random() + 0.2,
    popped: false,
    vanish: false
  };
  bubbles.push(obj);
}

const Phase2 = ({ setPhase }) => {
  useEffect(() => {
    const canvas = createCanvas(w, h);
    canvas.style.margin = "auto";
    canvas.style.display = "block";
    const ctx = canvas.getContext("2d");
    const startTime = Date.now();
    let frame;
    const maxR = 20;
    const animate = () => {
      const diff = Date.now() - startTime;
      frame = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      bubbles.map(b => {
        if (b.popped && b.radius < 0.02) b.vanish = true;
        ctx.beginPath();
        const radius =
          0.5 *
          (maxR +
            Math.sin((b.id * 1000 + diff) * Math.PI * 0.001 * b.rate) * maxR);
        ctx.arc(b.xC, b.yC, b.vanish ? 0 : radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = b.color;
        ctx.fill();
        ctx.lineWidth = 5;
        ctx.strokeStyle = "white";
        ctx.stroke();
        b.radius = radius;

        const anyNotPopped = bubbles.filter(f => f.vanish === false);
        if (anyNotPopped.length === 0) {
          setPhase(3);
          localStorage.setItem("phase", 3);
        }
      });
    };
    animate();
    document.getElementById("container").appendChild(canvas);
    canvas.addEventListener("click", e => {
      const rect = canvas.getBoundingClientRect();
      const xP = e.clientX - rect.left;
      const yP = e.clientY - rect.top;

      bubbles.map(b => {
        const d = Math.pow(xP - b.xC, 2) + Math.pow(yP - b.yC, 2);
        if (d <= Math.pow(b.radius, 2)) {
          console.log("inside", b.id);
          b.color = "yellow";
          b.popped = true;
        } else {
          console.log("out");
        }
      });
    });
    return () => cancelAnimationFrame(frame);
  });

  return (
    <div>
      <div id="container"></div>
    </div>
  );
};

export default Phase2;
