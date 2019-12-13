const db = require("../data/db-config.js");

module.exports = {
  getProjects,
  addProject,
  getResourcesOfProject,
  addResourceOfProject,
  getTasks,
  addTask
};

function getProjects() {
  return db("projects");
}

function findById(id) {
  return db("projects")
    .where({ id })
    .first();
}

function getTasks(project_id) {
  return db("projects as p")
    .where("p.id", project_id)
    .join("tasks as t", "p.id", "t.project_id")
    .select(
      "p.name as Project Name",
      "p.description as Project Description",
      "t.description as task",
      "t.notes as task notes",
      "t.is_complete"
    );
}

function getResourcesOfProject(project_id) {
  return db("projects as p")
    .where("p.id", project_id)
    .join("project_resource as pr", "p.id", "pr.project_id")
    .join("resources as r", "pr.resource_id", "r.id")
    .select("r.name as Resource Name", "r.description as Resource Description");
}

async function addProject(projectData) {
  return db("projects")
    .insert(projectData)
    .then(async ids => {
      return await findById(ids[0]);
    });
}

function addTask(taskData, project_id) {
  return db("tasks").insert({ ...taskData, project_id: project_id });
}

function addResourceOfProject(resourceData, project_id) {
  return db("resources")
    .insert(resourceData)
    .then(([resourceId]) => {
      console.log(resourceId);
      return db("project_resource").insert({
        project_id: project_id,
        resource_id: resourceId
      });
    });
}
