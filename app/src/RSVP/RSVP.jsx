import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { rsvpService } from "@/_services";
import { Syzygy } from "./Syzygy";
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
  StyledForm,
  PosterContainer
} from "../_styles/form";
import { WhiteButton } from "../_styles/basic";
import styled from "styled-components";

import { SankYou, Head } from "./SankYou";
import {
  ToadContainer,
  HeaderName,
  HeaderIcon,
  QRSpace,
  Qr,
  Admit,
  BottomLine
} from "../Initiation/styles";
const event = "raptorhole";

const Line1 = styled.div`
  text-align: center;
  padding: 4rem;
  font-size: 3rem;
`;

const Line2 = styled.div`
  text-align: center;
  font-size: 3rem;
  margin: 1rem;
  margin-top: 4rem;
  margin-bottom: 6rem;
`;

const AHead = styled(Head)`
  font-size: 10rem;
  top: 2.8rem;
`;

const RSVP = ({ history, match }) => {
  if (match.params.hollaback === "sankyou") {
    return <SankYou />;
  }

  const [qr, setQr] = useState("");
  const emailRef = useRef();
  const [message, setMessage] = useState("");
  const [alreadySigned, setAlreadySigned] = useState(false);
  const [alreadyAccount, setAlreadyAccount] = useState(false);
  const [resending, setResending] = useState(false);
  const handleFocus = event => event.target.select();

  const head = useRef();

  useEffect(() => {
    let req;
    let counter = 0;
    const dumbLoop = () => {
      const animate = () => {
        req = window.requestAnimationFrame(animate);
        head.current.style.transform = `rotate3d(1, 1, 1, ${counter}deg)`;
        counter++;
      };
      animate();
    };
    dumbLoop();
    return () => {
      window.cancelAnimationFrame(req);
    };
  }, []);

  const localQR = localStorage.getItem(process.env.QR);
  if (qr === "" && localStorage.getItem(process.env.QR)) {
    setQr(localQR);
  }

  const storedEmail = localStorage.getItem("email");
  if (!emailRef.current) {
    emailRef.current = storedEmail;
  }

  const resendQR = () => {
    if (resending) return;
    setResending(true);
    rsvpService.resendEmail(emailRef.current, event);
    history.push("/rsvp/sankyou");
  };
  console.log(resending);
  return (
    <div>
      <div style={{ height: "10rem" }}>
        <AHead ref={head}>:)</AHead>
      </div>
      {/* <PosterContainer>
        <Syzygy />
      </PosterContainer> */}
      <CContainer style={qr ? { padding: "0", width: "92%" } : {}}>
        {!qr && (
          <Header>
            <h3 style={{ margin: "1.6rem 1rem" }}>RSVP</h3>
          </Header>
        )}

        <Body>
          {alreadyAccount && (
            <div style={{ marginTop: "-4rem" }}>
              <Line1>It seems you have already created an account..</Line1>
              <Line2>
                you may login to your account to retrieve a ticky :D
              </Line2>
              <Link to="/login">
                <WhiteButton style={{ fontSize: "1.5rem" }}>
                  go to LOGIN!
                </WhiteButton>
              </Link>
            </div>
          )}
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
              {/* <div style={{ marginBottom: "6rem" }}>
              <img style={{ display: "block", margin: "auto" }} src={`${qr}`} />
            </div>
            <DownloadWrapper>
              <Download href={`${qr}`} download="littlebabychicje.png">
                DOWNLOAD
              </Download>
              {message}
            </DownloadWrapper> */}
              <ToadContainer>
                {/* <HeaderName>{emailRef.current}</HeaderName> */}
                {/* <HeaderIcon>!</HeaderIcon> */}
                <QRSpace style={{ background: "white" }}>
                  <Qr src={qr} />
                  <Admit>
                    ADMIT <p>2</p>
                  </Admit>
                </QRSpace>
                <div style={{ gridArea: "toadman", padding: "2rem" }}>
                  <BottomLine> MONARCH </BottomLine>
                  <BottomLine>MAY 8</BottomLine>
                </div>
              </ToadContainer>
            </div>
          )}
          {!qr && !alreadySigned && !alreadyAccount && (
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
                    localStorage.setItem(process.env.QR, user.data);
                    localStorage.setItem("email", email);
                    setQr(user.data);
                    setMessage(user.message);
                    setSubmitting(false);
                  },
                  error => {
                    if (error === "already_rsvp") {
                      // setStatus(errorMessage);
                      console.log("hi");
                      setAlreadySigned(true);
                    }
                    if (error === "already_account") {
                      setAlreadyAccount(true);
                    }
                    setSubmitting(false);
                    setStatus("there was an error");
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
                  {status && (
                    <div className={"alert alert-danger"}>{status}</div>
                  )}
                </StyledForm>
              )}
            />
          )}
        </Body>
      </CContainer>
      {qr && (
        <Download href={`${qr}`} download="littlebabychicje.png">
          DOWNLOAD
        </Download>
      )}
      {/* <CContainer>
        <Header>
          <h3>INFO</h3>
        </Header>
        <Body>
          <Line2>Masks encouraged</Line2>
          <Line2>Free entry with RSVP</Line2>
          <Line2>or free entry with mask</Line2>
          <Line2>There will be music</Line2>
          <Line2>There will be good people</Line2>
          <Line2>There will be dinosaurs</Line2>
          <Line2>Bring your weird self</Line2>
          :)
        </Body>
      </CContainer> */}
    </div>
  );
};

export { RSVP };
