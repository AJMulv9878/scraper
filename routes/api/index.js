var router = require("express").Router();

var fetchRoutes = require("./fetch");
var noteRoutes = require("./notes");
var articleRoutes = require("./article");

router.use("/fetch", fetchRoutes);
router.use("/notes", noteRoutes);
router.use("/article", articleRoutes);

module.exports = router;