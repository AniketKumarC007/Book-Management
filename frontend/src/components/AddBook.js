// import {
//   Button,
//   Checkbox,
//   FormControlLabel,
//   FormLabel,
//   TextField,
//   Typography,
// } from "@mui/material";
// import { Box } from "@mui/system";
// import axios from "axios";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const AddBook = () => {
//   const history = useNavigate();
//   const [inputs, setInputs] = useState({
//     name: "",
//     author: "",
//     isbn:"",
//     price: "",
//     description: "",
//     image: "Random Image URL",
//   });
//   const [checked, setChecked] = useState(false);
//   const handleChange = (e) => {
//     setInputs((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }));
//     // console.log(e.target.name, "Value", e.target.value);
//   };

//   const sendRequest = async () => {
//     await axios
//       .post("http://localhost:5000/books", {
//         title: String(inputs.name),
//         author: String(inputs.author),
//         isbn: String(inputs.isbn),
//         description: String(inputs.description),
//         price: Number(inputs.price),
//         image: String(inputs.image),
//         available: Boolean(checked),
//       })
//       .then((res) => res.data);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(inputs, checked);
//     sendRequest().then(() => history("/books"));
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <Box
//         display="flex"
//         flexDirection="column"
//         justifyContent={"center"}
//         maxWidth={700}
//         alignContent={"center"}
//         alignSelf="center"
//         marginLeft={"auto"}
//         marginRight="auto"
//         marginTop={10}
//       >
//         <FormLabel>Name</FormLabel>
//         <TextField
//           value={inputs.name}
//           onChange={handleChange}
//           margin="normal"
//           fullWidth
//           variant="outlined"
//           name="name"
//         />
//         <FormLabel>Author</FormLabel>
//         <TextField
//           value={inputs.author}
//           onChange={handleChange}
//           margin="normal"
//           fullWidth
//           variant="outlined"
//           name="author"
//         />
//         <FormLabel>ISBN</FormLabel>
//         <TextField
//           value={inputs.isbn}
//           onChange={handleChange}
//           margin="normal"
//           fullWidth
//           variant="outlined"
//           name="isbn"
//         />
//         <FormLabel>Description</FormLabel>
//         <TextField
//           value={inputs.description}
//           onChange={handleChange}
//           margin="normal"
//           fullWidth
//           variant="outlined"
//           name="description"
//         />
//         <FormLabel>Price</FormLabel>
//         <TextField
//           value={inputs.price}
//           onChange={handleChange}
//           type="number"
//           margin="normal"
//           fullWidth
//           variant="outlined"
//           name="price"
//         />
//         {/* <FormLabel>Image</FormLabel>
//         <TextField
//           value={inputs.image}
//           onChange={handleChange}
//           margin="normal"
//           fullWidth
//           variant="outlined"
//           name="image"
//         /> */}
        

//         <Button variant="contained" type="submit">
//           Add Book
//         </Button>
//       </Box>
//     </form>
//   );
// };

// export default AddBook;
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
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
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async () => {
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
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/books"));
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
        <Button variant="contained" type="submit" color="primary" size="large">
          Add Book
        </Button>
      </Box>
    </form>
  );
};

export default AddBook;
