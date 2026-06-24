//FOR LOCAL DEV PURPOSE
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const app = require("./app");

const env = require("./config/env");

app.listen(env.port, () => {
  console.log(
    `Server running on port ${env.port}`
  );
});