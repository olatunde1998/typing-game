import styled from "styled-components";

const Button = styled.button`
  background: grey;
  background-color: white;
  border: none;
  color: grey;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 18px;
  margin: 4px 2px;
  border-radius: 12px;
  margin-right: 60px;
`;

const ResultButton = ({handleResult}) => {
 
  return (
    <div>
      <Button onClick={handleResult}>Result</Button>
    </div>
  );
};

export default ResultButton;
