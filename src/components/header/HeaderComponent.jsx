import styled from "styled-components";
import { TiPointOfInterestOutline } from "react-icons/ti";
import { Link } from "react-router-dom";

const Logo = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  border-bottom: 1px solid grey;
`;
const HeadingName = styled.div`
  margin-top: 20px;
  font-size: 24px;
`;
const EasyButton = styled.div`
  cursor: pointer;
`;
const List = styled.li`
  list-style-type: none;
  padding: 5px;
`;

const HeaderComponent = ({ easy, intermediate, hard }) => {
  return (
    <Logo>
      <Link to="/">
        {" "}
        <TiPointOfInterestOutline
          size={60}
          style={{ textDecoration: "none", color: "white" }}
        />
      </Link>
      <HeadingName>Typing Game</HeadingName>
      <EasyButton>
        <Link to="/easy" style={{ color: "white", textDecoration: "none" }}>
          <List>{easy}</List>
        </Link>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          <List>{intermediate}</List>
        </Link>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          <List>{hard}</List>
        </Link>
      </EasyButton>
    </Logo>
  );
};

export default HeaderComponent;
