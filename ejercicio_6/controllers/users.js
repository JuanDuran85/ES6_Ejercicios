var User = require("../models/users");
exports.user_create = function(req, res, next) {
  if (req.body) {
    let items = req.bodyUser.create(items, function(err, newUsers) {
      if (err) returnres.json({ 
          error: err 
        });
      res.json(newUsers);
    });
  } else {
    res.json({ status: "ERROR", message: "Debe completar todos loscampos" });
  }
};
