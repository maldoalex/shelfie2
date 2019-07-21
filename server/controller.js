getInventory = (req, res, next) => {
  const dbInstance = req.app.get("db");
  console.log(req.app);
};

module.exports = {
  getInventory
};
