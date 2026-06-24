const dotenv = require("dotenv");

dotenv.config();

const requiredEnvVars = [
  "PORT",
  "NODE_ENV",
  "OKTA_ISSUER",
  "OKTA_AUDIENCE",
];

requiredEnvVars.forEach((envVar) => {
  if (!process.env[envVar]) {
    throw new Error(
      `Missing required environment variable: ${envVar}`
    );
  }
});

const env = {
  port: process.env.PORT,
  nodeEnv: process.env.NODE_ENV,

  oktaIssuer: process.env.OKTA_ISSUER,
  oktaAudience: process.env.OKTA_AUDIENCE,
};

module.exports = env;