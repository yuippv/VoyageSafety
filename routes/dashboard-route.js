const { json } = require('express');
var express = require('express');
var router = express.Router();
var db = require('../database');



router.get('/dashboard', function(request, response) {
    const query = {
        text: `SELECT * FROM "Voyage_Safety"."User";`,
        
      }
    if(request.session.loggedin){
        //response.render('dashboard',{email:request.session.Email});
        db.query(query, function(err,res){
            if(err) throw err;
            
        //   var data = [];
        //   for(i=0;i<res.rows.length;i++){
        //     data.push(res.rows[i]);
        //   }
          response.render('dashboard.ejs',{email:request.session.Email,data:res.rows});
        });
        
    }else{
        response.redirect('/login');
    }
});
module.exports = router;