import React from 'react'
import styled,{ keyframes, ThemeProvider } from 'styled-components'

import {DarkTheme} from './Themes';

import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';

import astronaut from '../assets/Images/spaceman.png'
import BigTitle from "../subComponents/BigTitlte"


const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height: 100vh;
position: relative;
overflow: hidden;

`
const float = keyframes`
0% {transform: translateY(-10px) }
50% {transform: translateY(15px) translateX(15px) }
100% {transform: translateY(-10px) }`


const Spaceman = styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;

img{
  width: 100;
  height: auto;
}
`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
padding: 2rem ;
width: 50vw;
height: 60vh;
z-index: 3;
line-height: 1.5;

display: flex;
justify-content: center;
align-items: center;
font-size: calc(0.6rem + 1vw);
backdrop-filter: blur(4px);


position: absolute;
left: calc(5rem + 5vw);
top: 10rem;

font-family: 'Ubuntu Mono', monospace;
font-style: italic;

`


const AboutPage = () => {
  return (

    <ThemeProvider theme={DarkTheme}>

      <Box>
        <LogoComponent theme='dark' />
        <SocialIcons theme='dark' />
        <PowerButton  />
        <ParticleComponent theme='dark' />

        <Spaceman>
          <img src={astronaut} alt='spaceman' />
        </Spaceman>

        <Main>
          I am an Innovative Frontend Developer with 2 years experience building and maintaining responsive websites in the recruiting and consulting
          industry. Proficient in Javascript, React, React-Redux, Jira Software , knowledgeable about all phases of the software
          development lifecycle, from concept through development and delivery.<br/>
           I have demonstrated problem-solving ability. Iʼm
          currently looking for the right opportunity to work in an environment which encourages me to succeed and grow professionally
          where I can utilize my knowledge appropriately and learn new skills.
        </Main>

        <BigTitle text="ABOUT" top="10%" left="5%" />

      </Box>

    </ThemeProvider>



   
  )
}

export default AboutPage