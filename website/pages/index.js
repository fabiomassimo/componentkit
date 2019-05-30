import React from "react";
import Layout from "@theme/Layout";
import "./index.css";
import styled, {createGlobalStyle} from 'styled-components';
import ProjectTitle from '@theme/components/ProjectTitle'
import ProjectDescription from '@theme/components/ProjectDescription'
import ButtonContainer from '@theme/components/ButtonContainer'
import Button from '@theme/components/Button'
import Image from '@theme/components/Image'
import Section from '@theme/components/Section'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const GlobalStyle = createGlobalStyle`
  h1, h2 {
    font-family: 'San Francisco', -apple-system, BlinkMacSystemFont,
    '.SFNSText-Regular', 'Helvetica Neue', Helvetica, sans-serif;
  }
`

const HeaderContainer = styled.div`
  border: 2px solid yellow;
  display: flex;
  height: 60vh;
  background-color: #00a4b8;
  justify-content: center;
  align-items: center;
  padding: 15px;
`
const BodyContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  flex-direction: column;
  border: 2px solid blue;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 40vh;
  max-width: 1200px;
  align-items: center;
  border: 2px solid red;
`
const Content = styled.div`
  display: flex;
  width: 40%;
  flex-direction: column;
  align-items: flex-start;
  border: 5px solid green;
`

const StyledButtonContainer = styled(ButtonContainer)`
  display: flex;
  border: 2px solid blue;
  width: 100%;
  justify-content: space-between;
`;

const StyledWhiteButton = styled(Button)`
  background-color: #FFF;
  color: #00A4B8;
  border-color: transparent;
  transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;

  &:hover {
    background-color: transparent;
    border-color: #FFF;
    color: #FFF;
  }
`;

const StyledTransparentButton = styled(Button)`
  background-color: transparent;
  color: #FFF;
  border-color: #FFF;
  transition: color 0.2s ease, border-color 0.2s ease;

  &:hover {
    color: rgba(255,255,255,0.5);
    border-color: rgba(255,255,255,0.5);
  }
`;

const Logo = styled(Image)`
  border: 2px solid red;
  object-fit: cover;
  width: 35%;
  margin: 0 auto;
`;


function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

  const {
    baseUrl,
    title,
    tagline
  } = siteConfig;

  return (
    <Layout title={title}>
      <GlobalStyle />
      <HeaderContainer>
        <Wrapper>
          <Content>
            <ProjectTitle>{tagline}</ProjectTitle>
            <ProjectDescription>
              ComponentKit is an Objective-C++ view framework for iOS that is heavily inspired by React.
            </ProjectDescription>
            <StyledButtonContainer>
              <StyledWhiteButton location='https://google.com'>Getting Started</StyledWhiteButton>
              <StyledTransparentButton location='https://google.com'>Learn More</StyledTransparentButton>
            </StyledButtonContainer>
          </Content>
          <Logo src={`${baseUrl}img/ck_hero_logo.png`} alt='ComponentKit Logo'/>
        </Wrapper>
      </HeaderContainer>
      <BodyContainer>
        <Section
          title="Declarative"
          description="
            ComponentKit uses a declarative API to define UI components.
            You simply describe the layout for your UI based on a set of immutable inputs and the framework takes care of the rest.
            With code generation, ComponentKit can perform optimisations for your UI under the hood,
            while keeping your code simple and easy to maintain."
          image={{src: `${baseUrl}img/declarative.png`, alt: 'ComponentKit Logo'}}
        />
        <Section
          reverse
          title="Asynchronous layout"
          description="
            ComponentKit can measure and layout your UI ahead of time without blocking the UI thread.
            By decoupling its layout system from the traditional Android View system, ComponentKit can
            drop the UI thread constraint imposed by iOS."
          image={{src: `${baseUrl}img/async_layout.png`, alt: 'ComponentKit Logo'}}
        />
        <Section
          title="Flatter view hierarchies"
          description="
            ComponentKit uses Yoga for layout and automatically reduces the number of ViewGroups
             that your UI contains. This, in addition to ComponentKit's text optimizations, allows
              for much smaller view hierarchies and improves both memory and scroll performance."
          image={{src: `${baseUrl}img/flatter_view.png`, alt: 'ComponentKit Logo'}}
        />
        <Section
          reverse
          title="Fine-grained recycling"
          description="
            With ComponentKit, each UI item such as text, image, or video is recycled individually.
            As soon as an item goes off screen, it can be reused anywhere in the UI and pieced together
             with other items to create new UI elements. Such recycling reduces the need of having
             multiple view types and improves memory usage and scroll performance."
          image={{src: `${baseUrl}img/recycling.png`, alt: 'ComponentKit Logo'}}
        />
      </BodyContainer>
    </Layout>
  );
}

export default Home;
