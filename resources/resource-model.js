const db = require("../data/db-config.js");

module.exports = {
  getResource,
  addResource
};

function getResource() {
  return db("resources");
}

function addResource(resourceData) {
  return db("resources").insert(resourceData);
}
