import { Card, Button, Form } from "react-bootstrap";
import { useState } from "react";
import { render } from "@testing-library/react";
import SignUp from "./signup";

const Login = (username, password) => {
  const [useLogin, useSignup] = useState({
    login: "username",
    password: "",
  });
  return (
    <div style={{"display": "flex", "justifyContent": "center"}}>
      <Card  bg="dark" style={{"display": "flex", "flexDirection": "column", "justifyContent": "center"}}>
        <Card.Title>Login to access this website</Card.Title>
        <Card.Body style={{"display": "flex", }}>
          <Form style={{"display" : "flex", "flexDirection": "column", "justifyContent": "center"}}>
              Username<input type={"text"} placeholder="username"></input>
              Password<input type={"password"} placeholder="password" style={{"marginBottom": "15px"}}></input>
            <Button type="submit" style={{"marginBottom": "15px"}} onClick={(e) => {e.preventDefault()}}>Submit</Button>
            <Button type="button" onClick={(e) => {
               e.preventDefault();
            }}>Signup</Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Login;
