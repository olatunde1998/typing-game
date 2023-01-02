import HeaderComponent from 'components/header/HeaderComponent';
import StartButton from 'components/restartButton/StartButton';
import React from 'react'
import { Link } from 'react-router-dom';

const GamePage = () => {
  return (
    <div>
        <HeaderComponent/>
        <Link to="/easy"> <StartButton /> </Link>
    </div>
  )
}

export default GamePage;
