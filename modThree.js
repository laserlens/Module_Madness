//var http = require('http');//node module built in use to create surver
//module being called
var getRandomNumber = require('./modOne');
var convertToUSD = require('./modTwo');

var allInOne = {
  account : function () {
    return 'Account balance: \n';
  },
  oneAndTwo: function () {
    var cash = convertToUSD(getRandomNumber(100, 1000000));
    return cash;
  },
};
module.exports=allInOne;
