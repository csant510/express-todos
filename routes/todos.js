var express = require('express');
var router = express.Router();
var Todo = require('../models/todo');

/* GET users listing. 
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
*/


router.get('/', function(req, res) {
  res.render('todos/index', {
    todos: Todo.getAll()
  });
});

module.exports = router;
