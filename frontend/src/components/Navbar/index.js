import React from "react";
import { Nav, NavContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLink, ButtonContainer, GitHubButton } from "./NavbarStyledComponents";
import logo from "../../images/logo.png";

const Navbar = () => {
    return (
        <Nav>
            <NavContainer>
                <NavLogo>Logo</NavLogo>
                <MobileIcon></MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLink href="#about">About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#skills">Skills</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#projects">Projects</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#contact">Contact</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#resume">Resume</NavLink>
                    </NavItem>
                </NavMenu>
                <ButtonContainer>
                    <GitHubButton> 
                        GitHub Profile
                    </GitHubButton>
                </ButtonContainer>
            </NavContainer>
        </Nav>
    );
};

export default Navbar;