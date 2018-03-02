var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');

router.get('/', function(req, res, next) {
  res.render('list');
});

router.get('/create', function(req, res, next) {
   res.render('create');
});

router.post('/create', function(req, res, next) {
   res.send('veri alındı');
});

router.get('/delete', function(req, res, next){
   res.send('kullanıcı silindi');
});

module.exports = router;
