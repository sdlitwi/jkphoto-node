var express = require('express');
var nodeGallery = require('node-gallery');
var router = express.Router();

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

/* GET index page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Julia Klarman Photoraphy' });
});

module.exports = router;
