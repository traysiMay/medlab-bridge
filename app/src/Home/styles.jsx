import styled from "styled-components";

const HomeContainer = styled.div``;

const MessageContainer = styled.div`
  font-size: 4rem;
`;

const MessageWrapper = styled.div``;

const Header = styled.div`
  text-align: center;
  font-size: 7rem;
  padding: 6rem;
  font-weight: bold;
`;

const ButtonContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-row-gap: 7rem;
`;

const Button = styled.div`
  font-size: 3rem;
  font-family: monospace;
  font-weight: bold;
  width: 16rem;
  height: 12rem;
  background: white;
  color: black;
  border-radius: 15%;
  line-height: 11rem;
  text-align: center;
  margin: 6rem;
  width: 24rem;
  user-select: none;
  margin: 0 auto;
  cursor: pointer;
  &:hover {
    background-color: red;
  }
`;

export {
  Header,
  HomeContainer,
  MessageContainer,
  MessageWrapper,
  ButtonContainer,
  Button
};
