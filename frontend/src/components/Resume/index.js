import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Container, Wrapper, Title, Desc, PDFContainer, PDFFrame, DownloadButton } from './ResumeStyledComponents';



const Resume = () => {
    const pdfUrl = process.env.PUBLIC_URL + '/Darren_CV.pdf';
    return (
        <Container id="resume">
            <Wrapper>
                <Title>
                    My Resume
                </Title>
                <Desc>
                    Download my resume to know more about my work experience and skills.
                </Desc>
                <DownloadButton href={pdfUrl} download>
                    Download CV
                </DownloadButton>
                <PDFContainer>
                    <PDFFrame src={pdfUrl} />
                </PDFContainer>
                <DownloadButton href={pdfUrl} download>
                    Download CV
                </DownloadButton>
            </Wrapper>
        </Container>
    );
};

export default Resume;

