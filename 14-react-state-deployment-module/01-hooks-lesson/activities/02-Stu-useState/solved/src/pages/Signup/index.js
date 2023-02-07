import React, { useState } from "react";
import Container from "../../components/Container";
import Col from "../../components/Col";
import Row from "../../components/Row";

const Signup = () => {

  const [formStatus, setFormStatus] = useState({
    username: '',
    password: ''
  });

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.elements);
    const { username, password } = e.target.elements;
    let signupForm = {
      username: username.value,
      password: password.value
    }
    setFormStatus(signupForm);
  };

  return (
    <div>
      <div className="mt-4">
        <h2>Sign Up</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <Container className="mt-3 px-5">
          <Row className="form-group">
            <Col size="12">
              <input className="form-control" type="text" placeholder="Username" name="username" />
            </Col>
          </Row>
          <Row className="form-group">
            <Col size="12">
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                name="password"
              />
            </Col>
          </Row>
          <button className="btn btn-success" type="submit">
            Submit
          </button>
        </Container>
        <Container className="mt-4">
          <h3>Hello {formStatus.username}!</h3>
          <p>I probably shouldn't tell you this, but your password is {formStatus.password}!</p>
        </Container>
      </form>
    </div>
  );
};

export default Signup;
