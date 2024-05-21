import { CloseRounded, GitHub, LinkedIn } from "@mui/icons-material";
import { Modal } from "@mui/material";
import React from "react";
import { Button, ButtonGroup, Container, Date, Desc, Image, Tag, Tags, Title, Wrapper, Label, Member, MemberImage, MemberName, Members } from "./ProjDetailsStyledComponents";


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
        </Wrapper>
      </Container>
    </Modal>
  );
};

export default ProjectDetails;