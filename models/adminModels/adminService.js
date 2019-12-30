const pool = require('../../connection')
const passport = require('passport');
const bcrypt = require('bcryptjs');


module.exports.getAdmin = async (user)=>{
    const client = await pool.connect();
    try {
        const result = await client.query('SELECT adname FROM "Admin" ');
        let isAdmin;
        for(let i = 0 ; i< result.rows.length; i++)
        {
            if(result.rows[i].adname === user)
            {
                isAdmin = true;  
                break;
            }
        }
        client.release();
        return isAdmin;
    } 
    catch(err)
    {
        console.log(err);
    }
}


module.exports.postSignUp = function(req,res,next){
    pool.connect(function(err, client, done){  
        client.query('SELECT adname FROM "Admin"  WHERE "adname"='+ '\'' + req.body.username +'\' OR' + '"email"='+ '\'' + req.body.email + '\'', function (err, result) {
            if(err){
                return console.log('error running query', err);
            }
            if(result.rows[0] !== undefined)
            {
                if(req.body.username === result.rows[0].adname)
                {
                    res.redirect('/admin/signup?announce='+'existed');
                }
                else
                {
                    res.redirect('/admin/signup?announce='+'email-existed');
                }
             }
            else
            {
                const password = req.body.password;
                const name = req.body.name;
                const email = req.body.email;
                const address = req.body.address;
                const phone = req.body.phone;
                bcrypt.genSalt(10, function(err, salt) {
                    bcrypt.hash(password, salt, function(err, hash) {
                        client.query('INSERT INTO "Admin" VALUES (' + '\'' + req.body.username+ '\',\'' +hash  + '\',\'' + email + '\',\'' + address + '\',\'' + phone + '\',\'' + name + '\');', function (err, result) {
                            done();
                            if(err){
                                return console.log('error running query', err);
                            }
                            res.redirect('/admin/signup?announce='+'success');
                        });
                    });
                }); 
            }
        });
    });
}

module.exports.getAdInfo = async (user)=>{
    const client = await pool.connect();
    try {
        const result = await client.query('SELECT * FROM "Admin"  WHERE "adname"='+ '\'' + user +'\'');
        client.release();
        return result;
    } 
    catch(err)
    {
        console.log(err);
    }
}

module.exports.updateAdInfo =async (name,email,phone,addr,user)=>{
    const client = await pool.connect();
    try { 
        const admin = await client.query('SELECT * FROM "Admin"  WHERE "adname"='+ '\'' + user +'\'');
        let check = 1;
        if(email !== admin.rows[0].email)
        {
            const checkEmail = await client.query('SELECT * FROM "Admin"  WHERE "email"='+ '\'' + email +'\'');
            if(checkEmail.rows.length > 0)
            {
                check = -1;
            }
        }
        if(check === -1)
        {
            const result = await client.query('SELECT * FROM "Admin"  WHERE "adname"='+ '\'' + user +'\'');
            client.release();
            return [-1,result];
        }
        else
        {
            await client.query("UPDATE \"Admin\" SET \"name\" ='" + name + '\',"email"=\''+ email + '\',"address"=\''+ addr + '\',"phone"=\''+ phone + '\' WHERE "adname"=' + '\'' + user +'\'');      
            const result = await client.query('SELECT * FROM "Admin"  WHERE "adname"='+ '\'' + user +'\'');
            client.release();
            return [1,result];
        }
        
    }
    catch(err)
    {
        console.log(err);
    } 
}


module.exports.getUsers = async (page,numbersOfUsersPerPage)=>{
    const client = await pool.connect();
    try 
    {
        const result = await client.query('SELECT * FROM "Users" ');
        const numbersOfUsers = result.rows.length;
        const numbersOfPages = parseInt(numbersOfUsers/numbersOfUsersPerPage)+(numbersOfUsers%numbersOfUsersPerPage === 0 ? 0 : 1);
        const result2 = await client.query('SELECT * FROM "Users"'+'LIMIT ' +numbersOfUsersPerPage.toString() + ' OFFSET ' + ((page-1)*numbersOfUsersPerPage).toString());
        client.release();
        return [result2,numbersOfPages];
    }
    catch(err)
    {
        console.log(err);
    }
}

module.exports.getUserDetail =async (user) =>{
    const client = await pool.connect();
    try {
        const result = await client.query('SELECT * FROM "Users" WHERE "account" = \'' + user + "'");
        client.release();
        let isActive = false;
        if(result.rows[0].state === "hoạt động")
        {
            isActive = true;
        }
        return [result,isActive];
    }
    catch(err)
    {
        console.log(err);
    }
}


module.exports.activateUser =async (id,activation) =>
{
    const client = await pool.connect();
    try {
        if(activation === "Khóa tài khoản")
        {
            await client.query('UPDATE  "Users" SET "state"=\'khóa\' WHERE "account" = \'' + id + "'");
        }
        else
        {
            await client.query('UPDATE  "Users" SET "state"=\'hoạt động\' WHERE "account" = \'' + id + "'");
        }
        const result = await client.query('SELECT * FROM "Users" WHERE "account" = \'' + id + "'");
        client.release();
        let isActive = false;
        if(result.rows[0].state === "hoạt động")
        {
            isActive = true;
        }
        return [result,isActive];
    }
    catch(err)
    {
        console.log(err);
    }
    
}

module.exports.getOrders= async () =>{
    const client = await pool.connect();
    try 
    {   
        const result = await client.query('SELECT * FROM "Order" where "id" != 1 ');
        console.log(result);
        client.release();
        return result;
    } 
    catch(err)
    {
        console.log(err);
    }
}

module.exports.getOrderDetail =async (id) =>{
    const client = await pool.connect();
    try {
        const result = await client.query('SELECT * FROM "Order" WHERE "id" = \'' + id + "'");
        client.release();
        return result;        
    } 
    catch(err)
    {
        console.log(err);
    }
}

module.exports.changeOrderState = async (state,id) =>{
    const client = await pool.connect();
    try {
        await client.query('UPDATE  "Order" SET "state"='+'\''+ state +'\''+' WHERE "id" ='+ id);
        const result = await client.query('SELECT * FROM "Order" WHERE "id" = ' + id);
        client.release();
        return result;
    } 
    catch(err)
    {
        console.log(err);
    }
}

module.exports.manageShop = async(page,numbersOfBooksPerPage)=>{
    const client = await pool.connect();
    try {
        const result = await client.query('SELECT * FROM "Books" ');
        if(page== undefined)
        {
            page=1;
        }
        const numbersOfBooks = result.rows.length;
        const numbersOfPages = parseInt(numbersOfBooks/numbersOfBooksPerPage)+(numbersOfBooks%numbersOfBooksPerPage === 0 ? 0 : 1);
        const result2 = await client.query('SELECT * FROM "Books"'+'LIMIT ' +numbersOfBooksPerPage.toString() + ' OFFSET ' + ((page-1)*numbersOfBooksPerPage).toString());
        client.release();
        return [result2,numbersOfPages];
    }
    catch(err)
    {
        console.log(err);
    } 
}