
import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme } from './utils/Themes';

import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import ResumePage from './pages/ResumePage';
import ErrorPage from './pages/ErrorPage';
import Footer from './components/Footer';

const validPaths = ["/", "/projects", "/contact", "/resume", ""];

function App() {
  
  const pathname = window.location.pathname;
  const isErrorPage = !validPaths.includes(pathname);
  console.log(isErrorPage);
  return (
    <ThemeProvider theme={lightTheme}>
      <Router>
        <Navbar isErrorPage={isErrorPage} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
