const {Pool} = require('pg')
const pool = new Pool({
  
  user: 'oaeobknbyajxuk',
  host: 'ec2-54-196-33-23.compute-1.amazonaws.com',
  database: 'de19df4ji5dnb1',
  password: '3ce67bc55d8c54e0957f6710cfa0c515078f645be082971671f6476963e3f6c4',
  port: 5432,
  ssl: {
    rejectUnauthorized: false
  }
});
pool.connect();
// pool.query = `INSERT INTO "Voyage_Safety"."User" values ('3','qqq','www','11111111','male','2020-01-01','@hotmail.co.th','111','0863799166','true')`, function(err,res){
//     if (err) throw err;
//     console.log(res);
// }


// pool.query(
//     `INSERT INTO "Voyage_Safety"."User" values ('3','qqq','www','11111111','male','2020-01-01','@hotmail.co.th','111','0863799166','true')`,
//   (err, res) => {
//       console.log(res)
//     pool.end();
//   }
// );
// var Email = 'glaa656@hotmail.co.th';
// pool.query(`SELECT 'Email' FROM "Voyage_Safety"."User" WHERE "Email" = '`+Email+`'`,(err, res) => {
//     console.log(res);
// });



  console.log(userId);

