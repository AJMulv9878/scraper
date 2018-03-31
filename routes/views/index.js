var router = require("express").Router();

router.get("/", function(request, response) {
    response.render("home");
});

router.get("/save", function(request, response) {
    response.render("save");
});

module.exports = router;