import React, { useContext } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { authenticationService } from "@/_services";

const CContainer = styled.div`
  display: grid;
  /* grid-template: 1fr 1fr 1fr; */
  justify-content: center;
`;

const Header = styled.div`
  grid-column: 1 / 4;
  text-align: center;
  font-size: 11rem;
  height: 19rem;
  line-height: 0rem;
  margin-bottom: 9rem;
`;

const Body = styled.div`
  grid-column: 1/4;
`;

const Label = styled.label`
  text-align: center;
  font-size: 4rem;
  letter-spacing: 1.5rem;
  font-weight: bolder;
  margin-bottom: 0.9rem;
`;

const StyledField = styled(Field)`
  width: 80%;
  margin: 0 auto;
  font-size: 4.9rem;
  text-align: center;
  background-color: blue;
  border-radius: 0rem 11rem;
  height: 6rem;
  padding: 2rem;
  margin-bottom: 3rem;
  outline: none;
`;

const StyledForm = styled(Form)`
  grid-column: 1/4;
  .form-group {
    display: grid;
  }
`;

const Button = styled.button`
  background: orangered;
  width: 22rem;
  margin: 0 auto;
  height: 16rem;
  border-radius: 10px 81px;
  border-width: 4rem;
  border-color: navajowhite;
  font-size: 5rem;
  color: white;
  margin-top: 3rem;
  cursor: pointer;
`;

const LoginPage = ({ history, location }) => {
  // redirect to home if already logged in
  if (authenticationService.currentUserValue) {
    history.push("/");
  }
  return (
    <CContainer>
      <Header>
        <h2>Login</h2>
      </Header>
      <Body>
        <Formik
          initialValues={{
            username: "",
            password: ""
          }}
          validationSchema={Yup.object().shape({
            username: Yup.string().required("Username is required"),
            password: Yup.string().required("Password is required")
          })}
          onSubmit={({ username, password }, { setStatus, setSubmitting }) => {
            setStatus();
            authenticationService.login(username, password).then(
              user => {
                const { from } = location.state || {
                  from: { pathname: "/" }
                };
                history.push(from);
              },
              error => {
                setSubmitting(false);
                setStatus(error);
              }
            );
          }}
          render={({ errors, status, touched, isSubmitting }) => (
            <StyledForm>
              <div className="form-group">
                <Label htmlFor="username">Username</Label>
                <StyledField
                  name="username"
                  type="text"
                  placeholder="hehe"
                  className={
                    "form-control" +
                    (errors.username && touched.username ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group">
                <Label htmlFor="password">Password</Label>
                <StyledField
                  name="password"
                  type="password"
                  placeholder=""
                  className={
                    "form-control" +
                    (errors.password && touched.password ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group">
                <Button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  Go
                </Button>
                {isSubmitting && (
                  <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                )}
              </div>
              {status && <div className={"alert alert-danger"}>{status}</div>}
            </StyledForm>
          )}
        />
      </Body>
    </CContainer>
  );
};

export { LoginPage };
