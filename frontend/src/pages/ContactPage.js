import Contact from "../components/Contact";
import { Wrapper } from './PagesStyledComponents';
import { useEffect } from 'react';
import Navbar from "../components/Navbar";


const ContactPage = () => {
    useEffect(() => {
        const pathname = window.location.pathname;
        console.log(pathname);
    }, []);
    return (
        <Wrapper>
            <Navbar/>
            <Contact/>
        </Wrapper>
    )
};

export default ContactPage;