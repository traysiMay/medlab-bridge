import React from "react";
import { render } from "react-dom";

import { App } from "./App";
import Toad from "./contracts/Toad.json";
// setup fake backend
window.Toad = Toad;
import { configureFakeBackend } from "./_helpers";
configureFakeBackend();

const Web3 = require("web3");

let USER = process.env.REACT_APP_KALEIDO_USER;
let PASS = process.env.REACT_APP_KALEIOD_PASS;
let RPC_ENDPOINT = "u1wxxj5g51-u1ghyojs49-rpc.us1-azure.kaleido.io"; // Remove the leading https://

// HTTP Provider Example
// NOTE: The HTTP Provider is deprecated, as it won't work for subscriptions.
// See: https://web3js.readthedocs.io/en/1.0/web3.html#providers

let nodeUrl = "https://" + USER + ":" + PASS + "@" + RPC_ENDPOINT;

let provider = new Web3.providers.HttpProvider(nodeUrl);
let web3 = new Web3(provider);

// Now you can call web3 functions, so we'll just test the connection by getting the latest block in the chain.
window.web3 = web3;
web3.eth.getBlock("latest").then(latestBlock => {
  console.log("Latest Block Via HTTP Provider: ");
  console.log(latestBlock);
  // Stop the program once this has finished
  process.exit();
});

const toad = new web3.eth.Contract(
  Toad.abi,
  "0xb079d360c08308737761032650fa7e3398a85ba4"
);
window.toad = toad;

render(<App />, document.getElementById("app"));

//u1w3ef75uu
//Yktieh2rgl-vIScfAbo7ztVep4uXVaOZV8HDHHDSSzE
