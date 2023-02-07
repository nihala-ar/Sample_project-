import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import axios from "axios";
import { apiNew } from "./Url";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
const dataB = "http://localhost:5010/database";
const dataAdd = "http://localhost:5010/add";

function Home() {
  const [first, setfirst] = useState([]);

  // useEffect(() => {
  // axios.get(apiNew).then((res)=>{
  //     setfirst(res.data)
  // })
  // }, [])

  // console.log(first)

  const [data, setdata] = useState([]);

  //  useEffect(() => {
  //    axios.get(dataB).then((item)=>{
  //       setdata(item.data)
  //    })
  //    }, [])

  const new1 = () => {
    axios.get(dataB).then((item) => {
      setdata(item.data);
    });
    axios.get(apiNew).then((res) => {
      setfirst(res.data);
    });
  };

  useEffect(() => {
    new1();
  }, []);

  // console.log(setfirst)

  return (
    <div>
      <Navbar variant="dark" bg="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <Link to="/home">Home</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">
                <Link to="/login">Login</Link>
              </Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />

      {first.map((item) => {
        return (
          <>
            <h3>name : {item.name}</h3>
            <p>age : {item.age}</p>
          </>
        );
      })}

      {data.map((val) => {
        return (
          <>
            <h3>email : {val.email}</h3>
            <p>password : {val.password}</p>
            <p>id : {val._id}</p>
          </>
        );
      })}

      {/* displaying database data into card */}
      {/* <div>
        {data.map((val) => {
          return (
            <>
              <Card style={{ width: "18rem" }}>
                <ListGroup variant="flush">
                  <ListGroup.Item>email : {val.email}</ListGroup.Item>
                  <ListGroup.Item>password : {val.password}</ListGroup.Item>
                  <ListGroup.Item>id : {val._id}</ListGroup.Item>
                </ListGroup>
              </Card>
            </>
          );
        })}
      </div>
 */}
    </div>
  );
}

export default Home;
