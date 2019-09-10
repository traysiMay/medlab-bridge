import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Bar = styled.div`
  border: 10px white solid;
  transition: height 0.5s;
  transition: width 0.2s;
  height: ${props => (props.open ? "7rem" : "0rem")};
  margin-top: 1rem;
  width: ${props => (props.open ? "54rem" : "16rem")};
  margin-left: 2rem;
  grid-area: ${props => `left${props.n}`};
`;

export const NavContainer = styled.div`
  /* transition: opacity 0.5s; */
  display: ${props => (props.open ? "grid" : "none")};
  opacity: ${props => (props.show ? 1 : 0)};
  grid-auto-flow: column;
  justify-content: center;
  padding: 1rem;
  margin-bottom: 2.1rem;
  grid-column-gap: 2rem;
`;

export const LinkWrapper = styled.div`
  padding: 1rem;
  width: 10rem;
  text-align: center;
  border-bottom: 5px white solid;
  text-transform: uppercase;
  &:hover {
    border-bottom: 5px red dotted;
  }
`;

export const aMix = css`
  font-size: 2rem;
  color: white;
  text-decoration: none;
  cursor: pointer;
`;

export const A = styled.a`
  ${aMix}
`;

export const StyledLink = styled(Link)`
  ${aMix}
`;

export const LowerNav = styled.div`
  display: grid;
  grid-template-areas:
    "left1 s right"
    "left2 s right"
    "left3 s right";
`;

export const Smiler = styled.div`
  grid-area: right;
  border-radius: 0 0px 100px 110px;
  border-bottom: 1rem white solid;
  border-left: 1rem white solid;
  border-right: 1rem white solid;
  margin-right: 3.5rem;
  height: 3rem;
`;
