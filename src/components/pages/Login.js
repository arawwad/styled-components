import React, { useState, useEffect } from "react";
import { PageLayout, Input, PasswordInput, Button, Spinner } from "components/global";
import styled from "styled-components";

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background: white;
  border: 1px solid #eee;
  padding: 16px;
  box-sizing: border-box;
  color: black;
  border-radius: 4px;

  .alt-text {
    text-align: center;
    margin: 10px 0;
  }
`;

export default function Login() {
  const [formFields, setFormFields] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);

  let timeout = null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const handleInputChange = (e) => {
    e.persist();
    setFormFields((s) => ({
      ...s,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    return () => clearTimeout(timeout);
  }, [timeout]);

  return (
    <PageLayout>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        {loading ? <Spinner /> :
          <>
            <Input
              mt="40px"
              onChange={handleInputChange}
              value={formFields.username}
              type="text"
              name="username"
              placeholder="User Name"
            />
            <PasswordInput
              onChange={handleInputChange}
              value={formFields.password}
              name="password"
            />
          </>}
        <Button mt="40px" large type="submit" disabled={loading}>
          {loading ? "Loading" : "Login"}
        </Button>
        {!loading && (
          <>
            <div className="alt-text">or</div>
            <Button secondary type="button">
              Register
            </Button>
          </>
        )}
      </Form>
    </PageLayout>
  );
}
