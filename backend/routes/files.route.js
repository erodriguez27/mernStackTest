"use strict";

const express = require("express");
const filesController = require("../controllers/files.controller");
const router = express.Router();

module.exports = function () {
  router.get("/data", (req, res) => {
    filesController.getFilesWithContent(req, res);
  });

  return router;
};
