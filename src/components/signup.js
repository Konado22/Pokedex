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
          <label>
            Username<input type={"text"} placeholder='Username'></input>
          </label>
          <label>
            Password<input type={"password"} placeholder='password'></input>
          </label>
          <label>
            Password<input type={"password"} placeholder='confirm password'></input>
          </label>
          <button>Submit</button>
          <button>Login</button>
        </Form>
      </Card>
    </div>
  );
};
export default SignUp;
