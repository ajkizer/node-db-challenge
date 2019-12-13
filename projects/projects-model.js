const db = require("../data/db-config");

module.exports = {
  find,
  findById,
  add,
  remove,
  update
};

function find() {
  return db("projects");
}

function findById(id) {
  return db("projects")
    .where({ id })
    .first();
}

function add(projectData) {
  return db("projects")
    .insert(projectData)
    .then(ids => {
      return findById(ids[0]);
    });
}

function remove(id) {
  return db("projects")
    .where({ id })
    .del();
}

function update(changes, id) {
  return db("projects")
    .where({ id })
    .update(changes)
    .then(count => {
      return findById(id);
    });
}
