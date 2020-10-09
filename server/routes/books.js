
const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Book = require('../models/book');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// books.index 
router.get('/', (req, res) => 
  Book.findAll()
    .then(books => res.json({
        books
      }))
      .catch(err => console.warn(err)))


// books.create 
router.post('/', (req, res) => {
  let { name, code, author, volume, quantity } = req.body
  let errors = []

  if(!name) {
    errors.push({ text: 'Please add a name' });
  }
  if(!code) {
    errors.push({ text: 'Please add some code (ISBN, NBR...)' });
  }
  if(!author) {
    errors.push({ text: 'Please add a author' });
  }
  if(!volume) {
    errors.push({ text: 'Please add a volume' });
  }
  if(quantity < 0) {
    errors.push({ text: 'Quantity can\'t be negative' });
  }
      
  // Check for errors
  if(errors.length > 0) {
    res.json({
      errors,
      name, 
      code, 
      author, 
      volume, 
      quantity
    });
  } else {
    // Insert into table
    Book.create({
      name, 
      code, 
      author, 
      volume, 
      quantity
    })
      .then(book => res.status(201).json({book}))
      .catch(err => res.json({error:err.message}))
  }
});

// books.destroy 
router.delete('/:id', (req, res) => {
  Book.destroy({
    where: {
        id: req.params.id
    }
  }).then(res.status(204).send())
})

//books.update 
router.put('/:id', (req, res) => {
  let {
    name,
    code,
    author,
    volume,
    quantity
  } = req.body
  const ID = req.params.id

  // book.update
  Book.update({
    name,
    code,
    author,
    volume,
    quantity
  }, {
    where: {
      id: ID
    }
  }).then(res.json({status: 'editado'}))
})

//books.show 
router.get('/:id', (req, res) => Book.findByPk(req.params.id)
.then(books => res.json({
    books
  }))
  .catch(err => console.warn(err)))
module.exports = router