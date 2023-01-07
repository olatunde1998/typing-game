import React from 'react'
import styled from 'styled-components';
import { MdArrowRight } from "react-icons/md";


const Button = styled.button`
background-color: #185adb;
border: none;
color: white;
padding: 10px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 10px;
margin: 4px 2px;
border-radius: 50%;

`

const StartButton = ({startGame}) => {
  return (
    <Button onClick={startGame}><MdArrowRight size={40}/></Button>
  )
}

export default StartButton;
