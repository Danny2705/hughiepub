const express = require("express");
const { uploadResume } = require("./mail.controller");

const router = express.Router();

router.post("/upload", uploadResume);

module.exports = router;
