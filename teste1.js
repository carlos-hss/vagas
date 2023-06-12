let data = require("./fakeData");

const getUser = (req, res, next) => {
  // Eu alteraria para a função fazer a busca por cpf, pelo fato de ser uma chave única, mas deixei o nome pois creio que seja a intenção do código.

  let name = req.query.name;

  for (const user of data) {
    if (user.name == name) {
      res.send(user);
      return;
    }
  }

  return res.send("User not founded");
};

const getUsers = (req, res, next) => {
  if (data.length > 0) {
    res.send(data);
    return;
  }

  return res.send("No users registered");
};

module.exports = {
  getUser,
  getUsers,
};
