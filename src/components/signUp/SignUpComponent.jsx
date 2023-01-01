import React from "react";
import styled from "styled-components";
import SignupForm from "./SignUpForm";

const SignUpComponentWrapper = styled.div`
  display: flex;
  height: 100vh;
`;
const LeftContainer = styled.div`
  display: block;
  width: 100vw;
  height: 100vh;
  background-color: #bd9771;
  @media (min-width: 768px) {
    width: 50%;
  }
`;
const RightContainer = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
    background-image: url("assets/img/alejandro-escamilla-LF8gK8-HGSg-unsplash.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    width: 50%;
  }
`;

export const SignUpComponent = () => {
  return (
    <SignUpComponentWrapper>
      <LeftContainer>
        <SignupForm />
      </LeftContainer>
      <RightContainer></RightContainer>
    </SignUpComponentWrapper>
  );
};
