import Contact from "../components/Contact";
import { Wrapper } from './PagesStyledComponents';
import { useEffect } from 'react';
import { FloatingWhatsApp } from '@carlos8a/react-whatsapp-floating-button';

const ContactPage = ({ user }) => {
    useEffect(() => {
        const pathname = window.location.pathname;
        // console.log(pathname);
    }, []);
    return (
        <>
            <Wrapper>
                <Contact/>
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

export default ContactPage;