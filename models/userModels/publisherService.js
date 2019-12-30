var pool = require('../../connection.js');

module.exports.getPublisher = async (publisher,search,page,sort,numbersOfBooksPerPage) => {
      const client = await pool.connect();
      try {

          publisher = getPublisherName(publisher);
          
          let where = "WHERE \"Publisher\"= '"+ publisher + '\'' ;
          if(search !== undefined)
          {
              where +=" AND \"BookName\" LIKE " + '\'%' + search + '%\'';
          }
          
          const result = await client.query('SELECT * FROM "Books" ' + where );

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
          await client.release();
          return [result2,numbersOfPages];
      } 
      catch(err)
      {
        console.log(err);
      }
}

function getPublisherName(publisher)
{
    if(publisher === 'NXB-HNV')
      {
        publisher = 'Nhà Xuất Bản Hội Nhà Văn';
      }
      if(publisher === 'NXB-LaoDong')
      {
        publisher = 'Nhà Xuất Bản Lao Động';
      }
      if(publisher === 'NXB-TH')
      {
        publisher = 'Nhà Xuất Bản Tổng hợp TP.HCM';
      }
      if(publisher === 'NXB-TheGioi')
      {
        publisher = 'Nhà Xuất Bản Thế Giới';
      }
      if(publisher === 'NXB-Tre')
      {
        publisher = 'Nhà Xuất Bản Trẻ';
      }
      if(publisher === 'NXB-TriThuc')
      {
        publisher = 'Nhà Xuất Bản Tri Thức';
      }
      if(publisher === 'NXB-NhaNam')
      {
        publisher = 'Nhã Nam';
      }
      return publisher;
}