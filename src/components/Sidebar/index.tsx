import React from 'react'
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarMenu, SidebarRoute, SidebarWrapper, SideBtnWrap } from './SidebarElements'

interface SidebarProps {
  isOpen: boolean;
  toggle: () => void
}

const Sidebar = ({ isOpen, toggle }: SidebarProps) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" spy={true} duration={300} smooth={true} offset={-80} onClick={toggle}>Sobre</SidebarLink>
          <SidebarLink to="discover" spy={true} duration={300} smooth={true} offset={-80} onClick={toggle}>Discover</SidebarLink>
          <SidebarLink to="services" spy={true} duration={300} smooth={true} offset={-80} onClick={toggle}>Serviços</SidebarLink>
          <SidebarLink to="signup" spy={true} duration={300} smooth={true} offset={-80} onClick={toggle}>Cadastrar-se</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export { Sidebar }