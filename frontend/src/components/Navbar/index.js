import React from "react";
import { Nav, NavContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLink, ButtonContainer, GitHubButton, MobileMenu, MobileMenuButton, MobileMenuLink, MobileLink, MobileMenuItems, MobileNavLogo, DropdownMenu, DropdownItem } from "./NavbarStyledComponents";
import { FaBars } from "react-icons/fa";
import { useTheme } from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";


const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const [user, setUser] = useState({});

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            const userResponse = await fetch('/users')
            const userData = await userResponse.json()
            const user = userData[0]

            setUser(user)
        } 
        catch (error) {
        console.error('Error fetching user data:', error);
        }
    };
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
                        <NavLink as={Link} to="/">Home</NavLink>
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
                        <NavLink href="#resume">Resume</NavLink>
                    </NavItem>
                </NavMenu>
                <ButtonContainer>
                    <GitHubButton href={user.github} target="_blank"> 
                        GitHub Profile
                    </GitHubButton>
                </ButtonContainer>
            </NavContainer>

            {open && (
                <MobileMenu open={open}>
                    <MobileNavLogo>
                        <img src="/logo.png" alt="logo"></img>
                    </MobileNavLogo>
                    <MobileMenuItems>
                        <MobileLink 
                        href="#about"
                        onClick={() => {setOpen(!open)}}
                        >
                        About
                        </MobileLink>
                        <MobileLink
                        href="#skills"
                        onClick={() => {setOpen(!open)}}
                        >
                        Skills
                        </MobileLink>
                        <MobileLink
                        href="#projects"
                        onClick={() => {setOpen(!open)}}
                        >
                        Projects
                        </MobileLink>
                        <MobileLink
                        href="#contact"
                        onClick={() => {setOpen(!open)}}
                        >
                        Contact
                        </MobileLink>
                        <MobileLink
                        href="#resume"
                        onClick={() => {setOpen(!open)}}
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
                            href="/"
                            target="_blank"
                        >
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