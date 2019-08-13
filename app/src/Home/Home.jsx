import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
  font-size: 4rem;
`;

const MessageWrapper = styled.div`
  margin: 40rem;
`;

const Button = styled.div`
  font-family: monospace;
  font-weight: bold;
  width: 16rem;
  height: 12rem;
  background: white;
  color: black;
  border-radius: 15%;
  line-height: 11rem;
  text-align: center;
  margin: 6rem;
`;

const Home = ({ history }) => {
  const text = useRef("");
  const [message, setMessage] = useState(text.current);

  const button = useRef("");
  const [buttonMessage, setButtonMessage] = useState(":)");

  const messageEl = useRef();
  const buttonEl = useRef();

  const blinky = () => {
    let counter = 0;
    setInterval(() => {
      const currentText = text.current;
      if (currentText.includes("...")) {
        button.current = ":)";
        text.current = "hello..";
      } else {
        button.current = ":";
        text.current = "hello...";
      }
      if (counter > 10) {
        button.current = "wtF";
        text.current = "you ain't laggin, this is just a shitty sin wave";
      }
      if (counter > 15) {
        button.current = "whyyyy";
        text.current = "oh god, how do I stop swaying...";
      }
      if (counter > 20) {
        button.current = ":0";
        text.current = "well I'm dizzy now, what about you?";
      }
      if (counter > 30) {
        if (currentText.includes("?")) {
          button.current = ":D";
          text.current = "ah much better huh";
        } else {
          button.current = ":";
          text.current = "ah much better huh?";
        }
      }
      if (counter > 35) {
        if (currentText.includes("...")) {
          button.current = ":/";
          text.current = "now where were we..";
        } else {
          button.current = ":";
          text.current = "now where were we...";
        }
      }
      if (counter > 40) {
        if (currentText.includes("?")) {
          button.current = ":D";
          text.current = "you are interested in a party";
        } else {
          button.current = ":";
          text.current = "you are interested in a party?";
        }
      }
      if (counter > 45) {
        if (currentText.includes("!")) {
          button.current = "hehe";
          text.current = "well press the damn button";
        } else {
          buttonEl.current.style.width = "24rem";
          button.current = "I'm a button!";
          text.current = "well press the damn button!";
        }
      }

      if (counter > 5 && counter < 30) {
        const sinWave = 10 * Math.sin(counter) + 10;
        messageEl.current.style.margin = sinWave + "rem";
      }

      counter += 1 / 2;
      setMessage(text.current);
      setButtonMessage(button.current);
    }, 500);
  };

  // TO DO STOP SET INTERVAL ON DISMOUNT
  useEffect(() => {
    blinky();
  }, []);

  return (
    <HomeContainer>
      <MessageWrapper ref={messageEl}>{message}</MessageWrapper>
      <Button ref={buttonEl}>{buttonMessage}</Button>
    </HomeContainer>
  );
};

export { Home };
