import styled from 'styled-components';



export const Input = styled.input`
    padding: 20px;
    color: white;
    width: 89%;
    @media(min-width: 768px){
      padding: 20px;
    width: 724px;
    color: white;
    }
`;




const InputComponent = () => {

  return (
    <div>
    <Input placeholder='type here...' type="text"/>

    </div>
  )
}

export default InputComponent;
