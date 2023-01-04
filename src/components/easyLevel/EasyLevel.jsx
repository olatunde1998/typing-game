import styled from "styled-components";
import HeroSection from "components/heroSection/HeroSection";
import DisplayBoard from "components/displayBoard/DisplayBoard";
import { useState } from "react";
import { faker } from "@faker-js/faker";
import { Input } from "components/input/InputComponent";
import Timer from "components/timer/Timer";
import RestartButton from "components/restartButton/RestartButton";
import MuiNavBar from "components/muiNavBar/MuiNavBar";
import styles from "components/easyLevel/Easy.module.css";
import Modal from "components/modal/Modal";

const EasyLevelWrapper = styled.div`
  width: 100%;
`;
const DisplayBoardWrapper = styled.div`
  border-top: 1px solid grey;
`;
const InputWrapper = styled.div``;


const EasyLevel = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const [inputField, setInputField] = useState(true);
  const [words, setWords] = useState();
  const [time, setTime] = useState();
  const [refreshButton, setRefreshButton] = useState(false);
  const [resultButton, setResultButton] = useState(true);
  const [typingWord, setTypingWord] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  // const [pauseButton, setPauseButton] = useState(true);
  // const [startButton, setStartButton] = useState(true);


  // const [displayContainer, setDisplayContainer] = useState()

  const handleWordGenerate = () => {
const wordsGenerate = faker.random.words(10);
    if (inputField === false && inputField === true) return
    setWords(wordsGenerate);
    setInputField(
      <InputWrapper>
        <Input
          onChange={handleTypingWord}
          placeholder="type here..."
          type="text"
        />
      </InputWrapper>
    );
    setResultButton(
      <button className={styles.primaryBtn} onClick={() => setIsOpen(true)}>
        Result
      </button>
    );
    setTime(<Timer />);
    setRefreshButton(<RestartButton />);
    // setPauseButton(<RestartButton />);
  };

  const handleTypingWord = (event) => {
    setTypingWord(event.target.value);
  };

  return (
    <EasyLevelWrapper>
      <MuiNavBar easy="Easy" intermediate="Intermediate" hard="Hard" />
      <h3>Level:  Easy </h3>
      <HeroSection
        wordsCreate={words}
        refreshButton={refreshButton}
        handleWordGenerate={handleWordGenerate}
        inputField={inputField}
        time={time}
        // pauseButton={pauseButton}
      />
      <DisplayBoardWrapper>
        <DisplayBoard
          handleTypingWord={handleTypingWord}
          typingWord={typingWord}
          words={words}
        />
      </DisplayBoardWrapper>
      {inputField}
      {resultButton}
      {isOpen && (
        <Modal
          setIsOpen={setIsOpen}
          wordTyped={typingWord.length}
          totalWords={words.length}
        />
      )}
    </EasyLevelWrapper>
  );
};

export default EasyLevel;
