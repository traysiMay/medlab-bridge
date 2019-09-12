import React, { Fragment, useState } from "react";
import { MEDLAB } from "./MEDLAB";
import { withRouter } from "react-router-dom";
import {
  A,
  Bar,
  LinkWrapper,
  LowerNav,
  NavContainer,
  Smiler,
  StyledLink
} from "./styles";

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
  const [open, setOpen] = useState(false);
  const [showNav, setShowNav] = useState(false);

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

  return (
    <Fragment>
      <MEDLAB
        goHome={goHome}
        onCircle={onCircle}
        onHex={onHex}
        onSquare={onSquare}
        onTriangle={onTriangle}
      />

      <LowerNav>
        <Bar
          n={1}
          onClick={() => {
            setOpen(!open);
          }}
          onTransitionEnd={() => {
            setShowNav(open);
          }}
          open={open}
        >
          <NavContainer open={open} show={showNav}>
            <LinkWrapper>
              {currentUser && <StyledLink to="/init">ticket</StyledLink>}
              {!currentUser && <StyledLink to="/login">signin</StyledLink>}
            </LinkWrapper>
            <LinkWrapper>
              {currentUser && <A onClick={logout}>signout</A>}
              {!currentUser && <StyledLink to="/register">signup</StyledLink>}
            </LinkWrapper>
            {!currentUser && (
              <LinkWrapper>
                <StyledLink to="/rsvp">rsvp</StyledLink>
              </LinkWrapper>
            )}
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
      </LowerNav>
    </Fragment>
  );
};

export const Nav = withRouter(NavC);
