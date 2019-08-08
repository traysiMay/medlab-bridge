import React from "react";
import { Drizzle, generateStore } from "drizzle";
import Context from "./DrizzleContext";
import ToadTix from "../contracts/ToadTix.json";

const options = {
  contracts: [ToadTix],
  web3: {
    fallback: {
      type: "ws",
      url: "wss://u1wxxj5g51-u1ghyojs49-wss.us1-azure.kaleido.io"
    }
  }
};

const Web3 = require("web3");
window.Web3 = Web3;
// Fill these in to test, ex. remove @WSS_ENDPOINT@
let USER = "u1aef1at06";
let PASS = "PkuGaRHkra7fhbJJI1v29ai3nyQX2pbCYsee92hRpvg";
let WSS_ENDPOINT = "u1wxxj5g51-u1ghyojs49-wss.us1-azure.kaleido.io"; // Remove the leading wss://

// Web Socket Example
// NOTE: Basic Auth support for websockets was added in 1.0.0-beta.35, prior versions do not support basic auth

let nodeUrl = "wss://" + USER + ":" + PASS + "@" + WSS_ENDPOINT;

let provider = new Web3.providers.WebsocketProvider(nodeUrl);
let web3 = new Web3(provider);
window.web3 = web3;
// Now you can call web3 functions, so we'll just test the connection by getting the latest block in the chain.
console.log("ello");
web3.eth.getBlock("latest").then(latestBlock => {
  console.log("wtf");
  console.log("Latest Block Via Websocket Provider: ");
  console.log(latestBlock);
  // Stop the program once this has finished
  process.exit();
});

const drizzleStore = generateStore(options);
const drizzle = new Drizzle(options, drizzleStore);
const Provider = ({ children }) => {
  return <Context.Provider drizzle={drizzle}>{children}</Context.Provider>;
};

export default Provider;
