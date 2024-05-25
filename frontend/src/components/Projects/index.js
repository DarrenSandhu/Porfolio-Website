import React from 'react'
import { useState, useEffect } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectStyledComponents'
import ProjectCard from '../Cards/ProjectCards'


const Projects = ({openModal,setOpenModal, projectsData, categories}) => {
  const [toggle, setToggle] = useState('all');
  const projects = projectsData;

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to machine learning apps. <br/>
          Here are some of my projects.
        </Desc>
        <ToggleButtonGroup>
          {categories.map((category, index) => (
            <>
              <ToggleButton
                active={toggle === category}
                value={category}
                onClick={() => setToggle(category)}
                key={`category-${index}`}
              >
                {category.toUpperCase()}
              </ToggleButton>
              {index < categories.length - 1 && <Divider />}
            </>
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