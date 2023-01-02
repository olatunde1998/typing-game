import styled from "styled-components";
import HeaderComponent from "components/header/HeaderComponent";
import HeroSection from "components/heroSection/HeroSection";
import DisplayBoard from "components/displayBoard/DisplayBoard";

const EasyLevelWrapper = styled.div`
//   border: 1px solid red;
  width: 100%;
`;



const EasyLevel = () => {
    
  return (
    <EasyLevelWrapper>
      <HeaderComponent easy="Easy" intermediate="Intermediate" hard="Hard"/>
      <HeroSection/>
      <DisplayBoard/>
      
    </EasyLevelWrapper>
  );
};

export default EasyLevel;
