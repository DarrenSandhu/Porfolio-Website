import { React } from "react";
import { Nav, NavContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLink, ButtonContainer, GitHubButton, MobileMenu, MobileMenuButton, MobileMenuLink, MobileLink, MobileMenuItems, MobileNavLogo, DropdownMenu, DropdownItem } from "./NavbarStyledComponents";
import { FaBars } from "react-icons/fa";
import { useTheme } from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MenuRounded } from "@mui/icons-material";
import { userData as user } from "../../data/userData";



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const theme = useTheme();
    
    return (
        <Nav>
            <NavContainer>
                <NavLogo>
                    <img src="/logo.png" alt="logo"></img>
                </NavLogo>
                <MobileIcon onClick={() => setIsOpen(!isOpen)}>
                    <MenuRounded style={{ color: "inherit" }} />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLink as={Link} to="/" >Home</NavLink>
                    </NavItem>
                    {/* <NavItem>
                        <NavLink as="div" onClick={toggleDropdown}>
                            Home <IoIosArrowDown />
                        </NavLink>
                            {dropdownOpen && (
                                <DropdownMenu>
                                    <DropdownItem href="#about">About</DropdownItem>
                                    <DropdownItem href="#skills">Skills</DropdownItem>
                                </DropdownMenu>
                            )}
                    </NavItem> */}
                    <NavItem>
                        <NavLink as={Link} to="/projects">Projects</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink as={Link} to="/contact">Contact</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink as={Link} to="/resume">Resume</NavLink>
                    </NavItem>
                </NavMenu>
                <ButtonContainer>
                    <GitHubButton href={user.github} target="_blank"> 
                        GitHub Profile
                    </GitHubButton>
                </ButtonContainer>
            </NavContainer>

            {isOpen && (

                <MobileMenu isOpen={isOpen}>
                    <NavLink onClick={() => setIsOpen(!isOpen)} as={Link} to="/">
                        About
                    </NavLink>
                    <NavLink onClick={() => setIsOpen(!isOpen)} as={Link} to="/projects">
                        Projects
                    </NavLink>
                    <NavLink onClick={() => setIsOpen(!isOpen)} as={Link} to="/contact">
                        Contact
                    </NavLink>
                    <NavLink onClick={() => setIsOpen(!isOpen)} as={Link} to="/resume">
                        Resume
                    </NavLink>
                    <GitHubButton
                        href={user.github}
                        target="_Blank"
                        style={{
                            background: theme.primary,
                            color: theme.text_primary,
                        }}
                        >
                        Github Profile
                    </GitHubButton>
                </MobileMenu>
            )}

        </Nav>
    );
};

export default Navbar;