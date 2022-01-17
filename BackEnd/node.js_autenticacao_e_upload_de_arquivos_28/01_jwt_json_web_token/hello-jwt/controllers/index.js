// controllers/index.js
const login = require('./login');
const me = require('./me');
const topSecret = require('./topSecret');
const signup = require('./sigup');

module.exports = {
  login,
  me,
  topSecret,
  signup,
};