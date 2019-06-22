import React, { useState } from 'react'
import styled from 'styled-components'

const Div = styled.div`
  width: 100%;
  height: 50px;
  background: #24292e;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Input = styled.input`
  width: 50%;
  height: 30px;
  background: hsla(0,0%,100%,.125);
  border: none;
  color: #fff;
  padding-left: 10px;
`
const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  height: 30px;
  border: 2px solid #fff;
  color: #fff;
  margin: 0 1em;
  padding: 0.25em 1em;
`

const Header = ({getData}) => {
  const [inputValue, changeInputValue] = useState("");
  return (
    <Div>
      <Input value={inputValue} onChange={(e) => changeInputValue(e.target.value)} placeholder='Enter city'/>
      <Button onClick={() => getData(inputValue)}>Search</Button>
    </Div>
  ) 
}

export default Header