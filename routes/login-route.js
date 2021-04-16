var express = require('express');
var router = express.Router();
var db = require('../database');

router.get('/login', function(request, response, next) {
    response.render('login-form');
  });
router.post('/auth', function(request, response){
    var Email = request.body.Email;
    var Password = request.body.Password;
        db.query(`SELECT "Email" ,"Password" FROM "Voyage_Safety"."User" WHERE "Email" = '`+Email+`' AND "Password" = '`+Password+`'`, function(err,res) {
            if(err) throw err
            if(res.rows[0]){
                request.session.loggedin= true;
                request.session.Email= Email;
                response.redirect('/dashboard');
            }else{
                response.render('login-form',{alertMsg:"Your Email Address or password is wrong"});
            }
            response.end();
        })
  })
  module.exports = router;
  