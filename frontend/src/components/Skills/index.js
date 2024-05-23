import React from "react";
import styled from "styled-components";
import { skills } from "../../data/userData";
import { Container, Wrapper, Title, Desc, SkillsContainer, Skill, SkillTitle, SkillList, SkillItem, SkillImage } from "./SkillsStyledComponents";

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Tech Stack</Title>
        <Desc>I've been programming since the age of 12. <br/> Here are the skills I've learnt so far! 🚀
        </Desc>
        <SkillsContainer>
            {skills.map((skill, index) => (
                <Skill key={`skill-${index}`}>
                    <SkillTitle>{skill.title}</SkillTitle>
                    <SkillList>
                        {skill.skills.map((item, index_x) => (
                            <SkillItem key={`skill-x-${index_x}`}>
                            <SkillImage src={item.image} />
                            {item.name}
                            </SkillItem>
                        ))}
                    </SkillList>
                </Skill>
            ))}

        </SkillsContainer>
      </Wrapper>
    </Container>
  )
}


export default Skills;