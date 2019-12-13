const express = require("express");

const Projects = require("./projects-model");

const router = express.Router();

router.get("/", (req, res) => {
  Projects.find()
    .then(projects => {
      res.json(projects);
    })
    .catch(err => {
      res.status(500).json({ message: "failed to get projects" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Projects.findById(id)
    .then(project => {
      project
        ? res.json(project)
        : res.status(404).json({ message: "Could not find project" });
    })
    .catch(err => {
      res.status(500).json({ message: `${err} -- failed to load` });
    });
});

router.post("/", (req, res) => {
  let projectData = req.body;

  if (!projectData.completed) {
    projectData = { ...projectData, completed: false };
  }

  Projects.add(projectData)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(err => {
      res.status(500).json({ message: "Could not add project" });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Projects.remove(id)
    .then(deleted => {
      deleted
        ? res.json({ removed: deleted })
        : res.status(404).json({ message: "Project does not exist" });
    })
    .catch(err => {
      res.status(500).json({ message: "failed to delete project" });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Projects.findById(id)
    .then(project => {
      if (project) {
        Projects.update(changes, id).then(updatedProject => {
          res.json(updatedProject);
        });
      } else {
        res.status(404).json({ message: "could not find project" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "failed to update" });
    });
});
module.exports = router;
