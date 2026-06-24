const OktaJwtVerifier = require("@okta/jwt-verifier");

const env = require("./env");

const oktaJwtVerifier = new OktaJwtVerifier({
  issuer: env.oktaIssuer,
});

module.exports = oktaJwtVerifier;