const jsonWebToken = require("jsonwebtoken");
const { sign, verify } = jsonWebToken;

function createToken(userObject) {
  return sign(userObject, process.env.SECRET_KEY);
}

function verifyToken(token) {
  return verify(token, process.env.SECRET_KEY);
}

module.exports = {
  createToken,
  verifyToken,
};
