import React, { useState, useEffect } from "react";
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

const Login = () => {
  const paperStyle = {
    padding: 20,
    height: "40vh",
    width: 280,
    margin: "20px auto",
  };
  const btnstyle = { margin: "8px 0" };
  const nav = useNavigate();
  const [students, setStudents] = useState([]);
  const [emailnew, setEmail] = useState("");
  const [passwordnew, setPasswrord] = useState("");
  const [userFound, setUserFound] = useState(false);

  useEffect(() => {
    getAllUser();
  });

  async function getAllUser() {
    try {
      const studs = await axios.get(`http://localhost:3000/users`);
      setStudents(studs.data);
    } catch (error) {
      console.log("Something is wrong");
    }
  }

  const onEmailFieldChange = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordFieldChange = (e) => {
    setPasswrord(e.target.value);
  };

  const validateUser = () => {
    const success = students.some(
      (ele) => ele.email === emailnew && ele.password === passwordnew
    );
    setUserFound(success);
    if (userFound) {
      nav("/welcome");
    } else {
      alert("Sorry, Account not found!");
    }
  };

  return (
    <>
      <Grid
        style={{
          display: "flex",
          justifyContent: "center",
          alignItem: "center",
        }}
      >
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <h2>Sign In</h2>
          </Grid>
          <TextField
            onChange={onEmailFieldChange}
            name="email"
            label="email"
            placeholder="Enter Email"
            fullWidth
            required
          />
          <br></br>
          <br></br>
          <TextField
            onChange={onPasswordFieldChange}
            name="password"
            label="password"
            placeholder="Enter password"
            type="password"
            fullWidth
            required
          />
          <br></br>
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            fullWidth
            onClick={validateUser}
          >
            Sign in
          </Button>

          <Typography>
            {" "}
            Create an account ?
            <Link onClick={() => nav("/signup")}>Sign Up</Link>
          </Typography>
        </Paper>
      </Grid>
    </>
  );
};

export default Login;
