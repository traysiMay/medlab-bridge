const AlphaToad = artifacts.require("AlphaToad");

module.exports = function(deployer) {
  deployer.deploy(AlphaToad, "AlphaToad", "ATOAD");
};
