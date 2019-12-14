const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index-Controller.js');

/* GET home page. */
router.get('/', indexController.getIndex);
router.get('/about-cv', indexController.getTest);
router.get('/projects', indexController.getProjects);
module.exports = router;
