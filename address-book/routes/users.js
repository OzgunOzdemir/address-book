var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');

router.get('/', function(req, res, next) {
  User.find(function(error, users){
      res.render('list', {userList: users});
  });
});

router.get('/create', function(req, res, next) {
   res.render('create');
});

router.post('/create', function(req, res, next) {
   new User({
   	ad: req.body.ad,
   	soyad: req.body.soyad,
   	telNo: req.body.telno 
   }).save(function(error, comment){
      res.redirect('/users');
   });
});

router.get('/delete/:id', function(req, res, next){
   User.findByIdAndRemove(req.params.id,
      function (error, next) {
         res.redirect('/users');
      });
});

module.exports = router;
