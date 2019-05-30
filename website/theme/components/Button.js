import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border: 2px solid red;
  width: 200px;
  height: 50px;
  display: flex;
  font-size: 1.1em;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  border-radius: 10px;
  font-weight: 500;
  cursor: pointer;
`;


export default (props) => {
  const handleOnClick = () => window.location.replace(props.location);
  return (
    <Button {...props} onClick={handleOnClick}>
      {props.children}
    </Button>
  )
}
