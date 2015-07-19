var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

// Autoload de comandos con :quizId
router.param('quizId', quizController.load);  // autoload :quizId

//Definición de rutas de /quizes
router.get('/quizes',   quizController.index);
router.get('/quizes/:quizId(\\d+)', 		quizController.show);
router.get('/quizes/:quizId(\\d+)/answer',   quizController.answer);

router.get('/quizes/author', function(req, res) {	res.render('author');});
router.get('/quizes/dedicatoria', function(req, res) {	res.render('dedicatoria');});

module.exports = router;