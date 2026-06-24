// src/auth/roleResolver.js

const resolveRoles = (groups = []) => {
  return groups.filter(
    (group) => group.startsWith("IAM-")
  );
};

module.exports = {
  resolveRoles,
};