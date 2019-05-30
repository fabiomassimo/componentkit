import React from 'react'
import styled from 'styled-components';

const ProjectDescription = styled.h2`
  color: #F6F7F9;
  font-weight: 300;
  font-size: 1.2em;
  margin: 25px 0 50px;
  max-width: 80%;
`;

export default (props) => (
  <ProjectDescription {...props}>
    {props.children}
  </ProjectDescription>
)
