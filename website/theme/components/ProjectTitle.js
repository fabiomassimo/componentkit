import React from 'react'
import styled from 'styled-components';

const ProjectTitle = styled.h1`
  color: #F6F7F9;
  font-size: 4.7em;
  font-weight: 500;
  margin: 25px 0;
  line-height: 1.1em;
`;

export default (props) => (
  <ProjectTitle {...props}>
    {props.children}
  </ProjectTitle>
)
