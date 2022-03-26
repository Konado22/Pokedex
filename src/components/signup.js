import { Card, Button, Form } from "react-bootstrap";

const SignUp = () => {
  return (
    < div style={{"display": "flex", "justifyContent": "center"}}>
      <Card>
        <Card.Title> Please signup below</Card.Title>

        <Form
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
            Username<input type={"text"} placeholder='Username'></input>
            Password<input type={"password"} placeholder='password'></input>
            Password<input type={"password"} placeholder='confirm password' style={{"marginBottom": "15px"}}></input>
          <button style={{"marginBottom": "15px"}}>Submit</button>
          <button>Login</button>
        </Form>
      </Card>
    </div>
  );
};
export default SignUp;
