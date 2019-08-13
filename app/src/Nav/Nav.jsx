import React from "react";

import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const NavContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  padding: 1rem;
  background-color: white;
`;
const LinkWrapper = styled.div`
  padding: 1rem;
`;
const aMix = css`
  font-size: 4rem;
  color: black;
  text-decoration: none;
  cursor: pointer;
`;
const A = styled.a`
  ${aMix}
`;
const StyledLink = styled(Link)`
  ${aMix}
`;

const Nav = ({ logout }) => {
  return (
    <NavContainer>
      <LinkWrapper>
        <StyledLink to="/">Home</StyledLink>
      </LinkWrapper>
      <LinkWrapper>
        <StyledLink to="/login">Login</StyledLink>
      </LinkWrapper>
      <LinkWrapper>
        <StyledLink to="/register">Register</StyledLink>
      </LinkWrapper>
      <LinkWrapper>
        <A onClick={logout}>Logout</A>
      </LinkWrapper>
    </NavContainer>
  );
};

export { Nav };
