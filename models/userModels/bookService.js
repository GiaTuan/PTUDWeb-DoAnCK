var pool=require('../../connection.js');

module.exports.getByID = async (id,page)=>{
    const client = await pool.connect();
    try {
      const result = await client.query('SELECT * FROM "Books"  WHERE "BookID"=' + '\'' + id +'\'');
      const comments = await client.query('SELECT * FROM "Comment" WHERE "ID"=' + '\'' + id +'\'' );
      
      const numberOfCmts = comments.rows.length;
      const numberOfCmtsPerPage = 2;
      const numberOfPages = parseInt(numberOfCmts/numberOfCmtsPerPage)+(numberOfCmts%numberOfCmtsPerPage === 0 ? 0 : 1);

      const result2 = await client.query('SELECT * FROM "Comment"  WHERE "ID"=' + '\'' + id +'\'' +'LIMIT ' +numberOfCmtsPerPage.toString() + ' OFFSET ' + ((page-1)*numberOfCmtsPerPage).toString());
      const result3 = await client.query('SELECT * FROM "RecommendBooks"');

      await client.release();
      return [result,result2,numberOfPages,result3];
    } 
    catch(err)
    {
      console.log(err);
    }
}


module.exports.AddComment = async (BookID,user,comment) => {
    const client = await pool.connect();
    try {
        await client.query('INSERT INTO "Comment" VALUES (\''+ user + '\',\'' + comment + '\',\'' + BookID + '\');' );
        await client.release();
    } 
    catch(err)
    {
      console.log(err);
    }
} 