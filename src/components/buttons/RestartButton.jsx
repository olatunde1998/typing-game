import React from "react";
import styled from "styled-components";
import { MdRefresh } from "react-icons/md";

const Button = styled.button`
  background: grey;
  background-color: white;
  border: none;
  color: grey;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 10px;
  margin: 4px 2px;
  border-radius: 50%;
`;

const RestartButton = ({handleRefresh}) => {
  return (
    
      <Button onClick={handleRefresh}>
        <MdRefresh size={40} />
      </Button>
  
  );
};

export default RestartButton;
