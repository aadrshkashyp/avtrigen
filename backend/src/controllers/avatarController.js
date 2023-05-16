const Avatar = require("../models/Avatar");

exports.generateAvatar = (req, res) => {
  const size = req.params.size;
  const type = req.query.type;
  const avatar = Avatar.generate(size, type);
  res.send(avatar);
};
