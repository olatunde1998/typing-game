import styled from "styled-components";
import StartButton from "components/buttons/StartButton";
import { MdRefresh } from "react-icons/md";

const Container = styled.div`
  // border: 1px solid yellow;
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
`;
const Button = styled.button`
  background: grey;
  background-color: white;
  border: none;
  color: grey;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 10px;
  margin: 4px 2px;
  border-radius: 50%;
`;

const HeroWrapper = styled.div`
  // border: 2px solid red;
  @media (min-width: 768px) {
    max-width: 768px;
    margin: 10px auto;
  }
`;
const HeroSection = ({ handleRefresh, handleWordGenerate, time }) => {
  return (
    <HeroWrapper>
      <Container>
        <Button onClick={handleRefresh}>
          <MdRefresh size={40} />
        </Button>
        {time}
        <StartButton startGame={handleWordGenerate} />
      </Container>
    </HeroWrapper>
  );
};

export default HeroSection;
