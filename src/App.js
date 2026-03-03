import { useState} from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./utils/Themes";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectDetails from "./components/ProjectDetails";
import styled from "styled-components";
import "./App.css";
import { BrowserRouter as Router } from 'react-router-dom';
import { Reveal } from "./components/Reveal";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  transition: all 0.3s ease-in-out;
`;

const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(139, 92, 246, 0.05) 0%,
      rgba(32, 40, 112, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(59, 130, 246, 0.05) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  // Theme state is now active and used!
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router> 
      <Body>
        {/* Pass the state to Navbar so we can add a toggle button */}
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
       <Reveal>
            <HeroSection />
          </Reveal>
          
          <Wrapper>
            <Reveal>
              <Skills />
            </Reveal>
            <Reveal>
              <Experience />
            </Reveal>
          </Wrapper>
       <Reveal>
            <Projects openModal={openModal} setOpenModal={setOpenModal} />
          </Reveal>
          
          <Wrapper>
            <Reveal>
              <Education />
            </Reveal>
            <Reveal>
              <Contact />
            </Reveal>
          </Wrapper>
        <Footer />
        {openModal.state && (
          <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
        )}
      </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;