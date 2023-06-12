let data = require("./fakeData");

module.exports = function (req, res) {
  let { name, job } = req.body;

  let newUser = {
    id: data.length + 1,
    name: name,
    job: job,
  };

  data.push(newUser);
  res.send(newUser);
};
