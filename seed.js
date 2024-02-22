const mongoose = require("mongoose");
const Book = require("./models/book"); 


const MONGO_URL ='mongodb+srv://AniketK07:1234@cluster0.bdhga.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongoose Connected") ;
  })
  .catch((error) => console.log(`${error} did not connect`));

const booksData = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    isbn: "9780743273565",
    price: 10.99,
    description: "A novel about the American Dream.",
    image: "https://example.com/great-gatsby.jpg",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    isbn: "9780061120084",
    price: 12.99,
    description: "A novel set in the American South.",
    image: "https://example.com/to-kill-a-mockingbird.jpg",
  },
 
];


async function seedBooks() {
  try {
    // await Book.deleteMany({});
    

    await Book.insertMany(booksData);
    
    console.log("Books seeded successfully.");
  } catch (error) {
    console.error("Error seeding books:", error);
  } 
}
seedBooks();
