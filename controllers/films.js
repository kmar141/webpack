var express = require('express');
var filmRouter = new express.Router();

var films = ["Now You See Me", "Star Wars Episode IV: A New Hope", "The Room"];

filmRouter.get("/", function(req, res){
  res.json(films);
});

filmRouter.get("/:id", function(req, res){
  var index = req.params.id;
  res.json({data: films[index]});
});

filmRouter.post("/", function(req, res){
  films.push(req.body.film);
  res.json({data: films});
});

filmRouter.put("/:id", function(req, res){
  films[req.params.id] = req.body.film;
  res.json(films);
});

filmRouter.delete("/:id", function(req, res){
  films.splice(req.params.id, 1);
  res.json({data: films});
});

module.exports = filmRouter;