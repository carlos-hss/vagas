const { data, readCounts } = require("./fakeData");

const updateUser = (req, res) => {
  const { id } = req.query;
  if (!id) return res.status(400).json({ message: "Missing id property" });

  const { name, job, permissions } = req.body;

  const findedUser = data.find((user) => user.id == id);

  if (name) {
    const countValue = readCounts[findedUser.name];
    readCounts[name] = countValue;
    delete readCounts[findedUser.name];

    findedUser.name = name;
  }
  if (job) findedUser.name = name;
  if (permissions)
    findedUser.permissions = [...findedUser.permissions, ...permissions];

  res.json({ user: findedUser });
};

module.exports = {
  updateUser,
};
