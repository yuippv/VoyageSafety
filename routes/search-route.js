var express = require('express');
var app = express();
var router = express.Router();
var db = require('../database');


router.post('/search', function(request, response){ //POST method to access DB and return results in JSON
    var Email = request.body.input;
    db.query(`SELECT "Email" FROM "Voyage_Safety"."User" WHERE "Email" Like '%`+Email+`%'`, function(err,res){
      response.render('dashboard',{email:request.session.Email,data:res.rows});
    });
  });



module.exports = router;