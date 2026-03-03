import React from 'react'
import { Nav, NavLink, NavbarContainer, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileLink } from './NavbarStyledComponent'
import { MdDataSaverOff } from "react-icons/md";
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { useTheme } from 'styled-components';
const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  const theme = useTheme()
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a href="/" style={{ display: "flex", alignItems: "center", color: darkMode ? "white" : "black", marginBottom: '20', cursor: 'pointer' }}>
            
            {/* Show a different icon based on the theme */}
            {darkMode ? (
              <MdDataSaverOff size="30px" color="#8B5CF6" /> // Purple Java icon for dark mode
            ) : (
              <MdDataSaverOff size="30px" color="#3B82F6" /> // Blue AWS icon for light mode
            )}
            
            {/* Show a different brand name based on the theme */}
            <span style={{ padding: '0 10px', fontWeight: 'bold', fontSize: '1.2rem' }}>
              {darkMode ? "Rakshan Shetty" : "Rakshan Shetty"}
            </span>
            
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
        </NavItems>
        {/* <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton>
        </ButtonContainer> */}
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</MobileLink>
            <MobileLink href='#experience' onClick={() => {
              setIsOpen(!isOpen)
            }}>Experience</MobileLink>
            <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Projects</MobileLink>
            <MobileLink href='#education' onClick={() => {
              setIsOpen(!isOpen)
            }}>Education</MobileLink>
            <GitHubButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} href={Bio.github} target="_blank">Github Profile</GitHubButton>
          </MobileMenu>
        }
        <ButtonContainer>
          {/* THE NEW THEME TOGGLE BUTTON */}
          <button 
            onClick={() => setDarkMode(!darkMode)}
            style={{
              background: 'transparent',
              color: 'inherit',
              border: '1px solid gray',
              borderRadius: '20px',
              padding: '8px 16px',
              cursor: 'pointer',
              marginRight: '12px',
              transition: '0.3s'
            }}
          >
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
          
          <GitHubButton href={Bio.github} target="_blank">
            Github Profile
          </GitHubButton>
        </ButtonContainer>
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar