
import HomeSection from '../components/HomeSection';
import Skills from '../components/Skills';
import { Body, Wrapper } from './PagesStyledComponents';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';



const HomePage = () => {
    useEffect(() => {
        const pathname = window.location.pathname;
        // console.log(pathname);
    }, []);
    return (
        <Body>
            <Navbar/>
            <HomeSection/>
            <Wrapper>
                <Skills />
            </Wrapper>
        </Body>
    )
};

export default HomePage;