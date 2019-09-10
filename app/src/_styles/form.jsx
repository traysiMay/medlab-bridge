import styled from "styled-components";
import { Field, Form, ErrorMessage } from "formik";

export const CContainer = styled.div`
  display: grid;
  /* grid-template: 1fr 1fr 1fr; */
  justify-content: center;
  padding: 4rem;
  padding-top: 0rem;
`;

export const Header = styled.div`
  grid-column: 1 / 4;
  text-align: center;
  font-size: 5rem;
  height: 12rem;
  line-height: 0rem;
  margin-bottom: 2rem;
  width: 100%;
`;

export const Body = styled.div`
  grid-column: 1/4;
`;

export const Label = styled.label`
  font-size: 3rem;
  font-weight: bolder;
  margin-bottom: 0.9rem;
  margin-left: 3rem;
`;

export const StyledField = styled(Field)`
  width: 80%;
  margin: 0 auto;
  font-size: 3.9rem;
  text-align: center;
  height: 3rem;
  padding: 2rem;
  margin-bottom: 3rem;
  outline: none;
  border: 6px white solid;
  background: black;
  color: white;
`;

export const StyledForm = styled(Form)`
  grid-column: 1/4;
  .form-group {
    display: grid;
  }
`;

export const Button = styled.button`
  background: black;
  width: 27rem;
  margin: 0 auto;
  height: 16rem;
  border-radius: 10px 81px;
  border-width: 4rem;
  border-color: white;
  font-size: 4rem;
  color: white;
  margin-top: 3rem;
  cursor: pointer;
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  margin: 0 auto;
  color: rgb(232, 117, 117);
  font-size: 3rem;
  margin-top: -2.6rem;
  margin-bottom: 1.2rem;
  text-align: center;
`;

export const DownloadWrapper = styled.div`
  text-align: center;
  border: 7px solid white;
  height: 9rem;
  line-height: 8.6rem;
`;
export const Download = styled.a`
  color: white;
  font-size: 4rem;
  text-decoration: none;
`;

export const RequestError = styled.div`
  font-size: 4rem;
  font-weight: 700;
  color: rgb(232, 117, 117);
  margin: 0rem 4rem 0rem;
  text-align: center;
`;
