var express = require('express');
var router = express.Router();
var db = require('../database');

router.get('/register', function (request, response, next) {
  response.render('registration-form');
});

router.post('/register', function (request, response, next) {

  var FirstName = request.body.FirstName;
  var LastName = request.body.LastName;
  var CitizenId = request.body.CitizenId;
  var Email = request.body.Email;
  var DateOfBirth = request.body.DateOfBirth;
  var Gender = request.body.Gender;
  var Password = request.body.Password;
  var confirm_password = request.body.confirm_password;
  var Phone = request.body.Phone;

  db.query(`SELECT 'Email' FROM "Voyage_Safety"."User" WHERE "Email" = '` + Email + `'`, (err, res) => {

    if (res.rows[0]) {
      console.log(res.rows);
      var msg = Email + "was already exist";
      response.render('registration-form', { alertMsg: msg });
      response.end();
    } else if (confirm_password != Password) {
      var msg = "Password & Confirm Password is not Matched";
      response.render('registration-form', { alertMsg: msg });
      response.end();
    } else {
      const sdbm = str => {
        let arr = str.split('');
        return arr.reduce(
          (hashCode, currentVal) =>
            (hashCode = currentVal.charCodeAt(0) + (hashCode << 6) + (hashCode << 16) - hashCode),
          0
        );
      };

      var userId = Math.abs(sdbm(FirstName + LastName));
      // save users data into database
      db.query(`BEGIN`);
      db.query(
        `INSERT INTO "Voyage_Safety"."User" values ('` + userId + `','` + FirstName + `','` + LastName + `','` + CitizenId + `','` + Gender + `','` + DateOfBirth + `','` + Email + `','` + Password + `','` + Phone + `','true')`,
        (err, res) => {

          console.log(res);
          var msg = "You are successfully registered";
          response.render('registration-form', { alertMsg: msg });
          response.end();
        }
      );
      db.query(`COMMIT`);
    }
  })
});
module.exports = router;