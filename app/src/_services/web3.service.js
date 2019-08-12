import { BehaviorSubject } from "rxjs";
import { authenticationService } from "./authentication.service";
import Toad from "../contracts/Toad.json";
const Web3 = require("web3");
// const U = process.env.KALEIDO_USER;
// const P = process.env.KALEIOD_PASS;
// const RPC = process.env.RPC;
// const url = `https://${U}:${P}@${RPC}`;
// const provider = new Web3.providers.HttpProvider(url);
// const web3 = new Web3(provider);
const currentWeb3Subject = new BehaviorSubject();
const currentToadsSubject = new BehaviorSubject([]);

export const web3Service = {
  connect,
  getToad,
  logout,
  toads: currentToadsSubject.asObservable(),
  web3: currentWeb3Subject.asObservable(),
  get currentUserValue() {
    return currentUserSubject.value;
  }
};

function connect() {
  const U = process.env.KALEIDO_USER;
  const P = process.env.KALEIDO_PASS;
  const RPC = process.env.RPC;
  const url = `https://${U}:${P}@${RPC}`;
  console.log(url);
  const provider = new Web3.providers.HttpProvider(url);
  const web3 = new Web3(provider);
  currentWeb3Subject.next(web3);
  return web3;
}

function getToad() {
  const web3 = currentWeb3Subject._value;
  const toad = new web3.eth.Contract(Toad.abi, process.env.TOAD_ADDRESS);
  return toad.methods
    .boop(0)
    .call()
    .then(boop => boop);
  //   toad.methods.boops.call(0).then(console.log);
  //   return fetch(`${config.apiUrl}/auth/login`, requestOptions)
  //     .then(handleResponse)
  //     .then(user => {
  //       // store user details and jwt token in local storage to keep user logged in between page refreshes
  //       localStorage.setItem("currentUser", JSON.stringify(user));
  //       currentUserSubject.next(user);

  //       return user;
  //     });
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("currentUser");
  currentUserSubject.next(null);
}

// // Now you can call web3 functions, so we'll just test the connection by getting the latest block in the chain.
// window.web3 = web3;
// web3.eth.getBlock("latest").then(latestBlock => {
//   console.log("Latest Block Via HTTP Provider: ");
//   console.log(latestBlock);
//   // Stop the program once this has finished
//   process.exit();
// });

// const toad = new web3.eth.Contract(
//   Toad.abi,
//   "0xb079d360C08308737761032650Fa7E3398a85BA4"
// );
// window.toad = toad;
