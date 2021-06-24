var express = require("express");
var router = express.Router();
var dictController = require("../controllers/dictionary-controller");

router.route("/dictionary/:word")
    .get(dictController.getDictionaryDesc);

module.exports = router;