var pool= require('../../connection.js');

module.exports.getShop =async (search,page,sort,numbersOfBooksPerPage) => {
        const client = await pool.connect();
        try {
            let where = "";
            if(search !== undefined)
            {
                where = "WHERE \"BookName\" LIKE " + '\'%' + search + '%\'';
            }

            const result = await client.query("SELECT * FROM \"Books\" " + where);

            const numbersOfBooks = result.rows.length;
            const numbersOfPages = parseInt(numbersOfBooks/numbersOfBooksPerPage)+(numbersOfBooks%numbersOfBooksPerPage === 0 ? 0 : 1);
        

            let queryString;

            if(sort === 'asc')
            {
                queryString= 'SELECT * FROM "Books" ' + where + ' ORDER BY "Price" ASC '+'LIMIT ' +numbersOfBooksPerPage.toString() + ' OFFSET ' + ((page-1)*numbersOfBooksPerPage).toString();
            }
            else if(sort === 'desc')
            {
                queryString= 'SELECT * FROM "Books" ' + where + ' ORDER BY "Price" DESC '+'LIMIT ' +numbersOfBooksPerPage.toString() + ' OFFSET ' + ((page-1)*numbersOfBooksPerPage).toString();
            }
            else
            {
                queryString= 'SELECT * FROM "Books" ' + where + ' ORDER BY "BookName" ASC '+'LIMIT ' +numbersOfBooksPerPage.toString() + ' OFFSET ' + ((page-1)*numbersOfBooksPerPage).toString();
            }
            const result2 = await client.query(queryString);
            await client.release();
            return [result2,numbersOfPages];
        } 
        catch(err)
        {
            console.log("Loi neeeeeeeeeeeeeeeeeeeeeee");
            console.log(err);
        }
}

module.exports.getFind = async (search,gia,theloai,lang,page,sort,numbersOfBooksPerPage)=>{
        const client = await pool.connect();
        try {
            gia = getGia(gia);
            theloai= getTheLoai(theloai);
            lang = getLang(lang);    

            let where = 'WHERE';
            let x=0;

            if(gia !== '')
            {
                where += ' "Price" '+gia ;
                x++;
            }
            if(theloai !== '')
            {
                if(x===1)
                {
                    where += " AND " 
                    x--;
                }
                where +=  ' "Type"= ' + '\'' + theloai + '\'';
                x++;
            }
            if(lang !== '')
            {
                if(x===1)
                {
                    where += " AND " 
                }
                where +=  ' "BookLanguage"= ' + '\''+ lang + '\'';
            }
            
            if(search !== undefined)
            {
                where += "AND \"BookName\" LIKE " + '\'%' + search + '%\'';
            }
            const result = await client.query('SELECT * FROM "Books" ' +where);       

            const numbersOfBooks = result.rows.length;
            const numbersOfPages = parseInt(numbersOfBooks/numbersOfBooksPerPage)+(numbersOfBooks%numbersOfBooksPerPage === 0 ? 0 : 1);
  
            let queryString;
            if(sort === 'asc')
            {
                queryString= 'SELECT * FROM "Books" ' +where+ ' ORDER BY "Price" ASC '+'LIMIT ' +numbersOfBooksPerPage.toString() + ' OFFSET ' + ((page-1)*numbersOfBooksPerPage).toString();
            }
            else if(sort === 'desc')
            {
                queryString= 'SELECT * FROM "Books" ' +where+ ' ORDER BY "Price" DESC '+'LIMIT ' +numbersOfBooksPerPage.toString() + ' OFFSET ' + ((page-1)*numbersOfBooksPerPage).toString();
            }
            else
            {
                queryString= 'SELECT * FROM "Books" ' +where+ ' ORDER BY "BookID" ASC '+'LIMIT ' +numbersOfBooksPerPage.toString() + ' OFFSET ' + ((page-1)*numbersOfBooksPerPage).toString();
            }
  
            const result2 = await client.query(queryString);
            client.release()
            return [result2,numbersOfPages];
        }
        catch(err)
        {
            console.log(err);
        }
}

function getGia(gia)
{
    if(gia === 'lt100')
    {
        gia = '< 100000';
    }
    else if(gia === 'gte100')
    {
        gia = '>= 100000';
    }
    return gia;
}

function getTheLoai(theloai)
{
    if(theloai === 'tieuthuyet')
    {
        theloai = 'Tiểu thuyết';
    }
    else if(theloai === 'tutruyen')
    {
        theloai = 'Tự truyện';
    }
    else if(theloai === 'vanhoc')
    {
        theloai = 'Văn học';
    }
    return theloai;

}
function getLang(lang)
{
    if(lang === 'tiengviet')
    {
        lang='Vietnamese';
    }
    else if(lang ==='ngoaingu')
    {
        lang = 'Foreign';
    }
    return lang;
}