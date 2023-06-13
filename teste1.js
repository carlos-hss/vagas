const { data, readCounts } = require("./fakeData");

const getUser = (req, res, next) => {
  const { name } = req.query;

  for (const user of data) {
    if (user.name === name) {
      if (!readCounts[name]) {
        readCounts[name] = 0;
      }
      readCounts[name]++;

      res.status(200).json({ user });
      return;
    }
  }

  res.status(404).json({ message: "User not found" });
};

const getUsers = (req, res, next) => {
  if (data.length > 0) {
    res.status(200).json({ data });
    return;
  }

  res.status(200).json({ message: "No users registered" });
};

module.exports = {
  getUser,
  getUsers,
};
