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
console.log('Database is connected successfully');
//pool.end();
module.exports = pool;