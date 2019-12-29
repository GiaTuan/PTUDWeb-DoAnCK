const pool = require('../../connection');
module.exports.getType= function(req, res, next) {
  ;(async () => {
    const client = await pool.connect();
    try {
        let type = req.params.id
        const search = req.query.search;
        const page = req.query.page;
        const sort = req.query.sort;

        type = getTypeName(type);
        let where = "WHERE \"Type\"= '"+ type + '\'' ;
        
        if(search !== undefined)
        {
            where +=" AND \"BookName\" LIKE " + '\'%' + search + '%\'';
        }
        
        const result = await client.query('SELECT * FROM "Books" ' + where );

        const numbersOfBooksPerPage = 6;
        const numbersOfBooks = result.rows.length;
        const numbersOfPages = parseInt(numbersOfBooks/numbersOfBooksPerPage)+(numbersOfBooks%numbersOfBooksPerPage === 0 ? 0 : 1);
        
        let queryString;
        if(sort === undefined)
        {
            queryString= 'SELECT * FROM "Books" ' + where +' LIMIT ' +numbersOfBooksPerPage.toString() + ' OFFSET ' + ((page-1)*numbersOfBooksPerPage).toString();
        }
        else if(sort === 'asc')
        {
          queryString= 'SELECT * FROM "Books" ' + where +'ORDER BY "Price" ASC LIMIT ' +numbersOfBooksPerPage.toString() + ' OFFSET ' + ((page-1)*numbersOfBooksPerPage).toString();
        }
        else if(sort === 'desc')
        {
          queryString= 'SELECT * FROM "Books" ' + where +'ORDER BY "Price" DESC LIMIT ' +numbersOfBooksPerPage.toString() + ' OFFSET ' + ((page-1)*numbersOfBooksPerPage).toString();
        }

        const result2 = await client.query(queryString);
        res.render('user/shop',{danhsach: result2 , username: req.user,numbersOfPages,isLogin: req.isAuthenticated()});
    } finally {
        client.release()
    }
  })().catch(err => next(err))
}

function getTypeName(type)
{
  if(type === 'TieuThuyet')
  {
    type = 'Tiểu thuyết';
  }
  if(type === 'TuTruyen')
  {
    type = 'Tự truyện';
  }
  if(type === 'VanHoc')
  {
    type = 'Văn học';
  }
    return type;
}