
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import styled from 'styled-components';

export const PDFContainer = styled.div`
  width: 100%;
  height: 1000px;
  border: 1px solid ${({ theme }) => theme.primary};
  margin-bottom: 20px;
  overflow: auto;
`;

export const PDFFrame = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

export const DownloadButton = styled.a`
    background: transparent;
    color: ${({theme}) => theme.primary};
    border: 1.8px solid ${({theme}) => theme.primary};
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    height: 70%;
    :hover {
        background: ${({theme}) => theme.primary} !important;
        color: ${({theme}) => theme.white} !important;
    }
    @media screen and (max-width: 768px) {
        font-size: 0.8rem;
    }

`;


export const Container = styled.div`
    background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 64.83%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    clip-path: polygon(0 0, 100% 0, 100% 100%,100% 98%, 0 100%);
`;

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 10px 0px 100px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

export const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

export const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;