import styled from "styled-components";
import StartButton from "components/restartButton/StartButton";


const Container = styled.div`
  // border: 1px solid yellow;
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
`;

const Sentences = styled.p`
  max-width: 300px;
  margin: 0 auto;
  //padding: 20px;
  line-height: 32px;
`;


const HeroSection = ({wordsCreate, refreshButton, handleWordGenerate, time}) => {
  
  return (
    <div>
      <Container>
        {refreshButton}
        {time}
        <StartButton startGame={handleWordGenerate}  />
        {/* {pauseButton} */}
      </Container>
      <Sentences>{wordsCreate}</Sentences>
    </div>
  );
};

export default HeroSection;
