const express = require("express");

const Resources = require("./resources-model");

const router = express.Router();

router.get("/", (req, res) => {
  Resources.find()
    .then(resources => {
      res.json(resources);
    })
    .catch(err => {
      res.status(500).json({ message: "failed to process request" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Resources.findById(id)
    .then(resource => {
      resource
        ? res.json(resource)
        : res.status(404).json({ message: "could not find resource" });
    })
    .catch(err => {
      res.status(500).json({ message: "error processing request" });
    });
});

router.post("/", (req, res) => {
  const resourceData = req.body;

  Resources.add(resourceData)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch(err => {
      res.status(500).json({ message: "could not process request" });
    });
});
module.exports = router;
