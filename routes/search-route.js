var express = require('express');
var app = express();
var router = express.Router();
var db = require('../database');

//Return home page when root('/') is requsted
router.get('/dashboard', function(request, response, next) {
    response.render('search');
});

// app.get('/search', function(req, res){ //GET method to access DB and return results in JSON
//   db.query(`SELECT "Email" FROM "Voyage_Safety"."User" WHERE "Email" Like '%`+Email+`%'`, function(err,res){
//     if(err) throw err;
//     var data = [];
//     for(i=0;i<rows.length;i++){
//       data.push(rows[i].product);
//     }
//     res.end(JSON.stringify(data));
//   });
// });

router.post('/search', function(request, response){ //POST method to access DB and return results in JSON
    var Email = request.body.input;
    db.query(`SELECT "Email" FROM "Voyage_Safety"."User" WHERE "Email" Like '%`+Email+`%'`, function(err,res){
        console.log(res.rows.length);
        if(err) throw err;
      
      var data = [];
      for(i=0;i<res.rows.length;i++){
        data.push(res.rows[i]);
      }
      console.log(data);
      //res.render('search',{alertMsg:"Your Email Address or password is wrong"});
    //   res.end(JSON.stringify(data));
    //  console.log(req.params.input);
    });
  });



module.exports = router;