import { useState, useEffect } from "react";
import Projects from '../components/Projects';
import ProjectDetails from '../components/Projects/ProjectDetails';
import { Wrapper } from './PagesStyledComponents';
import Navbar from "../components/Navbar";


const ProjectsPage = () => {
    const [openModal, setOpenModal] = useState({ state: false, project: null });
    useEffect(() => {
        const pathname = window.location.pathname;
        console.log(pathname);
    }, []);
    return (
        <Wrapper>
            <Navbar />
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