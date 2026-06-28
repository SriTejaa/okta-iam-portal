const env = require("../config/env");

const oktaRequest = async (endpoint, options = {}) => {
  const { body, headers = {}, ...rest } = options;

  const response = await fetch(`${env.oktaOrgUrl}${endpoint}`, {
    ...rest,
    headers: {
      Accept: "application/json",
      Authorization: `SSWS ${env.oktaApiToken}`,
      ...(body && { "Content-Type": "application/json" }),
      ...headers,
    },
    ...(body && { body: JSON.stringify(body) }),
  });

  if (!response.ok) {
    throw new Error(`Okta API Error: ${response.status}`);
  }

  return response.status === 204 ? null : response.json();
};

module.exports = {
  oktaRequest,
};