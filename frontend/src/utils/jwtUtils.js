export function decodeJwt(token) {
  const payload = token.split(".")[1];

  return JSON.parse(
    atob(payload)
  );
}
export function getGroups(accessToken) {
  const payload = decodeJwt(accessToken);

  return payload.groups || [];
}