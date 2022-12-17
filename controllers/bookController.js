const Book = require("./../model/bookModel")

const getAllBooks = async (req, res) => {
  try {
    const query = "SELECT * FROM books";
  } catch (err) {
    console.log(err);
  }
};

const getBookById = async (req, res, id) => {
  const query = "SELECT * FROM books WHERE id = ?";

  try{
    res.writeHead(200, { "Content-Type": "application/json"})
       .end(JSON.stringify({ 
        "status": "Success",
        "result": "Loading"
       }))
  }catch(err){
    res.writeHead(400, { "Content-Type": "application/json"})
       .end(JSON.stringify({ 
        "status": "Failed",
        "result": "Loading"
       }))
  }
};

const postABook = async (req, res) => {
  let bodyData = "";
  req.on("data", (chunks) => {
    bodyData += JSON.stringify(chunks.toString());
  });

  req.on("end", () => {
    let parseBody = JSON.parse(bodyData)
    parseBody = JSON.parse(parseBody)

    let book = new Book(parseBody.name, parseBody.author, parseBody.genre, parseBody.price)

    book.save()
    console.log(book)
    try{
      res.writeHead(200, { "Content-Type": "application/json"})
         .end(JSON.stringify({ 
          "status": "Success",
          "result": "Loading"
         }))
    }catch(err){
      res.writeHead(400, { "Content-Type": "application/json"})
         .end(JSON.stringify({ 
          "status": "Failed",
          "result": "Loading"
         }))
    }
  });
};

const editABook = async (req, res, id) => {
  let bodyData = "";
  req.on("data", (chunks) => {
    bodyData += JSON.stringify(chunks.toString());
  });

  req.on("end", () => {
    const body = JSON.parse(bodyData);
    const data = JSON.parse(body);


    const query = "UPDATE books SET ? WHERE id = ?";

    try{
      res.writeHead(200, { "Content-Type": "application/json"})
         .end(JSON.stringify({ 
          "status": "Success",
          "result": "Loading"
         }))
    }catch(err){
      res.writeHead(400, { "Content-Type": "application/json"})
         .end(JSON.stringify({ 
          "status": "Failed",
          "result": "Loading"
         }))
    }
  });
};

const deleteBookById = async (req, res, id) => {
    const query = "DELETE FROM books WHERE id = ?";

    try{
      res.writeHead(200, { "Content-Type": "application/json"})
         .end(JSON.stringify({ 
          "status": "Success",
          "result": "Loading"
         }))
    }catch(err){
      res.writeHead(400, { "Content-Type": "application/json"})
         .end(JSON.stringify({ 
          "status": "Failed",
          "result": "Loading"
         }))
    }
  };

module.exports = {
  getAllBooks,
  getBookById,
  postABook,
  editABook,
  deleteBookById,
};
