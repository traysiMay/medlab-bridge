import React, { Fragment } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import { Logo } from "./Logo";
import { Squiggler } from "../_styles/Squiggler";

const NavContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  padding: 1rem;
`;
const LinkWrapper = styled.div`
  padding: 1rem;
  width: 14rem;
  text-align: center;
`;
const aMix = css`
  font-size: 2rem;
  color: white;
  text-decoration: none;
  cursor: pointer;
`;
const A = styled.a`
  ${aMix}
`;
const StyledLink = styled(Link)`
  ${aMix}
`;

const Nav = ({ currentUser, logout }) => {
  console.log(currentUser);
  return (
    <Fragment>
      <div>
        <Logo />
      </div>
      <NavContainer>
        <LinkWrapper>
          <StyledLink to="/">Home</StyledLink>
        </LinkWrapper>
        <LinkWrapper>
          {currentUser && <StyledLink to="/crab">Crab</StyledLink>}
          {!currentUser && <StyledLink to="/login">Login</StyledLink>}
        </LinkWrapper>
        <LinkWrapper>
          {currentUser && <StyledLink to="/register">Teemo</StyledLink>}
          {!currentUser && <StyledLink to="/register">Register</StyledLink>}
        </LinkWrapper>
        <LinkWrapper>
          {currentUser && <A onClick={logout}>Logout</A>}
          {!currentUser && <A onClick={logout}>Papo</A>}
        </LinkWrapper>
      </NavContainer>
      <Squiggler />
    </Fragment>
  );
};

export { Nav };
