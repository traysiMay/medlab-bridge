import React, { useEffect } from "react";
import { getRandomInt } from "./utils";
import styled from "styled-components";

const Alert = styled.div`
  position: absolute;
  left: 22%;
  top: 20%;
  border: 2px solid black;
  width: 10rem;
  text-align: center;
  box-shadow: 10px 11px black;
  color: red;
  vertical-align: middle;
  padding: 10%;
`;

function changeDom(color) {
  document.body.style.background = color;
  document.documentElement.style.background = color;
}

var i = 0;
var txt = "These pretzels are making me thirsty.";
var speed = 50;
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("container").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    i = 0;
  }
}

function typeTime(setPhase) {
  const container = document.getElementById("container");
  container.style.height = "100%";
  container.style.width = "100%";
  container.style.fontSize = "2rem";
  container.innerHTML = "";
  container.style.caretColor = "white";
  const cursor = document.createElement("span");
  cursor.style.fontSize = "2rem";
  cursor.innerHTML = "|";
  const alert = document.getElementById("alert");
  container.focus();
  let on = true;
  setInterval(() => {
    if (on) {
      cursor.style.opacity = 1;
    } else {
      cursor.style.opacity = 0;
    }
    on = !on;
  }, 500);
  container.appendChild(cursor);
  document.addEventListener("keyup", function(e) {
    cursor.remove();
    container.style.caretColor =
      "#" +
      Math.random()
        .toString(16)
        .substr(-6);

    if (e.key === "Enter" && e.target.id === "container") {
      container.style.color = "red";
      container.contentEditable = false;
      if (container.innerHTML.length < 30) {
        alert.style.display = "block";
        alert.innerHTML = "please write more ok?";
        setTimeout(() => {
          alert.style.display = "none";
          container.style.color = "black";
          container.contentEditable = true;
          container.innerHTML = "";
          container.focus();
        }, 1000);
      } else {
        alert.style.display = "block";
        alert.innerHTML = "well that is a weird thing to say... but ok!";
        setTimeout(() => {
          alert.style.display = "none";
          container.innerHTML = "";
          setPhase(4);
          localStorage.setItem("phase", 4);
        }, 3000);
      }
    }
  });
  container.addEventListener("focus", () => cursor.remove());
}

const responses = [
  "wat",
  "ah!",
  "huh",
  "erg!",
  "eeeeee!",
  "shit what did you do!!"
];

const Phase3 = ({ setPhase }) => {
  useEffect(() => {
    const startTime = Date.now();
    let frame;

    function animate() {
      const diff = (Date.now() - startTime) * 0.1;
      if (diff % 2 === 0) {
        document.getElementById("text").innerHTML =
          responses[getRandomInt(0, 4)];
        changeDom("white");
        typeWriter();
      } else {
        changeDom("#FA7171");
      }
      if (diff < 400) {
        frame = requestAnimationFrame(animate);
      } else {
        const container = document.getElementById("container");
        container.style.position = "absolute";
        container.style.left = "5px";
        container.style.top = "5px";
        container.style.color = "black";
        container.style.fontWeight = "bold";
        container.innerHTML = "";
        changeDom("white");
        setTimeout(() => {
          container.innerHTML = "";
          typeTime(setPhase);
        }, 5000);
        cancelAnimationFrame(frame);
      }
    }
    animate();
    return () => {
      document.body.style.background = "black";
      document.documentElement.style.background = "black";
    };
  }, []);

  return (
    <div>
      <Alert id="alert" style={{ display: "none" }}></Alert>
      <div id="text" style={{ margin: "1rem", fontSize: "30px" }}>
        wat
      </div>
      <div
        id="container"
        contentEditable
        style={{ fontFamily: "monospace", outline: "none" }}
      ></div>
    </div>
  );
};

export default Phase3;
