import { BehaviorSubject } from "rxjs";
import Toad from "../contracts/Toad.json";
const Web3 = require("web3");

const currentWeb3Subject = new BehaviorSubject();
const currentToadsSubject = new BehaviorSubject([]);

export const web3Service = {
  connect,
  getURI,
  getToad,
  toads: currentToadsSubject.asObservable(),
  web3: currentWeb3Subject.asObservable(),
  get currentUserValue() {
    return currentUserSubject.value;
  }
};

function connect() {
  const A = process.env.KALE_A;
  const B = process.env.KALE_B;
  const RPC = process.env.RPC;
  const url = `https://${A}:${B}@${RPC}`;
  const provider = new Web3.providers.HttpProvider(url);
  const web3 = new Web3(provider);
  currentWeb3Subject.next(web3);

  return web3;
}

function getToad(toadId) {
  const web3 = currentWeb3Subject._value;
  const toad = new web3.eth.Contract(Toad.abi, process.env.TOAD_ADDRESS);
  return toad.methods
    .boop(toadId)
    .call()
    .then(boop => boop);
}

function getURI(toadId) {
  const web3 = currentWeb3Subject._value;
  const toad = new web3.eth.Contract(Toad.abi, process.env.TOAD_ADDRESS);
  return toad.methods
    .tokenURI(toadId)
    .call()
    .then(uri => uri);
}
