import styled from 'styled-components';

import HomeSection from '../components/HeroSection';
import { Home } from '@mui/icons-material';
import Skills from '../components/Skills';

const Body = styled.div`
  background-color: ${({theme}) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(
    38.73deg,
    rgba(135, 206, 235, 0.15) 0%,  // Light Sky Blue with slight transparency
    rgba(135, 206, 250, 0) 50%     // Lighter Sky Blue, fading to transparent
  ),
  linear-gradient(
    141.27deg,
    rgba(240, 128, 128, 0) 50%,    // Light Coral, fading to transparent
    rgba(240, 128, 128, 0.15) 100% // Light Coral with slight transparency
  );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;



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
