﻿var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

router.get('/quizes/question', quizController.question);
router.get('/quizes/answer',   quizController.answer);

router.get('/quizes/author', function(req, res) {	res.render('author');});
router.get('/quizes/dedicatoria', function(req, res) {	res.render('dedicatoria');});

module.exports = router;