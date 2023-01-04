import React from 'react'
import styled from 'styled-components';
import { MdRefresh } from "react-icons/md";
import { Link } from 'react-router-dom';

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
`

const RestartButton = () => {
  return (
    <Link to="/"><Button><MdRefresh size={40}/></Button></Link>
  )
}

export default RestartButton;
