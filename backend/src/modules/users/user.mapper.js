const mapUser = (user) => ({
  id: user.id,
  firstName: user.profile.firstName,
  lastName: user.profile.lastName,
  email: user.profile.email,
  login: user.profile.login,
  status: user.status,
  lastLogin: user.lastLogin,
  createdAt: user.created,
});

module.exports = {
  mapUser,
};