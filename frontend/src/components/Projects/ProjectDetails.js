import { CloseRounded, GitHub, LinkedIn } from "@mui/icons-material";
import { Modal } from "@mui/material";
import React from "react";
import { Button, ButtonGroup, Container, Date, Desc, Image, Tag, Tags, Title, Wrapper, Label, Member, MemberImage, MemberName, Members } from "./ProjDetailsStyledComponents";
import Giscus from '@giscus/react';

const ProjectDetails = ({ openModal, setOpenModal }) => {
  const project = openModal?.project;
  return (
    <Modal
      open={true}
      onClose={() => setOpenModal({ state: false, project: null })}
    >
      <Container>
        <Wrapper>
          <CloseRounded
            style={{
              position: "absolute",
              top: "10px",
              right: "20px",
              cursor: "pointer",
            }}
            onClick={() => setOpenModal({ state: false, project: null })}
          />
          <Image src={project?.image} />
          <Title>{project?.title}</Title>
          <Date>{project.date}</Date>
          <Tags>
            {project?.programming_language.map((tag, index) => (
              <Tag key={`tag-${index}`}>{tag}</Tag>
            ))}
          </Tags>
          <Desc>{project?.description}</Desc>
          <ButtonGroup>
            <Button dull href={project?.url} target="new">
              View Code
            </Button>
            
          </ButtonGroup>
          <Date style={{marginTop: "50px", marginBottom: "50px", textAlign: "center"}}>
            Discuss My {project?.title}
          </Date>
          <Giscus 
            style={{marginTop: "20px"}}
            id="comments"
            repo={project?.repo} 
            repoId={project?.repoId}
            category="Announcements"
            categoryId="DIC_kwDOF1L2fM4B-hVS"
            mapping="specific"
            term="Welcome to @giscus/react component!"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="top"
            theme="light"
            lang="en"
            loading="lazy"
          />
        </Wrapper>
      </Container>
    </Modal>
  );
};

export default ProjectDetails;