const {TODO, validate} = require('../models/todo'); 
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
        ///  Get Value

router.get('/', async (req, res) => {
    const List = await TODO.find()
    res.send(List);
});

        ///  Put New Value

router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  let Task = new TODO({ 
    task: req.body.title,
  });
  console.log("Task is",Task)
  Task = await Task.save();
  res.send(await TODO.find());
});

        ///  Delete Value

router.delete('/:id', async (req, res) => {
    const NewTodoList = await TODO.findByIdAndRemove(req.params.id);
    if (!NewTodoList) return res.status(404).send('The customer with the given ID was not found.');
    res.send(NewTodoList);
  });

        ///  Update Value

router.put('/:id', async (req, res) => {
  const customer = await TODO.findByIdAndUpdate(req.params.id,
    { 
      task: req.body.title,
    }, { new: true });

  if (!customer) return res.status(404).send('The customer with the given ID was not found.');
  
  res.send(customer);
});


module.exports = router; 