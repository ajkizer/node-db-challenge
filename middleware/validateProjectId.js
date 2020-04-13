const db = require("../data/db-config.js");

function validateProjectID(req, res, next) {
  db("projects")
    .where("id", req.params.id)
    .then(project => {
      if (Object.keys(project).length === 0) {
        res.status(400).json({ message: "Invalid projet id" });
      } else {
        next();
      }
    });
}

module.exports = validateProjectID;
