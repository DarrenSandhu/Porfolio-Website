import { useState, useEffect } from "react";
import Projects from '../components/Projects';
import ProjectDetails from '../components/Projects/ProjectDetails';
import { Wrapper } from './PagesStyledComponents';
import { FloatingWhatsApp } from '@carlos8a/react-whatsapp-floating-button';

const ProjectsPage = ({ projectsData, user, categories }) => {
    const [openModal, setOpenModal] = useState({ state: false, project: null });
    return (
        <>
            <Wrapper>
                <Projects openModal={openModal} setOpenModal={setOpenModal} projectsData={projectsData} categories={categories} />
                {openModal.state && (
                    <ProjectDetails
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                    />
                )}
            </Wrapper>
            <FloatingWhatsApp
                phoneNumber="447428117134"
                accountName="Darren Sandhu"
                allowEsc
                allowClickAway
                notification
                notificationSound
                initialMessageByServer='Hello, how can I help you?'
                placeholder='Send a message...'
                avatar={user.image}
            />
        </>
    )
};

export default ProjectsPage;