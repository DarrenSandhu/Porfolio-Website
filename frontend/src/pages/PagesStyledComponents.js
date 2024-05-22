import styled from 'styled-components';

export const Body = styled.div`
  background-color: ${({theme}) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

export const Wrapper = styled.div`
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

export const ErrorTitle = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }
  padding-bottom: 20px;

  @media (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

export const ErrorSubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.white};
  padding-bottom: 20px;
  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;
// Black background with white text
export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({theme}) => theme.black};
  color: ${({theme}) => theme.white};
`;