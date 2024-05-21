import styled from 'styled-components';

import HomeSection from '../components/HomeSection';
import { Home } from '@mui/icons-material';
import Skills from '../components/Skills';
import { Body, Wrapper } from './PagesStyledComponents';



const HomePage = () => {
    return (
        <Body>
            <HomeSection/>
            <Wrapper>
                <Skills />
            </Wrapper>
        </Body>
    )
};

export default HomePage;
