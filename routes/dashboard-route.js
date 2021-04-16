var express = require('express');
var router = express.Router();

router.get('/dashboard', function(request, response) {
    if(request.session.loggedin){
        response.render('dashboard',{email:request.session.Email})
    }else{
        response.redirect('/login');
    }
});
module.exports = router;