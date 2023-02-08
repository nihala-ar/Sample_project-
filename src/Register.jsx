import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
const dataAdd = "http://localhost:5010/add";
const hashedP = "http://localhost:5010/sign";

function Register() {
  const navigate = useNavigate();

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  console.log("hi");
  console.log("hello");

  useEffect(() => {
    const exist = JSON.parse(localStorage.getItem("user"));
    if (exist) {
      navigate("/home");
    }
  });

  const submit = () => {
    // console.log(name, email, password)
    // axios.post(dataAdd,{name,email,password}).then((res)=>{
    //   console.log(res.data)
    // })

    // axios.post(hashedP, { name, email, password }).then((res) => {
    //   console.log(res.data)

    //   localStorage.setItem("user", JSON.stringify(res.data));
    //   console.log(res.data);
    // });

    if (!name || !email || !password) {
      alert("Please fill every column");
    } else {
      axios.post(hashedP, { name, email, password }).then((res) => {
        console.log(res.data);

        let error = res.data.isError;
        if (error) {
          console.log("error");
        } else {
          localStorage.setItem("user", JSON.stringify(res.data));
          console.log(res.data);

          const user = localStorage.getItem("user");
          navigate(user ? "/home" : "/");
        }
      });
    }
  };

  return (
    <div>
      <h1 className="text-center">SIGN UP</h1>
      {/* <Container>
        <Form>
          <Row>
            <Form.Group as={Col} >
              <Form.Label>First Name</Form.Label>
              <Form.Control onChange={(e)=>setname(e.target.value)} type="text" placeholder="First Name" />
            </Form.Group>

            <Form.Group as={Col} >
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="password" placeholder="Last Name" />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control onChange={(e) => setemail(e.target.value)} type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control onChange={(e)=>setpassword(e.target.value)} type="password" placeholder="Password" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button onClick={Submit}  variant="primary" type="submit">
            Sign Up
          </Button>

        </Form>
      </Container> */}
      Name : <input onChange={(e) => setname(e.target.value)} type="text" />{" "}
      <br />
      Email : <input
        onChange={(e) => setemail(e.target.value)}
        type="email"
      />{" "}
      <br />
      Password :{" "}
      <input
        onChange={(e) => setpassword(e.target.value)}
        type="password"
      />{" "}
      <br />
      <button onClick={submit}>Signup</button>
    </div>
  );
}

export default Register;
