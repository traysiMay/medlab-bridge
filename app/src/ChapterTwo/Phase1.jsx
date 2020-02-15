import React, { useState } from "react";
import Lottie from "react-lottie";
import styled from "styled-components";
import { Container, Heading, Paragraph } from "../_styles/basic";
import M8 from "./animations/M8.json";
import AY from "./animations/AY.json";
import STE from "./animations/STE.json";
import ANH from "./animations/ANH.json";

const BlackHeading = styled(Heading)`
  color: black;
  padding-bottom: 2rem;
  max-width: ${window.innerWidth};
  font-size: 4rem;
  margin: -1rem 0;
  text-align: ${props => props.align};
  width: 80%;
`;

const Phase1 = ({ setPhase }) => {
  const [pauseM8, setPauseM8] = useState(false);
  const [pauseAY, setPauseAY] = useState(false);
  const [pauseSTE, setPauseSTE] = useState(false);
  const [pauseANH, setPauseANH] = useState(false);

  if (pauseM8 && pauseAY && pauseSTE && pauseANH) {
    setPhase(2);
    localStorage.setItem("phase", 2);
  }

  return (
    <Container>
      <BlackHeading align={"left"} style={{ margin: "1rem 0" }}>
        welcome to chapter two
      </BlackHeading>
      <Paragraph onClick={() => setPauseM8(!pauseM8)}>
        <Lottie
          options={{ loop: true, autoplay: true, animationData: M8 }}
          isPaused={pauseM8}
        />
      </Paragraph>
      <BlackHeading align={"right"}>
        what could possibly happen this time?
      </BlackHeading>
      <Paragraph onClick={() => setPauseAY(!pauseAY)}>
        <Lottie
          options={{ loop: true, autoplay: true, animationData: AY }}
          isPaused={pauseAY}
        />
      </Paragraph>
      <BlackHeading align={"left"}>when will it end?</BlackHeading>
      <Paragraph onClick={() => setPauseSTE(!pauseSTE)}>
        <Lottie
          options={{ loop: true, autoplay: true, animationData: STE }}
          isPaused={pauseSTE}
        />
      </Paragraph>
      <BlackHeading align={"left"}>why would it end?</BlackHeading>
      <Paragraph onClick={() => setPauseANH(!pauseANH)}>
        <Lottie
          options={{ loop: true, autoplay: true, animationData: ANH }}
          isPaused={pauseANH}
        />
      </Paragraph>
      <BlackHeading align={"left"}>
        maybe when they all stop spinning
      </BlackHeading>
    </Container>
  );
};

export default Phase1;
