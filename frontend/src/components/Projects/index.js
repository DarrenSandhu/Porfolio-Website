import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectStyledComponents'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/userData'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup>
          {['all', 'web app', 'android app', 'machine learning'].map((category) => (
            <React.Fragment key={`category-${category}`}>
              <ToggleButton
                active={toggle === category}
                value={category}
                onClick={() => setToggle(category)}
              >
                {category.toUpperCase()}
              </ToggleButton>
              <Divider />
            </React.Fragment>
          ))}
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project, index) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} key={`project-${index}`}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project, index_1) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} key={`project-${index_1}`}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects