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
      image: "https://example.com/great-gatsby.jpg"
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      isbn: "9780061120084",
      price: 12.99,
      description: "A novel set in the American South.",
      image: "https://example.com/to-kill-a-mockingbird.jpg"
    },
    {
      title: "1984",
      author: "George Orwell",
      isbn: "9780451524935",
      price: 9.99,
      description: "A dystopian novel.",
      image: "https://example.com/1984.jpg"
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      isbn: "9780316769488",
      price: 8.99,
      description: "A coming-of-age novel.",
      image: "https://example.com/catcher-in-the-rye.jpg"
    },
    {
      title: "Moby-Dick",
      author: "Herman Melville",
      isbn: "9781853260087",
      price: 11.99,
      description: "A tale of the sea.",
      image: "https://example.com/moby-dick.jpg"
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      isbn: "9780141439518",
      price: 7.99,
      description: "A classic romance novel.",
      image: "https://example.com/pride-and-prejudice.jpg"
    },
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      isbn: "9780547928227",
      price: 14.99,
      description: "A fantasy adventure novel.",
      image: "https://example.com/the-hobbit.jpg"
    },
    {
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      isbn: "9780261103252",
      price: 29.99,
      description: "An epic fantasy series.",
      image: "https://example.com/the-lord-of-the-rings.jpg"
    },
    {
      title: "The Hunger Games",
      author: "Suzanne Collins",
      isbn: "9780439023481",
      price: 10.49,
      description: "A dystopian adventure novel.",
      image: "https://example.com/the-hunger-games.jpg"
    },
    {
      title: "Harry Potter and the Philosopher's Stone",
      author: "J.K. Rowling",
      isbn: "9780747532743",
      price: 15.99,
      description: "The first book in the Harry Potter series.",
      image: "https://example.com/harry-potter-and-the-philosophers-stone.jpg"
    }
  ];
  


async function seedBooks() {
  try {
    await Book.deleteMany({});
    

    await Book.insertMany(booksData);
    
    console.log("Books seeded successfully.");
  } catch (error) {
    console.error("Error seeding books:", error);
  } 
}
seedBooks();
