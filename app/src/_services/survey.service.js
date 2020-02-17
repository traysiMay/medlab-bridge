import config from "config";
import { authHeader, handleResponse } from "@/_helpers";

export const surveyService = {
  sendResponse
};

function sendResponse(cat, response) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ cat, response })
  };
  return fetch(`${process.env.MEDENG_URL}/survey/`, requestOptions)
    .then(handleResponse)
    .then(response => {
      console.log(response);
      return response;
    });
}
