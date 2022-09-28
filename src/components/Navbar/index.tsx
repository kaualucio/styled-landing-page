import React from 'react'
import { MobileIcon, Nav, NavbarContainer, NavBtn, NavBtnLink, NavItem, NavLinks, NavLogo, NavMenu } from './NavbarElements'
import { FaBars } from 'react-icons/fa'

interface NavbarProps {
  toggle: () => void
}

const Navbar = ({ toggle }: NavbarProps) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="">dolla</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars /> 
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about" spy={true} duration={300} smooth={true} offset={-80}>Sobre</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="discover" spy={true} duration={300} smooth={true} offset={-80}>Discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services" spy={true} duration={300} smooth={true} offset={-80}>Serviços</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="signup" spy={true} duration={300} smooth={true} offset={-80}>Cadastrar-se</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">
              Login
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export { Navbar }