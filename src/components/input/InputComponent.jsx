import React from 'react'
import styled from 'styled-components';

const Input = styled.input`
    padding: 20px;
    width: 100%;
`

const InputComponent = () => {
  return (
    <Input placeholder='type here...' type="text"/>
  )
}

export default InputComponent;
