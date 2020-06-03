const express = require('express');
const personController = require('../controllers/persons');

const router = express.Router();

router.post('/add-person',personController.addPerson);

module.exports = router;
