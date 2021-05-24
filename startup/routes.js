const express = require('express');
const TodoList = require('../routes/todoList');

module.exports = function(app) {
  app.use(express.json());
  app.use('/api/TodoList', TodoList);
}