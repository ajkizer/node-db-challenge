const express = require("express");

const Resources = require("./resource-model.js");

const router = express.Router();

// get a list of resources
router.get("/", (req, res) => {
  Resources.getResource()
    .then(resources => {
      res.json(resources);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get resources." });
    });
});

// add a resource
router.post("/", (req, res) => {
  Resources.addResource(req.body)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to add resources." });
    });
});

module.exports = router;
