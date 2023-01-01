import React from 'react'
import styled from 'styled-components';

const Button = styled.button`
    background: grey;
    background-color: white;
border: none;
color: grey;
padding: 10px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 18px;
margin: 4px 2px;
border-radius: 12px;
margin-right: 60px;
`

const ResultButton = ({resultInfo}) => {
  return (
    <Button onClick={resultInfo}>Result</Button>
  )
}

export default ResultButton;
