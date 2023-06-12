const { data, readCounts } = require("./fakeData");

const countUsers = (req, res) => {
  const { name } = req.query;

  if (!name) return res.status(400).json({ message: "Missing name property" });

  const hasUserWithThisName = data.some((user) => user.name === name);

  if (!hasUserWithThisName)
    return res.status(400).json({ message: "No user with this name" });

  res.status(200).json({
    message: `User ${name} was red ${readCounts[name] || 0} ${
      readCounts[name] === 1 ? "time" : "times"
    }.`,
  });
};

module.exports = {
  countUsers,
};
