var pool = require('../../connection.js');
module.exports.getIndex = async () =>{
    const client = await pool.connect();
    try{
      const result1 = await client.query('SELECT * FROM "RecommendBooks"');
      const result2 = await client.query('SELECT * FROM "FavoriteBooks"');
      await client.release();
      return [result1,result2];
    }
    catch(err)
    {
      console.log(err);
    }
}