import { BehaviorSubject } from "rxjs";

import config from "config";
import { handleResponse } from "@/_helpers";

const currentUserSubject = new BehaviorSubject(
  JSON.parse(localStorage.getItem("currentUser"))
);

const currentWorchSubject = new BehaviorSubject(
  JSON.parse(localStorage.getItem("worch"))
);

export const authenticationService = {
  isWorched,
  login,
  logout,
  register,
  currentUser: currentUserSubject.asObservable(),
  worched: currentWorchSubject.asObservable(),
  get currentUserValue() {
    return currentUserSubject.value;
  },
  get currentWorchValue() {
    return currentWorchSubject.value;
  }
};

function login(username, password) {
  console.log(process.env.MEDENG_URL);
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  };

  return fetch(`${process.env.MEDENG_URL}/auth/login`, requestOptions)
    .then(handleResponse)
    .then(user => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem("currentUser", JSON.stringify(user));
      currentUserSubject.next(user);

      return user;
    });
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("currentUser");
  currentUserSubject.next(null);
}

function register(username, email, password) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email, password })
  };
  return fetch(`${process.env.MEDENG_URL}/auth/register`, requestOptions)
    .then(handleResponse)
    .then(user => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem("currentUser", JSON.stringify(user));
      currentUserSubject.next(user);

      return user;
    });
}

function isWorched() {
  localStorage.setItem("worch", true);
  currentWorchSubject.next(true);
}
