import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
const login = "http://localhost:5010/login";

console.log("hello")


function Navbar() {
  const navigate = useNavigate();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const submit = () => {
    if (!password || !email) {
      alert("Please enter details");
    } else {
      console.log(email, password);

      axios.post(login, { email, password }).then((res) => {
        let error = res.data.isError;
        if (error) {
          console.log("error");
        } else {
          localStorage.setItem("user", JSON.stringify(res.data));
          console.log(res.data);

          const user = localStorage.getItem("user");
          navigate(user ? "/home" : "/login");
        }
      });
    }
  };

  return (
    <div>
      <h1 className="text-center">LOGIN</h1>
      {/* <Container>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container> */}
      Email : <input onChange={(e) => setemail(e.target.value)} type="email" />
      <br />
      Password :
      <input onChange={(e) => setpassword(e.target.value)} type="password" />
      <br />
      <button onClick={submit}>Login</button>
    </div>
  );
}

export default Navbar;
