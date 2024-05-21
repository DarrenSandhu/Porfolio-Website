import styled from 'styled-components';
import Contact from "../components/Contact";



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



const ContactPage = () => {
    return (
        <Wrapper>
            <Contact/>
        </Wrapper>
    )
};

export default ContactPage;