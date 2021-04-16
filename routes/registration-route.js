var express = require('express');
var router = express.Router();
var db = require('../database');

router.get('/register', function(request, response, next) {
    response.render('registration-form');
});

router.post('/register', function(request, response, next) {
    
        var FirstName= request.body.FirstName;
        var LastName= request.body.LastName;
        var Email= request.body.Email;
        var Gender= request.body.Gender;
        var Password= request.body.Password;
        var confirm_password= request.body.confirm_password;
        
// check unique email address
db.query=`SELECT * FROM "Voyage_Safety"."User" WHERE "Email" = '`+Email+`'`,function (err, res) {
  if(res.rows[0]){
      var msg = Email + "was already exist";
  }else if(confirm_password != Password){
      var msg ="Password & Confirm Password is not Matched";
  }else{ 
    // save users data into database
db.query = `INSERT INTO insert into "Voyage_Safety"."User" values (FirstName, LastName, CitizenId, Gender ,DateOfBirth,Email ,Password,TelNo)`, function(err,res){
  if (err) throw err;
    }
  var msg ="You are successfully registered";
  response.end();
 }
  response.render('registration-form',{alertMsg:msg});
 response.end();
}
});
module.exports = router;