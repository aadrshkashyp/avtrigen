const express = require("express");
const router = express.Router();
const avatarController = require("../controllers/avatarController");

router.get("/:size", avatarController.generateAvatar);

module.exports = router;
