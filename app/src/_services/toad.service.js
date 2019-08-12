import config from "config";
import { authHeader, handleResponse } from "@/_helpers";

export const toadService = {
  getYours
};

function getYours() {
  console.log("call service");
  const requestOptions = { method: "GET", headers: authHeader() };
  return fetch(`${config.apiUrl}/toad/yours`, requestOptions).then(
    handleResponse
  );
}
