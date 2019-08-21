import React, { useRef, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { rsvpService } from "@/_services";

import {
  Body,
  Button,
  CContainer,
  Download,
  DownloadWrapper,
  Header,
  Label,
  StyledErrorMessage,
  StyledField,
  StyledForm
} from "../_styles/form";
import { Liner, WhiteButton } from "../_styles/basic";
import styled from "styled-components";

import { SankYou } from "./SankYou";

const event = "raptorhole";

const Line1 = styled.div`
  text-align: center;
  padding: 4rem;
  font-size: 6rem;
`;

const Line2 = styled.div`
  text-align: center;
  font-size: 3rem;
  margin: 1rem;
  margin-top: 4rem;
  margin-bottom: 10rem;
`;

const RSVP = ({ history, location, match }) => {
  if (match.params.hollaback === "sankyou") {
    return <SankYou />;
  }

  const [qr, setQr] = useState("");
  const emailRef = useRef();
  const [message, setMessage] = useState("");
  const [alreadySigned, setAlreadySigned] = useState(false);
  const [resending, setResending] = useState(false);
  const handleFocus = event => event.target.select();

  const localQR = localStorage.getItem("qr");
  if (qr === "" && localStorage.getItem("qr")) {
    setQr(localQR);
  }

  const resendQR = () => {
    if (resending) return;
    setResending(true);
    rsvpService.resendEmail(emailRef.current, event);
    history.push("/rsvp/sankyou");
  };
  console.log(resending);
  return (
    <CContainer>
      <Header>
        <h2>RSVP</h2>
      </Header>
      <Body>
        {alreadySigned && (
          <div style={{ marginTop: "-4rem" }}>
            <Line1>It seems you have already signed up...</Line1>
            <Line2>
              Would you like to have your ticket emailed to you again?
            </Line2>
            <WhiteButton onClick={resendQR}>yAAA!</WhiteButton>
          </div>
        )}
        {qr && (
          <div>
            <div style={{ marginBottom: "6rem" }}>
              <img style={{ display: "block", margin: "auto" }} src={`${qr}`} />
            </div>
            <DownloadWrapper>
              <Download href={`${qr}`} download="littlebabychicje.png">
                DOWNLOAD
              </Download>
              {message}
            </DownloadWrapper>
          </div>
        )}
        {!qr && !alreadySigned && (
          <Formik
            initialValues={{
              username: "",
              email: "",
              password: ""
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                // .email()
                .required("Email is required")
            })}
            onSubmit={({ email }, { setStatus, setSubmitting }) => {
              setStatus();
              emailRef.current = email;
              rsvpService.rsvp(email, event).then(
                user => {
                  // const { from } = location.state || {
                  //   from: { pathname: '/' },
                  // }
                  // history.push(from)
                  console.log(user);
                  localStorage.setItem("qr", user.data);
                  setQr(user.data);
                  setMessage(user.message);
                  setSubmitting(false);
                },
                error => {
                  let errorMessage = "there was an error";
                  if (error === "Conflict") {
                    errorMessage = "you already have signed up";
                  }
                  setStatus(errorMessage);
                  setAlreadySigned(true);
                  setSubmitting(false);
                }
              );
            }}
            render={({ errors, status, touched, isSubmitting }) => (
              <StyledForm>
                <div className="form-group">
                  <Label htmlFor="email">Email</Label>
                  <StyledField
                    name="email"
                    type="text"
                    placeholder="hehe"
                    onFocus={handleFocus}
                    className={
                      "form-control" +
                      (errors.email && touched.email ? " is-invalid" : "")
                    }
                  />
                  <StyledErrorMessage
                    name="email"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                <div className="form-group">
                  <Button type="submit" disabled={isSubmitting}>
                    Send It
                  </Button>
                  {isSubmitting && (
                    <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                  )}
                </div>
                {status && <div className={"alert alert-danger"}>{status}</div>}
              </StyledForm>
            )}
          />
        )}
      </Body>
    </CContainer>
  );
};

export { RSVP };
