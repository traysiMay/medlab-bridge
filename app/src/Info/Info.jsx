import React from "react";
import { Container, Heading, Paragraph } from "../_styles/basic";

export const Info = () => {
  const info = "info";
  return (
    <Container>
      <Heading>{info}</Heading>
      <Paragraph>CHAPTER 1</Paragraph>
      <Paragraph>VALENCIA ROOM</Paragraph>
      <Paragraph>NOV 2</Paragraph>
      <Paragraph>RSVP BY EMAIL</Paragraph>
      <Paragraph>
        <span style={{ color: "red" }}>OR</span>
      </Paragraph>
      <Paragraph
        style={{ borderBottom: "1rem red dashed", paddingBottom: "3rem" }}
      >
        SIGNUP & REQUEST A TICKET
      </Paragraph>
      <Paragraph>QUESTIONS? email this dinosaur, teh@raptor.pizza</Paragraph>
    </Container>
  );
};
