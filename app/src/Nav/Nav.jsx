import React, { Fragment, useState } from "react";
import { MEDLAB } from "./MEDLAB";
import { withRouter } from "react-router-dom";
import {
  A,
  LinkWrapper,
  NavContainer,
  StyledLink,
  LogoWrapper
} from "./styles";
import styled from "styled-components";

const OverlayNav = styled.div`
  position: absolute;
  top: -0.372263rem;
  left: 1.2525547445255474rem;
  border-left: 2px white solid;
  border-bottom: 2px white solid;
  padding: 0.5rem;
  background: black;
  z-index: 5;
  height: ${props => props.height}rem;
  width: 8rem;
  border-right: 2px white solid;
  color: black;
  opacity: ${props => props.height};
  transition: height 0.5s, opacity 0.8s;
`;
const animator = (color, end, obj, transformation) => {
  let count = 0;
  let req;
  const animate = () => {
    if (count === end) {
      window.cancelAnimationFrame(req);
      return;
    }
    req = window.requestAnimationFrame(animate);
    obj.style.transform = transformation(count);
    obj.style.fill = count % 2 ? color : "white";
    count++;
  };
  animate();
};
const NavC = ({ currentUser, history, logout }) => {
  const [open, setOpen] = useState(window.innerWidth > 768);
  const [showNav, setShowNav] = useState(window.innerWidth > 768);
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      console.log("resize open");
      setOpen(true);
      setShowNav(true);
    } else {
      console.log("resize close");
      setOpen(false);
      setShowNav(true);
    }
  });
  const goHome = () => {
    history.push("/");
  };

  const onCircle = e => {
    const circEl = e.currentTarget;
    animator("red", 100, circEl, count => `scale(${Math.sin(count * 10)})`);
  };

  const onHex = e => {
    const hexEl = e.currentTarget;
    animator(
      "blue",
      100,
      hexEl,
      count => `rotateY(${300 * Math.sin(count * 0.01)}deg)`
    );
  };

  const onTriangle = e => {
    const triEl = e.currentTarget;
    animator(
      "green",
      100,
      triEl,
      count => `translate(0px,${40 + 20 * Math.sin(count)}px)`
    );
  };

  const onSquare = e => {
    const sqEl = e.currentTarget;
    animator(
      "yellow",
      100,
      sqEl,
      count => `rotate(${Math.sin(count) * 10}deg)`
    );
  };

  const onHam = () => setOpen(!open);

  const closeOverlay = e => {
    setOpen(false);
  };

  return (
    <Fragment>
      <div style={{ position: "relative" }}>
        <LogoWrapper>
          <MEDLAB
            goHome={goHome}
            onCircle={onCircle}
            onHex={onHex}
            onSquare={onSquare}
            onTriangle={onTriangle}
            onHam={onHam}
          />
        </LogoWrapper>
        <OverlayNav
          height={open ? 13 : 0}
          onTransitionEnd={() => setShowNav(true)}
          id={"overlay"}
        >
          <NavContainer
            open={open}
            show={showNav}
            onClick={e => e.stopPropagation()}
          >
            <LinkWrapper>
              <StyledLink onClick={e => e.stopPropagation()} to="/home">
                home
              </StyledLink>
            </LinkWrapper>
            <LinkWrapper>
              <StyledLink onClick={e => e.stopPropagation()} to="/ch2">
                chapter two
              </StyledLink>
            </LinkWrapper>
            <LinkWrapper>
              {currentUser && <StyledLink to="/init">ticket</StyledLink>}
              {!currentUser && <StyledLink to="/login">signin</StyledLink>}
            </LinkWrapper>
            <LinkWrapper>
              {currentUser && <A onClick={logout}>signout</A>}
              {!currentUser && <StyledLink to="/register">signup</StyledLink>}
            </LinkWrapper>
            <LinkWrapper>
              <StyledLink to="/info">info</StyledLink>
            </LinkWrapper>
          </NavContainer>
        </OverlayNav>

        {/* <LowerNav>
        <Bar
          n={1}
          onClick={() => {
            if (!open) setOpen(!open);
          }}
          onTransitionEnd={() => {
            setShowNav(open);
          }}
          open={open}
        >
          <NavContainer open={open} show={showNav}>
            <LinkWrapper>
              <StyledLink to="/home">home</StyledLink>
            </LinkWrapper>
            <LinkWrapper>
              {currentUser && <StyledLink to="/init">ticket</StyledLink>}
              {!currentUser && <StyledLink to="/login">signin</StyledLink>}
            </LinkWrapper>
            <LinkWrapper>
              {currentUser && <A onClick={logout}>signout</A>}
              {!currentUser && <StyledLink to="/register">signup</StyledLink>}
            </LinkWrapper>
            <LinkWrapper>
              <StyledLink to="/info">info</StyledLink>
            </LinkWrapper>
          </NavContainer>
        </Bar>
        <Bar
          n={2}
          onClick={() => {
            setOpen(!open);
          }}
        />
        <Bar
          n={3}
          onClick={() => {
            setOpen(!open);
          }}
        />
        <Smiler></Smiler>
      </LowerNav> */}
      </div>
      <div
        onClick={closeOverlay}
        style={{
          display: open ? "block" : "none",
          position: "absolute",
          top: 0,
          left: 0,
          opacity: 0,
          width: "100%",
          height: "100%",
          background: "red"
        }}
      ></div>
    </Fragment>
  );
};

export const Nav = withRouter(NavC);
