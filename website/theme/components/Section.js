import React from 'react';
import styled from 'styled-components';
import Image from './Image'
import PropTypes from 'prop-types';

const StyledSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 40vh;
  max-width: 1200px;
  align-items: center;
  border: 2px solid red;
  flex-direction: ${(props) => props.reverse ? 'row-reverse' : 'row'}

  h3 {
    font-size: 2em;
    font-weight: 500;
  }

  p {
    font-size: 1.2em;
    line-height: 1.6em;
  }
  p, h3 {
    color: #444950
  }
`;

const SectionBody = styled.div`
  display: flex;
  width: 40%;
  flex-direction: column;
`;

const StyledImage = styled(Image)`
  width: 40%;
`;

const Section = (props) => (
  <StyledSection {...props}>
    <StyledImage src={props.image.src} alt={props.image.alt}/>
    <SectionBody>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </SectionBody>
  </StyledSection>
)

Section.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reverse: PropTypes.bool,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  }).isRequired
}

Section.defaultProps = {
  reverse: false
}

export default Section
