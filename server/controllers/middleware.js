// form validation middleware 

const validateTitle = (req, res, next) => {
    const { title } = req.body;
    if (!title) {
      console.log ("In Validate Title ") ;
      return res.status(400).json({ error: "Title is required" });
    }
    next();
  };
  const validateAuthor = (req, res, next) => {
    const { author } = req.body;
    if (!author) {
      console.log ("In Validate Title ") ;
      return res.status(400).json({ error: "Author is required" });
    }
    next();
  };
  const validateDesc = (req, res, next) => {
    const { description } = req.body;
    if (!description) {
      console.log ("In Validate Title ") ;
      return res.status(400).json({ error: "description is required" });
    }
    next();
  };
  const validatePrice = (req, res, next) => {
    const { price } = req.body;
    if (isNaN(price) || Number(price) <= 0) {
      return res.status(400).json({ error: "Price must be a number greater than 0" });
    }
    next();
  };
  
  const validateISBN = (req, res, next) => {
    let { isbn } = req.body;
    isbn = String(isbn); // Convert to string
    if (isbn.length !== 13) {
      return res.status(400).json({ error: "ISBN must be a 13-digit number" });
    }
    next();
  };
  

module.exports = {validateTitle , validateISBN, validateAuthor, validateDesc, validatePrice};