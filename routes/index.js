var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'portfolio' });
});

router.get('/work/', function(req, res, next) {
  res.render('indexwork', { title: 'portfolio' });
});

router.get('/about/', function(req, res, next) {
  res.render('indexabout', { title: 'portfolio' });
});

router.get('/skills/', function(req, res, next) {
  res.render('indexskills', { title: 'portfolio' });
});

module.exports = router;
