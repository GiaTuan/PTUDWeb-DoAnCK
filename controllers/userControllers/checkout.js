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
var book = [];
var post = 0;
module.exports.postOrder = function(req,res,next){
    post ++;
    if(post===1)
    {
        const numberOfBooks = req.body.length;
        for(let i= 0 ; i < numberOfBooks ; i++)
        {
            book.push(req.body[i]);
        }
    }
    if(post===2)
    {
        const tenkhachhang =req.body.name;
        const diachi = req.body.addr;
        const sdt = req.body.phone;
        const payment = req.body.payment;
        ;(async () => {
            const client = await pool.connect();
            try {
                for(let i = 0 ; i< book.length ; i++)
                {
                    const user = req.user;
                    const bookid = book[i].id;
                    const qty = book[i].qty;
                    const total = book[i].price* parseInt(qty);
                    const date =  new Date();
                    const dd = date.getDate();
                    const mm = date.getMonth()+1;
                    const yyyy = date.getFullYear();
                    const fullDate = mm + "/" + dd + "/" + yyyy;
                    const state = "chưa thanh toán"
                    const bookname = book[i].name;
                    console.log("INSERT INTO \"Order\" VALUES ('"+user +"','" + book +"','" + qty +"','" + total +"','" + fullDate  +"')");
                    await client.query("INSERT INTO \"Order\" VALUES ('"+user +"','" + bookid +"','" + qty +"','" + total +"','" + fullDate +"','" + state +"','" + bookname +"','" + diachi +"','" + sdt +"','" + payment +"','" + tenkhachhang +"')");     
                   
                }
                book = [];
                post = 0;     
                res.render('user/checkout-done',{username: req.user,isLogin: req.isAuthenticated()});
            } finally {
            client.release()
            }
        })().catch(err => next(err))
    }
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