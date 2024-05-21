import { useState, useEffect } from "react";
import styled from 'styled-components';
import Projects from '../components/Projects';
import ProjectDetails from '../components/Projects/ProjectDetails';
import { Wrapper } from './PagesStyledComponents';


const ProjectsPage = () => {
    const [openModal, setOpenModal] = useState({ state: false, project: null });
    return (
        <Wrapper>
            <Projects openModal={openModal} setOpenModal={setOpenModal} />
            {openModal.state && (
                <ProjectDetails
                openModal={openModal}
                setOpenModal={setOpenModal}
                />
            )}
        </Wrapper>
    )
};

export default ProjectsPage;