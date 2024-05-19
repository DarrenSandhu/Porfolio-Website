import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.div`
    background-color: ${({theme}) => theme.card_light};
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    @media screen and (max-width: 960px) {
        trastion: 0.8s all ease;
    }
`;

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1200px;
`;

export const NavLogo = styled(LinkR)`
    width: 80%;
    padding: 0 6px;
    display: flex;
    justify-content: start;
    align-items: center;
    text-decoration: none;
    @media screen and (max-width: 640px) {
        padding: 0 0px;
    }
`;

export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;
    list-style: none;
    padding: 0 6px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;


export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 100%;
    padding: 0 6px;
    @media screen and (max-width: 640px) {
        display: none;
    }
`;

export const GitHubButton = styled.button`
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

export const NavLink = styled.a`
    color: ${({theme}) => theme.text1};
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    &:hover {
        color: ${({theme}) => theme.primary};
    }
`;