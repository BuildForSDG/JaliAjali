const express = require('express');
const { createAccidentCase } = require('../controllers/accident.controller');


const router = express.Router();

router.post('/create', createAccidentCase);


module.exports = router;