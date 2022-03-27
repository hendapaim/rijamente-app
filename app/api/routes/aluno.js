var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
    res.json({name: "Henda"})
})

module.exports = router;