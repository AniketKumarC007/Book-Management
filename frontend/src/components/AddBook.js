
import {
  Button,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    author: "",
    isbn: "",
    price: "",
    description: "",
    image: "Random Image URL",
  });
  const [checked, setChecked] = useState(false);
  const [err, setErr] = useState(null);
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    setErr(null);
  };

  const sendRequest = async () => {
    try{
      await axios
      .post("http://localhost:5000/books", {
        title: String(inputs.name),
        author: String(inputs.author),
        isbn: String(inputs.isbn),
        description: String(inputs.description),
        price: Number(inputs.price),
        image: String(inputs.image),
        available: Boolean(checked),
      })
      // .then((res) => res.data);
      setErr(null); 
      history("/books");
    } 
    catch(error){
      console.log ("In here") ;
      // console.log() ;
      
      console.log (error.response.data.error || 'An error occurred') ;
      setErr(error.response.data.error || 'An error occurred') ;
    }
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // sendRequest().then(() => history("/books"));
    sendRequest();
  };

  return (
    <form onSubmit={handleSubmit} >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent={"center"}
        maxWidth={400}
        margin="auto"
        marginTop={10}
        padding={3}
        border="1px solid #ccc"
        borderRadius={8}
        boxShadow="0 2px 5px rgba(0, 0, 0, 0.1)"
        backgroundColor="#fff"
        
      >
        <Typography variant="h5" gutterBottom>
          Add New Book
        </Typography>
        <TextField
          value={inputs.name}
          onChange={handleChange}
          label="Name"
          margin="normal"
          variant="outlined"
          name="name"
        />
        <TextField
          value={inputs.author}
          onChange={handleChange}
          label="Author"
          margin="normal"
          variant="outlined"
          name="author"
        />
        <TextField
          value={inputs.isbn}
          onChange={handleChange}
          label="ISBN"
          margin="normal"
          variant="outlined"
          name="isbn"
        />
        <TextField
          value={inputs.description}
          onChange={handleChange}
          label="Description"
          margin="normal"
          variant="outlined"
          name="description"
          multiline
          rows={4}
        />
        <TextField
          value={inputs.price}
          onChange={handleChange}
          label="Price"
          type="number"
          margin="normal"
          variant="outlined"
          name="price"
        />
        {err && (
          <Typography variant="body2" color="error" marginTop={1}>
            {err}
          </Typography>
        )}
        <Button variant="contained" type="submit" color="primary" size="large">
          Add Book
        </Button>
        
      </Box>
    </form>
  );
};

export default AddBook;
