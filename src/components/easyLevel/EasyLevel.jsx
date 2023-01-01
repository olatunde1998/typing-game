import React, { useState } from "react";
import Result from "components/result/Result";
import { faker } from "@faker-js/faker";
import RestartButton from "components/restartButton/RestartButton";
import { TiPointOfInterestOutline } from "react-icons/ti";
import styled from "styled-components";
import InputComponent from "components/input/InputComponent";
import Timer from "components/timer/Timer";
import StartButton from "components/restartButton/StartButton";
import ResultButton from "components/restartButton/ResultButton";

const Logo = styled.div`
  align-items: left;
  justify-content: left;
  display: flex;
  padding: 20px;
  border-bottom: 1px solid grey;
  margin-bottom: 50px;
`;
const HeadingName = styled.div`
  margin-left: 15px;
  margin-top: 20px;
  font-size: 30px;
`;
const Sentences = styled.p`
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  line-height: 32px;
`;
const ResultDetails = styled.div`
  max-width: 300px;
  margin: 0 auto;
`;
const Container = styled.div`
    // border: 1px solid yellow;
    display: flex;
    justify-content: center;
    margin-top: 30px;
`

const wordsGenerate = faker.random.words(10);

const EasyLevel = () => {
  const [words, setWords] = useState(false);
  const [start, setStart] = useState(true);
  const [refreshButton, setrefreshButton] = useState(false);
  const [resultButton, setResultButton] = useState(false);
  const [time, setTime] = useState();
  const [resultDetails, setResultDetails] = useState(false);

  const handleStartGame = () => {
    if (start===false && start ===true) return
    setStart(<InputComponent />);
    setTime(<Timer />);
    setResultButton(<ResultButton resultInfo={handleResult} />);
    setWords(<Sentences>{wordsGenerate}</Sentences>);
    setrefreshButton(<RestartButton refreshGame={handleRefreshGame} />);
  };
  const handleRefreshGame = () => {
    if (start===false && start ===true) return
    setStart(<InputComponent />);
    setResultDetails(true);
    setTime(true);
    setResultDetails(false);
    setResultButton(false);
    setWords(<Sentences>{wordsGenerate}</Sentences>);
  };
  const handleResult = () => {
    if (start===false && start ===true) return
        setResultDetails(
      <ResultDetails>
        <h2>Your Result</h2>
        <Result errors={20} accuracyPercentage={300} total={wordsGenerate.length} />
      </ResultDetails>)
    setTime(true)

    

  };
  return (
    <div>
      <Logo>
        <TiPointOfInterestOutline size={80} />
        <HeadingName>Typing Game</HeadingName>
      </Logo>
      <div>
        {time}
        {refreshButton}
      </div>
      {words}
      {start}
      <Container>
      {resultButton}
      <StartButton startGame={handleStartGame} />
      </Container>
      {resultDetails}
    </div>
  );
};

export default EasyLevel;
