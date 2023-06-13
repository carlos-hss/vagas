const { data, readCounts } = require("./fakeData");

const deleteUser = (req, res) => {
  const { name } = req.query;

  if (!name) return res.status(400).json({ message: "Missing name property" });

  const index = data.findIndex((user) => user.name === name);
  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  delete readCounts[data[index].name];
  data.splice(index, 1);

  res.status(200).json({ message: "User deleted" });
};

module.exports = {
  deleteUser,
};
