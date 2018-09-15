import React from 'react';
import Wave from './wave';
import styled from 'styled-components';

const SectionGroup = styled.div`
    background-image: url(${props => props.image});
    background-size: cover;
    height: 720px;
    margin: 100px 0;
    display: grid;
    grid-template-rows: 300px auto;
    grid-gap: 20px;
    position: relative;
    @media (max-width: 720px) {
        height: 820px;
    }
`;
const SectionLogo = styled.img`
    margin: 0 auto;
    width: 128px;
    align-self: end;
`;
const SectionTitleGroup = styled.div`
    max-width: 800px;
    margin: 0 40px;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 300px auto;
    grid-auto-rows: auto 100%;
    @media (max-width: 720px) {
        grid-template-columns: 1fr;
    }
`;
const SectionTitle = styled.h3`
    color: white;
    margin: 0;
    line-height: 1.2;
    font-size: 60px;
    
    @media (max-width: 720px) {
        font-size: 40px;
    }
`;
const SectionText = styled.p`
    color: white;
    font-size: 20px;
`;

const WaveTop = styled.div`
    position: absolute;
    width: 100%;
    top: -6px;
    transform: rotate(180deg);
`;

const WaveBottom = styled.div`
    position: absolute;
    bottom: -6px;
    width: 100%;
`;

const Section = props => (
  <SectionGroup image={props.image}>
    <WaveTop> <Wave /> </WaveTop>
    <WaveBottom ><Wave /></WaveBottom>
    <SectionLogo src={props.logo} />
    <SectionTitleGroup>
      <SectionTitle >{props.title}</SectionTitle>
      <SectionText >{props.text}</SectionText>
    </SectionTitleGroup>
  </SectionGroup>
);
export default Section;