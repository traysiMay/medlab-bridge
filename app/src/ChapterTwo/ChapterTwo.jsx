import React, { useEffect, useState } from "react";
import Phase1 from "./Phase1";
import Phase2 from "./Phase2";
import Phase3 from "./Phase3";
import NDA from "./NDA";
import { authenticationService } from "../_services/authentication.service";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import animationData from "./animations/smiler.json";

const ChapterTwo = ({ history }) => {
  const [phase, setPhase] = useState(1);
  const isNDA = authenticationService.currentNDAValue;

  const blackBG = () => {
    document.body.style.background = "black";
    document.documentElement.style.background = "black";
  };

  const redBG = () => {
    document.body.style.background = "#ff4747";
    document.documentElement.style.background = "#ff4747";
  };

  useEffect(() => {
    if (localStorage.getItem("phase")) {
      setPhase(parseInt(localStorage.getItem("phase")));
    }
    redBG();
    return () => {
      blackBG();
    };
  }, []);
  if (isNDA) {
    blackBG();
    return (
      <div style={{ padding: "0 1.6rem" }}>
        <Link
          to={"/rsvp"}
          style={{
            fontSize: "6rem",
            width: "90%",
            margin: "auto",
            display: "block",
            color: "white",
            margin: "0 0 1.5rem"
          }}
        >
          come to the party
        </Link>
        <Lottie
          width="50%"
          options={{ loop: true, autoplay: true, animationData }}
        />
      </div>
    );
  }
  return (
    <div>
      {phase === 1 && <Phase1 setPhase={setPhase} />}
      {phase === 2 && <Phase2 setPhase={setPhase} />}
      {phase === 3 && <Phase3 setPhase={setPhase} />}
      {phase === 4 && <NDA history={history} />}
    </div>
  );
};

export { ChapterTwo };
