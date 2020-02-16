import React, { useEffect, useState } from "react";
import Phase1 from "./Phase1";
import Phase2 from "./Phase2";
import Phase3 from "./Phase3";
import NDA from "./NDA";
import { authenticationService } from "../_services/authentication.service";

const ChapterTwo = ({ history }) => {
  const [phase, setPhase] = useState(1);
  const isNDA = authenticationService.currentNDAValue;
  useEffect(() => {
    if (localStorage.getItem("phase")) {
      setPhase(parseInt(localStorage.getItem("phase")));
    }
    document.body.style.background = "#FA7171";
    document.documentElement.style.background = "#FA7171";
    return () => {
      document.body.style.background = "black";
      document.documentElement.style.background = "black";
    };
  }, []);
  if (isNDA)
    return (
      <div style={{ fontSize: "8rem", width: "90%", margin: "0 1rem" }}>
        come to the party
      </div>
    );
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
