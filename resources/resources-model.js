const db = require("../data/db-config");

module.exports = {
  find,
  findById,
  add
};

function find() {
  return db("resources");
}

function findById(id) {
  return db("resources")
    .where({ id })
    .first();
}

function add(resourceData) {
  return db("resources")
    .insert(resourceData)
    .then(ids => {
      return findById(ids[0]);
    });
}
