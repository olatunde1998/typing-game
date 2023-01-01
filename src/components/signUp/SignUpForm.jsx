import React from "react";
import { useFormik } from "formik";
import styled from "styled-components";
import TextField from '@mui/material/TextField';

const Form = styled.form`
  justify-content: center;
  align-items: center;
  // border: 2px solid red;
`;
const Input = styled.input`
  display: block;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  width: 300px;
  border-radius: 10px;
`;
const FormWrapper = styled.form`
  // border: 2px solid blue;
  // height: 100vh;
  padding-top: auto;
  padding-bottom: auto;
`;
const Button = styled.button`
  display: block;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  padding: 15px;
  width: 340px;
  border-radius: 10px;
`;

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <FormWrapper>
      <h3>Typing Game</h3>
      <Form onSubmit={formik.handleSubmit}>
        <Input
          id="firstName"
          name="firstName"
          type="text"
          placeholder="First Name"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
        <Input
          id="lastName"
          name="lastName"
          type="text"
          placeholder="Last Name"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="password"
          sx={{ width: '300px' }}
        />
        <Button type="submit">Submit</Button>
      </Form>
    </FormWrapper>
  );
};

export default SignupForm;
