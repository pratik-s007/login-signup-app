import React, { useState } from "react";
import {
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Link,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const paperStyle = {
    padding: 20,
    height: "60vh",
    width: 280,
    margin: "20px auto",
  };
  const btnstyle = { margin: "8px 0" };
  const nav = useNavigate();
  // const [firstname,setFirstname]=useState('');
  // const [lastname,setLastname]=useState('');
  // const [email,setEmail]=useState('');
  // const [password,setPassword]=useState('');
  const [student, setStudent] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  // const [success,setSuccess]=useState(false);

  const onTextFieldChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  async function addUser(e) {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:3000/users`, student);
      // setSuccess(true);
      alert("Account Created Successfully !");
      nav("/welcome");
    } catch (error) {
      console.log("Something is wrong");
    }
  }

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <h2>Sign Up</h2>
        </Grid>

        <TextField
          onChange={onTextFieldChange}
          name="firstname"
          value={student.firstname}
          label="firstname"
          placeholder="Enter Firstname"
          fullWidth
          required
        />
        <br></br>
        <br></br>
        <TextField
          onChange={onTextFieldChange}
          name="lastname"
          value={student.lastname}
          label="lastname"
          placeholder="Enter Lastname"
          fullWidth
          required
        />
        <br></br>
        <br></br>
        <TextField
          onChange={onTextFieldChange}
          name="email"
          value={student.email}
          label="email"
          placeholder="Enter Email"
          fullWidth
          required
        />
        <br></br>
        <br></br>
        <TextField
          onChange={onTextFieldChange}
          name="password"
          value={student.password}
          label="Password"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
        />
        <br></br>
        <Button
          onClick={(e) => addUser(e)}
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
        >
          Sign Up
        </Button>

        <Typography>
          {" "}
          Do you have an account ?<Link onClick={() => nav("/")}>Sign In</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Signup;
