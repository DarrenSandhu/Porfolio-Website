import Resume from '../components/Resume';
import { Wrapper } from './PagesStyledComponents';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';


const ResumePage = () => {
    useEffect(() => {
        const pathname = window.location.pathname;
        // console.log(pathname);
    }, []);
    return (
        <Wrapper>
            <Navbar/>
            <Resume/>
        </Wrapper>
    )
};

export default ResumePage;