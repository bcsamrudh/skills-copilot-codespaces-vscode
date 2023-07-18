// Create web server
var http = require('http');
var skills = require('./skills.js');
var comments = require('./comments.js');
var member = require('./member.js');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(skills());
  res.write(comments());
  res.write(member.skillsMember());
  res.end();
}).listen(8080);

module.exports = function() {
  return "I'm a skill!";
}
Path: comments.js
module.exports = function() {
  return "I'm a comment!";
}
Path: member.js
module.exports = {
  skillsMember: function() {
    return "I'm a member of the skills module!";
  }
};
Path: server.js
var http = require('http');
var skills = require('./skills.js');
var comments = require('./comments.js');
var member = require('./member.js');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(skills());
  res.write(comments());
  res.write(member.skillsMember());
  res.end();
}).listen(8080);