import React, { useRef, useEffect } from "react";
import styled from "styled-components";
const LHeader = styled.h1`
  text-align: left;
  font-size: 10rem;
`;
const RHeader = styled.h1`
  text-align: right;
  font-size: 7rem;
  margin-left: 10rem;
`;
export const Head = styled.div`
  font-size: 20rem;
  position: absolute;
  top: 65%;
  left: 40%;
`;

export const SankYou = () => {
  const head = useRef();

  useEffect(() => {
    let req;
    let counter = 0;
    const dumbLoop = () => {
      const animate = () => {
        req = window.requestAnimationFrame(animate);
        head.current.style.transform = `rotate3d(1, 1, 1, ${counter}deg)`;
        counter++;
      };
      animate();
    };
    dumbLoop();
    return () => {
      window.cancelAnimationFrame(req);
    };
  }, []);
  return (
    <div>
      <LHeader>Cool!</LHeader>
      <RHeader>PLZ CHECK YOUR EMAIL & MAYBE YOUR SPAM FOLDER TOO!</RHeader>
      <Head ref={head}>:)</Head>
    </div>
  );
};
