import { Input } from "components/input/InputComponent";
import { PictureLogo } from "components/PictureComponent/Picture";
import ResultButton from "components/restartButton/ResultButton";
import Result from "components/result/Result";
import React, { useState } from "react";
import styled from "styled-components";

const DisplayContainer = styled.div`
  position: relative;
  max-width: 768px;
  margin: 0 auto;
//   border: 1px solid yellow;
`;

const UserTyping = styled.p`
  color: red;
  border: 2px solid blue;
  position: absolute;
  top: 30px;
  left: 16px;
  color: blue;
  max-width: 768px;
  
`;
const InputWrapper = styled.div`

`

const DisplayBoard = () => {

  const [resultDetails, setResultDetails] = useState(true);
  const [typingWord, setTypingWord] = useState(true);



  const handleResult = () => {
    setResultDetails(<Result />)
  };

  const handleTypingWord = (event) =>{
      setTypingWord(event.target.value);
    }

  return (
    <DisplayContainer>
      <UserTyping>{typingWord}</UserTyping>
      <PictureLogo src="assets/img/image_processing20210430-23168-1vozqu9.gif" />
      <InputWrapper>
      <Input onChange={handleTypingWord} placeholder='type here...' type="text"/>
      </InputWrapper>
      <ResultButton handleResult={handleResult} />
      {resultDetails}
      
    </DisplayContainer>
  );
};

export default DisplayBoard;
