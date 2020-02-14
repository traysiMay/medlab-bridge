import styled from "styled-components";
import { Field, Form, ErrorMessage } from "formik";

export const CContainer = styled.div`
  display: grid;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  background: black;
  color: white;
  margin: 1rem 1rem 4rem 1rem;
  border: 3px white solid;
  max-width: 32rem;
  padding: 0.6rem;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const Header = styled.div`
  font-size: 4rem;
  grid-column: 1 / 4;
  text-decoration: underline;
  h2 {
    margin: -1rem 0 1rem;
  }
`;

export const Body = styled.div`
  grid-column: 1/4;
`;

export const Label = styled.label`
  font-weight: bold;
  text-transform: uppercase;
  margin: auto 1rem;
`;

export const StyledField = styled(Field)`
  text-align: center;
  padding: 1rem;
  margin: 0.6rem 1.2rem;
  outline: none;
  border: 0.2rem white solid;
  background: black !important;
  color: white !important;
  box-shadow: black !important;
  -webkit-box-shadow: 0 0 0px 1000px black inset !important;
  -webkit-text-fill-color: white !important;
  width: 80%;

  /* &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px black inset;
    color: white !important;
  } */
`;

export const StyledForm = styled(Form)`
  grid-column: 1/4;
  .form-group {
    display: grid;
  }
`;

export const Button = styled.button`
  background: black;
  width: 5rem;
  margin: 1rem auto;
  height: 5rem;
  border-radius: 80px 81px;
  border-width: 1rem;
  border-color: blueviolet;
  font-size: 1rem;
  color: white;
  cursor: pointer;
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  margin: 0 auto;
  font-size: 1rem;
  margin-top: -0.6rem;
  margin-bottom: 1.2rem;
  text-align: center;
  padding: 0.7rem;
  background: none;
  width: 80%;
  color: #ff7a7a;
`;

export const DownloadWrapper = styled.div`
  text-align: center;
  border: 7px solid white;
  height: 9rem;
  line-height: 8.6rem;
`;
export const Download = styled.a`
  color: white;
  font-size: 3rem;
  -webkit-text-decoration: none;
  text-decoration: none;
  text-align: center;
  display: block;
  margin: -3rem 0 1rem;
`;

export const RequestError = styled.div`
  font-size: 1rem;
  font-weight: 700;
  color: rgb(232, 117, 117);
  margin: 0rem 4rem 0rem;
  text-align: center;
`;

export const PosterContainer = styled.div`
  border: 8px white solid;
  margin: 60px auto 49px;
  box-shadow: 10px 20px white;
  width: 93%;
`;
