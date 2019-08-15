import React, { useRef, useEffect, useReducer } from "react";
import {
  Button,
  HomeContainer,
  MessageContainer,
  MessageWrapper
} from "./styles";
import reducer from "./reducer";

import { VR } from "./VR";

const Home = ({ history }) => {
  const stato = history.location.pathname.split("/")[2];

  const [state, dispatch] = useReducer(reducer, {
    buttonText: ":)",
    messageText: "hello...",
    counter: 0
  });
  const messageEl = useRef();
  const buttonEl = useRef();

  const blinky = () => {
    const { counter } = state;
    let step = 1;
    if (counter > 10) {
      step = 2;
    }
    if (counter > 15) {
      step = 3;
    }
    if (counter > 20) {
      step = 4;
    }
    if (counter > 30) {
      step = 5;
    }
    if (counter > 35) {
      step = 6;
    }
    if (counter > 40) {
      step = 7;
    }
    if (counter > 45) {
      step = 8;
      buttonEl.current.style.width = "24rem";
    }
    dispatch({ type: step });

    if (counter > 5 && counter < 30) {
      const sinWave = 10 * Math.sin(counter) + 10;
      if (messageEl.current) messageEl.current.style.margin = sinWave + "rem";
    }
  };

  // TO DO STOP SET INTERVAL ON DISMOUNT
  useEffect(() => {
    // blinky()
    if (stato === "1") setTimeout(blinky, 1000);
  }, [stato, state]);

  return (
    <HomeContainer>
      {stato === "2" && (
        <MessageWrapper>
          <VR />
          <Button>REGISTER</Button>
          <Button>RSVP</Button>
        </MessageWrapper>
      )}
      {stato === "1" && (
        <MessageContainer>
          <MessageWrapper ref={messageEl}>{state.messageText}</MessageWrapper>
          <Button onClick={() => history.push("/home/2")} ref={buttonEl}>
            {state.buttonText}
          </Button>
        </MessageContainer>
      )}
    </HomeContainer>
  );
};

export { Home };
