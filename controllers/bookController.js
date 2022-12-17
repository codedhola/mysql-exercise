const Book = require("./../model/bookModel")

const getAllBooks = async (req, res) => {
  try {
    
    const response = await Book.findAll()
    console.log(response)
    res.writeHead(200, { "Content-Type": "application/json"})
         .end(JSON.stringify({ 
          status: "Success",
          result: response
         }))

  } catch (err) {
    console.log(err);
  }
};

const getBookById = async (req, res, id) => {
  const query = "SELECT * FROM books WHERE id = ?";

  try{
    const response = await Book.findById(id)
    res.writeHead(200, { "Content-Type": "application/json"})
         .end(JSON.stringify({ 
          status: "Success",
          result: response
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

  req.on("end", async () => {
    let parseBody = JSON.parse(bodyData)
    parseBody = JSON.parse(parseBody)

    let book = new Book(parseBody.name, parseBody.author, parseBody.genre, parseBody.price)

   const response = await book.save()
    try{
      res.writeHead(200, { "Content-Type": "application/json"})
         .end(JSON.stringify({ 
          status: "Success",
          result: response
         }))
    }catch(err){
      res.writeHead(400, { "Content-Type": "application/json"})
         .end(JSON.stringify({ 
          status: "Failed",
          result: "Loading"
         }))
    }
  });
};

const editABook = async (req, res, id) => {
  let bodyData = "";
  req.on("data", (chunks) => {
    bodyData += JSON.stringify(chunks.toString());
  });

  req.on("end", async () => {
    const body = JSON.parse(bodyData);
    const data = JSON.parse(body);

    const response = await Book.EditBook(id, data)
    console.log(response)
    try{
      res.writeHead(200, { "Content-Type": "application/json"})
         .end(JSON.stringify({ 
          status: "Success",
          result: response
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

    try{
      const response = await Book.deleteBook(id)
      res.writeHead(200, { "Content-Type": "application/json"})
         .end(JSON.stringify({ 
          "status": "Success",
          "result": response
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
