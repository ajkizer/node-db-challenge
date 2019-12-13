const express = require("express");

const Projects = require("./project-model.js");

// import middleware
const validateProjectId = require("../middleware/validateProjectId.js");

const router = express.Router();

// get list of projects
router.get("/", (req, res) => {
  Projects.getProjects()
    .then(projects => {
      let convertedProjects = projects.map(project => {
        if (project.is_complete) {
          return { ...project, is_complete: true };
        } else {
          return { ...project, is_complete: false };
        }
      });
      res.json(convertedProjects);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get projects." });
    });
});

// add a project
router.post("/", (req, res) => {
  Projects.addProject(req.body)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to add project." });
    });
});

// get tasks from 1 project
router.get("/:id/tasks", validateProjectId, (req, res) => {
  Projects.getTasks(req.params.id)
    .then(tasks => {
      res.json(tasks);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get projects." });
    });
});

// post a task to a project
router.post("/:id/tasks", validateProjectId, (req, res) => {
  Projects.addTask(req.body, req.params.id)
    .then(task => {
      res.status(201).json(task);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to add task." });
    });
});

// get resources from 1 project
router.get("/:id/resources", validateProjectId, (req, res) => {
  Projects.getResourcesOfProject(req.params.id)
    .then(resources => {
      res.json(resources);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get resources." });
    });
});

// add resource to a project
router.post("/:id/resources", validateProjectId, (req, res) => {
  Projects.addResourceOfProject(req.body, req.params.id)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to add resource" });
    });
});

module.exports = router;
