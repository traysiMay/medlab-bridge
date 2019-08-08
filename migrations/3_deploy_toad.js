const Toad = artifacts.require("Toad");

module.exports = function(deployer) {
  deployer.deploy(Toad, "Toad", "TOAD");
};
