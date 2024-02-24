import React, { useEffect, useState } from "react";
import "./Book.css";
import axios from "axios";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
const URL = "http://localhost:5000/books";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};



const Books = () => {
  const [books, setBooks] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.books));
  }, []);
  // console.log(books);
  const Book = (props) => {
    const { _id, title, author,isbn, description, price, image } = props.book;
    const deleteHandler = async () => {
      await axios
        .delete(`http://localhost:5000/books/${_id}`)
        .then(()=>{
          fetchHandler().then((data) => setBooks(data.books));
        })
        .catch(error => {
          console.error('Error deleting book:', error);
        });
    };
  
   
  
  
    return (
      <div className="card">
        
        <h3 style={{ marginBottom: '8px' }}>{title}</h3>
        <article style={{ marginBottom: '8px' }}>By {author}</article>
        <p style={{ marginBottom: '8px' }}>{description}</p>
        <h3 style={{ marginBottom: '8px' }}>Rs {price}</h3>
        <p> <b>ISBN</b> {isbn}</p>  
        <Button className="update-button" LinkComponent={Link} to={`/books/${_id}`} sx={{ mt: "auto" }}>
          Update
        </Button>
        <Button className="delete-button" color="error" onClick={deleteHandler} sx={{ mt: "auto" }}>
          Delete
        </Button>
      </div>
    );
  };
  return (
    <div>
      <ul>
        {books &&
          books.map((book, i) => (
            <li key={i}>
              <Book book={book} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Books;
