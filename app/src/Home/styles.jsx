import styled from "styled-components";

const HomeContainer = styled.div`
  font-size: 4rem;
`;

const MessageWrapper = styled.div`
  margin: 40rem;
`;

const Button = styled.div`
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
  cursor: pointer;
  &:hover {
    background-color: red;
  }
`;

export { HomeContainer, MessageWrapper, Button };
