const http = require('http');
const url = require('url');
const static = require('node-static');
const file = new static.Server('./public', {
  cache: 0
});

function accept(req, res) {
  file.serve(req, res);
}

http.createServer(accept).listen(8080);
console.log('listening on port 8080');
