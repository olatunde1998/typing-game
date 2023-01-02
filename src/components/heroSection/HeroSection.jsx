import React, { useState } from 'react'
import styled from 'styled-components'
import StartButton from "components/restartButton/StartButton";
import InputComponent from 'components/input/InputComponent';
import Timer from 'components/timer/Timer';
import ResultButton from 'components/restartButton/ResultButton';
import { faker } from "@faker-js/faker";
import RestartButton from 'components/restartButton/RestartButton';
import Result from 'components/result/Result';



const Container = styled.div`
  // border: 1px solid yellow;
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
`;
const Sentences = styled.p`
  max-width: 300px;
  margin: 0 auto;
  //   padding: 20px;
  line-height: 32px;
`;
const ResultDetails = styled.div`
  max-width: 300px;
  margin: 0 auto;
`;

const wordsGenerate = faker.random.words(10);


const HeroSection = () => {
    const [words, setWords] = useState(false);
  const [time, setTime] = useState();
  const [start, setStart] = useState(true);
  const [resultButton, setResultButton] = useState(false);
  const [refreshButton, setRefreshButton] = useState(false);
  const [resultDetails, setResultDetails] = useState(false);



  const handleResult = () => {
    if (start === false && start === true) return;
    setResultDetails(
      <ResultDetails>
        <h2>Your Result</h2>
        <Result
          errors={20}
          wordTyped={20}
          accuracyPercentage={300}
          total={wordsGenerate.length}
        />
      </ResultDetails>
    );
    setTime(true);
  };


    const handleStartGame = () => {
        if (start === false && start === true) return;
        setStart(<InputComponent />);
        setTime(<Timer />);
        setResultButton(<ResultButton resultInfo={handleResult} />);
        setWords(<Sentences>{wordsGenerate}</Sentences>);
        setRefreshButton(<RestartButton refreshGame={handleRefreshGame} />);
      };

      const handleRefreshGame = () => {
        if (start === false && start === true) return;
        setStart(<InputComponent />);
        setResultDetails(true);
        setTime(true);
        setResultDetails(false);
        setResultButton(false);
        setWords(<Sentences>{wordsGenerate}</Sentences>);
      };

  return (
    <div>
        <Container>
        {refreshButton}
        {time}
        <StartButton startGame={handleStartGame} />
      </Container>
      {words}
    </div>
  )
}

export default HeroSection;
