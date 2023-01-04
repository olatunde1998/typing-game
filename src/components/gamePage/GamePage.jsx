import MuiNavBar from 'components/muiNavBar/MuiNavBar';
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const GameInstruction = styled.p`
color: aliceblue;
background-color: #00acee;
padding: 20px;
line-height: 32px;


`

const GamePage = () => {
  return (
    <div>
        <MuiNavBar easy="Easy" intermediate="Intermediate" hard="Hard"/>
        <h3> Typing Game</h3>
        <GameInstruction> Typing Game dolor sit amet, consectetur adipisicing elit. Accusantium 
          voluptatum corrupti a alias quidem hic velit quaerat atque esse expedita 
          tenetur exercitationem aut inventore distinctio impedit nihil quae, 
          ducimus aperiam!</GameInstruction>
        <div>
        <Link to="/easy" style={{textDecoration: "none",  cursor: "pointer"}}> <p>Click Here start </p></Link>
        </div>
    </div>
  )
}

export default GamePage;
