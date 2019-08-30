import React, { Fragment } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { MEDLAB } from "./MEDLAB";
import { Squiggler } from "../_styles/Squiggler";

const NavContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  padding: 1rem;
  margin-bottom: 2.1rem;
  grid-column-gap: 2rem;
`;
const LinkWrapper = styled.div`
  padding: 1rem;
  width: 8rem;
  text-align: center;
  border: 2px white solid;
  text-shadow: 9px 10px 10px white;
  box-shadow: 10px 8px 20px white;
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
  return (
    <Fragment>
      <Link to="/">
        <MEDLAB />
      </Link>
      <NavContainer>
        <LinkWrapper>
          {currentUser && <StyledLink to="/">home</StyledLink>}
          {!currentUser && <StyledLink to="/login">login</StyledLink>}
        </LinkWrapper>
        <LinkWrapper>
          {currentUser && <A onClick={logout}>logout</A>}
          {!currentUser && <StyledLink to="/register">register</StyledLink>}
        </LinkWrapper>
      </NavContainer>
      <Squiggler />
    </Fragment>
  );
};

export { Nav };