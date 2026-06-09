import { OktaAuth } from "@okta/okta-auth-js";

const oktaAuth = new OktaAuth({
  issuer: "https://integrator-9643035.okta.com/oauth2/aus13v5ey6tB2HtpO698",
  clientId: "0oa13tyr4sm5nQPAx698",
  redirectUri: window.location.origin + "/login/callback",
  scopes: ["openid", "profile", "email"],
  pkce: true,
});

export default oktaAuth;