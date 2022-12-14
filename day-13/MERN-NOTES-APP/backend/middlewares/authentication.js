const jwt = require("jsonwebtoken");
require("dotenv").config();
const authentication = (req, res, next) => {
  if (!req.headers?.authorization) {
    return res.status(404).send({ success: false, message: "Please Login!" });
  }
  const token = req.headers?.authorization?.split(" ")[1];
  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(404).send({ success: false, message: "Please Login!" });
    }
    req.body.userId = decoded.userId;
    next();
  });
};
module.exports = {authentication};
