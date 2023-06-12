const { data } = require("./fakeData");

const createUser = (req, res) => {
  const { name, job, permissions } = req.body;

  const newUser = {
    id: data.length + 1,
    name: name,
    job: job,
    permissions: permissions || [],
  };

  data.push(newUser);
  res.status(200).json({ user: newUser });
};

module.exports = {
  createUser,
};
