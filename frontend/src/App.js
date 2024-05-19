import logo from './logo.svg';
import { useState, useEffect } from 'react';


import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme } from './utils/Themes';

import Navbar from './components/Navbar';
import HomeSection from './components/HeroSection';
import { BrowserRouter as Router } from 'react-router-dom';
import { Home } from '@mui/icons-material';

const Body = styled.div`
  background-color: ${({theme}) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(
    38.73deg,
    rgba(135, 206, 235, 0.15) 0%,  // Light Sky Blue with slight transparency
    rgba(135, 206, 250, 0) 50%     // Lighter Sky Blue, fading to transparent
  ),
  linear-gradient(
    141.27deg,
    rgba(240, 128, 128, 0) 50%,    // Light Coral, fading to transparent
    rgba(240, 128, 128, 0.15) 100% // Light Coral with slight transparency
  );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;



function App() {
  const [educations, setEducations] = useState([])
  const [programming, setProgramming] = useState([])
  const[user, setUser] = useState({})
  const[skills, setSkills] = useState([])
  const[experience, setExperience] = useState([])
  const[projects, setProjects] = useState([])

  useEffect(() => {
    getDate()
  }, [])

  const getDate = async () => {
    const educationResponse = await fetch('/education')
    const educationData = await educationResponse.json()
    setEducations(educationData)

    const programmingResponse = await fetch('/programming')
    const programmingData = await programmingResponse.json()
    setProgramming(programmingData)

    const userResponse = await fetch('/users')
    const userData = await userResponse.json()
    setUser(userData)

    const skillsResponse = await fetch('/skills')
    const skillsData = await skillsResponse.json()
    setSkills(skillsData)

    const experienceResponse = await fetch('/experience')
    const experienceData = await experienceResponse.json()
    setExperience(experienceData)

    const projectsResponse = await fetch('/projects')
    const projectsData = await projectsResponse.json()
    setProjects(projectsData)

    console.log(educationData)
    console.log(programmingData)
    console.log(userData)
    console.log(skillsData)
    console.log(experienceData)
    console.log(projectsData)
  }

  return (
    <ThemeProvider theme={lightTheme}>
      <Router>
        <Navbar />
        <Body>
          <Wrapper>
            <HomeSection/>
          </Wrapper>
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
