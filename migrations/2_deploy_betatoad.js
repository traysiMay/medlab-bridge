const BetaToad = artifacts.require("AlphaToad");

module.exports = function(deployer) {
  deployer.deploy(BetaToad, "BetaToad", "BTOAD");
};

// unless you actually want to make updates to the token, you can just use the template from Alpha
// , though maybe it should have some sort of change....
