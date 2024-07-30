import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa'; 
import logo from '../WhatsApp_Image_2024-07-29_at_20.47.49_816c0f1b-removebg-preview.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <Logo to="/">
        <img src={logo} alt="Logo" />
      </Logo>
      <MenuIcon onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MenuIcon>
      <NavMenu isOpen={isOpen}>
        <NavItem>
          <NavLink to="/" onClick={toggleMenu}>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/about" onClick={toggleMenu}>About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/team" onClick={toggleMenu}>Team</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contact" onClick={toggleMenu}>Contact</NavLink>
        </NavItem>
      </NavMenu>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: transparent;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Logo = styled(Link)`
  img {
    height: 100px; 
  }
`;

const MenuIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff; 
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: #fff;
    z-index: 10;
    padding: 1rem 0;
  }
`;

const NavItem = styled.li`
  margin: 0 1rem;

  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;

const NavLink = styled(Link)`
  font-size: 1.1rem;
  color: #fff; 
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }

  @media (max-width: 768px) {
    color: #000; 
  }
`;

export default Navbar;
