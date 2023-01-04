// import { Input } from "components/input/InputComponent";
import { PictureLogo } from "components/PictureComponent/Picture";
// import ResultButton from "components/restartButton/ResultButton";
import styled from "styled-components";
// import styles from "components/easyLevel/Easy.module.css";
// import Modal from "components/modal/Modal";
// import { useState } from "react";

const DisplayContainer = styled.div`
  position: relative;
  max-width: 768px;
  margin: 0 auto;
  // border: 7px solid yellow;
`;

const UserTyping = styled.p`
  color: red;
  border: 0px solid blue;
  position: absolute;
  top: 30px;
  left: 16px;
  color: blue;
  height: 200px;
  font-size: 20px;
`;
// const InputWrapper = styled.div`
// `

const DisplayBoard = ({typingWord}) => {
  // const [isOpen, setIsOpen] = useState(false);


  return (
    <DisplayContainer>
      <UserTyping>{typingWord}</UserTyping>
      <PictureLogo src="assets/img/image_processing20210430-23168-1vozqu9.gif" />
      {/* <InputWrapper>
      <Input onChange={handleTypingWord} placeholder='type here...' type="text"/>
      </InputWrapper> */}
      {/* <main>
      <button className={styles.primaryBtn} onClick={() => setIsOpen(true)}>
        Result
      </button>
      {isOpen && <Modal setIsOpen={setIsOpen}  wordTyped={typingWord.length} totalWords={words.length} />}
    </main>  */}
    </DisplayContainer>
  );
};

export default DisplayBoard;
