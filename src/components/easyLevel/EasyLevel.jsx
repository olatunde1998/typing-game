import styled from "styled-components";
import HeroSection from "components/heroSection/HeroSection";
import DisplayBoard from "components/displayBoard/DisplayBoard";
import { useState } from "react";
import { faker } from "@faker-js/faker";
import Timer from "components/timer/Timer";
import RestartButton from "components/buttons/RestartButton";
import MuiNavBar from "components/muiNavBar/MuiNavBar";
import styles from "components/easyLevel/Easy.module.css";
import Modal from "components/modal/Modal";

const EasyLevelWrapper = styled.div`
  width: 100%;
`;
const DisplayBoardWrapper = styled.div`
  margin: 2px;
  width: 70%;
`;
const InputWrapper = styled.div``;

const EasyLevel = () => {
  const [inputField, setInputField] = useState(true);
  const [words, setWords] = useState(true);
  const [time, setTime] = useState(false);
  const [refreshButton, setRefreshButton] = useState(false);
  const [resultButton, setResultButton] = useState(true);
  const [typingWord, setTypingWord] = useState(" ");
  const [isOpen, setIsOpen] = useState(false);

  // var timer;
  // const handlePauseToggle = () => {
  //   clearInterval(timer);
  // };
  const wordsGenerate = faker.random.words(10);

  const handleWordGenerate = () => {
    if (inputField === false && inputField === true) return;
    setResultButton(
      <button className={styles.primaryBtn} onClick={handleResult}>
        Result
      </button>
    );
    setInputField(true)
    if (!time) {
      setTime(<Timer />);
      setWords(wordsGenerate);
    }
    setRefreshButton(<RestartButton />);
  };

  const handleRefresh = () => {
    if (inputField === false && inputField === true) return;

    const wordsGenerate = faker.random.words(10);
    setWords(wordsGenerate);
    setTime(false);
    setResultButton(false);
  };

  const handleTypingWord = (event) => {
    setTypingWord(event.target.value);
  };

  const handleResult = () => {
    setIsOpen(true);
  };

  return (
    <EasyLevelWrapper>
      <MuiNavBar easy="Easy" intermediate="Intermediate" hard="Hard" />
      <h3>Level: Easy </h3>
      <HeroSection
        handleRefresh={handleRefresh}
        handleWordGenerate={handleWordGenerate}
        inputField={inputField}
        time={time}
        refreshButton={refreshButton}
      />
      <div className={styles.textEditor}>
        <div className={styles.sentences}>{words}</div>
        <DisplayBoardWrapper>
          <DisplayBoard
            handleTypingWord={handleTypingWord}
            typingWord={typingWord}
          />
          <InputWrapper>
            <div className={styles.textArea}>
              <textarea
                className={styles.userEditor}
                name="w3review"
                onChange={handleTypingWord}
                placeholder=" type here ...."
              ></textarea>
            </div>
          </InputWrapper>
        </DisplayBoardWrapper>
      </div>
      {resultButton}

      {isOpen && (
        <Modal
          setIsOpen={setIsOpen}
          wordTyped={typingWord.length}
          totalWords={words.length}
          time={time}
          words={words}
          typingWord={typingWord}
        />
      )}
    </EasyLevelWrapper>
  );
};

export default EasyLevel;
