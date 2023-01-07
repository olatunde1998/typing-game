import styled from "styled-components";

const DisplayContainer = styled.div`
  position: relative;
  max-width: 768px;
  margin: 0 auto;
`;

const UserTyping = styled.p`
  color: red;
  border: 0px solid blue;
  position: absolute;
  top: 60px;
  left: 16px;
  color: white;
  height: 200px;
  font-size: 20px;
`;

const DisplayBoard = ({typingWord}) => {

  return (
    <DisplayContainer>
      <UserTyping>{typingWord}</UserTyping>
    </DisplayContainer>
  );
};

export default DisplayBoard;
