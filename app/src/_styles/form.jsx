import styled from 'styled-components'
import { Field, Form, ErrorMessage } from 'formik'

export const CContainer = styled.div`
  display: grid;
  /* grid-template: 1fr 1fr 1fr; */
  justify-content: center;
`

export const Header = styled.div`
  grid-column: 1 / 4;
  text-align: center;
  font-size: 8rem;
  height: 19rem;
  line-height: 0rem;
  margin-bottom: 2rem;
  width: 100%;
`

export const Body = styled.div`
  grid-column: 1/4;
`

export const Label = styled.label`
  text-align: center;
  font-size: 4rem;
  letter-spacing: 0.7rem;
  font-weight: bolder;
  margin-bottom: 0.9rem;
`

export const StyledField = styled(Field)`
  width: 80%;
  margin: 0 auto;
  font-size: 4.9rem;
  text-align: center;
  border-radius: 0rem 11rem;
  height: 6rem;
  padding: 2rem;
  margin-bottom: 3rem;
  outline: none;
`

export const StyledForm = styled(Form)`
  grid-column: 1/4;
  .form-group {
    display: grid;
  }
`

export const Button = styled.button`
  background: orangered;
  width: 24rem;
  margin: 0 auto;
  height: 16rem;
  border-radius: 10px 81px;
  border-width: 4rem;
  border-color: navajowhite;
  font-size: 5rem;
  color: white;
  margin-top: 3rem;
  cursor: pointer;
`

export const StyledErrorMessage = styled(ErrorMessage)`
  margin: 0 auto;
  color: red;
  font-size: 3rem;
  margin-top: -2.6rem;
  margin-bottom: 1.2rem;
`
