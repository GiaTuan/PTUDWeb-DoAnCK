var pool=require('../../connection.js');

module.exports.getOrder = async(user)=>
{
    const client = await pool.connect();
    try {
        const result = await client.query('SELECT * FROM "Users" WHERE "account"=' + '\'' + user+'\'');   
        await client.release();
        return result;
    
    }
    catch(err)
    {
        console.log(err);
    } 
}

module.exports.postOrder = async (user,tenkhachhang,diachi,sdt,payment,book) =>{
    const client = await pool.connect();
    try {
        for(let i = 0 ; i< book.length ; i++)
        {
        
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
            await client.query("INSERT INTO \"Order\" VALUES ('"+user +"','" + bookid +"','" + qty +"','" + total +"','" + fullDate +"','" + state +"','" + bookname +"','" + diachi +"','" + sdt +"','" + payment +"','" + tenkhachhang +"')");     
            await client.release();
        }
    }
    catch(err)
    {
        console.log(err);
    }
}