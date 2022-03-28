const express = require('express');
const router = express.Router();

// Load Person model
const Person = require('../models/Person');

// @route GET api/people/test
// @description tests people route
// @access Public
router.get('/test', (req, res) => res.send('Person route testing!'));

// @route GET api/people
// @description Get all people
// @access Public
router.get('/', (req, res) => {
  Person.find()
    .then(people => res.json(people))
    .catch(err => res.status(404).json({ nousersfound: 'No People found' }));
});

// @route GET api/people/:id
// @description Get single Person by id
// @access Public
router.get('/:id', (req, res) => {
  Person.findById(req.params.id)
    .then(Person => res.json(Person))
    .catch(err => res.status(404).json({ nouserfound: 'No Person found' }));
});

// @route POST api/people
// @description add/save Person
// @access Public
router.post('/', (req, res) => {
  Person.create(req.body)
    .then(Person => res.json({ msg: 'Person added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this Person' }));
});

// @route GET api/people/:id
// @description Update Person
// @access Public
router.put('/:id', (req, res) => {
  Person.findByIdAndUpdate(req.params.id, req.body)
    .then(Person => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/people/:id
// @description Delete Person by id
// @access Public
router.delete('/:id', (req, res) => {
  Person.findByIdAndRemove(req.params.id, req.body)
    .then(Person => res.json({ mgs: 'Person entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a Person' }));
});

module.exports = router;