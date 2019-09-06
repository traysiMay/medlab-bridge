import React, { Fragment, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { MEDLAB } from "./MEDLAB";
import { Squiggler } from "../_styles/Squiggler";
import { withRouter } from 'react-router-dom'

const Bar = styled.div`
border:10px white solid;
transition: height .5s;
height: ${props => props.open ? "7rem" : "0rem"};
margin-top:1rem;
width: ${props => props.open ? "54rem" : "16rem"};
margin-left:2rem;
`

const NavContainer = styled.div`
  transition: opacity .5s;
  display: ${props => props.open ? "grid" : 'none'};
  opacity: ${props => props.show ? 1 : 0};
  grid-auto-flow: column;
  justify-content: center;
  padding: 1rem;
  margin-bottom: 2.1rem;
  grid-column-gap: 2rem;
`;
const LinkWrapper = styled.div`
  padding: 1rem;
  width: 10rem;
  text-align: center;
  border-bottom: 5px white solid;
  text-transform: uppercase;
  &:hover {
    border-bottom: 5px red dotted;
  }
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

const animator = (color, end, obj, transformation) => {
  let count = 0
  let req;
  const animate = () => {
    if (count === end) {
      window.cancelAnimationFrame(req)
      return
    }
    req = window.requestAnimationFrame(animate)
    obj.style.transform = transformation(count)
    obj.style.fill = count % 2 ? color : 'white'
    count++
  }
  animate()
}
const NavC = ({ currentUser, history, logout }) => {
  const [open, setOpen] = useState(false)
  const [showNav, setShowNav] = useState(false)

  const goHome = () => {
    history.push('/')
  }

  const onCircle = (e) => {
    const circEl = e.currentTarget
    animator('red', 100, circEl, (count) => `scale(${Math.sin(count * 10)})`)
  }

  const onHex = (e) => {
    const hexEl = e.currentTarget
    animator('blue', 100, hexEl, (count) => `rotateY(${300 * Math.sin(count * .01)}deg)`)
  }

  const onTriangle = (e) => {
    const triEl = e.currentTarget
    animator('green', 100, triEl, (count) => `translate(0px,${40 + (20 * Math.sin(count))}px)`)
  }

  const onSquare = (e) => {
    const sqEl = e.currentTarget
    animator('yellow', 100, sqEl, (count) => `rotate(${Math.sin(count) * 10}deg)`)
  }

  return (
    <Fragment>
      <MEDLAB goHome={goHome} onCircle={onCircle} onHex={onHex} onSquare={onSquare} onTriangle={onTriangle} />
      <Bar onClick={() => {
        setOpen(!open)
      }
      }
        onTransitionEnd={() => {
          setShowNav(open)
        }} open={open}>
        <NavContainer open={open} show={showNav}>
          <LinkWrapper>
            {currentUser && <StyledLink to="/">home</StyledLink>}
            {!currentUser && <StyledLink to="/login">login</StyledLink>}
          </LinkWrapper>
          <LinkWrapper>
            {currentUser && <A onClick={logout}>logout</A>}
            {!currentUser && <StyledLink to="/register">register</StyledLink>}
          </LinkWrapper>
        </NavContainer>
      </Bar>
      <Bar onClick={() => { setOpen(!open) }} />
      <Bar onClick={() => { setOpen(!open) }} />
      {/* <Squiggler /> */}
    </Fragment >
  );
};

export const Nav = withRouter(NavC)
