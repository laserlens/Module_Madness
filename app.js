var http = require('http');//node module built in use to create surver
//module being called

var modThree = require('./modThree');

http.createServer(function (req, res) {
  //create a response header
  res.writeHead(200);//http response code 200 is ok 404 is bad
  // create response body
  res.write(modThree.account());
  res.write(modThree.oneAndTwo());
  // send the response to the client
  res.end();
}).listen(3000);//listen uses method chaining to allow connection on specific port
//and is runing on port 3000
