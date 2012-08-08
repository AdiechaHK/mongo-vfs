// Generated by CoffeeScript 1.3.3
(function() {
  var http, httpAdapter, index, mongoReady, root, stack, vfs;

  root = "http://localhost:8080/rest/";

  stack = require('stack');

  http = require('http');

  httpAdapter = require('vfs-http-adapter');

  index = require('./index');

  mongoReady = function(err, vfs) {
    var server;
    if (err) {
      throw err;
    }
    server = http.createServer(stack(httpAdapter("/rest/", vfs, {})));
    server.listen(8080);
    return console.log("RESTful interface at " + root);
  };

  vfs = index({
    root: process.cwd() + "/",
    httpRoot: root
  }, mongoReady);

}).call(this);