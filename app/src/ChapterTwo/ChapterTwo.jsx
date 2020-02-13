import React, { useEffect, useState } from "react";
import Phase1 from "./Phase1";
import Phase2 from "./Phase2";

const ChapterTwo = () => {
  const [phase, setPhase] = useState(1);

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

  return (
    <div>
      {phase === 1 && <Phase1 setPhase={setPhase} />}
      {phase === 2 && <Phase2 setPhase={setPhase} />}
      {phase === 3 && <div>phase 3</div>}
    </div>
  );
};

export { ChapterTwo };
