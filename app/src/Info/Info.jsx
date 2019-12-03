import React from "react";
import { Container, Heading, Paragraph } from "../_styles/basic";
import styled from "styled-components";

const NoWrapParagraph = styled(Paragraph)`
  white-space: nowrap;
`;

export const Info = () => {
  const info = "info";
  return (
    <Container>
      <Heading>{info}</Heading>
      <NoWrapParagraph>EMPOWERING EXPRESSION</NoWrapParagraph>
      <Paragraph>DISMANTLING HIERARCHY</Paragraph>
      <Paragraph>CREATING CONFUSION</Paragraph>
      <Paragraph>MANIFESTING SAFE SPACE</Paragraph>
      <Paragraph
        style={{ borderBottom: "1rem red dashed", paddingBottom: "2rem" }}
      >
        SIGNUP TO HEAR ABOUT EVENTS
      </Paragraph>
      <Paragraph>
        <span style={{ fontWeight: "bolder" }}>QUESTIONS????????</span>
        <br /> <br /> email this dinosaur, teh@raptor.pizza
      </Paragraph>
    </Container>
  );
};
