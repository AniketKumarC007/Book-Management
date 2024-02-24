import {
  Box,
  Button,
  FormControlLabel,
  FormLabel,
  TextField,
  Typography
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BookDetail = () => {
  const [inputs, setInputs] = useState();
  const [err, setErr] = useState(null);
  const id = useParams().id;
 
  const history = useNavigate();
  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/books/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.book));
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    try{
      await axios
      .put(`http://localhost:5000/books/${id}`, {
        title: String(inputs.name),
        author: String(inputs.author),
        isbn:  String(inputs.isbn),
        description: String(inputs.description),
        price: Number(inputs.price),
        image: String(inputs.image),
      })
      // .then((res) => res.data);
      setErr(null); 
      history("/books");
    }
    catch(error){
      console.log ("In here") ;
      console.log (error.response.data.error || 'An error occurred') ;
      setErr(error.response.data.error || 'An error occurred') ;
    }
    
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // sendRequest().then(() => history("/books"));
    sendRequest();
  };
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    setErr(null);
  };

  return (
    <div>
      {inputs && (
        <form onSubmit={handleSubmit}>
         
          <Box
            display="flex"
            flexDirection="column"
            justifyContent={"center"}
            maxWidth={400}
            margin="auto"
            marginTop={5}
            padding={3}
            border="1px solid #ccc"
            borderRadius={8}
            boxShadow="0 2px 5px rgba(0, 0, 0, 0.1)"
            backgroundColor="#fff"
          >
          
            <FormLabel>Name</FormLabel>
            <TextField
              value={inputs.name}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="name"
            />
            <FormLabel>Author</FormLabel>
            <TextField
              value={inputs.author}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="author"
            />
            <FormLabel>ISBN</FormLabel>
            <TextField
              value={inputs.isbn}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="isbn"
            />
            <FormLabel>Description</FormLabel>
            <TextField
              value={inputs.description}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="description"
            />
            <FormLabel>Price</FormLabel>
            <TextField
              value={inputs.price}
              onChange={handleChange}
              type="number"
              margin="normal"
              fullWidth
              variant="outlined"
              name="price"
            />
            {/* <FormLabel>Image</FormLabel>
            <TextField
              value={inputs.image}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="image"
            /> */}
            
            {err && (
          <Typography variant="body2" color="error" marginTop={1}>
            {err}
          </Typography>
        )}
            <Button variant="contained" type="submit">
              Update Book
            </Button>
          </Box>
        </form>
      )}
    </div>
  );
};

export default BookDetail;
