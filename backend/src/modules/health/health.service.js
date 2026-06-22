const getHealth = () => {
  return {
    status: "UP",
    timestamp: new Date().toISOString(),
  };
};

module.exports = {
  getHealth,
};