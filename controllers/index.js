var express = require('express');
var router = new express.Router();

router.use("/films", require("./films"));



router.get("/", function(req, res){
  res.json({data: "Welcome"});
});

router.get("/about", function(req, res){
  res.json({data: "What an odd looking cinema!"});
});

module.exports = router;