import styled from "styled-components";

export const Attento = styled.span`
  color: red;
`;

export const ProfileContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-row-gap: 7rem;
  margin: 2rem;

  /* grid-template-columns: 0% 90% 0%; */
`;

export const Header = styled.h1`
  font-size: 4rem;
  grid-column: 2;
  background: #110d0d;
  text-align: center;
  padding: 2rem;
  border: 2px white solid;
  text-shadow: 9px 10px 10px red;
  box-shadow: 10px 8px 20px red;
  margin-bottom: -3rem;
`;

export const Liner = styled.div`
    font-size: 5rem;
    grid-column: 2;
    font-weight: 500;
    &.last{
      color:red;
      border-bottom: 3rem white dashed;
    }
`;

export const Paragraph = styled.div`
  font-size: 1.5rem;
  grid-column: 2;
`;

export const MRow = styled.div`
  grid-column: 2;
`;

export const WhiteButton = styled.div`
  background: white;
  height: 12rem;
  color: black;
  line-height: 12rem;
  text-align: center;
  border-radius: 6rem;
  font-weight: bold;
  font-size: 4rem;
  width: 34rem;
  margin: auto;
  cursor: pointer;
  &:hover {
    background: red;
  }
`;
