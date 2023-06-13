const { data, readCounts } = require("./fakeData");

const updateUser = (req, res) => {
  const { id } = req.query;
  if (!id) return res.status(400).json({ message: "Missing id property" });

  const { name, job, permissions } = req.body;

  const foundUser = data.find((user) => user.id == id);

  if (name) {
    const countValue = readCounts[foundUser.name];
    readCounts[name] = countValue;
    delete readCounts[foundUser.name];

    foundUser.name = name;
  }
  if (job) foundUser.job = job;
  foundUser.permissions =
    permissions && permissions.length > 0
      ? [...foundUser.permissions, ...permissions]
      : [];

  res.status(00).json({ user: foundUser });
};

module.exports = {
  updateUser,
};
