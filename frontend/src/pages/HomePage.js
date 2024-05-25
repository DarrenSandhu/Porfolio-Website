import HomeSection from '../components/HomeSection';
import Skills from '../components/Skills';
import { Body, Wrapper } from './PagesStyledComponents';
import { useEffect } from 'react';
import { FloatingWhatsApp } from '@carlos8a/react-whatsapp-floating-button';


const HomePage = ({ userData }) => {
    return (
        <Body>
            <HomeSection userData={userData} />
            <Wrapper>
                <Skills />
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
                avatar={userData.image}
            />
        </Body>
    )
};

export default HomePage;