import config from "config";
import { authHeader, handleResponse } from "@/_helpers";

export const rsvpService = {
  resendEmail,
  rsvp
};

function rsvp(email) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email })
  };
  return fetch(`${process.env.MEDENG_URL}/rsvp/create`, requestOptions)
    .then(handleResponse)
    .then(user => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      // localStorage.setItem('currentUser', JSON.stringify(user))
      // currentUserSubject.next(user)
      return user;
      // return user
    });
}

function resendEmail(email, event) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, event })
  };
  return fetch(`${process.env.MEDENG_URL}/rsvp/resend`, requestOptions).then(
    handleResponse
  );
}
