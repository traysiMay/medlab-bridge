import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const LogoWrapper = styled.div`
  @media only screen and (min-width: 600px) {
    svg {
      display: block;
      height: 60px;
      margin: auto;
    }
  }
`;

export const Bar = styled.div`
  /* @media screen and (min-width: 768px) {
    display: none;
  } */
  border: 4px white solid;
  transition: height 0.5s;
  transition: width 0.2s;
  height: ${props => (props.open ? "" : "0rem")};
  margin-top: 0rem;
  width: ${props => (props.open ? "23.4rem" : "6rem")};
  margin: 0 0.8rem;
  grid-area: ${props => `left${props.n}`};
`;

export const NavContainer = styled.div`
  /* transition: opacity 0.5s; */
  display: ${props => (props.open ? "flex" : "none")};
  opacity: ${props => (props.show ? 1 : 0)};
`;

export const LinkWrapper = styled.div`
  margin: 1rem;
  text-align: center;
  border-bottom: 1px white solid;
  text-transform: uppercase;
  &:hover {
    border-bottom: 1px red dotted;
  }
`;

export const aMix = css`
  font-size: 1rem;
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
  @media screen and (min-width: 768px) {
    display: none;
  }
  grid-area: right;
  border-radius: 0 0px 100px 110px;
  border-bottom: 0.2rem white solid;
  border-left: 0.5rem white solid;
  border-right: 0.5rem white solid;
  margin-right: -3.1rem;
  height: 2.4rem;
  width: 3rem;
`;
