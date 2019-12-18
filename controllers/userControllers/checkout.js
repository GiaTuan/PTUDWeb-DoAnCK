var pool = require('../../connection.js');
module.exports.getOrder = function(req, res, next) {
    if(req.isAuthenticated())
    {
        ;(async () => {
        const client = await pool.connect();
        try {
            const result = await client.query('SELECT * FROM "Users" WHERE "account"=' + '\'' +  req.user+'\'');   
            res.render('user/checkout',{user: result,username: req.user,isLogin: req.isAuthenticated()});
        } finally {
        client.release()
        }
    })().catch(err => next(err))
    }
    else
    {
        res.redirect('/login');
    }  
  
}

module.exports.postOrder = function(req,res,next){

   const book = [];
    const numberOfBooks = req.body.length;
    for(let i= 0 ; i < numberOfBooks ; i++)
    {
        book.push(req.body[i]);
    }
    if(book.length > 0)
    {
        console.log(book[0].name);
        console.log(book[0].qty);
        console.log(getTotal(book));
    }
    res.render('user/confirm-checkout',{username: req.user,isLogin: req.isAuthenticated()});
}

function getTotal(items){

    const length = items.length;
    let res = 0;
    for(let i = 0 ; i< length ; i++)
    {
        res += parseFloat(items[i].price)*parseInt(items[i].qty);
    }
    return res;

}