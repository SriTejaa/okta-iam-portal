const dotenv = require("dotenv");

dotenv.config();

const requiredEnvVars = [
  "PORT",
  "NODE_ENV",
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
};

module.exports = env;