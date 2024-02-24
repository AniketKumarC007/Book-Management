const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./routes/bookRoutes");
const app = express();
const PORT = 5000;
const MONGO_URL ='mongodb+srv://AniketK07:1234@cluster0.bdhga.mongodb.net/?retryWrites=true&w=majority'

app.use(express.json());
app.use(cors());
app.use('/books' , router) ;



mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongoose Connected") ;
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));