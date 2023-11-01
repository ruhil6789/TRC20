const MyTRC20Token = artifacts.require("MyTRC20Token");

module.exports = function (deployer) {
  deployer.deploy(MyTRC20Token, 1000000, "MyToken", "MTK", 18);
};