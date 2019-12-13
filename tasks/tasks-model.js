const db = require("../data/db-config");

module.exports = {
  find,
  findById,
  add,
  remove,
  update
};

function find() {
  return db("tasks").orderBy("project_id");
}

function findById(id) {
  return db("tasks")
    .where({ id })
    .first();
}

function add(taskData) {
  return db("tasks")
    .insert(taskData)
    .then(ids => {
      return findById(ids[0]);
    });
}

function remove(id) {
  return db("tasks")
    .where({ id })
    .del();
}

function update(changes, id) {
  return db("tasks")
    .where({ id })
    .update(changes)
    .then(count => {
      return findById(id);
    });
}
