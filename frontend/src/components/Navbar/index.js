import React from "react";
import { Nav, NavContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLink, ButtonContainer, GitHubButton, MobileMenu, MobileMenuButton, MobileMenuLink, MobileLink, MobileMenuItems, MobileNavLogo } from "./NavbarStyledComponents";
import { FaBars } from "react-icons/fa";


const Navbar = () => {
    const [open, setOpen] = React.useState(false);


    return (
        <Nav>
            <NavContainer>
                <NavLogo>
                    <img src="/logo.png" alt="logo"></img>
                </NavLogo>
                <MobileIcon>
                    <FaBars onClick={() => {
                        setOpen(!open)
                        }}
                     />
                </MobileIcon>
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

            {
                open && (
                    <MobileMenu open={open}>
                        <MobileNavLogo>
                            <img src="/logo.png" alt="logo"></img>
                        </MobileNavLogo>
                        <MobileMenuItems>
                            <MobileLink 
                            href="#about"
                            onClick={() => setOpen(!open)}
                            >
                            About
                            </MobileLink>
                            <MobileLink
                            href="#skills"
                            onClick={() => setOpen(!open)}
                            >
                            Skills
                            </MobileLink>
                            <MobileLink
                            href="#projects"
                            onClick={() => setOpen(!open)}
                            >
                            Projects
                            </MobileLink>
                            <MobileLink
                            href="#contact"
                            onClick={() => setOpen(!open)}
                            >
                            Contact
                            </MobileLink>
                            <MobileLink
                            href="#resume"
                            onClick={() => setOpen(!open)}
                            >
                            Resume
                            </MobileLink>
                            <GitHubButton
                            style={
                                {
                                    width: "80%",
                                    height: "100%",
                                    padding: "0 6px"
                                }
                            
                            }
                            href = {user}>
                                GitHub Profile
                            </GitHubButton>
                        </MobileMenuItems>
                    </MobileMenu>
                )
            }

        </Nav>
    );
};

export default Navbar;